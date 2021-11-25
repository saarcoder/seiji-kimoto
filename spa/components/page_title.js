/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	text
} from '../web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let section;
	let div;
	let h1;
	let t;

	return {
		c() {
			section = element("section");
			div = element("div");
			h1 = element("h1");
			t = text(/*title*/ ctx[0]);
			this.h();
		},
		l(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h1 = claim_element(div_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t = claim_text(h1_nodes, /*title*/ ctx[0]);
			h1_nodes.forEach(detach);
			div_nodes.forEach(detach);
			section_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h1, "class", "display-3 svelte-wmx1bz");
			attr(div, "class", "container text-center");
			attr(section, "class", "section pb-0");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			append(section, div);
			append(div, h1);
			append(h1, t);
		},
		p(ctx, [dirty]) {
			if (dirty & /*title*/ 1) set_data(t, /*title*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(section);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title } = $$props;

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
	};

	return [title];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0 });
	}
}

export default Component;