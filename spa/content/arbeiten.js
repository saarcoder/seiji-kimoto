/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	empty,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from "svelte/internal";

import Pagination from "../components/pagination.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	child_ctx[11] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (22:6) {#each allContent.filter((content) => content.fields?.featured) as post}
function create_each_block_1(ctx) {
	let div3;
	let div2;
	let div0;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let div1;
	let h2;
	let a0;
	let t1_value = /*post*/ ctx[9].fields.title + "";
	let t1;
	let a0_href_value;
	let t2;
	let p;
	let raw_value = /*post*/ ctx[9].fields.intro + "";
	let t3;
	let a1;
	let t4;
	let a1_href_value;

	return {
		c() {
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			div1 = element("div");
			h2 = element("h2");
			a0 = element("a");
			t1 = text(t1_value);
			t2 = space();
			p = element("p");
			t3 = space();
			a1 = element("a");
			t4 = text("Weiterlesen");
			this.h();
		},
		l(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach);
			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h2 = claim_element(div1_nodes, "H2", {});
			var h2_nodes = children(h2);
			a0 = claim_element(h2_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t1 = claim_text(a0_nodes, t1_value);
			a0_nodes.forEach(detach);
			h2_nodes.forEach(detach);
			t2 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			p_nodes.forEach(detach);
			t3 = claim_space(div1_nodes);
			a1 = claim_element(div1_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t4 = claim_text(a1_nodes, "Weiterlesen");
			a1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			this.h();
		},
		h() {
			if (img.src !== (img_src_value = "assets/" + /*post*/ ctx[9].fields.img)) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = /*post*/ ctx[9].fields.img_alt);
			attr(img, "class", "img-fluid rounded-lg w-100");
			attr(div0, "class", "col-md-6 mb-4 mb-md-0");
			attr(a0, "href", a0_href_value = /*post*/ ctx[9].path);
			attr(a0, "class", "post-title svelte-16xmdp9");
			attr(p, "class", "card-text");
			attr(a1, "href", a1_href_value = /*post*/ ctx[9].path);
			attr(a1, "class", "btn btn-primary svelte-16xmdp9");
			attr(div1, "class", "col-md-6");
			attr(div2, "class", "row align-items-center");
			attr(div3, "class", "col-12 mb-5 pb-5");
		},
		m(target, anchor) {
			insert(target, div3, anchor);
			append(div3, div2);
			append(div2, div0);
			append(div0, img);
			append(div2, t0);
			append(div2, div1);
			append(div1, h2);
			append(h2, a0);
			append(a0, t1);
			append(div1, t2);
			append(div1, p);
			p.innerHTML = raw_value;
			append(div1, t3);
			append(div1, a1);
			append(a1, t4);
		},
		p(ctx, dirty) {
			if (dirty & /*allContent*/ 2 && img.src !== (img_src_value = "assets/" + /*post*/ ctx[9].fields.img)) {
				attr(img, "src", img_src_value);
			}

			if (dirty & /*allContent*/ 2 && img_alt_value !== (img_alt_value = /*post*/ ctx[9].fields.img_alt)) {
				attr(img, "alt", img_alt_value);
			}

			if (dirty & /*allContent*/ 2 && t1_value !== (t1_value = /*post*/ ctx[9].fields.title + "")) set_data(t1, t1_value);

			if (dirty & /*allContent*/ 2 && a0_href_value !== (a0_href_value = /*post*/ ctx[9].path)) {
				attr(a0, "href", a0_href_value);
			}

			if (dirty & /*allContent*/ 2 && raw_value !== (raw_value = /*post*/ ctx[9].fields.intro + "")) p.innerHTML = raw_value;;

			if (dirty & /*allContent*/ 2 && a1_href_value !== (a1_href_value = /*post*/ ctx[9].path)) {
				attr(a1, "href", a1_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(div3);
		}
	};
}

// (46:8) {#if i >= postRangeLow && i < postRangeHigh}
function create_if_block(ctx) {
	let div2;
	let div1;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let div0;
	let h3;
	let a0;
	let t1_value = /*post*/ ctx[9].fields.title + "";
	let t1;
	let a0_href_value;
	let t2;
	let p;
	let raw_value = /*post*/ ctx[9].fields.intro + "";
	let t3;
	let a1;
	let t4;
	let a1_href_value;

	return {
		c() {
			div2 = element("div");
			div1 = element("div");
			img = element("img");
			t0 = space();
			div0 = element("div");
			h3 = element("h3");
			a0 = element("a");
			t1 = text(t1_value);
			t2 = space();
			p = element("p");
			t3 = space();
			a1 = element("a");
			t4 = text("Weiterlesen");
			this.h();
		},
		l(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h3 = claim_element(div0_nodes, "H3", {});
			var h3_nodes = children(h3);
			a0 = claim_element(h3_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t1 = claim_text(a0_nodes, t1_value);
			a0_nodes.forEach(detach);
			h3_nodes.forEach(detach);
			t2 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			p_nodes.forEach(detach);
			t3 = claim_space(div0_nodes);
			a1 = claim_element(div0_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t4 = claim_text(a1_nodes, "Weiterlesen");
			a1_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			this.h();
		},
		h() {
			if (img.src !== (img_src_value = "assets/" + /*post*/ ctx[9].fields.image.src)) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = /*post*/ ctx[9].fields.image.alt);
			attr(img, "class", "card-img rounded-lg mb-4");
			attr(a0, "href", a0_href_value = /*post*/ ctx[9].path);
			attr(a0, "class", "post-title svelte-16xmdp9");
			attr(p, "class", "card-text");
			attr(a1, "href", a1_href_value = /*post*/ ctx[9].path);
			attr(a1, "class", "btn btn-primary btn-sm svelte-16xmdp9");
			attr(div0, "class", "card-body p-0");
			attr(div1, "class", "card border-0");
			attr(div2, "class", "col-lg-4 col-sm-6 mb-5");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div1);
			append(div1, img);
			append(div1, t0);
			append(div1, div0);
			append(div0, h3);
			append(h3, a0);
			append(a0, t1);
			append(div0, t2);
			append(div0, p);
			p.innerHTML = raw_value;
			append(div0, t3);
			append(div0, a1);
			append(a1, t4);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div2);
		}
	};
}

// (45:6) {#each allPosts as post, i}
function create_each_block(ctx) {
	let if_block_anchor;
	let if_block = /*i*/ ctx[11] >= /*postRangeLow*/ ctx[4] && /*i*/ ctx[11] < /*postRangeHigh*/ ctx[3] && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (/*i*/ ctx[11] >= /*postRangeLow*/ ctx[4] && /*i*/ ctx[11] < /*postRangeHigh*/ ctx[3]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function create_fragment(ctx) {
	let section0;
	let div0;
	let h1;
	let t0;
	let t1;
	let section1;
	let div3;
	let div2;
	let t2;
	let t3;
	let div1;
	let pagination;
	let current;
	let each_value_1 = /*allContent*/ ctx[1].filter(func);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = /*allPosts*/ ctx[5];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	pagination = new Pagination({
			props: {
				currentPage: /*currentPage*/ ctx[2],
				totalPages: /*totalPages*/ ctx[6]
			}
		});

	return {
		c() {
			section0 = element("section");
			div0 = element("div");
			h1 = element("h1");
			t0 = text(/*title*/ ctx[0]);
			t1 = space();
			section1 = element("section");
			div3 = element("div");
			div2 = element("div");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t2 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t3 = space();
			div1 = element("div");
			create_component(pagination.$$.fragment);
			this.h();
		},
		l(nodes) {
			section0 = claim_element(nodes, "SECTION", { class: true });
			var section0_nodes = children(section0);
			div0 = claim_element(section0_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, /*title*/ ctx[0]);
			h1_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			section0_nodes.forEach(detach);
			t1 = claim_space(nodes);
			section1 = claim_element(nodes, "SECTION", {});
			var section1_nodes = children(section1);
			div3 = claim_element(section1_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(div2_nodes);
			}

			t2 = claim_space(div2_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div2_nodes);
			}

			t3 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(pagination.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			section1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h1, "class", "display-3 svelte-16xmdp9");
			attr(div0, "class", "container text-center");
			attr(section0, "class", "section pb-0");
			attr(div1, "class", "col-12");
			attr(div2, "class", "row");
			attr(div3, "class", "container");
		},
		m(target, anchor) {
			insert(target, section0, anchor);
			append(section0, div0);
			append(div0, h1);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, section1, anchor);
			append(section1, div3);
			append(div3, div2);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div2, null);
			}

			append(div2, t2);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div2, null);
			}

			append(div2, t3);
			append(div2, div1);
			mount_component(pagination, div1, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*title*/ 1) set_data(t0, /*title*/ ctx[0]);

			if (dirty & /*allContent*/ 2) {
				each_value_1 = /*allContent*/ ctx[1].filter(func);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(div2, t2);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (dirty & /*allPosts, postRangeLow, postRangeHigh*/ 56) {
				each_value = /*allPosts*/ ctx[5];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div2, t3);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			const pagination_changes = {};
			if (dirty & /*currentPage*/ 4) pagination_changes.currentPage = /*currentPage*/ ctx[2];
			pagination.$set(pagination_changes);
		},
		i(local) {
			if (current) return;
			transition_in(pagination.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(pagination.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(section0);
			if (detaching) detach(t1);
			if (detaching) detach(section1);
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
			destroy_component(pagination);
		}
	};
}

const postsPerPage = 3;
const func = content => content.fields?.featured;

function instance($$self, $$props, $$invalidate) {
	let currentPage;
	let postRangeHigh;
	let postRangeLow;
	let { title } = $$props, { allContent } = $$props, { content } = $$props;
	let allPosts = allContent.filter(content => content.type == "arbeiten");
	let totalPosts = allPosts.length;
	let totalPages = Math.ceil(totalPosts / postsPerPage);

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("allContent" in $$props) $$invalidate(1, allContent = $$props.allContent);
		if ("content" in $$props) $$invalidate(7, content = $$props.content);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*content*/ 128) {
			$: $$invalidate(2, currentPage = content.pager);
		}

		if ($$self.$$.dirty & /*currentPage*/ 4) {
			$: $$invalidate(3, postRangeHigh = currentPage * postsPerPage);
		}

		if ($$self.$$.dirty & /*postRangeHigh*/ 8) {
			$: $$invalidate(4, postRangeLow = postRangeHigh - postsPerPage);
		}
	};

	return [
		title,
		allContent,
		currentPage,
		postRangeHigh,
		postRangeLow,
		allPosts,
		totalPages,
		content
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0, allContent: 1, content: 7 });
	}
}

export default Component;