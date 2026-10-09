"use strict";

// The QR additions are isolated from the existing label/configuration workflows.
const qrUI = {
  selected: new Set(),
  advanced: true,
  provinceExpanded: false,
  overseasExpanded: false,
  supplyMenuOpen: true,
  libraryMenuOpen: false,
  categoryKeyword: "",
  collapsedCategories: new Set(),
  treeMenuOpen: false,
  single: null,
  batch: null,
  focusReturn: null
};
const qrImageCache = new Map();
const qrOriginalTopbar = topbar;
const qrOriginalSidebar = sidebar;
const qrOriginalEnterpriseForm = renderEnterpriseForm;
const qrOriginalMallDetail = renderMallDetail;
const qrOriginalOpenModal = openModal;
const qrOriginalCloseModal = closeModal;
const qrSvg = (paths, className = "") => '<svg class="' + className + '" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + "</svg>";
const qrIcons = {
  search: qrSvg('<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/>'),
  qr: qrSvg('<path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 15h3v3h-3zM21 15v6h-6M12 3v3M12 12h3M3 12h3M12 21v-3"/>'),
  download: qrSvg('<path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5"/>'),
  upload: qrSvg('<path d="M12 16V4m-4 4 4-4 4 4M4 16v5h16v-5"/>'),
  plus: qrSvg('<path d="M12 5v14M5 12h14"/>'),
  copy: qrSvg('<rect x="8" y="8" width="12" height="13" rx="1.5"/><path d="M16 8V3H3v13h5"/>'),
  trash: qrSvg('<path d="M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7M14 10v7"/>'),
  user: qrSvg('<circle cx="12" cy="8" r="4"/><path d="M4 21v-3a8 8 0 0 1 16 0v3"/>'),
  building: qrSvg('<path d="M3 21V6h8v15M11 11h10v10M2 21h20M6 9h2M6 13h2M6 17h2M15 15h2M15 18h2"/>'),
  box: qrSvg('<path d="m3 7 9-4 9 4v11l-9 4-9-4zM3 7l9 4 9-4M12 11v11"/>'),
  supply: qrSvg('<circle cx="12" cy="4" r="2"/><circle cx="4" cy="19" r="2"/><circle cx="20" cy="19" r="2"/><path d="m11 6-6 11M13 6l6 11M6 19h12"/>'),
  list: qrSvg('<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M8 7h8M8 12h8M8 17h8"/>'),
  message: qrSvg('<path d="M3 4h18v13H9l-6 4zM7 8h10M7 12h7"/>'),
  folder: qrSvg('<path d="M3 6h7l2 2h9v12H3z"/>'),
  check: qrSvg('<path d="m5 12 4 4L19 6"/>')
};

topbar = function(role = "enterprise") {
  if (role !== "enterprise") return qrOriginalTopbar(role);
  return '<header class="topbar qr-topbar"><a class="qr-platform-brand" href="#enterprise-list" aria-label="湖北省智能建造产业互联网平台">' +
    '<svg class="qr-platform-mark" viewBox="0 0 48 48" aria-hidden="true"><g fill="currentColor"><path d="M1 1h10v5H6v8H1zM14 1h5v13h-5zM22 1h10v13h-5V6h-5zM35 1h12v20h-5V6h-2v15h-5zM1 17h18v5H1zM22 17h10v5H22zM1 25h8v5H6v12h7v5H1zM12 25h7v22h-5V30h-2zM22 25h5v17h5v5H22zM30 25h17v5H35v4h12v13H35v-5h7v-3H30z"/></g></svg>' +
    '<strong>湖北省智能建造<br>产业互联网平台</strong></a>' +
    '<div class="qr-account">' + qrIcons.user + '<span>谢元德</span><span aria-hidden="true">⌄</span></div></header>';
};

sidebar = function(role, active) {
  if (role !== "enterprise") return qrOriginalSidebar(role, active);
  const inSupply = active === "enterprise-list";
  const inLibrary = active === "admin-products" || active === "admin-list";
  const item = (label, icon, action, extra = "", classes = "") =>
    '<button type="button" class="side-item ' + classes + '" data-action="' + action + '" ' + extra + '>' + (icon || "") + '<span>' + label + "</span></button>";
  const leaf = (label, target, selected = false) => item(label, "", "navigate", 'data-route="' + target + '"', "side-sub" + (selected ? " active" : ""));
  return '<aside class="sidebar qr-sidebar"><button class="qr-side-fold" type="button" data-action="qr-fold-sidebar" aria-label="收起或展开菜单">☰</button>' +
    item("企业信息", qrIcons.building, "placeholder") + item("需求管理", qrIcons.list, "placeholder", "", "qr-menu-parent") +
    item('供应管理 <i>' + (qrUI.supplyMenuOpen ? "⌄" : "›") + "</i>", qrIcons.supply, "qr-supply-menu", 'aria-expanded="' + qrUI.supplyMenuOpen + '"', "qr-menu-parent" + (inSupply ? " qr-parent-current" : "")) +
    (qrUI.supplyMenuOpen ? leaf("供应管理", "enterprise-list", inSupply) + item("商品标签管理", "", "qr-label-menu", "", "side-sub") : "") +
    item('产品库管理 <i>' + (qrUI.libraryMenuOpen || inLibrary ? "⌄" : "›") + "</i>", qrIcons.box, "qr-library-menu", 'aria-expanded="' + (qrUI.libraryMenuOpen || inLibrary) + '"', "qr-menu-parent" + (inLibrary ? " qr-parent-current" : "")) +
    (qrUI.libraryMenuOpen || inLibrary ? leaf("入库审批", "admin-list", active === "admin-list") + leaf("在库商品", "admin-products", active === "admin-products") : "") +
    item("用户管理", qrIcons.user, "placeholder") + item("消息通知", qrIcons.message, "placeholder") +
    item("合同管理", qrIcons.list, "placeholder") + item("政策申报", qrIcons.folder, "placeholder") +
    item("我要寻源", qrIcons.message, "placeholder") + item("我要询价", qrIcons.message, "placeholder") +
    item("科创供给", qrIcons.box, "placeholder") + item("科创需求", qrIcons.box, "placeholder") + "</aside>";
};

supplyTradeMode = function(product) {
  return product.tradeMode || (product.category === "专业服务" || product.price === "面议" ? "联系交易" : "在线交易");
};

function qrEligibility(product) {
  if (!product) return "商品已删除";
  if (!product.qrSupplyDemo && !product.userCreated) return "不是当前企业的商品";
  const review = supplyReviewStatus(product);
  if (review === "草稿") return "商品尚未提交审核";
  if (review === "待审核") return "商品审核中";
  if (review === "审核拒绝") return "商品审核未通过";
  if (review !== "审核通过") return "商品尚未审核通过";
  return qrPublicVisibility(product);
}

function qrPublicVisibility(product) {
  if (!product) return "商品已删除";
  if (product.status !== "已上架") return product.status === "已下架" ? "商品已下架" : "商品暂未上架";
  // The public route follows the existing mall, including published supplies awaiting edits approval.
  if (product.supplyStatus !== "可供") return "商品停供，商城暂未展示";
  return "";
}

function qrProductURL(product) {
  const url = new URL(window.QR_PUBLIC_BASE_URL || window.location.href, window.location.href);
  url.search = "";
  url.searchParams.set("product", product.id);
  url.hash = "mall-detail";
  return url.href;
}

enterpriseFilteredProducts = function() {
  const f = state.enterpriseFilters;
  return data.products.filter((p) => {
    if (!p.qrSupplyDemo && !p.userCreated) return false;
    const category = f.category || "all";
    const categoryMatch = category === "all" || p.category === category || p.categoryTrail?.includes(category);
    const regionMatch = f.region === "all" || p.regions.includes(f.region) || p.regions.includes("全国");
    const overseasMatch = f.overseas === "all" || (p.overseasRegions || []).includes(f.overseas);
    const datesMatch = (!f.startDate || !p.supplyEnd || p.supplyEnd >= f.startDate) && (!f.endDate || !p.supplyStart || p.supplyStart <= f.endDate);
    const tags = Object.keys(p.tags || {});
    return (!f.keyword || p.name.toLowerCase().includes(f.keyword.toLowerCase())) && categoryMatch &&
      (f.supplyStatus === "all" || p.supplyStatus === f.supplyStatus) &&
      (f.reviewStatus === "all" || supplyReviewStatus(p) === f.reviewStatus) && regionMatch && overseasMatch &&
      (f.tradeMode === "all" || supplyTradeMode(p) === f.tradeMode) && datesMatch &&
      (f.availability === "all" || !p.supplyStart && !p.supplyEnd) &&
      (f.library === "all" || (f.library === "none" ? tags.length === 0 : tags.includes(f.library)));
  }).sort((a, b) => (a.enterpriseScenarioOrder || 999) - (b.enterpriseScenarioOrder || 999));
};

supplyFilterSummary = function() {
  const f = state.enterpriseFilters;
  const libraryName = f.library === "all" ? "全部" : f.library === "none" ? "普通商品" : getLibrary(f.library).name;
  return [["supplyStatus", "状态", f.supplyStatus], ["reviewStatus", "审核状态", f.reviewStatus],
    ["region", "可供地区", f.region], ["overseas", "海外地区", f.overseas], ["tradeMode", "交易方式", f.tradeMode],
    ["library", "产品库标签", libraryName]].map(([field, label, value]) =>
    '<button type="button" class="qr-condition-token" data-action="qr-clear-condition" data-field="' + field + '">' +
    esc(label) + "：" + (value === "all" ? "全部" : esc(value)) + '<span aria-hidden="true">×</span></button>').join("");
};

function qrCategoryTree() {
  const groups = [
    ["绿色建材", ["电线电缆", "钢筋", "商砼", "钢结构", "新增分类2", "测试新增的分类"]],
    ["智能装备", []], ["部品部件", []], ["设备租赁", []], ["分包服务", []], ["专业服务", []], ["其他项目", []], ["项目", []]
  ];
  const keyword = qrUI.categoryKeyword.trim();
  return groups.map(([name, children]) => {
    if (keyword && ![name, ...children, "电力电缆", "矿用电缆"].some((text) => text.includes(keyword))) return "";
    const open = !qrUI.collapsedCategories.has(name);
    const button = (label, depth = 1) => '<button type="button" class="supply-tree-node qr-tree-depth-' + depth +
      (state.enterpriseFilters.category === label ? " active" : "") + '" data-action="enterprise-category" data-value="' + esc(label) + '">' +
      '<span class="qr-tree-caret">›</span>' + qrIcons.folder + '<span>' + esc(label) + "</span></button>";
    let html = '<div class="qr-tree-group"><div class="qr-tree-branch"><button type="button" data-action="qr-tree-toggle" data-value="' +
      esc(name) + '" aria-label="' + (open ? "收起" : "展开") + esc(name) + '" aria-expanded="' + open + '">' + (children.length ? open ? "⌄" : "›" : "›") + "</button>" +
      button(name) + "</div>";
    if (open) html += children.map((child) => button(child, 2) + (child === "电线电缆" ? button("电力电缆", 3) + button("矿用电缆", 3) : "")).join("");
    return html + "</div>";
  }).join("") || '<div class="qr-tree-empty">没有匹配的品类</div>';
}

enterpriseRows = function(products) {
  return products.map((p) => {
    const labels = Object.entries(p.tags || {}).map(([id, task]) => '<div class="qr-library-pair">' + libraryTag(id) + " " + statusTag(task.status) + "</div>").join("") ||
      '<span class="tag tag-gray">普通商品</span>';
    const reason = qrEligibility(p);
    const actions = '<button type="button" class="btn btn-link" data-action="edit-product" data-id="' + esc(p.id) + '">编辑</button>' +
      '<button type="button" class="btn btn-link danger-link" data-action="delete-product" data-id="' + esc(p.id) + '">删除</button>' +
      (canManageLibraryTags(p) ? '<button type="button" class="btn btn-link" data-action="manage-tags" data-id="' + esc(p.id) + '">标签管理</button>' : "") +
      '<span class="qr-action-wrap"' + (reason ? ' tabindex="0" title="' + esc(reason) + '" aria-label="无法生成二维码：' + esc(reason) + '"' : "") +
      '><button type="button" class="btn btn-link qr-row-action" data-action="qr-single" data-id="' + esc(p.id) + '"' +
      (reason ? ' disabled aria-label="生成二维码，' + esc(reason) + '"' : "") + '>生成二维码</button>' +
      (reason ? '<span class="qr-action-tip" role="tooltip">' + esc(reason) + "</span>" : "") + "</span>";
    return '<tr data-product-id="' + esc(p.id) + '"><td class="supply-select-cell"><input type="checkbox" data-qr-select="' + esc(p.id) +
      '" aria-label="选择' + esc(p.name) + '"' + (qrUI.selected.has(p.id) ? " checked" : "") + '></td>' +
      '<td><a href="#enterprise-detail" data-action="open-product" data-id="' + esc(p.id) + '" data-route="enterprise-detail">' + esc(p.name) + "</a></td>" +
      "<td>" + esc(p.category) + '</td><td class="qr-availability">' + (p.supplyStart ? esc(p.supplyStart) + " ~ " + esc(p.supplyEnd) : "长期") + "</td>" +
      '<td class="wrap">' + esc(p.regions) + "</td><td>" + esc(supplyReviewStatus(p)) + "</td><td>" + esc(p.supplyStatus) + "</td><td>" + esc(supplyTradeMode(p)) + "</td>" +
      '<td class="wrap supply-library-cell">' + labels + '</td><td class="supply-operation-cell">' + actions + "</td></tr>";
  }).join("") || '<tr><td colspan="10" class="empty-cell">没有符合筛选条件的供应信息</td></tr>';
};

renderEnterpriseList = function() {
  const products = enterpriseFilteredProducts();
  const actions = '<div class="qr-export-actions" role="group" aria-label="供应操作" dir="ltr">' +
    '<button type="button" class="btn qr-batch-trigger" data-action="qr-batch">' + qrIcons.qr +
    '批量生成二维码<span class="qr-selected-count"' + (qrUI.selected.size ? "" : " hidden") + ">" + qrUI.selected.size + "</span></button>" +
    '<button type="button" class="btn" data-action="placeholder">' + qrIcons.upload + '导入</button>' +
    '<button type="button" class="btn" data-action="qr-export">' + qrIcons.download + '导出</button></div>' +
    '<button type="button" class="btn" data-action="qr-batch-delete"' + (qrUI.selected.size ? "" : " disabled") + ">" + qrIcons.trash + "批量删除</button>" +
    '<button type="button" class="btn btn-primary" data-action="new-product">' + qrIcons.plus + "新增</button>";
  const provinceNames = ["北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "台湾", "香港", "澳门"];
  const countries = ["韩国", "日本", "马来西亚", "印度", "巴基斯坦", "泰国", "越南", "南非", "新加坡", "孟加拉国", "不丹", "阿富汗", "柬埔寨", "尼泊尔", "老挝", "以色列", "也门", "土耳其", "文莱", "东帝汶", "印度尼西亚", "菲律宾", "伊朗", "约旦", "沙特阿拉伯", "阿联酋"];
  const choices = (field, options) => supplyFilterChoices(field, [["all", "全部"], ...options]);
  const row = (label, content, extra = "") => '<div class="supply-filter-row"><strong>' + label + "</strong>" + content + extra + "</div>";
  const details = row("状态", choices("supplyStatus", ["可供", "停供"])) +
    row("审核状态", choices("reviewStatus", ["草稿", "待审核", "审核通过", "审核拒绝"])) +
    row("交易方式", choices("tradeMode", ["在线交易", "联系交易"])) +
    row("产品库标签", choices("library", [["none", "普通商品"], ...data.libraries.map((l) => [l.id, l.name])])) +
    row("可供地区", choices("region", qrUI.provinceExpanded ? provinceNames : provinceNames.slice(0, 24)),
      '<button type="button" class="qr-filter-more" data-action="qr-more-provinces">' + (qrUI.provinceExpanded ? "收起⌃" : "更多⌄") + "</button>") +
    row("海外地区", choices("overseas", qrUI.overseasExpanded ? countries : countries.slice(0, 18)),
      '<button type="button" class="qr-filter-more" data-action="qr-more-overseas">' + (qrUI.overseasExpanded ? "收起⌃" : "更多⌄") + "</button>") +
    row("可供时间", choices("availability", ["长期"]), '<div class="supply-date-range"><input type="date" id="qrStartDate" value="' + esc(state.enterpriseFilters.startDate || "") +
      '" aria-label="可供开始时间"><span>–</span><input type="date" id="qrEndDate" value="' + esc(state.enterpriseFilters.endDate || "") + '" aria-label="可供结束时间"></div>');
  const filters = '<div class="supply-search-row"><div class="supply-name-search"><input id="enterpriseKeyword" value="' + esc(state.enterpriseFilters.keyword) +
    '" placeholder="请输入商品名称" aria-label="搜索商品名称"><button type="button" data-action="enterprise-search" aria-label="查询">' + qrIcons.search + "</button></div>" +
    '<button class="qr-advanced-toggle" type="button" data-action="qr-advanced" aria-expanded="' + qrUI.advanced + '">高级查询' + (qrUI.advanced ? "⌄" : "›") + "</button></div>" +
    '<div class="supply-advanced-filter"><div class="supply-condition-summary"><strong>查询条件 ›</strong>' + supplyFilterSummary() +
    '<button type="button" class="qr-reset" data-action="enterprise-reset">↻ 重置方案</button></div><div class="qr-filter-details"' + (qrUI.advanced ? "" : " hidden") + ">" + details + "</div></div>";
  const category = '<aside class="supply-category-panel"><div class="supply-category-search"><input id="qrCategoryKeyword" placeholder="请输入搜索关键字" aria-label="搜索品类" value="' + esc(qrUI.categoryKeyword) +
    '"><button type="button" data-action="qr-category-search" aria-label="查询品类">' + qrIcons.search + '</button><div class="qr-tree-tools"><button type="button" data-action="qr-tree-more" aria-expanded="' + qrUI.treeMenuOpen + '">更多⌄</button>' +
    (qrUI.treeMenuOpen ? '<div class="qr-tree-menu"><button type="button" data-action="qr-tree-expand">展开全部</button><button type="button" data-action="qr-tree-collapse">收起全部</button></div>' : "") +
    '</div></div><button type="button" class="supply-tree-root' + (state.enterpriseFilters.category === "all" ? " active" : "") + '" data-action="enterprise-category" data-value="all"><span>⌄</span>' + qrIcons.folder +
    '<span>商品</span></button><div class="supply-tree-children">' + qrCategoryTree() + "</div></aside>";
  const table = '<div class="table-wrap supply-table-wrap"><table class="data-table supply-list-table"><thead><tr><th class="supply-select-cell"><input type="checkbox" data-qr-select-all aria-label="全选当前列表"' +
    (products.length ? "" : " disabled") + "></th><th>供应名称</th><th>品类</th><th>可供时间</th><th>可供地区</th><th>审核状态</th><th>状态</th><th>交易方式</th><th>产品库标签 / 审批状态</th><th>操作</th></tr></thead><tbody>" +
    enterpriseRows(products) + "</tbody></table>" + pager(products.length, 10) + "</div>";
  return shell('<section class="page supply-manager-page qr-supply-page">' + pageHead("供应管理", "供应管理", actions) +
    '<div class="supply-workspace">' + category + '<div class="supply-list-main">' + filters + table + "</div></div></section>", "enterprise", "enterprise-list");
};

renderEnterpriseForm = function(viewRole = "enterprise") {
  let html = qrOriginalEnterpriseForm(viewRole);
  if (viewRole !== "enterprise") return html;
  html = html.replace('data-route="enterprise-list">取消</button>', 'data-route="enterprise-list">返回</button>')
    .replace('data-action="submit-product">提交审核</button>', 'data-action="submit-product">提交</button>')
    .replaceAll("（原型模拟）", "");
  return html;
};

renderMallDetail = function() {
  const product = data.products.find((p) => p.id === state.productId);
  const reason = qrPublicVisibility(product);
  if (!reason) return qrOriginalMallDetail().replace(">返回商城</button>", ">返回</button>");
  return '<div class="mall-shell">' + topbar("mall") + '<main class="qr-unavailable"><div class="qr-unavailable-icon">' + qrIcons.box +
    '</div><h1>商品暂不可查看</h1><p>' + (product ? esc(reason) : "该商品不存在或已删除") +
    '</p><button type="button" class="btn btn-primary" data-action="navigate" data-route="mall">返回商城</button></main></div>';
};

openModal = function(title, body, footer = "") {
  qrUI.focusReturn = document.activeElement;
  qrOriginalOpenModal(title, body, footer);
  const focus = document.querySelector("#modalFoot .btn-primary:not(:disabled)") ||
    document.querySelector("#modalFoot button:not(:disabled)") || document.querySelector(".modal-head button");
  focus?.focus({ preventScroll: true });
};

closeModal = function() {
  const wasOpen = document.getElementById("modalMask").classList.contains("open");
  qrUI.batch = null; // Drop the reference: a closed job cannot update a later dialog.
  qrUI.single = null;
  document.querySelector(".modal")?.removeAttribute("data-qr-kind");
  qrOriginalCloseModal();
  if (wasOpen && qrUI.focusReturn?.isConnected) qrUI.focusReturn.focus({ preventScroll: true });
};

function afterQrRender() {
  const current = route();
  document.body.dataset.qrScreen = current;
  document.body.classList.toggle("qr-enterprise", roleForRoute(current) === "enterprise");
  for (const id of qrUI.selected) if (!data.products.some((p) => p.id === id)) qrUI.selected.delete(id);
  if (current === "enterprise-list") qrSyncSelection();
}

function qrSyncSelection() {
  const visible = enterpriseFilteredProducts();
  const checked = visible.filter((p) => qrUI.selected.has(p.id)).length;
  const all = document.querySelector("[data-qr-select-all]");
  if (all) { all.checked = Boolean(visible.length && checked === visible.length); all.indeterminate = checked > 0 && checked < visible.length; }
  document.querySelectorAll("[data-qr-select]").forEach((input) => { input.checked = qrUI.selected.has(input.dataset.qrSelect); });
  const batch = document.querySelector('[data-action="qr-batch"]');
  const remove = document.querySelector('[data-action="qr-batch-delete"]');
  if (batch) {
    batch.disabled = false;
    batch.title = qrUI.selected.size ? "已选 " + qrUI.selected.size + " 个商品" : "选择商品后批量生成二维码";
    const count = batch.querySelector(".qr-selected-count");
    count.textContent = qrUI.selected.size;
    count.hidden = !qrUI.selected.size;
  }
  if (remove) remove.disabled = !qrUI.selected.size;
}

// PNG encoding needs no canvas, network, API key, or external QR service.
function qrConcat(parts) {
  const result = new Uint8Array(parts.reduce((size, part) => size + part.length, 0));
  let offset = 0;
  parts.forEach((part) => { result.set(part, offset); offset += part.length; });
  return result;
}

const qrCrcTable = Array.from({ length: 256 }, (_, index) => {
  let n = index;
  for (let bit = 0; bit < 8; bit++) n = n & 1 ? 0xedb88320 ^ (n >>> 1) : n >>> 1;
  return n >>> 0;
});
function qrCrc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) crc = qrCrcTable[(crc ^ byte) & 255] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}
function qrUint32(number) {
  return new Uint8Array([number >>> 24, number >>> 16 & 255, number >>> 8 & 255, number & 255]);
}
function qrPngChunk(type, bytes) {
  const content = qrConcat([new TextEncoder().encode(type), bytes]);
  return qrConcat([qrUint32(bytes.length), content, qrUint32(qrCrc32(content))]);
}
function qrDeflateStored(bytes) {
  const parts = [new Uint8Array([0x78, 0x01])];
  for (let offset = 0; offset < bytes.length; offset += 65535) {
    const size = Math.min(65535, bytes.length - offset);
    const inverse = 65535 - size;
    parts.push(new Uint8Array([offset + size === bytes.length ? 1 : 0, size & 255, size >>> 8, inverse & 255, inverse >>> 8]), bytes.subarray(offset, offset + size));
  }
  let a = 1, b = 0;
  for (const byte of bytes) { a = (a + byte) % 65521; b = (b + a) % 65521; }
  parts.push(qrUint32((b << 16 | a) >>> 0));
  return qrConcat(parts);
}

function qrPngBytes(url) {
  if (typeof qrcode !== "function") throw new Error("二维码组件未加载，请刷新页面");
  const code = qrcode(0, "M");
  code.addData(url, "Byte");
  code.make();
  const count = code.getModuleCount();
  const size = 512;
  const scale = Math.floor(size / (count + 8));
  if (scale < 2) throw new Error("商品链接过长，无法生成清晰的二维码");
  const origin = Math.floor((size - count * scale) / 2);
  const pixels = new Uint8Array(size * (size + 1));
  for (let y = 0; y < size; y++) {
    pixels[y * (size + 1)] = 0;
    pixels.fill(255, y * (size + 1) + 1, (y + 1) * (size + 1));
  }
  for (let row = 0; row < count; row++) for (let col = 0; col < count; col++) {
    if (!code.isDark(row, col)) continue;
    for (let y = origin + row * scale; y < origin + (row + 1) * scale; y++) {
      const start = y * (size + 1) + 1 + origin + col * scale;
      pixels.fill(0, start, start + scale);
    }
  }
  return qrConcat([new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
    qrPngChunk("IHDR", qrConcat([qrUint32(size), qrUint32(size), new Uint8Array([8, 0, 0, 0, 0])])),
    qrPngChunk("IDAT", qrDeflateStored(pixels)), qrPngChunk("IEND", new Uint8Array())]);
}

function qrImage(product) {
  const url = qrProductURL(product);
  if (!qrImageCache.has(url)) qrImageCache.set(url, qrPngBytes(url));
  return { url, bytes: qrImageCache.get(url) };
}
function qrDataURL(bytes) {
  let binary = "";
  for (let offset = 0; offset < bytes.length; offset += 8192) binary += String.fromCharCode(...bytes.subarray(offset, offset + 8192));
  return "data:image/png;base64," + btoa(binary);
}
function qrSafeFilename(product) {
  const name = product.name.replace(/[<>:"/\\|?*\u0000-\u001f]/g, "_").replace(/[. ]+$/g, "").slice(0, 70) || "商品";
  return product.id + "_" + name + ".png";
}
function qrDownload(bytes, filename, type) {
  const blob = new Blob([bytes], { type });
  const objectURL = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectURL;
  link.download = filename;
  link.hidden = true;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(objectURL), 30000);
}

function qrOpenSingle(id) {
  const product = data.products.find((p) => p.id === id);
  const reason = qrEligibility(product);
  if (reason) return toast(reason);
  closeModal();
  try {
    const image = qrImage(product);
    qrUI.single = { id, ...image };
    openModal("商品二维码",
      '<div class="qr-single-preview"><figure><img width="256" height="256" src="' + qrDataURL(image.bytes) + '" alt="' + esc(product.name) + '的二维码">' +
      "<figcaption>" + esc(product.name) + '</figcaption></figure><p>扫码查看商品</p><a class="qr-product-link" href="' + esc(image.url) +
      '" target="_blank" rel="noopener">查看商品 ↗</a></div><div class="qr-link-field"><label for="qrProductLink">商品链接</label><div><input id="qrProductLink" readonly value="' +
      esc(image.url) + '"><button type="button" class="btn" data-action="qr-copy">' + qrIcons.copy + "复制链接</button></div></div>",
      '<button type="button" class="btn" data-action="close-modal">关闭</button><button type="button" class="btn btn-primary" data-action="qr-download-single">' + qrIcons.download + "下载</button>");
    document.querySelector(".modal").dataset.qrKind = "single";
  } catch (error) {
    openModal("二维码生成失败", '<p class="qr-error">' + esc(error.message) + "</p>",
      '<button type="button" class="btn" data-action="close-modal">关闭</button><button type="button" class="btn btn-primary" data-action="qr-single" data-id="' + esc(id) + '">重试</button>');
  }
}

function qrBatchCandidates(job = qrUI.batch) {
  return (job?.ids || []).map((id) => {
    const product = data.products.find((p) => p.id === id);
    return { id, product, reason: qrEligibility(product) };
  });
}
function qrOpenBatch() {
  if (!qrUI.selected.size) return toast("请先选择商品");
  closeModal();
  qrUI.focusReturn = document.activeElement;
  qrUI.batch = { ids: [...qrUI.selected], stage: "choose", percent: 0, bytes: null, files: [], failures: [] };
  qrRenderBatch();
}
function qrRenderBatch() {
  const job = qrUI.batch;
  if (!job) return;
  let title = "批量生成二维码", body = "", footer = "";
  if (job.stage === "choose") {
    const candidates = qrBatchCandidates(job);
    const valid = candidates.filter((item) => !item.reason);
    body = '<p class="qr-batch-summary">已选择 <strong>' + candidates.length + "</strong> 个商品，可生成 <strong>" + valid.length + "</strong> 个二维码。</p>" +
      (valid.length < candidates.length ? '<p class="qr-batch-note">' + (valid.length ? "以下不能生成的商品不会加入压缩包。" : "所选商品暂时无法生成二维码，请重新选择商品。") + "</p>" : "") +
      '<div class="qr-batch-table-wrap"><table class="data-table qr-batch-table"><thead><tr><th>供应名称</th><th>生成情况</th></tr></thead><tbody>' +
      candidates.map((item) => "<tr><td>" + esc(item.product?.name || "已删除的商品") + "</td><td>" +
        (item.reason ? '<span class="qr-batch-reason">' + esc(item.reason) + "</span>" : '<span class="qr-eligible">可生成</span>') + "</td></tr>").join("") + "</tbody></table></div>";
    footer = '<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-primary" data-action="qr-generate-batch"' +
      (valid.length ? "" : " disabled") + ">生成</button>";
  } else if (job.stage === "generating") {
    body = '<div class="qr-progress-view"><div class="qr-progress-symbol">' + qrIcons.qr + '</div><h3>正在生成二维码</h3><p>共 ' + job.total +
      ' 个商品</p><progress id="qrProgress" max="100" aria-label="二维码生成进度" value="' + job.percent + '"></progress><span id="qrProgressText" aria-live="polite">' + Math.floor(job.percent) + "%</span></div>";
    footer = '<button type="button" class="btn" data-action="close-modal">取消</button>';
  } else if (job.stage === "done") {
    title = "二维码已生成";
    body = '<div class="qr-result-heading"><span class="qr-result-check">' + qrIcons.check + '</span><div><h3>已生成 ' + job.files.length + " 个二维码</h3><p>" +
      esc(job.filename) + '</p></div></div><div class="qr-result-files">' + job.files.map((file) => '<div>' + qrIcons.qr + "<span>" + esc(file) + "</span></div>").join("") + "</div>" +
      (job.failures.length ? '<div class="qr-batch-failures"><h4>' + job.failures.length + " 个商品未生成</h4>" + job.failures.map((f) => "<p>" + esc(f.name) + "：" + esc(f.reason) + "</p>").join("") + "</div>" : "");
    footer = '<button type="button" class="btn" data-action="close-modal">关闭</button>' +
      (job.failures.length ? '<button type="button" class="btn" data-action="qr-retry-batch">重试</button>' : "") +
      '<button type="button" class="btn btn-primary" data-action="qr-download-batch">' + qrIcons.download + "下载</button>";
  } else {
    title = "二维码生成失败";
    body = '<p class="qr-error">' + esc(job.error || "请稍后重试") + "</p>";
    footer = '<button type="button" class="btn" data-action="close-modal">关闭</button><button type="button" class="btn btn-primary" data-action="qr-retry-batch">重试</button>';
  }
  qrOriginalOpenModal(title, body, footer);
  document.querySelector(".modal").dataset.qrKind = "batch";
  (document.querySelector("#modalFoot .btn-primary:not(:disabled)") ||
    document.querySelector("#modalFoot button"))?.focus({ preventScroll: true });
}

async function qrGenerateBatch() {
  const job = qrUI.batch;
  if (!job || job.stage === "generating") return;
  const candidates = qrBatchCandidates(job);
  const valid = candidates.filter((item) => !item.reason);
  if (!valid.length) { job.stage = "choose"; qrRenderBatch(); return; }
  job.stage = "generating";
  job.total = valid.length;
  job.percent = 0;
  job.files = [];
  job.failures = [];
  qrRenderBatch();
  try {
    if (typeof JSZip !== "function") throw new Error("压缩组件未加载，请刷新页面");
    const zip = new JSZip();
    for (const [index, item] of valid.entries()) {
      if (qrUI.batch !== job) return;
      try {
        const current = data.products.find((p) => p.id === item.id);
        const reason = qrEligibility(current);
        if (reason) throw new Error(reason);
        const filename = qrSafeFilename(current);
        zip.file(filename, qrImage(current).bytes);
        job.files.push(filename);
      } catch (error) { job.failures.push({ name: item.product?.name || "已删除的商品", reason: error.message }); }
      qrUpdateProgress(job, (index + 1) / valid.length * 45);
      // Yield to the UI between products; cancellation never initiates a download.
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
    if (qrUI.batch !== job) return;
    if (!job.files.length) throw new Error(job.failures.map((f) => f.name + "：" + f.reason).join("；") || "没有可生成二维码的商品");
    job.bytes = await zip.generateAsync({ type: "uint8array", compression: "DEFLATE", compressionOptions: { level: 6 } },
      (metadata) => qrUpdateProgress(job, 45 + metadata.percent * 0.55));
    if (qrUI.batch !== job) return;
    const day = new Date().toISOString().slice(0, 10).replaceAll("-", "");
    job.filename = "商品二维码_" + day + "_" + job.files.length + "个.zip";
    job.stage = "done";
    qrRenderBatch();
  } catch (error) {
    if (qrUI.batch !== job) return;
    job.stage = "error";
    job.error = error.message;
    qrRenderBatch();
  }
}
function qrUpdateProgress(job, percent) {
  if (qrUI.batch !== job) return;
  job.percent = Math.min(100, Math.max(0, percent));
  const progress = document.getElementById("qrProgress");
  const text = document.getElementById("qrProgressText");
  if (progress) progress.value = job.percent;
  if (text) text.textContent = Math.floor(job.percent) + "%";
}

async function qrCopyLink() {
  if (!qrUI.single) return;
  const product = data.products.find((p) => p.id === qrUI.single.id);
  const reason = qrEligibility(product);
  if (reason) return toast(reason);
  const value = qrProductURL(product);
  try {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(value);
    toast("链接已复制");
  } catch (_) {
    const input = document.getElementById("qrProductLink");
    if (!input) return;
    input.focus(); input.select();
    let copied = false;
    try { copied = Boolean(document.execCommand?.("copy")); } catch (_) {}
    toast(copied ? "链接已复制" : "已选中链接，请复制");
  }
}

function qrExportList() {
  const products = qrUI.selected.size ? data.products.filter((p) => qrUI.selected.has(p.id)) : enterpriseFilteredProducts();
  if (!products.length) return toast("没有可导出的供应信息");
  const quote = (value) => '"' + String(value).replace(/^[=+@-]/, "'$&").replaceAll('"', '""') + '"';
  const rows = [["供应名称", "品类", "可供时间", "可供地区", "审核状态", "状态", "交易方式", "产品库标签 / 审批状态"],
    ...products.map((p) => [p.name, p.category, p.supplyStart ? p.supplyStart + " ~ " + p.supplyEnd : "长期", p.regions, supplyReviewStatus(p),
      p.supplyStatus, supplyTradeMode(p), Object.entries(p.tags || {}).map(([id, task]) => getLibrary(id).name + " / " + task.status).join("；") || "普通商品"])];
  qrDownload(new TextEncoder().encode("\ufeff" + rows.map((row) => row.map(quote).join(",")).join("\r\n")), "供应信息.csv", "text/csv;charset=utf-8");
}

function qrDeleteSelected(ids) {
  const products = data.products.filter((p) => ids.includes(p.id));
  if (!products.length) return toast("请先勾选商品");
  openModal(products.length > 1 ? "批量删除" : "删除供应",
    "<p>确认删除以下供应信息？删除后商品将无法通过二维码访问。</p><ul class=\"qr-delete-list\">" + products.map((p) => "<li>" + esc(p.name) + "</li>").join("") + "</ul>",
    '<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-danger" data-action="qr-confirm-delete" data-ids="' +
    esc(products.map((p) => p.id).join(",")) + '">删除</button>');
}

document.addEventListener("click", (event) => {
  const element = event.target.closest("[data-action]");
  if (!element) return;
  const action = element.dataset.action;
  const ownAction = action.startsWith("qr-") || action === "delete-product" && roleForRoute(route()) === "enterprise" ||
    action === "submit-product" && route() === "enterprise-form" || action === "confirm-submit-product" && route() === "enterprise-form";
  if (!ownAction) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  if (element.disabled) return;
  if (action === "qr-single") qrOpenSingle(element.dataset.id);
  else if (action === "qr-batch") qrOpenBatch();
  else if (action === "qr-generate-batch") qrGenerateBatch();
  else if (action === "qr-retry-batch") { if (qrUI.batch) { qrUI.batch.stage = "choose"; qrRenderBatch(); } }
  else if (action === "qr-copy") qrCopyLink();
  else if (action === "qr-download-single") {
    const p = data.products.find((p) => p.id === qrUI.single?.id);
    const reason = qrEligibility(p);
    if (reason) return toast(reason);
    const image = qrImage(p);
    qrDownload(image.bytes, qrSafeFilename(p), "image/png");
    toast("下载已开始");
  } else if (action === "qr-download-batch") {
    if (!qrUI.batch?.bytes || qrUI.batch.stage !== "done") return;
    const changed = qrBatchCandidates().filter((item) => qrUI.batch.files.some((filename) => filename.startsWith(item.id + "_")) && item.reason);
    if (changed.length) { qrUI.batch.stage = "choose"; qrRenderBatch(); return toast("商品状态已变化，请重新核对"); }
    qrDownload(qrUI.batch.bytes, qrUI.batch.filename, "application/zip"); toast("下载已开始");
  } else if (action === "qr-export") qrExportList();
  else if (action === "qr-batch-delete") qrDeleteSelected([...qrUI.selected]);
  else if (action === "delete-product") qrDeleteSelected([element.dataset.id]);
  else if (action === "qr-confirm-delete") {
    const ids = element.dataset.ids.split(",");
    data.products = data.products.filter((p) => !ids.includes(p.id));
    ids.forEach((id) => qrUI.selected.delete(id));
    persist(); closeModal(); render(); toast("供应信息已删除");
  } else if (action === "qr-clear-condition") { state.enterpriseFilters[element.dataset.field] = "all"; render(); }
  else if (action === "qr-advanced") { qrUI.advanced = !qrUI.advanced; render(); }
  else if (action === "qr-more-provinces") { qrUI.provinceExpanded = !qrUI.provinceExpanded; render(); }
  else if (action === "qr-more-overseas") { qrUI.overseasExpanded = !qrUI.overseasExpanded; render(); }
  else if (action === "qr-supply-menu") { qrUI.supplyMenuOpen = !qrUI.supplyMenuOpen; render(); }
  else if (action === "qr-library-menu") { qrUI.libraryMenuOpen = !qrUI.libraryMenuOpen; render(); }
  else if (action === "qr-label-menu") toast("请在供应列表中选择商品进行标签管理");
  else if (action === "qr-fold-sidebar") document.body.classList.toggle("qr-sidebar-folded");
  else if (action === "qr-category-search") { qrUI.categoryKeyword = document.getElementById("qrCategoryKeyword").value.trim(); render(); }
  else if (action === "qr-tree-more") { qrUI.treeMenuOpen = !qrUI.treeMenuOpen; render(); }
  else if (action === "qr-tree-toggle") {
    if (qrUI.collapsedCategories.has(element.dataset.value)) qrUI.collapsedCategories.delete(element.dataset.value);
    else qrUI.collapsedCategories.add(element.dataset.value);
    render();
  } else if (action === "qr-tree-expand") { qrUI.collapsedCategories.clear(); qrUI.treeMenuOpen = false; render(); }
  else if (action === "qr-tree-collapse") { ["绿色建材"].forEach((name) => qrUI.collapsedCategories.add(name)); qrUI.treeMenuOpen = false; render(); }
  else if (action === "submit-product") {
    const form = collectProductForm();
    if (!form) return;
    if (!form.baseChanged) return toast("未修改商品信息");
    state.pendingFormData = form;
    openModal("提交供应信息", "<p>确认提交 <strong>" + esc(form.name) + "</strong>？</p><p>提交后由平台审核。</p>",
      '<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-primary" data-action="confirm-submit-product">提交</button>');
  } else if (action === "confirm-submit-product") {
    if (!state.pendingFormData) return;
    applyFormToProduct(getProduct(), state.pendingFormData, true);
    state.pendingFormData = null; state.formMode = "edit"; state.formTags = [];
    persist(); closeModal(); toast("提交成功"); navigate("enterprise-detail");
  }
}, true);

document.addEventListener("change", (event) => {
  const element = event.target;
  if (element.matches("[data-qr-select]")) {
    if (element.checked) qrUI.selected.add(element.dataset.qrSelect);
    else qrUI.selected.delete(element.dataset.qrSelect);
    qrSyncSelection();
  } else if (element.matches("[data-qr-select-all]")) {
    enterpriseFilteredProducts().forEach((p) => { if (element.checked) qrUI.selected.add(p.id); else qrUI.selected.delete(p.id); });
    qrSyncSelection();
  } else if (element.id === "qrStartDate" || element.id === "qrEndDate") {
    const start = document.getElementById("qrStartDate").value;
    const end = document.getElementById("qrEndDate").value;
    if (start && end && start > end) { element.value = ""; return toast("结束时间不能早于开始时间"); }
    state.enterpriseFilters.startDate = start; state.enterpriseFilters.endDate = end; render();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && ["enterpriseKeyword", "qrCategoryKeyword"].includes(event.target.id)) {
    event.preventDefault();
    document.querySelector('[data-action="' + (event.target.id === "enterpriseKeyword" ? "enterprise-search" : "qr-category-search") + '"]').click();
  }
  if (event.key !== "Tab" || !document.getElementById("modalMask").classList.contains("open")) return;
  const focusable = [...document.querySelectorAll('.modal a[href], .modal button:not(:disabled), .modal input:not(:disabled), .modal select:not(:disabled), .modal textarea:not(:disabled)')].filter((el) => !el.hidden);
  const first = focusable[0], last = focusable.at(-1);
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
});
document.addEventListener("submit", (event) => { if (event.target.id === "productForm") event.preventDefault(); });

// The shared public route retains the requested product ID even if unavailable.
const qrLandingId = new URL(window.location.href).searchParams.get("product");
if (qrLandingId && route() === "mall-detail") state.productId = qrLandingId;
render();
