const { Plugin, setIcon } = require('obsidian');
const { RangeSetBuilder } = require('@codemirror/state');
const { Decoration, ViewPlugin, WidgetType } = require('@codemirror/view');

/**
 * Widget for Live Preview
 */
class IconWidget extends WidgetType {
    constructor(iconName) {
        super();
        this.iconName = iconName;
    }
    toDOM() {
        const span = document.createElement('span');
        span.classList.add('garden-inline-icon');
        setIcon(span, this.iconName);
        return span;
    }
}

module.exports = class GardenIconsPlugin extends Plugin {
    async onload() {
        console.log('Garden Inline Icons: Loading...');

        const ICON_REGEX = /::li-([a-z0-9-]+)::/g;

        // 1. Reading Mode Processor
        this.registerMarkdownPostProcessor((element, context) => {
            const walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
            let node;
            const nodesToProcess = [];
            while (node = walk.nextNode()) {
                if (node.nodeValue.includes('::li-')) nodesToProcess.push(node);
            }

            for (const textNode of nodesToProcess) {
                const text = textNode.nodeValue;
                const fragment = document.createDocumentFragment();
                let lastIndex = 0;
                let match;
                ICON_REGEX.lastIndex = 0;

                while ((match = ICON_REGEX.exec(text)) !== null) {
                    fragment.appendChild(document.createTextNode(text.substring(lastIndex, match.index)));
                    const iconSpan = document.createElement('span');
                    iconSpan.classList.add('garden-inline-icon');
                    setIcon(iconSpan, match[1]);
                    fragment.appendChild(iconSpan);
                    lastIndex = ICON_REGEX.lastIndex;
                }
                fragment.appendChild(document.createTextNode(text.substring(lastIndex)));
                textNode.parentNode.replaceChild(fragment, textNode);
            }
        });

        // 2. Live Preview Decoration Plugin
        const plugin = this;
        const livePreviewPlugin = ViewPlugin.fromClass(class {
            constructor(view) {
                this.decorations = this.buildDecorations(view);
            }
            update(update) {
                if (update.docChanged || update.viewportChanged) {
                    this.decorations = this.buildDecorations(update.view);
                }
            }
            buildDecorations(view) {
                const builder = new RangeSetBuilder();
                for (const { from, to } of view.visibleRanges) {
                    const text = view.state.doc.sliceString(from, to);
                    let match;
                    ICON_REGEX.lastIndex = 0;
                    while ((match = ICON_REGEX.exec(text)) !== null) {
                        const start = from + match.index;
                        const end = start + match[0].length;
                        builder.add(start, end, Decoration.replace({
                            widget: new IconWidget(match[1]),
                        }));
                    }
                }
                return builder.finish();
            }
        }, {
            decorations: v => v.decorations
        });
        
        this.registerEditorExtension(livePreviewPlugin);

        console.log('Garden Inline Icons: Ready');
    }

    onunload() {
        console.log('Garden Inline Icons: Unloading...');
    }
}
