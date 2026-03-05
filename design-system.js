/**
 * Design system: custom elements for ergonomic formatting.
 * Use hyphenated names (e.g. <bold-text>, <bullet-list>) — HTML requires a hyphen in custom element names.
 */

// Bold text (use: <bold-text>Hello!</bold-text>)
customElements.define('bold-text', class extends HTMLElement {
	connectedCallback() {
		this.style.fontWeight = '600';
		this.style.display = 'inline';
	}
});

// Muted/secondary text
customElements.define('muted-text', class extends HTMLElement {
	connectedCallback() {
		this.style.color = '#666';
		this.style.display = 'inline';
	}
});

// Bulleted list container (use with <bullet-item> children)
customElements.define('bullet-list', class extends HTMLElement {
	connectedCallback() {
		this.style.display = 'block';
		this.style.margin = '0.5em 0';
		this.style.paddingLeft = '1.5em';
	}
});

// One item in a bullet list
customElements.define('bullet-item', class extends HTMLElement {
	connectedCallback() {
		this.style.display = 'list-item';
		this.style.listStyleType = 'disc';
		this.style.marginBottom = '0.25em';
	}
});

// Inline code (alternative to <code> with consistent styling)
customElements.define('inline-code', class extends HTMLElement {
	connectedCallback() {
		this.style.fontFamily = 'ui-monospace, monospace';
		this.style.fontSize = '0.9em';
		this.style.background = '#f0f0f0';
		this.style.padding = '0.15em 0.4em';
		this.style.borderRadius = '4px';
		this.style.display = 'inline';
	}
});

// Small caption or label
customElements.define('caption-text', class extends HTMLElement {
	connectedCallback() {
		this.style.fontSize = '0.875rem';
		this.style.color = '#555';
		this.style.display = 'block';
		this.style.marginTop = '0.25em';
	}
});
