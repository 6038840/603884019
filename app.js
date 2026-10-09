"use strict";

const STORAGE_KEY = "zhizao-youpi-prototype-v3-3-qr";

const INITIAL_DATA = {
  schemaVersion: 13,
  libraries: [
    {
      id: "A",
      name: "三局工业化优品",
      color: "gold",
      description: "面向工业化建造场景遴选的优质产品库。",
      applicationFields: [
        { id: "AF01", sort: 1, name: "产品成熟度", type: "single", required: true, status: "启用", options: ["已形成成熟产品", "试点验证中"] },
        { id: "AF02", sort: 2, name: "适用场景", type: "multiple", required: true, status: "启用", options: ["装配式建筑", "智能建造", "绿色建造"] },
        { id: "AF03", sort: 3, name: "产品与产品库匹配说明", type: "richtext", required: true, status: "启用", options: [] },
        { id: "AF04", sort: 4, name: "准入佐证附件", type: "attachment", required: true, status: "启用", options: [] }
      ],
      adminOrg: "美家科技有限公司",
      admins: [
        { id: "MJ001", name: "张晓明", phone: "137****3392", status: "启用" },
        { id: "MJ002", name: "李欣", phone: "139****2266", status: "启用" }
      ],
      status: "启用",
      sort: 1,
      admissionRule: {
        scoreItems: [
          { id: "scene", sort: 1, name: "产品场景适配", maxScore: 20 },
          { id: "maturity", sort: 2, name: "技术成熟度", maxScore: 40 },
          { id: "compliance", sort: 3, name: "合规性", maxScore: 40 }
        ],
        scope: "建筑新材料\n工业化部品部件\n智能系统新平台/设备",
        excluded: "临时施工机具\n现场生产工装\n可拆除施工设备",
        conditions: "场景适配：匹配建筑工业化、装配式建造应用场景\n技术成熟：技术体系完善、性能稳定并具备成熟案例\n合规完备：资质、检测、说明资料完整且符合相关标准\n产权清晰：知识产权及授权文件齐全、无产权纠纷",
        materials: "建筑工业化产品入库申请表\n产品图纸、技术说明书、使用说明\n第三方检测报告、产品资质、体系认证\n知识产权证明、品牌授权书、合作协议\n营业执照、产能说明、近三年典型应用案例",
        vetoes: "无明确技术标准、关键检测报告缺失或检测不合格\n知识产权归属不清、存在纠纷或未取得合法授权\n近2年发生重大质量/安全事故、环保违规或被列入禁用名单",
        conditionItems: [
          { id: "C01", sort: 1, text: "场景适配：匹配建筑工业化、装配式建造应用场景", options: [{ label: "符合", outcome: "pass" }, { label: "不符合", outcome: "fail" }] },
          { id: "C02", sort: 2, text: "技术成熟：技术体系完善、性能稳定并具备成熟案例", options: [{ label: "符合", outcome: "pass" }, { label: "不符合", outcome: "fail" }] },
          { id: "C03", sort: 3, text: "合规完备：资质、检测、说明资料完整且符合相关标准", options: [{ label: "符合", outcome: "pass" }, { label: "不符合", outcome: "fail" }] },
          { id: "C04", sort: 4, text: "产权清晰：知识产权及授权文件齐全、无产权纠纷", options: [{ label: "符合", outcome: "pass" }, { label: "不符合", outcome: "fail" }] }
        ],
        materialItems: [
          { id: "M01", sort: 1, text: "建筑工业化产品入库申请表", options: [{ label: "完整", outcome: "pass" }, { label: "缺失", outcome: "fail" }] },
          { id: "M02", sort: 2, text: "产品图纸、技术说明书、使用说明", options: [{ label: "完整", outcome: "pass" }, { label: "缺失", outcome: "fail" }] },
          { id: "M03", sort: 3, text: "第三方检测报告、产品资质、体系认证", options: [{ label: "完整", outcome: "pass" }, { label: "缺失", outcome: "fail" }] },
          { id: "M04", sort: 4, text: "知识产权证明、品牌授权书、合作协议", options: [{ label: "完整", outcome: "pass" }, { label: "缺失", outcome: "fail" }] },
          { id: "M05", sort: 5, text: "营业执照、产能说明、近三年典型应用案例", options: [{ label: "完整", outcome: "pass" }, { label: "缺失", outcome: "fail" }] }
        ],
        vetoItems: [
          { id: "V01", sort: 1, text: "无明确技术标准、关键检测报告缺失或检测不合格", options: [{ label: "未触发", outcome: "pass" }, { label: "已触发", outcome: "fail" }] },
          { id: "V02", sort: 2, text: "知识产权归属不清、存在纠纷或未取得合法授权", options: [{ label: "未触发", outcome: "pass" }, { label: "已触发", outcome: "fail" }] },
          { id: "V03", sort: 3, text: "近2年发生重大质量/安全事故、环保违规或被列入禁用名单", options: [{ label: "未触发", outcome: "pass" }, { label: "已触发", outcome: "fail" }] }
        ],
        notes: "产品库审批人一次完成准入核查和指标评分，评分仅作为人工审批依据。"
      },
      approvalMode: "任一已选审批人审批通过即通过",
      passAction: "标签审批通过后生效，不影响商品上下架",
      rejectAction: "企业修改后可重新申请"
    },
    {
      id: "B",
      name: "智慧工地优选",
      color: "blue",
      description: "面向智慧工地的数字化、智能化产品库。",
      applicationFields: [
        { id: "BF01", sort: 1, name: "产品接入方式", type: "single", required: true, status: "启用", options: ["标准接口", "定制接口"] },
        { id: "BF02", sort: 2, name: "适用场景", type: "multiple", required: true, status: "启用", options: ["智慧工地", "设备联网", "数据协同"] },
        { id: "BF03", sort: 3, name: "产品与产品库匹配说明", type: "richtext", required: true, status: "启用", options: [] },
        { id: "BF04", sort: 4, name: "佐证附件", type: "attachment", required: false, status: "启用", options: [] }
      ],
      adminOrg: "湖北智慧工地发展有限公司",
      admins: [
        { id: "ZH001", name: "王工", phone: "186****9712", status: "启用" }
      ],
      status: "启用",
      sort: 2,
      approvalMode: "任一已选审批人审批通过即通过",
      passAction: "标签审批通过后生效，不影响商品上下架",
      rejectAction: "企业修改后可重新申请"
    }
  ],
  products: [
    {
      id: "P001",
      name: "智能建造巡检机器人",
      aliases: "智能巡检机器人、施工巡检机器人",
      company: "中建三局科创有限公司",
      category: "智能装备",
      classification: "科技创新",
      unit: "台",
      price: "152000",
      status: "已上架",
      supplyStatus: "可供",
      normalStatus: "已通过",
      source: "企业申报",
      submittedAt: "2026-08-18 10:20",
      contact: "陈工",
      phone: "138****8123",
      email: "chen@example.com",
      summary: "适用于施工现场自主巡检、隐患识别与数据采集。",
      performance: "支持自主导航、图像识别、环境监测及隐患闭环。",
      standard: "企业标准 Q/ZNXJ 001-2026",
      advantage: "适应复杂施工现场，支持平台侧数据联动。",
      origin: "湖北武汉",
      regions: "全国",
      skus: [
        { model: "XJ-300 标准版", price: "152000", supplyStatus: "可供" },
        { model: "XJ-500 增强版", price: "198000", supplyStatus: "可供" }
      ],
      cases: [{ name: "武汉中心项目", description: "用于夜间无人巡检", link: "案例图片.jpg" }],
      tags: {
        A: {
          status: "评分不通过",
          workflow: "two-stage",
          application: "产品符合工业化建造场景与质量要求。",
          files: ["检测报告.pdf", "应用案例.pdf"],
          appliedAt: "2026-08-18 10:20",
          reviewer: "何评审",
          reviewedAt: "2026-08-19 09:16",
          opinion: "综合评分未达到通过线，本次不授予A产品库标签。",
          admissionReview: {
            status: "初审通过",
            reviewer: "周初审",
            reviewedAt: "2026-08-18 16:20",
            opinion: "适用范围、资料完整性及一票否决项核查通过。"
          },
          scoreReview: {
            status: "评分不通过",
            reviewer: "何评审",
            reviewedAt: "2026-08-19 09:16",
            opinion: "综合评分未达到通过线，本次标签申请不通过。",
            grades: { scene: "一般", maturity: "差", compliance: "差" },
            scores: { scene: 14, maturity: 20, compliance: 20 },
            total: 54
          }
        },
        B: {
          status: "已通过",
          application: "申请纳入智慧工地优选。",
          files: ["系统对接说明.pdf"],
          appliedAt: "2026-08-18 10:20",
          reviewer: "王工",
          reviewedAt: "2026-08-19 15:42",
          opinion: "产品符合智慧工地应用场景，同意授予B产品库标签。"
        }
      },
      normalReview: {
        reviewer: "刘运营",
        reviewedAt: "2026-08-19 08:40",
        opinion: "商品资料完整，同意上架。",
        status: "已通过"
      },
      submissionHistory: ["2026-08-18 10:20 提交商品上架审批及 A、B 标签申请", "2026-08-19 08:40 运营审核通过，商品上架", "2026-08-19 09:16 A标签入库审批退回（54分）", "2026-08-19 15:42 B标签入库审批通过"]
    },
    {
      id: "P002",
      name: "低碳预制外墙板",
      aliases: "预制外墙板",
      company: "湖北绿色建材有限公司",
      category: "绿色建材",
      classification: "绿色低碳",
      unit: "平方米",
      price: "680",
      status: "已下架",
      supplyStatus: "停供",
      normalStatus: "已通过",
      source: "企业申报",
      submittedAt: "2026-08-16 15:12",
      contact: "周经理",
      phone: "139****2321",
      email: "zhou@example.com",
      summary: "工厂预制、现场装配的低碳围护产品。",
      performance: "保温、防火、结构装饰一体化。",
      standard: "JGJ 1-2014",
      advantage: "减少现场湿作业，提升装配效率。",
      origin: "湖北荆州",
      regions: "湖北、湖南、河南",
      skus: [{ model: "LC-W120", price: "680", supplyStatus: "停供" }],
      cases: [],
      tags: {
        A: {
          status: "初审退回",
          workflow: "two-stage",
          application: "申请加入三局工业化优品。",
          files: ["产品手册.pdf"],
          appliedAt: "2026-08-16 15:12",
          reviewer: "周初审",
          reviewedAt: "2026-08-17 11:06",
          opinion: "缺少有效期内的防火检测报告，请补充后重新提交。",
          admissionReview: {
            status: "初审退回",
            reviewer: "周初审",
            reviewedAt: "2026-08-17 11:06",
            opinion: "缺少有效期内的防火检测报告，请补充后重新提交。"
          },
          scoreReview: null
        }
      },
      normalReview: {
        reviewer: "刘运营",
        reviewedAt: "2026-08-16 18:30",
        opinion: "商品资料符合上架要求。",
        status: "已通过"
      },
      submissionHistory: ["2026-08-16 15:12 提交 A 标签申请", "2026-08-17 11:06 A 标签入库审批退回"]
    },
    {
      id: "P003",
      name: "装配式机房模块",
      aliases: "机房模块",
      company: "中建三局工业设备安装有限公司",
      category: "部品部件",
      classification: "成熟推广",
      unit: "套",
      price: "面议",
      status: "草稿",
      supplyStatus: "停供",
      normalStatus: "未提交",
      source: "企业申报",
      submittedAt: "—",
      contact: "李工",
      phone: "186****7788",
      email: "li@example.com",
      summary: "标准化设计、工厂预制的装配式机房模块。",
      performance: "机电管线集成、快速吊装、模块化扩展。",
      standard: "企业标准",
      advantage: "减少现场安装周期并稳定交付质量。",
      origin: "湖北武汉",
      regions: "全国",
      skus: [{ model: "JF-M01", price: "面议", supplyStatus: "停供" }],
      cases: [],
      tags: {},
      normalReview: null,
      submissionHistory: []
    },
    {
      id: "P004",
      name: "智能墙面喷涂机器人",
      aliases: "喷涂机器人",
      company: "美家科技有限公司",
      category: "智能装备",
      classification: "科技创新",
      unit: "台/月",
      price: "29800",
      status: "已上架",
      supplyStatus: "可供",
      normalStatus: "已通过",
      source: "平台预置",
      submittedAt: "2026-08-12 09:30",
      contact: "张晓明",
      phone: "137****3392",
      email: "zhang@example.com",
      summary: "用于建筑内墙、飘窗、天花板的自动喷涂。",
      performance: "自主定位、路径规划、连续喷涂。",
      standard: "企业标准 Q/MJ 005-2026",
      advantage: "降低高空作业风险并提升涂层一致性。",
      origin: "湖北武汉",
      regions: "全国",
      skus: [{ model: "BDR-NTPN3100", price: "29800", supplyStatus: "可供" }],
      cases: [{ name: "光谷住宅项目", description: "标准层批量应用", link: "现场照片.jpg" }],
      tags: {
        A: {
          status: "已通过",
          workflow: "two-stage",
          application: "存量商品申请纳入三局工业化优品。",
          files: ["产品技术资料.pdf"],
          appliedAt: "2026-08-12 09:30",
          reviewer: "张晓明",
          reviewedAt: "2026-08-12 09:30",
          opinion: "产品符合产品库要求，同意标签生效。"
        },
        B: {
          status: "待审核",
          application: "产品具备智能定位和作业数据采集能力，申请纳入智慧工地优选。",
          files: ["智慧工地接入说明.pdf"],
          appliedAt: "2026-08-20 11:20",
          reviewer: "",
          reviewedAt: "",
          opinion: ""
        }
      },
      normalReview: {
        reviewer: "刘运营",
        reviewedAt: "2026-08-12 09:30",
        opinion: "平台预置商品资料确认，商品上架。",
        status: "已通过"
      },
      submissionHistory: ["2026-08-12 09:30 平台预置商品上架并绑定 A 标签"]
    },
    {
      id: "P005",
      name: "BIM 协同交付平台",
      aliases: "BIM交付平台",
      company: "华中数科有限公司",
      category: "专业服务",
      classification: "科技创新",
      unit: "年",
      price: "120000",
      status: "待审核",
      supplyStatus: "停供",
      normalStatus: "待运营审核",
      source: "企业申报",
      submittedAt: "2026-08-19 14:06",
      contact: "孙工",
      phone: "180****1066",
      email: "sun@example.com",
      summary: "BIM 模型协同、成果审查与数字化交付服务。",
      performance: "支持模型轻量化、版本管理、问题闭环。",
      standard: "企业服务规范",
      advantage: "覆盖设计、施工、竣工交付全过程。",
      origin: "湖北武汉",
      regions: "全国",
      skus: [{ model: "SaaS 企业版", price: "120000", supplyStatus: "停供" }],
      cases: [],
      tags: {},
      normalReview: null,
      submissionHistory: ["2026-08-19 14:06 作为普通商品提交运营审核"]
    },
    {
      id: "P006",
      name: "施工现场物联感知网关",
      aliases: "物联网关、边缘网关",
      company: "湖北建科数字有限公司",
      category: "智能装备",
      classification: "战新产业",
      unit: "套",
      price: "36000",
      status: "待审核",
      supplyStatus: "停供",
      normalStatus: "待运营审核",
      source: "企业申报",
      submittedAt: "2026-08-20 11:30",
      contact: "赵工",
      phone: "189****1028",
      email: "zhao@example.com",
      summary: "面向施工现场多协议设备接入与边缘数据处理。",
      performance: "支持 Modbus、BACnet、MQTT 等协议，具备断点续传。",
      standard: "GB/T 22239-2019",
      advantage: "快速接入既有设备，降低现场集成成本。",
      origin: "湖北武汉",
      regions: "湖北、湖南、江西",
      skus: [{ model: "IOT-GW20", price: "36000", supplyStatus: "停供" }],
      cases: [{ name: "襄阳智慧工地", description: "接入环境与能耗设备", link: "案例说明.pdf" }],
      tags: {
        A: {
          status: "待审核",
          workflow: "two-stage",
          application: "网关可服务工业化建造设备协同。",
          files: ["检测报告.pdf"],
          appliedAt: "2026-08-20 11:30",
          reviewer: "",
          reviewedAt: "",
          opinion: "",
          admissionReview: null,
          scoreReview: null
        },
        B: {
          status: "待审核",
          application: "产品面向智慧工地设备连接场景。",
          files: ["对接清单.pdf", "案例说明.pdf"],
          appliedAt: "2026-08-20 11:30",
          reviewer: "",
          reviewedAt: "",
          opinion: ""
        }
      },
      normalReview: null,
      submissionHistory: ["2026-08-20 11:30 提交商品上架审批及 A、B 标签申请"]
    },
    {
      id: "P007",
      name: "装配式支吊架组件",
      aliases: "成品支吊架",
      company: "武汉精工机电有限公司",
      category: "部品部件",
      classification: "成熟推广",
      unit: "套",
      price: "860",
      status: "已上架",
      supplyStatus: "可供",
      normalStatus: "已通过",
      source: "企业申报",
      submittedAt: "2026-08-11 13:20",
      contact: "胡经理",
      phone: "181****3510",
      email: "hu@example.com",
      summary: "适配机电安装的标准化装配式支吊架组件。",
      performance: "组合式安装、可调节、耐腐蚀。",
      standard: "GB/T 37267-2018",
      advantage: "标准化程度高，交付周期短。",
      origin: "湖北武汉",
      regions: "华中地区",
      skus: [{ model: "ZDJ-600", price: "860", supplyStatus: "可供" }],
      cases: [],
      tags: {
        A: {
          status: "已通过",
          tagStatus: "已下架",
          application: "产品采用标准化装配设计，曾申请纳入三局工业化优品。",
          files: ["产品检测报告.pdf", "应用案例.pdf"],
          appliedAt: "2026-08-11 13:20",
          reviewer: "张晓明",
          reviewedAt: "2026-08-12 14:25",
          opinion: "准入核查通过，同意授予产品库标签。",
          delistedAt: "2026-08-28 10:15",
          delistedBy: "张晓明",
          delistedReason: "产品认证文件已到期，待企业更新后重新申请。",
          lifecycleHistory: [
            { type: "入库生效", at: "2026-08-12 14:25", operator: "张晓明", reason: "入库审批通过" },
            { type: "标签下架", at: "2026-08-28 10:15", operator: "张晓明", reason: "产品认证文件已到期，待企业更新后重新申请。" }
          ]
        }
      },
      normalReview: {
        reviewer: "刘运营",
        reviewedAt: "2026-08-12 10:08",
        opinion: "商品信息完整，同意作为普通商品上架。",
        status: "已通过"
      },
      submissionHistory: ["2026-08-11 13:20 提交商品及 A 标签申请", "2026-08-12 10:08 运营审核通过，商品上架", "2026-08-12 14:25 A 标签入库审批通过", "2026-08-28 10:15 A 标签下架，商品保持上架"]
    },
    {
      id: "P008",
      name: "装配式模块化泵房",
      aliases: "模块化泵房、预制泵房",
      company: "湖北工业化设备有限公司",
      category: "部品部件",
      classification: "成熟推广",
      unit: "套",
      price: "286000",
      status: "待审核",
      supplyStatus: "停供",
      normalStatus: "待运营审核",
      source: "企业申报",
      submittedAt: "2026-08-21 09:40",
      contact: "罗工",
      phone: "188****5216",
      email: "luo@example.com",
      summary: "集成水泵、管路、控制柜及监测系统的工厂预制模块化泵房。",
      performance: "工厂预装预调、现场快速吊装，支持远程运行监测。",
      standard: "GB 50974-2014、企业标准 Q/HGY 006-2026",
      advantage: "缩短现场机电安装周期，降低多专业交叉作业风险。",
      origin: "湖北武汉",
      regions: "华中、华东地区",
      skus: [{ model: "MPS-120", price: "286000", supplyStatus: "停供" }],
      cases: [{ name: "光谷产业园项目", description: "地下室消防泵房整体预制安装", link: "应用案例.pdf" }],
      tags: {
        A: {
          status: "已退回",
          workflow: "two-stage",
          application: "产品属于工业化部品部件，申请纳入三局工业化优品。",
          files: ["入库申请表.pdf", "检测报告.pdf", "知识产权证明.pdf", "应用案例.pdf"],
          appliedAt: "2026-08-21 09:40",
          reviewer: "张晓明",
          reviewedAt: "2026-08-22 10:15",
          opinion: "准入佐证附件缺少最新检测报告，请补充后重新提交。",
          admissionReview: {
            status: "初审退回",
            reviewer: "张晓明",
            reviewedAt: "2026-08-22 10:15",
            opinion: "准入佐证附件缺少最新检测报告，请补充后重新提交。"
          },
          scoreReview: null
        },
        B: {
          status: "已通过",
          application: "产品支持泵房设备联网与远程运行监测。",
          files: ["智慧工地接入说明.pdf"],
          appliedAt: "2026-08-21 09:40",
          reviewer: "王工",
          reviewedAt: "2026-08-22 16:20",
          opinion: "符合智慧工地产品库要求，同意标签生效。"
        }
      },
      normalReview: null,
      submissionHistory: ["2026-08-21 09:40 提交商品上架审批及 A 标签申请，进入一次入库审批"]
    }
  ]
};

function listScenarioTag(libraryId, status) {
  const returned = status === "已退回";
  const approved = status === "已通过";
  return {
    status,
    application: libraryId === "A" ? "申请纳入三局工业化优品。" : "申请纳入智慧工地优选。",
    files: [libraryId === "A" ? "产品技术资料.pdf" : "系统对接说明.pdf"],
    appliedAt: "2026-08-22 09:30",
    reviewer: status === "待审核" ? "" : libraryId === "A" ? "张晓明" : "王工",
    reviewedAt: status === "待审核" ? "" : "2026-08-23 10:20",
    opinion: returned ? "申报材料不完整，请补充后重新提交。" : approved ? "符合产品库要求，同意标签生效。" : ""
  };
}

function listScenarioProduct(baseId, id, name, normalStatus, tags, scenario) {
  const product = clone(INITIAL_DATA.products.find((item) => item.id === baseId));
  const approved = normalStatus === "已通过";
  const draft = normalStatus === "未提交";
  Object.assign(product, {
    id,
    name,
    aliases: name,
    status: draft ? "草稿" : approved ? "已上架" : "待审核",
    supplyStatus: approved ? "可供" : "停供",
    normalStatus,
    source: "企业申报",
    submittedAt: draft ? "—" : "2026-08-22 09:30",
    tags,
    normalReview: approved ? { reviewer: "刘运营", reviewedAt: "2026-08-23 09:10", opinion: "商品资料审核通过。", status: "已通过" } : null,
    submissionHistory: draft ? [] : [`2026-08-22 09:30 提交${Object.keys(tags).length ? "商品及标签" : "商品"}审批`],
    enterpriseScenarioOnly: true,
    enterpriseScenario: scenario
  });
  return product;
}

function listScenarioDelistedTag() {
  const tag = listScenarioTag("A", "已通过");
  return Object.assign(tag, {
    tagStatus: "已下架",
    delistedAt: "2026-08-28 10:15",
    delistedBy: "张晓明",
    delistedReason: "产品认证文件已到期，待企业更新后重新申请。",
    lifecycleHistory: [
      { type: "入库生效", at: "2026-08-23 10:20", operator: "张晓明", reason: "入库审批通过" },
      { type: "标签下架", at: "2026-08-28 10:15", operator: "张晓明", reason: "产品认证文件已到期，待企业更新后重新申请。" }
    ]
  });
}

const enterpriseStateSamples = [
  listScenarioProduct("P003", "S001", "装配式机房模块", "未提交", {}, "草稿＋未申请标签"),
  listScenarioProduct("P005", "S002", "BIM 协同交付平台", "待运营审核", {}, "待审核＋未申请标签"),
  listScenarioProduct("P006", "S003", "施工现场物联感知网关", "待运营审核", { A: listScenarioTag("A", "待审核") }, "待审核＋A待审核"),
  listScenarioProduct("P008", "S004", "装配式模块化泵房", "待运营审核", { A: listScenarioTag("A", "已退回") }, "待审核＋A已退回"),
  listScenarioProduct("P005", "S005", "装配式管线预制平台", "待运营审核", { A: listScenarioTag("A", "已通过") }, "待审核＋A已通过"),
  listScenarioProduct("P004", "S006", "绿色施工咨询服务", "已通过", {}, "已审批＋未申请标签"),
  listScenarioProduct("P004", "S007", "智能测量放样机器人", "已通过", { A: listScenarioTag("A", "待审核") }, "已审批＋A待审核"),
  listScenarioProduct("P002", "S008", "低碳预制外墙板", "已通过", { A: listScenarioTag("A", "已退回") }, "已审批＋A已退回"),
  listScenarioProduct("P004", "S009", "智能墙面喷涂机器人", "已通过", { A: listScenarioTag("A", "已通过") }, "已审批＋A已通过"),
  listScenarioProduct("P001", "S010", "建筑机器人调度平台", "已通过", { A: listScenarioTag("A", "已退回"), B: listScenarioTag("B", "待审核") }, "已审批＋A已退回＋B待审核"),
  listScenarioProduct("P001", "S011", "智能建造巡检机器人", "已通过", { A: listScenarioTag("A", "已退回"), B: listScenarioTag("B", "已通过") }, "已审批＋A已退回＋B已通过"),
  listScenarioProduct("P004", "S012", "装配式机电集成单元", "已通过", { A: listScenarioTag("A", "已通过"), B: listScenarioTag("B", "已通过") }, "已审批＋A已通过＋B已通过"),
  listScenarioProduct("P007", "S013", "装配式支吊架组件", "已通过", { A: listScenarioDelistedTag() }, "已审批＋A已通过但已下架"),
  listScenarioProduct("P002", "S014", "模块化轻质隔墙", "已驳回", {}, "审核拒绝＋未申请标签")
];

enterpriseStateSamples.forEach((product, index) => { product.enterpriseScenarioOrder = index + 1; });
INITIAL_DATA.products.push(...enterpriseStateSamples);

const ORGANIZATIONS = {
  "美家科技有限公司": [
    { id: "MJ001", name: "张晓明", phone: "137****3392", status: "启用" },
    { id: "MJ002", name: "李欣", phone: "139****2266", status: "启用" },
    { id: "MJ003", name: "何佳", phone: "158****6031", status: "启用" }
  ],
  "湖北智慧工地发展有限公司": [
    { id: "ZH001", name: "王工", phone: "186****9712", status: "启用" },
    { id: "ZH002", name: "郑敏", phone: "177****4058", status: "启用" }
  ],
  "中建三局科创有限公司": [
    { id: "KC001", name: "陈工", phone: "138****8123", status: "启用" },
    { id: "KC002", name: "吴敏", phone: "136****7720", status: "启用" }
  ]
};

const PAGE_GROUPS = [
  {
    title: "商城前台",
    pages: [
      ["mall", "商品列表与标签筛选"],
      ["mall-detail", "商品详情"]
    ]
  },
  {
    title: "企业端",
    pages: [
      ["enterprise-list", "供应管理列表"],
      ["enterprise-form", "新增 / 编辑商品"],
      ["enterprise-detail", "商品详情与审批记录"],
      ["admin-list", "产品库管理 / 入库审批"],
      ["admin-review", "产品库管理 / 入库审批详情"],
      ["admin-products", "产品库管理 / 在库商品"]
    ]
  },
  {
    title: "运营端",
    pages: [
      ["ops-list", "供应列表"],
      ["ops-supply-form", "编辑商品"],
      ["ops-supply-detail", "商品详情"],
      ["library-config", "产品库配置"],
      ["library-form", "产品库配置详情"],
      ["rule-admission", "入库审批配置"]
    ]
  }
];

// v3.3 keeps the existing pages, with nine supply samples for the QR workflow.
const qrSupplySamples = [
  { id: "P003", base: "P003", name: "装配式机房模块", category: "部品部件", normal: "未提交", status: "草稿", supply: "停供", trade: "联系交易", tags: {} },
  { id: "P005", base: "P002", name: "复合自保温砌块", category: "绿色建材", normal: "待运营审核", status: "待审核", supply: "可供", trade: "联系交易", tags: {}, start: "2026-09-04", end: "2026-10-24", regions: "北京" },
  { id: "P006", base: "P006", name: "热镀锌钢管001", category: "绿色建材", normal: "已通过", status: "已上架", supply: "可供", trade: "在线交易", tags: {} },
  { id: "P004", base: "P004", name: "智能墙面喷涂机器人", category: "智能装备", normal: "已通过", status: "已上架", supply: "可供", trade: "在线交易", tags: { A: listScenarioTag("A", "已通过") } },
  { id: "P001", base: "P001", name: "施工现场物联网网关", category: "智能装备", normal: "已通过", status: "已上架", supply: "可供", trade: "在线交易", tags: { A: listScenarioTag("A", "待审核"), B: listScenarioTag("B", "已退回") }, regions: "湖北、湖南、江西" },
  { id: "P007", base: "P007", name: "装配式支吊架组件", category: "部品部件", normal: "已通过", status: "已上架", supply: "可供", trade: "联系交易", tags: { A: listScenarioDelistedTag() } },
  { id: "P002", base: "P002", name: "低碳预制外墙板", category: "绿色建材", normal: "已通过", status: "已上架", supply: "停供", trade: "联系交易", tags: { A: listScenarioTag("A", "已通过") } },
  { id: "P008", base: "P008", name: "装配式模块化泵房", category: "部品部件", normal: "已驳回", status: "审核驳回", supply: "可供", trade: "在线交易", tags: { A: listScenarioTag("A", "已退回") } },
  { id: "P009", base: "P002", name: "装配式预制楼梯", category: "部品部件", normal: "已通过", status: "已下架", supply: "可供", trade: "联系交易", tags: {} }
];
INITIAL_DATA.products = qrSupplySamples.map((sample, index) => {
  const product = clone(INITIAL_DATA.products.find((item) => item.id === sample.base));
  Object.assign(product, {
    id: sample.id, name: sample.name, aliases: sample.name, category: sample.category,
    company: "盛隆电气集团有限公司", contact: "谢元德", phone: "139****2468", email: "sales@example.com",
    normalStatus: sample.normal, status: sample.status, supplyStatus: sample.supply,
    tradeMode: sample.trade, tags: clone(sample.tags), regions: sample.regions || "全国",
    supplyStart: sample.start || "", supplyEnd: sample.end || "", overseasRegions: [],
    qrSupplyDemo: true, enterpriseScenarioOrder: index + 1,
    normalReview: sample.normal === "已通过" ? { reviewer: "刘运营", reviewedAt: "2026-09-23 10:00", opinion: "供应信息审核通过。", status: "已通过" } : sample.normal === "已驳回" ? { reviewer: "刘运营", reviewedAt: "2026-09-23 11:20", opinion: "请补充产品检测报告后重新提交。", status: "已驳回" } : null
  });
  if (sample.id === "P006") Object.assign(product, { unit: "kg", price: "90.00~145.00", summary: "用于建筑机电安装的热镀锌钢管，支持多规格供货。", performance: "镀锌层均匀，适用于建筑给排水与管线支撑。", standard: "产品合格证与检测报告随货提供。", skus: [{ model: "DN50 / DN80 / DN100", price: "90.00~145.00", supplyStatus: "可供" }] });
  return product;
});

let data = loadData();
let state = {
  productId: "P006",
  libraryId: "A",
  formMode: "edit",
  formTags: [],
  tagApplicationDrafts: {},
  tagApplicationModal: null,
  libraryDraft: null,
  applicationFieldDraft: null,
  admissionRuleDraft: null,
  selectedRuleModuleId: "",
  ruleModuleDraft: null,
  ruleItemDraft: null,
  mallFilter: "all",
  mallKeyword: "",
  enterpriseFilters: { keyword: "", category: "all", supplyStatus: "all", reviewStatus: "all", region: "all", overseas: "all", tradeMode: "all", availability: "all", library: "all" },
  opsFilters: { keyword: "", company: "", category: "all", supplyStatus: "all", region: "all", overseas: "all", tradeMode: "all", availability: "all", library: "all" },
  adminTab: "待审核",
  adminFilters: { keyword: "", company: "" },
  adminProductFilters: { keyword: "", company: "", category: "all", approvalStatus: "all" },
  adminReviewBackRoute: "admin-list",
  approvalAssigneeDraft: null,
  admissionTab: "待初审",
  scoreTab: "待评分",
  stageFilters: { keyword: "", company: "" },
  pendingFormData: null,
  pendingReview: null,
  selectedOrg: ""
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function defaultApplicationFields(libraryId) {
  const configured = INITIAL_DATA.libraries.find((library) => library.id === libraryId)?.applicationFields;
  return clone(configured || []);
}

function normalizeApplicationFields(fields, libraryId = "") {
  const source = Array.isArray(fields) ? fields : defaultApplicationFields(libraryId);
  return source.map((field, index) => ({
    id: field.id || `${libraryId || "F"}F${String(index + 1).padStart(2, "0")}`,
    sort: Math.max(1, Number(field.sort) || index + 1),
    name: field.name || `申报字段${index + 1}`,
    type: ["single", "multiple", "richtext", "attachment"].includes(field.type) ? field.type : "richtext",
    required: Boolean(field.required),
    status: field.status === "停用" ? "停用" : "启用",
    options: Array.isArray(field.options) ? field.options.filter(Boolean) : []
  })).sort((a, b) => a.sort - b.sort);
}

function normalizeRuleItems(items, prefix) {
  return (Array.isArray(items) ? items : []).map((item, index) => ({
    id: item.id || `${prefix}${String(index + 1).padStart(2, "0")}`,
    sort: Math.max(1, Number(item.sort) || index + 1),
    text: item.text || "",
    selectionType: item.selectionType === "multiple" ? "multiple" : "single",
    options: (Array.isArray(item.options) && item.options.length ? item.options : [{ label: "符合" }, { label: "不符合" }]).map((option) => ({
      label: option.label || ""
    }))
  })).sort((a, b) => a.sort - b.sort);
}

function defaultAdmissionModules(rule) {
  const makeItems = (lines, prefix, options, labelPrefix = "") => ruleLines(lines).map((text, index) => ({
    id: `${prefix}${String(index + 1).padStart(2, "0")}`,
    sort: index + 1,
    text: `${labelPrefix}${text}`,
    selectionType: "single",
    options: clone(options)
  }));
  return [
    {
      id: "RM01", sort: 1, title: "适用范围",
      items: [
        ...makeItems(rule.scope, "S", [{ label: "符合", outcome: "pass" }, { label: "不符合", outcome: "fail" }], "适用类别："),
        ...makeItems(rule.excluded, "E", [{ label: "未涉及", outcome: "pass" }, { label: "涉及", outcome: "fail" }], "排除范围：")
      ].map((item, index) => ({ ...item, sort: index + 1 }))
    },
    { id: "RM02", sort: 2, title: "必备资料完整性", items: normalizeRuleItems(rule.materialItems, "M") },
    { id: "RM03", sort: 3, title: "基本准入条件", items: normalizeRuleItems(rule.conditionItems, "C") },
    { id: "RM04", sort: 4, title: "一票否决项", items: normalizeRuleItems(rule.vetoItems, "V") }
  ];
}

function normalizeAdmissionModules(rule) {
  const source = Array.isArray(rule.modules) && rule.modules.length ? rule.modules : defaultAdmissionModules(rule);
  return source.map((module, index) => ({
    id: module.id || `RM${String(index + 1).padStart(2, "0")}`,
    sort: Math.max(1, Number(module.sort) || index + 1),
    title: module.title || `准入模块${index + 1}`,
    items: normalizeRuleItems(module.items, "R")
  }));
}

function normalizeScoreItems(items) {
  const defaults = [
    { id: "scene", sort: 1, name: "产品场景适配", maxScore: 20 },
    { id: "maturity", sort: 2, name: "技术成熟度", maxScore: 40 },
    { id: "compliance", sort: 3, name: "合规性", maxScore: 40 }
  ];
  const source = Array.isArray(items) && items.length ? items : defaults;
  return source.map((item, index) => ({
    id: item.id || `SI${String(index + 1).padStart(2, "0")}`,
    sort: Math.max(1, Number(item.sort) || index + 1),
    name: item.name || `评价指标${index + 1}`,
    maxScore: Math.max(1, Math.round(Number(item.maxScore ?? item.weight) || 0))
  })).sort((a, b) => a.sort - b.sort);
}

function defaultEntryRule(payload) {
  const configured = payload.libraries.find((library) => library.admissionRule)?.admissionRule || {};
  const rule = clone(configured);
  rule.modules = normalizeAdmissionModules(rule);
  rule.scoreItems = normalizeScoreItems(rule.scoreItems);
  return rule;
}

function legacyApplicationData(task, fields) {
  const values = {};
  fields.forEach((field) => {
    if (field.type === "richtext") values[field.id] = task.application || "";
    else if (field.type === "attachment") values[field.id] = clone(task.files || []);
    else if (field.type === "multiple") values[field.id] = field.options.length ? [field.options[Math.min(1, field.options.length - 1)]] : [];
    else values[field.id] = field.options[0] || "";
  });
  return values;
}

function completeLifecycleSample(product) {
  return [
    { type: "提交申请", at: "2026-08-11 13:20", operator: product.company, reason: "企业首次提交三局工业化优品标签申请。" },
    { type: "审批退回", at: "2026-08-11 17:30", operator: "张晓明", reason: "产品认证附件缺少有效期页，请补充后重新提交。" },
    { type: "退回后重新提交", at: "2026-08-12 09:10", operator: product.company, reason: "已补充产品认证附件并重新提交。" },
    { type: "入库生效", at: "2026-08-12 14:25", operator: "张晓明", reason: "入库审批通过，产品库标签生效。" },
    { type: "标签下架", at: "2026-08-28 10:15", operator: "张晓明", reason: "产品认证文件已到期，待企业更新后重新申请。" },
    { type: "下架后重新申请", at: "2026-08-29 09:35", operator: product.company, reason: "企业更新认证文件后重新申请产品库标签。" },
    { type: "审批退回", at: "2026-08-29 16:20", operator: "张晓明", reason: "更新后的认证文件缺少盖章页，请继续补充。" },
    { type: "退回后重新提交", at: "2026-08-30 09:40", operator: product.company, reason: "已补充盖章页并重新提交。" },
    { type: "入库生效", at: "2026-08-30 15:20", operator: "张晓明", reason: "重新申请审批通过，产品库标签恢复生效。" },
    { type: "标签下架", at: "2026-09-05 10:00", operator: "张晓明", reason: "企业申请暂停该标签展示，后续可再次申请。" }
  ];
}

function normalizeLifecycleHistory(product, libraryId, task) {
  const events = Array.isArray(task.lifecycleHistory) ? task.lifecycleHistory : [];
  if (product.id === "P007" && libraryId === "A" && task.tagStatus === "已下架" && !events.some((event) => event.type === "下架后重新申请")) {
    task.appliedAt = "2026-08-30 09:40";
    task.reviewer = "张晓明";
    task.reviewedAt = "2026-08-30 15:20";
    task.opinion = "重新申请审批通过，产品库标签恢复生效。";
    task.delistedAt = "2026-09-05 10:00";
    task.delistedBy = "张晓明";
    task.delistedReason = "企业申请暂停该标签展示，后续可再次申请。";
    if (task.approvalReview) {
      task.approvalReview.status = "已通过";
      task.approvalReview.reviewer = task.reviewer;
      task.approvalReview.reviewedAt = task.reviewedAt;
      task.approvalReview.opinion = task.opinion;
    }
    return completeLifecycleSample(product);
  }
  const applicationEvents = ["提交申请", "下架后重新申请", "退回后重新提交"];
  if (task.appliedAt && task.appliedAt !== "—" && !events.some((event) => applicationEvents.includes(event.type))) {
    events.unshift({ type: "提交申请", at: task.appliedAt, operator: product.company, reason: "企业提交产品库标签申请。" });
  }
  if (task.status === "已退回" && task.tagStatus !== "已下架" && task.reviewedAt && !events.some((event) => event.type === "审批退回")) {
    events.push({ type: "审批退回", at: task.reviewedAt, operator: task.reviewer || "产品库审批人", reason: task.opinion || "审批退回，待企业补充材料。" });
  }
  return events;
}

function normalizePrototypeData(payload) {
  const fallbackRule = defaultEntryRule(payload);
  payload.libraries.forEach((library) => {
    library.applicationFields = normalizeApplicationFields(library.applicationFields, library.id);
    library.admissionRule = library.admissionRule ? clone(library.admissionRule) : clone(fallbackRule);
    library.admissionRule.modules = normalizeAdmissionModules(library.admissionRule);
    library.admissionRule.scoreItems = normalizeScoreItems(library.admissionRule.scoreItems || library.scoreRule?.dimensions);
    library.approvalMode = "任一已选审批人审批通过即通过";
    library.passAction = "入库审批通过后标签生效，不影响商品上下架";
    library.rejectAction = "退回后企业可修改并重新申请";
  });
  payload.products.forEach((product) => {
    product.images = Array.isArray(product.images) ? product.images : ["商品主图.jpg"];
    product.certifications = Array.isArray(product.certifications) ? product.certifications : ["产品认证.pdf"];
    product.contacts = Array.isArray(product.contacts) && product.contacts.length ? product.contacts : [{ name: product.contact || "", phone: product.phone || "", extra: product.email || "" }];
    Object.entries(product.tags || {}).forEach(([libraryId, task]) => {
      const library = payload.libraries.find((item) => item.id === libraryId);
      const fields = normalizeApplicationFields(task.applicationFields || library?.applicationFields, libraryId);
      task.applicationFields = clone(fields);
      task.applicationData = task.applicationData && typeof task.applicationData === "object" ? task.applicationData : legacyApplicationData(task, fields);
      const originalStatus = task.status;
      const statusMap = {
        "待初审": "待审核", "待评分": "待审核", "待审批": "待审核", "待补充": "已退回",
        "初审退回": "已退回", "准入否决": "已退回", "评分不通过": "已退回", "已驳回": "已退回"
      };
      task.status = statusMap[task.status] || task.status;
      task.tagStatus = ["生效中", "已下架"].includes(task.tagStatus) ? task.tagStatus : task.status === "已通过" ? "生效中" : "未生效";
      task.lifecycleHistory = normalizeLifecycleHistory(product, libraryId, task);
      const ruleSnapshot = clone(task.approvalRuleSnapshot || task.admissionRuleSnapshot || library?.admissionRule || fallbackRule);
      ruleSnapshot.modules = normalizeAdmissionModules(ruleSnapshot);
      ruleSnapshot.scoreItems = normalizeScoreItems(ruleSnapshot.scoreItems || library?.admissionRule?.scoreItems);
      task.approvalRuleSnapshot = ruleSnapshot;
      let checkResults = task.approvalReview?.checkResults || task.admissionReview?.checkResults;
      if (!Array.isArray(checkResults)) {
        checkResults = ruleSnapshot.modules.flatMap((module) => module.items.map((item) => {
          const option = item.options[0];
          return { moduleId: module.id, moduleTitle: module.title, itemId: item.id, itemText: item.text, selectionType: item.selectionType, values: option ? [option.label] : [], note: "历史审批按原结论回显" };
        }));
      }
      if (!task.exempt && ["已通过", "已退回"].includes(task.status) && !task.approvalReview) {
        const legacyScores = task.scoreReview?.scores || {};
        const scoreDetails = ruleSnapshot.scoreItems.map((item) => ({
          itemId: item.id,
          itemName: item.name,
          maxScore: item.maxScore,
          score: Number.isFinite(Number(legacyScores[item.id])) ? Number(legacyScores[item.id]) : task.status === "已通过" ? Math.round(item.maxScore * 0.85) : Math.round(item.maxScore * 0.6),
          note: "历史审批评分"
        }));
        task.approvalReview = {
          status: task.status,
          reviewer: task.reviewer || task.scoreReview?.reviewer || task.admissionReview?.reviewer || "产品库管理员",
          reviewedAt: task.reviewedAt || task.scoreReview?.reviewedAt || task.admissionReview?.reviewedAt || "—",
          opinion: task.opinion || task.scoreReview?.opinion || task.admissionReview?.opinion || "历史审批记录",
          checkResults,
          scores: scoreDetails,
          total: scoreDetails.reduce((sum, item) => sum + item.score, 0),
          originalStatus
        };
      }
      if (task.status === "待审核") {
        task.reviewer = "";
        task.reviewedAt = "";
        task.opinion = "";
        task.approvalReview = null;
      }
      if (task.status === "已通过" && task.tagStatus === "生效中" && !task.lifecycleHistory.length) {
        task.lifecycleHistory.push({
          type: "入库生效",
          at: task.approvalReview?.reviewedAt || task.reviewedAt || task.appliedAt || "—",
          operator: task.approvalReview?.reviewer || task.reviewer || "产品库管理员",
          reason: task.approvalReview?.opinion || task.opinion || "入库审批通过"
        });
      }
      // Migrate earlier demos where delisting did not return the effective application.
      if (task.tagStatus === "已下架" && task.status === "已通过") returnDelistedApplication(task);
      if (task.tagStatus === "已下架") product.tagWorkflowActive = true;
    });
  });
  return payload;
}

function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && saved.schemaVersion === INITIAL_DATA.schemaVersion) return normalizePrototypeData(saved);
  } catch (error) {
    console.warn("Prototype storage unavailable", error);
  }
  return normalizePrototypeData(clone(INITIAL_DATA));
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn("Prototype storage unavailable", error);
  }
}

function esc(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function getProduct(id = state.productId) {
  return data.products.find((item) => item.id === id) || data.products[0];
}

function nonScenarioProducts() {
  return data.products.filter((product) => !product.enterpriseScenarioOnly);
}

function getLibrary(id = state.libraryId) {
  return data.libraries.find((item) => item.id === id) || data.libraries[0];
}

function nowText() {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date()).replaceAll("/", "-");
}

function statusClass(status) {
  if (["已通过", "已上架", "启用", "可供", "初审通过", "评分通过", "已入库", "已满足", "生效中"].includes(status)) return "green";
  if (["已驳回", "审核驳回", "评分不通过", "需调整"].includes(status)) return "red";
  if (["待审核", "待审批", "待运营审核", "待初审", "待评分"].includes(status)) return "purple";
  if (["待上架", "部分通过", "已退回", "初审退回", "待补充"].includes(status)) return "orange";
  if (["草稿", "未提交", "已下架", "停供", "停用", "不适用"].includes(status)) return "gray";
  return "blue";
}

function statusTag(status) {
  const displayStatus = ["待初审", "待评分", "待审批"].includes(status) ? "待审核" : status;
  return `<span class="tag tag-${statusClass(displayStatus)}">${esc(displayStatus)}</span>`;
}

function libraryTag(id) {
  const library = data.libraries.find((item) => item.id === id);
  if (!library) return `<span class="tag tag-gray">已删除产品库 ${esc(id)}</span>`;
  return `<span class="tag tag-${esc(library.color)}">${esc(library.name)}</span>`;
}

function taskTagStatus(task) {
  if (!task) return "未生效";
  if (["生效中", "已下架"].includes(task.tagStatus)) return task.tagStatus;
  return task.status === "已通过" ? "生效中" : "未生效";
}

function tagLifecycleTag(task) {
  const lifecycle = taskTagStatus(task);
  const tone = lifecycle === "生效中" ? "green" : lifecycle === "已下架" ? "orange" : "gray";
  return `<span class="tag tag-${tone}">${esc(lifecycle)}</span>`;
}

function isActiveLibraryTag(task) {
  return Boolean(task) && task.status === "已通过" && taskTagStatus(task) === "生效中";
}

function activeLibraryIds(product) {
  return Object.keys(product.tags || {}).filter((id) => isActiveLibraryTag(product.tags[id]));
}

function latestLifecycleEvent(task, type = "") {
  const events = Array.isArray(task?.lifecycleHistory) ? task.lifecycleHistory : [];
  const matches = type ? events.filter((event) => event.type === type) : events;
  return matches[matches.length - 1] || null;
}

function latestApprovalStatus(task) {
  if (["已通过", "已退回"].includes(task?.status)) return task.status;
  const outcome = [...(task?.lifecycleHistory || [])].reverse().find((event) => ["入库生效", "审批退回", "标签下架"].includes(event.type));
  if (outcome) return outcome.type === "入库生效" ? "已通过" : "已退回";
  return taskTagStatus(task) === "已下架" ? "已退回" : "—";
}

function returnDelistedApplication(task) {
  const delist = latestLifecycleEvent(task, "标签下架");
  task.status = "已退回";
  task.reviewer = delist?.operator || task.delistedBy || "产品库管理员";
  task.reviewedAt = delist?.at || task.delistedAt || "—";
  task.opinion = delist?.reason || task.delistedReason || "标签已下架，请补充申报信息后重新申请。";
  task.approvalReview = { ...task.approvalReview, status: task.status, reviewer: task.reviewer, reviewedAt: task.reviewedAt, opinion: task.opinion };
}

function tagStateSummary(task) {
  const showLifecycle = taskTagStatus(task) !== "未生效";
  return `${statusTag(task.status)}${showLifecycle ? ` ${tagLifecycleTag(task)}` : ""}`;
}

function productGlyph(category) {
  const map = { "智能装备": "智", "绿色建材": "材", "部品部件": "构", "专业服务": "数" };
  return map[category] || "品";
}

function roleForRoute(route) {
  if (route.startsWith("enterprise") || route.startsWith("admin")) return "enterprise";
  if (route.startsWith("admission") || route.startsWith("score")) return "admin";
  if (route.startsWith("mall")) return "mall";
  return "operations";
}

function topbar(role = "enterprise") {
  const identities = {
    admin: [getLibrary().admins.find((admin) => admin.status === "启用")?.name || "产品库管理员", "产品库管理员"],
    operations: ["刘运营", "平台运营"],
    enterprise: ["幸建清", "企业账号"],
    mall: ["访客", "商城访客"]
  };
  const [user, identity] = identities[role] || identities.enterprise;
  return `
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark">智</div>
        <div class="brand-copy"><strong>湖北省智能建造<br>产业互联网平台</strong><span>智造链 · 优品</span></div>
      </div>
      <div class="top-search">
        <input class="top-search-input" value="${esc(state.mallKeyword)}" placeholder="请输入企业、商品、服务或商机名称">
        <button type="button" data-action="global-search">搜索</button>
      </div>
      <div class="user-zone"><span>消息通知</span><span class="sub">${identity}</span><div class="avatar">${esc(user.slice(0, 1))}</div><strong>${esc(user)}</strong></div>
    </header>`;
}

function sidebar(role, active) {
  let groups;
  if (role === "enterprise") {
    groups = [
      ["▦", "企业信息", ""], ["▣", "需求管理", ""], ["供", "供应管理", "enterprise-list"],
      ["商", "供应管理", "enterprise-list", true], ["库", "产品库管理", "admin-products"],
      ["审", "入库审批", "admin-list", true], ["商", "在库商品", "admin-products", true],
      ["用", "用户管理", ""], ["信", "消息通知", ""]
    ];
  } else if (role === "admin") {
    groups = [
      ["库", "产品库管理", "admin-products"], ["审", "入库审批", "admin-list", true],
      ["商", "在库商品", "admin-products", true],
      ["信", "消息通知", ""]
    ];
  } else {
    groups = [
      ["品", "品类管理", ""], ["需", "需求库", ""], ["供", "供应库", "ops-list"],
      ["审", "供应审核", "", true], ["列", "供应列表", "ops-list", true], ["库", "产品库管理", "library-config"],
      ["配", "产品库配置", "library-config", true],
      ["系", "系统配置", ""]
    ];
  }
  const captions = { admin: "产品库管理员工作台", operations: "运营工作台", enterprise: "企业工作台" };
  return `<aside class="sidebar"><div class="side-caption">${captions[role] || "企业工作台"}</div>${groups.map(([icon, label, route, sub]) => `
    <button type="button" class="side-item ${sub ? "side-sub" : ""} ${active === route && route ? "active" : ""}" ${route ? `data-action="navigate" data-route="${route}"` : `data-action="placeholder"`}>
      ${sub ? "" : `<span class="side-icon">${icon}</span>`}<span>${label}</span>
    </button>`).join("")}</aside>`;
}

function shell(content, role, active) {
  return `${topbar(role)}<div class="layout">${sidebar(role, active)}<main class="main">${content}</main></div>`;
}

function pageHead(title, breadcrumb, actions = "") {
  return `<div class="page-head"><div><h1>${esc(title)}</h1><div class="breadcrumb">${esc(breadcrumb)}</div></div><div class="actions">${actions}</div></div>`;
}

function pager(count, pageSize = 10) {
  return `<div class="pagination"><span>共 ${count} 条</span><button type="button" disabled>‹</button><button type="button" class="current">1</button><button type="button" disabled>›</button><select><option ${pageSize === 10 ? "selected" : ""}>10 条/页</option><option ${pageSize === 20 ? "selected" : ""}>20 条/页</option></select></div>`;
}

function route() {
  return (location.hash || "#enterprise-list").slice(1);
}

function navigate(nextRoute) {
  closeModal();
  closeSwitcher();
  if (route() === nextRoute) render();
  else location.hash = nextRoute;
}

function toast(message) {
  const element = document.getElementById("toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => element.classList.remove("show"), 2100);
}

function openModal(title, body, footer = "") {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalBody").innerHTML = body;
  document.getElementById("modalFoot").innerHTML = footer || `<button type="button" class="btn" data-action="close-modal">关闭</button>`;
  const mask = document.getElementById("modalMask");
  mask.classList.add("open");
  mask.setAttribute("aria-hidden", "false");
}

function closeModal() {
  if (state.tagApplicationModal?.isNewSelection) {
    const libraryId = state.tagApplicationModal.libraryId;
    state.formTags = state.formTags.filter((id) => id !== libraryId);
    delete state.tagApplicationDrafts[libraryId];
    const checkbox = [...document.querySelectorAll('input[name="library"]')].find((input) => input.value === libraryId);
    if (checkbox) {
      checkbox.checked = false;
      checkbox.closest(".check-card")?.classList.remove("selected");
    }
    const trigger = [...document.querySelectorAll('[data-action="open-tag-application"]')].find((button) => button.dataset.libraryId === libraryId);
    if (trigger) {
      trigger.disabled = false;
      trigger.textContent = "填写申报信息";
    }
  }
  state.tagApplicationModal = null;
  state.approvalAssigneeDraft = null;
  const mask = document.getElementById("modalMask");
  if (!mask) return;
  mask.classList.remove("open");
  mask.setAttribute("aria-hidden", "true");
}

function closeSwitcher() {
  const panel = document.getElementById("switcherPanel");
  if (!panel) return;
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  const trigger = document.querySelector(".switcher-trigger");
  if (trigger) trigger.setAttribute("aria-expanded", "false");
}

function renderSwitcher() {
  const panel = document.getElementById("switcherPanel");
  if (!panel) return;
  const current = route();
  const pageHtml = PAGE_GROUPS.map((group) => `<section class="switcher-section"><h3>${group.title}</h3>${group.pages.map(([id, label]) => `<button type="button" class="switcher-link ${id === current ? "active" : ""}" data-action="navigate" data-route="${id}">${label}</button>`).join("")}</section>`).join("");
  const scenarioHtml = `
    <section class="switcher-section">
      <h3>关键验收场景</h3>
      <button type="button" class="switcher-link" data-action="scenario" data-scenario="ordinary">运营供应列表 → 商品详情</button>
      <button type="button" class="switcher-link" data-action="scenario" data-scenario="entry-config">产品库 → 入库审批配置</button>
      <button type="button" class="switcher-link" data-action="scenario" data-scenario="multi-a">优品 A → 一次入库审批</button>
      <button type="button" class="switcher-link" data-action="scenario" data-scenario="multi-b">多标签 → 审批 B</button>
      <button type="button" class="switcher-link" data-action="scenario" data-scenario="partial">商品已上架、A不通过、B通过</button>
      <button type="button" class="switcher-link" data-action="scenario" data-scenario="listed">已上架 → 标签管理</button>
      <button type="button" class="switcher-link" data-action="scenario" data-scenario="existing">存量商品 → 补充材料重申请</button>
    </section>
    <section class="switcher-section"><button type="button" class="switcher-link" data-action="reset-prototype">↺ 恢复初始演示数据</button></section>`;
  panel.innerHTML = pageHtml + scenarioHtml;
}

function renderMall() {
  const enabledLibraries = data.libraries.filter((library) => library.status === "启用").sort((a, b) => a.sort - b.sort);
  const available = nonScenarioProducts().filter((product) => product.status === "已上架" && product.supplyStatus === "可供");
  const keyword = state.mallKeyword.trim().toLowerCase();
  const filtered = available.filter((product) => {
    const passedIds = activeLibraryIds(product);
    const tagMatches = state.mallFilter === "all" || (state.mallFilter === "none" && passedIds.length === 0) || passedIds.includes(state.mallFilter);
    const keywordMatches = !keyword || `${product.name}${product.company}${product.category}`.toLowerCase().includes(keyword);
    return tagMatches && keywordMatches;
  });
  const chips = [
    ["all", "全部商品"], ["none", "普通商品"], ...enabledLibraries.map((library) => [library.id, library.name])
  ].map(([id, label]) => `<button type="button" class="chip ${state.mallFilter === id ? "active" : ""}" data-action="mall-filter" data-filter="${id}">${esc(label)}</button>`).join("");
  const cards = filtered.map((product) => {
    const labels = activeLibraryIds(product).map(libraryTag).join("");
    return `<article class="product-card">
      <div class="card-image"><div class="card-glyph">${productGlyph(product.category)}</div></div>
      <div class="card-title">${esc(product.name)}</div>
      ${labels ? `<div class="card-labels">${labels}</div>` : ""}
      <div class="sub">供方：${esc(product.company)}</div>
      <div class="sub">品类：${esc(product.category)}　可供地区：${esc(product.regions)}</div>
      <div class="card-price">${product.price === "面议" ? "价格面议" : `￥${esc(product.price)} / ${esc(product.unit)}`}</div>
      <button type="button" class="btn btn-link" data-action="open-product" data-id="${product.id}" data-route="mall-detail">查看详情 →</button>
    </article>`;
  }).join("") || `<div class="section" style="grid-column:1/-1"><div class="empty-cell">没有符合当前条件的可供商品</div></div>`;
  return `<div class="mall-shell">${topbar("mall")}
    <nav class="mall-nav"><span>首页</span><span class="active">智建商城</span><span>招标信息</span><span>金融服务</span><span>建筑科技</span><span>品牌专区</span><span>政策资讯</span></nav>
    <main class="mall-main">
      <div class="mall-filter">
        <div class="filter-row"><strong>产品库标签：</strong>${chips}</div>
        <div class="filter-row"><strong>排序：</strong><button type="button" class="chip active">综合</button><button type="button" class="chip" data-action="placeholder">销量 ↓</button><button type="button" class="chip" data-action="placeholder">价格 ↓</button><span class="result-note">同一商品仅展示一次 · 共 ${filtered.length} 件 · 仅展示已审批生效标签</span></div>
      </div>
      <section class="product-grid">${cards}</section>
    </main>
  </div>`;
}

function renderMallDetail() {
  const requested = getProduct();
  const product = requested.status === "已上架" && requested.supplyStatus === "可供"
    ? requested
    : nonScenarioProducts().find((item) => item.status === "已上架" && item.supplyStatus === "可供") || requested;
  state.productId = product.id;
  const approvedLibraryIds = activeLibraryIds(product);
  const labels = approvedLibraryIds.map(libraryTag).join("") || statusTag("普通商品");
  return `<div class="mall-shell">${topbar("mall")}
    <nav class="mall-nav"><span>首页</span><span class="active">智建商城</span><span>招标信息</span><span>金融服务</span><span>建筑科技</span><span>品牌专区</span><span>政策资讯</span></nav>
    <main class="mall-detail">
      ${pageHead("商品详情", "智建商城 / 商品详情", `<button type="button" class="btn" data-action="navigate" data-route="mall">返回商城</button>`)}
      <div class="detail-hero">
        <div class="product-visual"><div class="product-glyph">${productGlyph(product.category)}</div></div>
        <div><h1 class="product-title">${esc(product.name)}</h1><div class="product-title-labels">${labels}</div><p>${esc(product.summary)}</p>
          <div class="price">${product.price === "面议" ? "面议" : `￥${esc(product.price)}`} <small>/ ${esc(product.unit)}</small></div>
          <dl class="kv-grid"><div class="kv"><dt>品类</dt><dd>${esc(product.category)}</dd></div><div class="kv"><dt>供方</dt><dd>${esc(product.company)}</dd></div><div class="kv"><dt>可供地区</dt><dd>${esc(product.regions)}</dd></div><div class="kv"><dt>产品产地</dt><dd>${esc(product.origin)}</dd></div><div class="kv"><dt>供货状态</dt><dd>${statusTag(product.supplyStatus)}</dd></div><div class="kv"><dt>产品来源</dt><dd>${esc(product.source)}</dd></div></dl>
          <div class="actions" style="margin-top:20px"><button type="button" class="btn btn-primary" data-action="contact-supplier">联系供应商</button></div>
        </div>
      </div>
      <section class="section"><div class="section-title"><span>产品说明</span></div><div class="section-body"><p>${esc(product.summary)}</p><p><strong>主要性能：</strong>${esc(product.performance)}</p><p><strong>执行标准：</strong>${esc(product.standard)}</p><p><strong>核心优势：</strong>${esc(product.advantage)}</p></div></section>
      <section class="section"><div class="section-title"><span>规格型号</span></div><div class="section-body">${product.skus.map((sku) => `<div class="audit-card"><strong>${esc(sku.model)}</strong><div class="audit-meta"><span>参考价：${esc(sku.price)}</span><span>供货状态：${esc(sku.supplyStatus)}</span><span>单位：${esc(product.unit)}</span></div></div>`).join("")}</div></section>
    </main>
  </div>`;
}

function enterpriseFilteredProducts() {
  const filters = state.enterpriseFilters;
  return data.products.filter((product) => {
    if (!product.enterpriseScenarioOnly && !product.userCreated && !product.tagWorkflowActive) return false;
    const keywordMatch = !filters.keyword || `${product.name}${product.id}`.toLowerCase().includes(filters.keyword.toLowerCase());
    const categoryMatch = filters.category === "all" || product.category === filters.category;
    const supplyStatusMatch = filters.supplyStatus === "all" || product.supplyStatus === filters.supplyStatus;
    const reviewStatusMatch = filters.reviewStatus === "all" || supplyReviewStatus(product) === filters.reviewStatus;
    const regionMatch = filters.region === "all" || product.regions.includes(filters.region) || product.regions.includes("全国");
    const overseasMatch = filters.overseas === "all";
    const tradeModeMatch = filters.tradeMode === "all" || supplyTradeMode(product) === filters.tradeMode;
    const availabilityMatch = filters.availability === "all" || filters.availability === "长期";
    const tagIds = Object.keys(product.tags);
    const libraryMatch = filters.library === "all" || (filters.library === "none" ? tagIds.length === 0 : tagIds.includes(filters.library));
    return keywordMatch && categoryMatch && supplyStatusMatch && reviewStatusMatch && regionMatch && overseasMatch && tradeModeMatch && availabilityMatch && libraryMatch;
  }).sort((a, b) => (a.enterpriseScenarioOrder || 999) - (b.enterpriseScenarioOrder || 999));
}

function supplyReviewStatus(product) {
  return { "未提交": "草稿", "待运营审核": "待审核", "已通过": "审核通过", "已驳回": "审核拒绝" }[product.normalStatus] || product.normalStatus;
}

function supplyTradeMode(product) {
  return product.category === "专业服务" || product.price === "面议" ? "联系交易" : "在线交易";
}

function supplyFilterChoices(field, options) {
  const current = state.enterpriseFilters[field];
  return `<div class="supply-filter-options">${options.map((option) => {
    const [value, label] = Array.isArray(option) ? option : [option, option];
    return `<button type="button" class="supply-filter-chip ${current === value ? "active" : ""}" data-action="enterprise-condition" data-field="${field}" data-value="${esc(value)}">${esc(label)}</button>`;
  }).join("")}</div>`;
}

function supplyFilterSummary() {
  const filters = state.enterpriseFilters;
  const libraryName = filters.library === "all" ? "全部" : filters.library === "none" ? "普通商品" : getLibrary(filters.library)?.name || filters.library;
  const values = [
    ["状态", filters.supplyStatus],
    ["审核状态", filters.reviewStatus],
    ["可供地区", filters.region],
    ["海外地区", filters.overseas],
    ["交易方式", filters.tradeMode],
    ["产品库标签", libraryName]
  ];
  return values.map(([label, value]) => `<span>${esc(label)}：${value === "all" ? "全部" : esc(value)}</span>`).join("");
}

function canRequestLibraryTag(product, library) {
  if (!library || library.status !== "启用") return false;
  const task = product.tags[library.id];
  if (!task) return true;
  if (task.status === "已退回") return true;
  return taskTagStatus(task) === "已下架" && task.status !== "待审核";
}

function canManageLibraryTags(product) {
  return Boolean(product) && supplyReviewStatus(product) !== "草稿";
}

function requestableLibraries(product) {
  return data.libraries
    .filter((library) => canRequestLibraryTag(product, library))
    .sort((a, b) => a.sort - b.sort);
}

function enterpriseRows(products) {
  return products.map((product) => {
    const labels = Object.keys(product.tags).map((id) => {
      const task = product.tags[id];
      return `${libraryTag(id)} ${statusTag(task.status)}`;
    }).join("<br>") || `<span class="tag tag-gray">普通商品</span>`;
    let actions = `<button type="button" class="btn btn-link" data-action="edit-product" data-id="${product.id}">编辑</button><button type="button" class="btn btn-link danger-link" data-action="delete-product" data-id="${product.id}">删除</button>`;
    if (canManageLibraryTags(product)) actions += `<button type="button" class="btn btn-link" data-action="manage-tags" data-id="${product.id}">标签管理</button>`;
    return `<tr><td class="supply-select-cell"><input type="checkbox" aria-label="选择${esc(product.name)}"></td><td><a data-action="open-product" data-id="${product.id}" data-route="enterprise-detail">${esc(product.name)}</a><div class="sub">${product.id}</div></td><td>${esc(product.category)}</td><td>长期</td><td class="wrap">${esc(product.regions)}</td><td>${esc(supplyReviewStatus(product))}</td><td>${esc(product.supplyStatus)}</td><td>${esc(supplyTradeMode(product))}</td><td class="wrap supply-library-cell">${labels}</td><td class="supply-operation-cell">${actions}</td></tr>`;
  }).join("") || `<tr><td colspan="10" class="empty-cell">没有符合筛选条件的供应信息</td></tr>`;
}

function renderEnterpriseList() {
  const products = enterpriseFilteredProducts();
  const categories = [...new Set(data.products.filter((product) => product.enterpriseScenarioOnly || product.userCreated).map((product) => product.category))];
  const actions = `<button type="button" class="btn" data-action="placeholder">⇩ 导入</button><button type="button" class="btn" data-action="export">⇧ 导出</button><button type="button" class="btn" disabled>批量删除</button><button type="button" class="btn btn-primary" data-action="new-product">＋ 新增</button>`;
  const categoryTree = categories.map((category) => `<button type="button" class="supply-tree-node ${state.enterpriseFilters.category === category ? "active" : ""}" data-action="enterprise-category" data-value="${esc(category)}"><span>›</span><i>□</i>${esc(category)}</button>`).join("");
  const libraryChoices = [["all", "全部"], ["none", "普通商品"], ...data.libraries.map((library) => [library.id, library.name])];
  const filters = `<div class="supply-search-row"><div class="supply-name-search"><input id="enterpriseKeyword" value="${esc(state.enterpriseFilters.keyword)}" placeholder="请输入供应名称"><button type="button" data-action="enterprise-search" aria-label="查询">⌕</button></div><span>高级查询⌄</span></div>
    <div class="supply-advanced-filter">
      <div class="supply-condition-summary"><strong>查询条件 ›</strong>${supplyFilterSummary()}<button type="button" data-action="enterprise-reset">↻ 重置方案</button></div>
      <div class="supply-filter-row"><strong>状态</strong>${supplyFilterChoices("supplyStatus", [["all", "全部"], "可供", "停供"])}</div>
      <div class="supply-filter-row"><strong>审核状态</strong>${supplyFilterChoices("reviewStatus", [["all", "全部"], "草稿", "待审核", "审核通过", "审核拒绝"])}</div>
      <div class="supply-filter-row"><strong>可供地区</strong>${supplyFilterChoices("region", [["all", "全部"], "北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州"])}</div>
      <div class="supply-filter-row"><strong>海外地区</strong>${supplyFilterChoices("overseas", [["all", "全部"], "韩国", "日本", "马来西亚", "印度", "巴基斯坦", "泰国", "越南", "新加坡"])}</div>
      <div class="supply-filter-row"><strong>交易方式</strong>${supplyFilterChoices("tradeMode", [["all", "全部"], "在线交易", "联系交易"])}</div>
      <div class="supply-filter-row"><strong>可供时间</strong>${supplyFilterChoices("availability", [["all", "全部"], "长期"])}<div class="supply-date-range"><input type="date" aria-label="可供开始时间"><span>–</span><input type="date" aria-label="可供结束时间"></div></div>
      <div class="supply-filter-row"><strong>产品库标签</strong>${supplyFilterChoices("library", libraryChoices)}</div>
    </div>`;
  const table = `<div class="table-wrap supply-table-wrap"><table class="data-table supply-list-table"><thead><tr><th class="supply-select-cell"><input type="checkbox" aria-label="全选"></th><th>供应名称</th><th>品类</th><th>可供时间</th><th>可供地区</th><th>审核状态</th><th>状态</th><th>交易方式</th><th class="wrap">产品库标签 / 审批状态</th><th>操作</th></tr></thead><tbody>${enterpriseRows(products)}</tbody></table>${pager(products.length, 20)}</div>`;
  return shell(`<section class="page supply-manager-page">${pageHead("供应管理", "供应管理", actions)}<div class="supply-workspace"><aside class="supply-category-panel"><div class="supply-category-search"><input placeholder="请输入搜索关键字"><button type="button" data-action="placeholder">⌕</button><button type="button" data-action="placeholder">更多⌄</button></div><button type="button" class="supply-tree-root ${state.enterpriseFilters.category === "all" ? "active" : ""}" data-action="enterprise-category" data-value="all"><span>▾</span><i>▣</i>商品</button><div class="supply-tree-children">${categoryTree}<button type="button" class="supply-tree-node" data-action="placeholder"><span>›</span><i>□</i>其他项目</button></div></aside><div class="supply-list-main">${filters}${table}</div></div></section>`, "enterprise", "enterprise-list");
}

function applicationFieldTypeLabel(type) {
  return { single: "单选", multiple: "多选", richtext: "富文本", attachment: "附件" }[type] || type;
}

function taskApplicationFields(library, task = null) {
  return normalizeApplicationFields(task?.applicationFields || library.applicationFields, library.id);
}

function taskApplicationValue(task, field) {
  if (task?.applicationData && Object.prototype.hasOwnProperty.call(task.applicationData, field.id)) return task.applicationData[field.id];
  return legacyApplicationData(task || {}, [field])[field.id];
}

function renderApplicationFieldInput(library, field, task = null) {
  const value = taskApplicationValue(task, field);
  const base = `application_${library.id}_${field.id}`;
  const required = field.required ? "required" : "";
  let control = "";
  if (field.type === "single") {
    control = `<select id="${base}" class="application-field-input" data-library-id="${library.id}" data-field-id="${field.id}" data-field-type="single"><option value="">请选择</option>${field.options.map((option) => `<option value="${esc(option)}" ${value === option ? "selected" : ""}>${esc(option)}</option>`).join("")}</select>`;
  } else if (field.type === "multiple") {
    const selected = Array.isArray(value) ? value : [];
    control = `<div class="application-choice-grid" id="${base}">${field.options.map((option) => `<label><input type="checkbox" class="application-field-input" data-library-id="${library.id}" data-field-id="${field.id}" data-field-type="multiple" value="${esc(option)}" ${selected.includes(option) ? "checked" : ""}>${esc(option)}</label>`).join("") || `<span class="sub">该字段尚未配置选项</span>`}</div>`;
  } else if (field.type === "attachment") {
    const files = Array.isArray(value) ? value : [];
    const filename = `${field.name || "附件"}.pdf`;
    control = `<button type="button" id="${base}" class="upload-box compact application-upload" data-action="mock-upload" data-application-upload="true" data-library-id="${library.id}" data-field-id="${field.id}" data-field-type="attachment" data-filename="${esc(filename)}" data-files="${esc(files.join("||"))}">${files.length ? `<span class="upload-file-list">${files.map((file) => `<span class="tag tag-green">✓ ${esc(file)}</span>`).join("")}</span><span class="hint">点击继续上传（原型模拟）</span>` : `＋ 上传${esc(field.name)}<br><span class="hint">PDF / JPG / PNG，单个不超过 10MB</span>`}</button>`;
  } else {
    control = `<div class="rich-text-field"><div class="rich-text-toolbar" aria-hidden="true"><span>B</span><span>I</span><span>• 列表</span><span>↗ 链接</span></div><textarea id="${base}" class="application-field-input" data-library-id="${library.id}" data-field-id="${field.id}" data-field-type="richtext" placeholder="请输入${esc(field.name)}">${esc(value || "")}</textarea></div>`;
  }
  return `<div class="field application-dynamic-field"><label class="${required}">${esc(field.name)} <span class="field-type-mark">${applicationFieldTypeLabel(field.type)}</span></label>${control}</div>`;
}

function applicationSummaryRows(library, task) {
  const fields = taskApplicationFields(library, task);
  return fields.map((field) => {
    const value = taskApplicationValue(task, field);
    let content = "—";
    if (field.type === "attachment") {
      const files = Array.isArray(value) ? value : [];
      content = files.length ? `<div class="actions">${files.map((file) => `<button type="button" class="btn btn-sm" data-action="open-file" data-file="${esc(file)}">${esc(file)}</button>`).join("")}</div>` : `<span class="sub">未上传</span>`;
    } else if (Array.isArray(value)) {
      content = value.length ? value.map((item) => `<span class="tag tag-blue">${esc(item)}</span>`).join(" ") : "—";
    } else if (value) {
      content = field.type === "richtext" ? esc(value).replace(/\n/g, "<br>") : esc(value);
    }
    return `<div class="application-summary-row"><dt>${esc(field.name)}<span>${applicationFieldTypeLabel(field.type)}</span></dt><dd>${content}</dd></div>`;
  }).join("") || `<div class="empty-cell">该产品库未配置企业申报字段</div>`;
}

function renderApplicationSubmission(library, task, title = "企业申报字段") {
  return `<section class="section flush application-submission"><div class="section-title"><span>${esc(title)}</span><span class="sub">按提交时字段快照展示</span></div><div class="section-body"><dl class="application-summary">${applicationSummaryRows(library, task)}</dl></div></section>`;
}

function buildTagApplicationDraft(library, task = null, emptyInitial = false) {
  const fields = normalizeApplicationFields(library.applicationFields, library.id).filter((field) => field.status === "启用");
  const values = {};
  fields.forEach((field) => {
    const current = !task && emptyInitial ? undefined : taskApplicationValue(task, field);
    if (current === undefined || current === null) values[field.id] = ["multiple", "attachment"].includes(field.type) ? [] : "";
    else values[field.id] = clone(current);
  });
  return { fields: clone(fields), values };
}

function ensureTagApplicationDraft(libraryId, emptyInitial = false) {
  if (!state.tagApplicationDrafts[libraryId]) {
    const library = getLibrary(libraryId);
    state.tagApplicationDrafts[libraryId] = buildTagApplicationDraft(library, getProduct().tags[libraryId] || null, emptyInitial);
  }
  return state.tagApplicationDrafts[libraryId];
}

function openTagApplicationModal(libraryId, isNewSelection = false) {
  if (route() !== "ops-supply-form") return toast("请从供应管理列表进入标签管理");
  const library = getLibrary(libraryId);
  const draft = ensureTagApplicationDraft(libraryId);
  const task = { applicationFields: draft.fields, applicationData: draft.values };
  const content = draft.fields.map((field) => renderApplicationFieldInput(library, field, task)).join("") || `<div class="empty-cell">该产品库尚未配置申报字段</div>`;
  state.tagApplicationModal = { libraryId, isNewSelection };
  openModal(`填写${library.name}申报信息`, `<div class="tag-application-intro"><strong>${esc(library.name)}</strong><p>${esc(library.description)}</p></div><div class="application-field-stack tag-application-fields">${content}</div>`, `<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-primary" data-action="confirm-tag-application">保存申报信息</button>`);
}

function openTagApplicationFromButton(libraryId) {
  const checkbox = [...document.querySelectorAll('[data-action="toggle-library-application"]')].find((input) => input.value === libraryId);
  const isNewSelection = Boolean(checkbox && !checkbox.checked);
  if (isNewSelection) {
    checkbox.checked = true;
    checkbox.closest(".check-card")?.classList.add("selected");
    if (!state.formTags.includes(libraryId)) state.formTags.push(libraryId);
  }
  openTagApplicationModal(libraryId, isNewSelection);
}

function collectTagApplicationModal(validate = true) {
  const modalState = state.tagApplicationModal;
  if (!modalState || modalState.readOnly) return false;
  const library = getLibrary(modalState.libraryId);
  const draft = ensureTagApplicationDraft(library.id);
  const values = {};
  for (const field of draft.fields) {
    if (field.type === "multiple") {
      values[field.id] = [...document.querySelectorAll(".application-field-input")]
        .filter((input) => input.dataset.libraryId === library.id && input.dataset.fieldId === field.id && input.checked)
        .map((input) => input.value);
    } else if (field.type === "attachment") {
      values[field.id] = (document.getElementById(`application_${library.id}_${field.id}`)?.dataset.files || "").split("||").filter(Boolean);
    } else {
      values[field.id] = document.getElementById(`application_${library.id}_${field.id}`)?.value.trim() || "";
    }
    const empty = Array.isArray(values[field.id]) ? !values[field.id].length : !values[field.id];
    if (validate && field.required && empty) {
      toast(`请填写“${field.name}”`);
      document.getElementById(`application_${library.id}_${field.id}`)?.focus();
      return false;
    }
  }
  draft.values = values;
  return true;
}

function confirmTagApplicationModal() {
  if (!collectTagApplicationModal()) return;
  const libraryId = state.tagApplicationModal.libraryId;
  state.tagApplicationModal = null;
  closeModal();
  const trigger = [...document.querySelectorAll('[data-action="open-tag-application"]')].find((button) => button.dataset.libraryId === libraryId);
  if (trigger) {
    trigger.disabled = false;
    trigger.textContent = "修改申报信息";
  }
  toast("申报信息已保存");
}

function tagManagementNotices(task) {
  if (!task) return "";
  const review = task.approvalReview;
  const returned = task.status === "已退回" ? `<div class="library-return-notice"><div class="library-return-head"><strong>退回原因</strong></div><div class="library-return-reason"><p>${esc(review?.opinion || task.opinion || "—")}</p></div><div class="library-return-meta"><span>退回时间：${esc(review?.reviewedAt || task.reviewedAt || "—")}</span><span>审批人：${esc(review?.reviewer || task.reviewer || "—")}</span></div></div>` : "";
  const delist = latestLifecycleEvent(task, "标签下架");
  const delisted = taskTagStatus(task) === "已下架" ? `<div class="library-return-notice library-delist-notice"><div class="library-return-head"><strong>下架原因</strong></div><div class="library-return-reason"><p>${esc(delist?.reason || task.delistedReason || "—")}</p></div><div class="library-return-meta"><span>下架时间：${esc(delist?.at || task.delistedAt || "—")}</span><span>操作人：${esc(delist?.operator || task.delistedBy || "—")}</span></div></div>` : "";
  return returned + delisted;
}

function renderProductTagsReadonly(product) {
  const libraries = data.libraries.filter((library) => product.tags[library.id]).sort((a, b) => a.sort - b.sort);
  if (!libraries.length) return `<div class="empty-cell tag-readonly-empty">暂无产品库标签</div>`;
  return libraries.map((library) => {
    const task = product.tags[library.id];
    return `<section class="readonly-product-library"><div class="actions">${libraryTag(library.id)} ${statusTag(task.status)} ${taskTagStatus(task) === "已下架" ? tagLifecycleTag(task) : ""}</div></section>`;
  }).join("");
}

function openTagManagementModal(product, preferredLibraryId = "", resetDrafts = true) {
  if (!canManageLibraryTags(product)) return toast("草稿不能进行标签管理，请先提交供应审核");
  if (resetDrafts) state.tagApplicationDrafts = {};
  else if (state.tagApplicationModal?.source === "list" && !state.tagApplicationModal.readOnly) collectTagApplicationModal(false);
  const existing = data.libraries.filter((library) => product.tags[library.id]).sort((a, b) => a.sort - b.sort);
  const available = requestableLibraries(product).filter((library) => !product.tags[library.id]);
  const libraries = [...existing, ...available];
  const library = libraries.find((item) => item.id === preferredLibraryId) || existing[0] || null;
  const task = library ? product.tags[library.id] || null : null;
  const editable = Boolean(library && canRequestLibraryTag(product, library));
  state.productId = product.id;
  const option = (item) => {
    const current = product.tags[item.id];
    return `<button type="button" class="tag-manager-option ${item.id === library?.id ? "active" : ""}" data-action="choose-managed-library" data-id="${item.id}" aria-pressed="${item.id === library?.id}"><strong>${esc(item.name)}</strong><span>${current ? statusTag(current.status) : `<span class="sub">未申请</span>`}${current && taskTagStatus(current) === "已下架" ? tagLifecycleTag(current) : ""}${item.status === "停用" ? statusTag("停用") : ""}</span></button>`;
  };
  const options = `${existing.length ? `<div class="tag-manager-group">已有标签</div>${existing.map(option).join("")}` : ""}${available.length ? `<div class="tag-manager-group">可申请产品库</div>${available.map(option).join("")}` : ""}`;
  let content = `<div class="empty-cell tag-manager-empty">${libraries.length ? "请选择左侧产品库" : "暂无产品库标签，也没有可申请的产品库"}</div>`;
  if (library) {
    let fields;
    if (editable) {
      const draft = ensureTagApplicationDraft(library.id, true);
      fields = `<div class="application-field-stack tag-application-fields">${draft.fields.map((field) => renderApplicationFieldInput(library, field, { applicationFields: draft.fields, applicationData: draft.values })).join("") || `<p class="sub">该产品库无需填写申报信息</p>`}</div>`;
    } else fields = `<dl class="application-summary">${applicationSummaryRows(library, task)}</dl>`;
    content = `<div class="tag-manager-heading"><h3>${esc(library.name)}</h3></div>${library.description ? `<p class="tag-manager-description">${esc(library.description)}</p>` : ""}${tagManagementNotices(task)}${fields}`;
  }
  state.tagApplicationModal = { libraryId: library?.id || "", isNewSelection: false, source: "list", productId: product.id, readOnly: !editable };
  const footer = `<button type="button" class="btn" data-action="close-modal">关闭</button>${editable ? `<button type="button" class="btn btn-primary" data-action="submit-list-tag-application">${task ? "重新提交申请" : "提交标签申请"}</button>` : ""}`;
  openModal("标签管理", `<div class="tag-manager-product"><strong>${esc(product.name)}</strong></div><div class="tag-manager-layout"><nav class="tag-manager-nav" aria-label="产品库标签">${options || `<p class="sub">暂无产品库</p>`}</nav><div class="tag-manager-content">${content}</div></div>`, footer);
}

function submitListTagApplication() {
  const modalState = state.tagApplicationModal;
  if (!modalState || modalState.source !== "list" || modalState.readOnly) return;
  const product = getProduct(modalState.productId);
  const libraryId = modalState.libraryId;
  if (!canManageLibraryTags(product) || !canRequestLibraryTag(product, getLibrary(libraryId))) return toast("当前状态不允许提交标签申请");
  if (!collectTagApplicationModal()) return;
  const draft = ensureTagApplicationDraft(libraryId);
  applyFormToProduct(product, {
    submissionMode: "tag",
    selectedTags: [libraryId],
    tagApplications: { [libraryId]: { fields: clone(draft.fields), values: clone(draft.values) } }
  }, true);
  state.tagApplicationModal = null;
  state.tagApplicationDrafts = {};
  persist();
  closeModal();
  toast("已提交 1 个产品库标签审批单");
  render();
}

function applicationBlock(library, selected, task = null, forceLocked = false) {
  const approvalReturned = task?.status === "已退回";
  const tagDelisted = taskTagStatus(task) === "已下架";
  const reapplicationPending = tagDelisted && task?.status === "待审核";
  const reapplicable = Boolean(task) && (approvalReturned || (tagDelisted && !reapplicationPending));
  const lockedExisting = Boolean(task) && !reapplicable;
  const disabled = library.status !== "启用" || lockedExisting || forceLocked;
  const hasDraft = Boolean(state.tagApplicationDrafts[library.id]) || Boolean(selected && task && !lockedExisting);
  const review = task?.approvalReview;
  const delist = latestLifecycleEvent(task, "标签下架");
  const stateNotice = approvalReturned ? `<div class="library-return-notice">
      <div class="library-return-head">${statusTag("已退回")}<strong>申报已退回，请修改后重新提交</strong></div>
      <div class="library-return-reason"><span>退回原因</span><p>${esc(review?.opinion || task.opinion || "请根据审批要求补充申报信息")}</p></div>
      <div class="library-return-meta"><span>退回时间：${esc(review?.reviewedAt || task.reviewedAt || "—")}</span><span>审批人：${esc(review?.reviewer || task.reviewer || "—")}</span></div>
    </div>` : tagDelisted ? `<div class="library-return-notice library-delist-notice">
      <div class="library-return-head">${tagLifecycleTag(task)}<strong>${reapplicationPending ? "重新申请已提交，正在等待审核" : "产品库标签已下架，可重新申请"}</strong></div>
      <div class="library-return-reason"><span>下架原因</span><p>${esc(delist?.reason || task.delistedReason || "产品库管理员已下架该标签")}</p></div>
      <div class="library-return-meta"><span>下架时间：${esc(delist?.at || task.delistedAt || "—")}</span><span>操作人：${esc(delist?.operator || task.delistedBy || "—")}</span></div>
    </div>` : "";
  return `<div class="library-option">
    <div class="check-card ${selected ? "selected" : ""} ${reapplicable ? "has-return-info" : ""}">
      <label class="library-card-select"><input type="checkbox" name="library" value="${library.id}" ${selected ? "checked" : ""} ${disabled ? "disabled" : ""} data-action="toggle-library-application"><span class="library-card-copy"><span class="library-card-title"><strong>${esc(library.name)}</strong> ${libraryTag(library.id)} ${task ? statusTag(task.status) : ""}</span><span class="library-card-description">${esc(library.description)}</span></span></label>
      ${disabled ? "" : `<button type="button" class="btn btn-sm library-application-trigger" data-action="open-tag-application" data-library-id="${library.id}">${hasDraft ? "修改申报信息" : "填写申报信息"}</button>`}
      ${stateNotice}
    </div>
  </div>`;
}

function repeatRow(kind, values = {}, disabled = false) {
  const disabledAttr = disabled ? "disabled" : "";
  if (kind === "contact") return `<div class="repeat-row" data-kind="contact"><input class="contact-name" placeholder="联系人姓名" value="${esc(values.name || "")}" ${disabledAttr}><input class="contact-phone" placeholder="手机号" value="${esc(values.phone || "")}" ${disabledAttr}><input class="contact-extra" placeholder="邮箱 / 微信" value="${esc(values.extra || "")}" ${disabledAttr}><button type="button" class="btn btn-sm" data-action="remove-repeat" ${disabledAttr}>删除</button></div>`;
  if (kind === "case") return `<div class="repeat-row" data-kind="case"><input class="case-name" placeholder="项目名称" value="${esc(values.name || "")}" ${disabledAttr}><input class="case-description" placeholder="应用情况" value="${esc(values.description || "")}" ${disabledAttr}><input class="case-link" placeholder="案例图片 / 链接" value="${esc(values.link || "")}" ${disabledAttr}><button type="button" class="btn btn-sm" data-action="remove-repeat" ${disabledAttr}>删除</button></div>`;
  return `<div class="repeat-row" data-kind="sku"><input class="sku-model" placeholder="规格型号" value="${esc(values.model || "")}" ${disabledAttr}><input class="sku-price" placeholder="参考价（元）" value="${esc(values.price || "")}" ${disabledAttr}><select class="sku-supply" ${disabledAttr}><option ${values.supplyStatus === "可供" ? "selected" : ""}>可供</option><option ${values.supplyStatus !== "可供" ? "selected" : ""}>停供</option></select><button type="button" class="btn btn-sm" data-action="remove-repeat" ${disabledAttr}>删除</button></div>`;
}

function renderEnterpriseForm(viewRole = "enterprise") {
  const product = getProduct();
  const operationsView = viewRole === "operations";
  const listRoute = operationsView ? "ops-list" : "enterprise-list";
  const baseLocked = false;
  const selectedTags = state.formTags;
  const libraryOptions = operationsView ? data.libraries.slice().sort((a, b) => a.sort - b.sort).map((library) => applicationBlock(library, selectedTags.includes(library.id), product.tags[library.id] || null)).join("") : renderProductTagsReadonly(product);
  const contacts = product.contacts?.length ? product.contacts : [{ name: product.contact, phone: product.phone, extra: product.email }];
  const productImages = product.images || [];
  const certifications = product.certifications || [];
  const actions = `<button type="button" class="btn" data-action="navigate" data-route="${listRoute}">取消</button><button type="button" class="btn" data-action="preview-product">预览</button><button type="button" class="btn btn-primary" data-action="submit-product">${state.formMode === "edit" ? "提交" : "提交审核"}</button>`;
  return shell(`<section class="page form-page sticky-action-page">
    ${pageHead(state.formMode === "new" ? "供应管理-新增" : "供应管理-编辑", `${operationsView ? "供应列表" : "供应管理"} / ${state.formMode === "new" ? "新增商品" : "编辑商品"}`, actions)}
    <form id="productForm">
      <div class="form-section">
        <h2>基本信息</h2>
        <div class="form-grid">
          <div class="field"><label class="required">供应名称</label><input id="fName" name="name" value="${esc(product.name)}" ${baseLocked ? "disabled" : ""}></div>
          <div class="field"><label class="required">供应品类</label><select id="fCategory" name="category" ${baseLocked ? "disabled" : ""}>${[product.category, "智能装备", "绿色建材", "部品部件", "专业服务"].filter((value, index, list) => list.indexOf(value) === index).map((value) => `<option>${esc(value)}</option>`).join("")}</select></div>
          <div class="field"><label class="required">计量单位</label><input id="fUnit" name="unit" value="${esc(product.unit)}" ${baseLocked ? "disabled" : ""}></div>
          <div class="field"><label>国内可供地区</label><input id="fRegions" name="regions" value="${esc(product.regions)}" ${baseLocked ? "disabled" : ""}></div>
          <div class="field"><label>产品产地</label><input id="fOrigin" name="origin" value="${esc(product.origin)}" ${baseLocked ? "disabled" : ""}></div>
          <div class="field"><label class="required">参考价格</label><input id="fPrice" name="price" value="${esc(product.price)}" ${baseLocked ? "disabled" : ""}></div>
          <div class="field span-2"><label class="required">产品简介</label><textarea id="fSummary" name="summary" ${baseLocked ? "disabled" : ""}>${esc(product.summary)}</textarea></div>
          <div class="field"><label class="required">属性图片</label><button type="button" id="productImageUpload" class="upload-box" data-action="mock-upload" data-filename="商品主图.jpg" data-files="${esc(productImages.join("||"))}" ${baseLocked ? "disabled" : ""}>${productImages.length ? `<span class="upload-file-list">${productImages.map((file) => `<span class="tag tag-green">✓ ${esc(file)}</span>`).join("")}</span><span class="hint">点击继续上传（原型模拟）</span>` : `＋ 上传商品图片<br><span class="hint">PNG / JPG，最多 5 张</span>`}</button></div>
        </div>

        <h2>${operationsView ? "产品库标签申请" : "产品库标签"}</h2>
        <div class="${operationsView ? "check-grid" : "product-tags-readonly"}">${libraryOptions}</div>

        <h2>技术与市场信息</h2>
        <div class="form-grid">
          <div class="field"><label>产品别名</label><input id="fAliases" value="${esc(product.aliases)}" placeholder="多个别名用顿号分隔" ${baseLocked ? "disabled" : ""}></div>
          <div class="field"><label>产品分类标签</label><select id="fClassification" ${baseLocked ? "disabled" : ""}><option>${esc(product.classification)}</option><option>科技创新</option><option>绿色低碳</option><option>战新产业</option><option>成熟推广</option><option>首台套</option></select></div>
          <div class="field"><label>执行标准</label><input id="fStandard" value="${esc(product.standard)}" placeholder="国家 / 行业 / 企业标准" ${baseLocked ? "disabled" : ""}></div>
          <div class="field span-2"><label>规格参数与性能指标</label><textarea id="fPerformance" ${baseLocked ? "disabled" : ""}>${esc(product.performance)}</textarea></div>
          <div class="field"><label>产品认证</label><button type="button" id="productCertificationUpload" class="upload-box" data-action="mock-upload" data-filename="产品认证.pdf" data-files="${esc(certifications.join("||"))}" ${baseLocked ? "disabled" : ""}>${certifications.length ? `<span class="upload-file-list">${certifications.map((file) => `<span class="tag tag-green">✓ ${esc(file)}</span>`).join("")}</span><span class="hint">点击继续上传（原型模拟）</span>` : "＋ 上传认证材料"}</button></div>
          <div class="field span-all"><label>核心竞争优势、应用情况及推广前景</label><textarea id="fAdvantage" ${baseLocked ? "disabled" : ""}>${esc(product.advantage)}</textarea></div>
        </div>

        <h2>联系方式</h2>
        <div id="contactList" class="repeat-list">${contacts.map((item) => repeatRow("contact", item, baseLocked)).join("")}</div>
        ${baseLocked ? "" : `<div style="margin-top:9px"><button type="button" class="btn btn-sm" data-action="add-repeat" data-kind="contact" data-target="contactList">＋ 添加联系人（最多 2 个）</button></div>`}

        <h2>型号与价格</h2>
        <div id="skuList" class="repeat-list">${product.skus.map((item) => repeatRow("sku", item, baseLocked)).join("")}</div>
        ${baseLocked ? "" : `<div style="margin-top:9px"><button type="button" class="btn btn-sm" data-action="add-repeat" data-kind="sku" data-target="skuList">＋ 新增型号</button></div>`}

        <h2>典型案例</h2>
        <div id="caseList" class="repeat-list">${(product.cases.length ? product.cases : [{}]).map((item) => repeatRow("case", item, baseLocked)).join("")}</div>
        ${baseLocked ? "" : `<div style="margin-top:9px"><button type="button" class="btn btn-sm" data-action="add-repeat" data-kind="case" data-target="caseList">＋ 新增案例</button></div>`}
      </div>
    </form>
  </section>`, viewRole, listRoute);
}

const PRODUCT_FORM_FIELDS = ["name", "category", "unit", "regions", "origin", "price", "summary", "aliases", "classification", "standard", "performance", "advantage", "contact", "phone", "email", "contacts", "images", "certifications", "skus", "cases"];

function productFormHasChanges(product, formData) {
  return PRODUCT_FORM_FIELDS.some((field) => JSON.stringify(product[field] ?? null) !== JSON.stringify(formData[field] ?? null));
}

function collectProductForm() {
  const required = [
    ["fName", "请填写供应名称"], ["fCategory", "请选择供应品类"], ["fUnit", "请填写计量单位"],
    ["fPrice", "请填写参考价格"], ["fSummary", "请填写产品简介"]
  ];
  for (const [id, message] of required) {
    const element = document.getElementById(id);
    if (!element || !element.value.trim()) {
      toast(message);
      element?.focus();
      return null;
    }
  }
  const selectedTags = route() === "ops-supply-form" ? [...document.querySelectorAll('input[name="library"]:checked:not(:disabled)')].map((input) => input.value) : [];
  const tagApplications = {};
  for (const id of selectedTags) {
    const library = getLibrary(id);
    const draft = ensureTagApplicationDraft(id);
    const fields = draft.fields;
    const values = clone(draft.values);
    for (const field of fields) {
      const empty = Array.isArray(values[field.id]) ? !values[field.id].length : !values[field.id];
      if (field.required && empty) {
        toast(`请填写${library.name}的“${field.name}”`);
        openTagApplicationModal(id, false);
        return null;
      }
    }
    tagApplications[id] = { fields: clone(fields), values };
  }
  const contacts = [...document.querySelectorAll('#contactList [data-kind="contact"]')].map((row) => ({ name: row.querySelector(".contact-name").value.trim(), phone: row.querySelector(".contact-phone").value.trim(), extra: row.querySelector(".contact-extra").value.trim() })).filter((item) => item.name || item.phone || item.extra);
  if (!contacts.length || !contacts[0].name || !contacts[0].phone) {
    toast("请至少填写一位联系人及手机号");
    return null;
  }
  const skus = [...document.querySelectorAll('#skuList [data-kind="sku"]')].map((row) => ({ model: row.querySelector(".sku-model").value.trim(), price: row.querySelector(".sku-price").value.trim(), supplyStatus: row.querySelector(".sku-supply").value })).filter((item) => item.model);
  if (!skus.length) {
    toast("请至少填写一个规格型号");
    return null;
  }
  const cases = [...document.querySelectorAll('#caseList [data-kind="case"]')].map((row) => ({ name: row.querySelector(".case-name").value.trim(), description: row.querySelector(".case-description").value.trim(), link: row.querySelector(".case-link").value.trim() })).filter((item) => item.name || item.description || item.link);
  const formData = {
    name: document.getElementById("fName").value.trim(),
    category: document.getElementById("fCategory").value,
    unit: document.getElementById("fUnit").value.trim(),
    regions: document.getElementById("fRegions").value.trim(),
    origin: document.getElementById("fOrigin").value.trim(),
    price: document.getElementById("fPrice").value.trim(),
    summary: document.getElementById("fSummary").value.trim(),
    aliases: document.getElementById("fAliases").value.trim(),
    classification: document.getElementById("fClassification").value,
    standard: document.getElementById("fStandard").value.trim(),
    performance: document.getElementById("fPerformance").value.trim(),
    advantage: document.getElementById("fAdvantage").value.trim(),
    contact: contacts[0].name,
    phone: contacts[0].phone,
    email: contacts[0].extra,
    contacts,
    images: (document.getElementById("productImageUpload")?.dataset.files || "").split("||").filter(Boolean),
    certifications: (document.getElementById("productCertificationUpload")?.dataset.files || "").split("||").filter(Boolean),
    skus,
    cases,
    selectedTags,
    tagApplications,
    submissionMode: "product",
    keepListed: state.formMode === "edit" && getProduct().status === "已上架"
  };
  formData.baseChanged = state.formMode === "new" || (state.formMode === "edit" && productFormHasChanges(getProduct(), formData));
  return formData;
}

function admissionStatus(task) {
  if (task.admissionReview?.status) return task.admissionReview.status;
  if (["待初审", "初审退回"].includes(task.status)) return task.status;
  if (["待评分", "待补充", "评分不通过", "已通过"].includes(task.status)) return "初审通过";
  return "待初审";
}

function scoreStatus(task) {
  if (task.scoreReview?.status) return task.scoreReview.status;
  if (["待评分", "待补充", "评分不通过"].includes(task.status)) return task.status;
  if (task.status === "已通过") return "评分通过";
  return "未开始";
}

function flowState(status) {
  if (["初审通过", "评分通过", "已通过", "已上架"].includes(status)) return "done";
  if (["初审退回", "评分不通过", "已驳回", "审核驳回"].includes(status)) return "failed";
  return "pending";
}

function productApprovalSummary(product) {
  const reviewState = product.normalStatus === "待运营审核" ? "pending" : product.normalStatus === "已驳回" ? "failed" : product.normalStatus === "未提交" ? "pending" : "done";
  const mallState = product.status === "已上架" ? "done" : product.status === "审核驳回" ? "failed" : "pending";
  return `<div class="approval-flow"><div class="flow-node done"><strong>企业提交</strong><span>${esc(product.submittedAt)}</span></div><span class="flow-arrow">→</span><div class="flow-node ${reviewState}"><strong>运营上架审批</strong><span>${esc(product.normalStatus)}</span></div><span class="flow-arrow">→</span><div class="flow-node ${mallState}"><strong>商品状态</strong><span>${esc(product.status)}</span></div></div>`;
}

function renderEnterpriseDetail(viewRole = "enterprise") {
  const product = getProduct();
  const operationsView = viewRole === "operations";
  const listRoute = operationsView ? "ops-list" : "enterprise-list";
  const tagIds = Object.keys(product.tags);
  const tagRows = tagIds.map((id) => `<tr><td>${libraryTag(id)}</td><td>${statusTag(product.tags[id].status)}</td></tr>`).join("");
  const tagTable = tagRows ? `<div class="table-wrap detail-table-wrap"><table class="data-table compact-table"><thead><tr><th>产品库标签</th><th>审批状态</th></tr></thead><tbody>${tagRows}</tbody></table></div>` : `<div class="empty-cell">尚未申请产品库标签</div>`;
  const actions = `<button type="button" class="btn" data-action="navigate" data-route="${listRoute}">返回</button>`;
  return shell(`<section class="page sticky-action-page">${pageHead("商品详情", `${operationsView ? "供应列表" : "供应管理"} / 商品详情`, actions)}
    <section class="section"><div class="section-title"><span>商品基本信息</span></div><div class="section-body"><dl class="kv-grid"><div class="kv"><dt>商品名称</dt><dd>${esc(product.name)}</dd></div><div class="kv"><dt>供应企业</dt><dd>${esc(product.company)}</dd></div><div class="kv"><dt>商品状态</dt><dd>${statusTag(product.status)} ${statusTag(product.supplyStatus)}</dd></div><div class="kv"><dt>品类</dt><dd>${esc(product.category)}</dd></div><div class="kv"><dt>价格 / 单位</dt><dd>${esc(product.price)} / ${esc(product.unit)}</dd></div><div class="kv"><dt>产品来源</dt><dd>${esc(product.source)}</dd></div></dl></div></section>
    <section class="section"><div class="section-title"><span>产品库标签</span></div><div class="section-body">${tagTable}</div></section>
  </section>`, viewRole, listRoute);
}

function opsSupplyProducts() {
  return nonScenarioProducts();
}

function tagStatusOverview(product) {
  return Object.keys(product.tags).map((id) => `${libraryTag(id)} ${tagStateSummary(product.tags[id])}`).join(" ") || `<span class="tag tag-gray">未申请标签</span>`;
}

function opsSupplyTagOverview(product) {
  return Object.keys(product.tags).map((id) => `${libraryTag(id)} ${statusTag(product.tags[id].status)}`).join("<br>") || `<span class="tag tag-gray">普通商品</span>`;
}

function opsSupplyFilterChoices(field, options) {
  const current = state.opsFilters[field];
  return `<div class="supply-filter-options">${options.map((option) => {
    const [value, label] = Array.isArray(option) ? option : [option, option];
    return `<button type="button" class="supply-filter-chip ${current === value ? "active" : ""}" data-action="ops-condition" data-field="${field}" data-value="${esc(value)}">${esc(label)}</button>`;
  }).join("")}</div>`;
}

function opsSupplyFilterSummary() {
  const filters = state.opsFilters;
  const library = data.libraries.find((item) => item.id === filters.library);
  const values = [
    ["状态", filters.supplyStatus],
    ["可供地区", filters.region],
    ["海外地区", filters.overseas],
    ["交易方式", filters.tradeMode],
    ["产品库标签", filters.library === "all" ? "全部" : filters.library === "none" ? "普通商品" : library?.name || filters.library]
  ];
  return values.map(([label, value]) => `<span>${esc(label)}：${value === "all" ? "全部" : esc(value)}</span>`).join("");
}

function filteredOpsSupplyProducts() {
  const filters = state.opsFilters;
  return opsSupplyProducts().filter((product) => {
    const keywordMatch = !filters.keyword || `${product.name}${product.id}`.toLowerCase().includes(filters.keyword.toLowerCase());
    const companyMatch = !filters.company || product.company.toLowerCase().includes(filters.company.toLowerCase());
    const categoryMatch = filters.category === "all" || product.category === filters.category;
    const supplyStatusMatch = filters.supplyStatus === "all" || product.supplyStatus === filters.supplyStatus;
    const regionMatch = filters.region === "all" || product.regions.includes(filters.region) || product.regions.includes("全国");
    const overseasMatch = filters.overseas === "all";
    const tradeModeMatch = filters.tradeMode === "all" || supplyTradeMode(product) === filters.tradeMode;
    const availabilityMatch = filters.availability === "all" || filters.availability === "长期";
    const tagIds = Object.keys(product.tags || {});
    const libraryMatch = filters.library === "all" || (filters.library === "none" ? tagIds.length === 0 : tagIds.includes(filters.library));
    return keywordMatch && companyMatch && categoryMatch && supplyStatusMatch && regionMatch && overseasMatch && tradeModeMatch && availabilityMatch && libraryMatch;
  });
}

function opsSupplyTreeNode(category) {
  return `<button type="button" class="supply-tree-node ${state.opsFilters.category === category ? "active" : ""}" data-action="ops-category" data-value="${esc(category)}"><span>›</span><i>□</i>${esc(category)}</button>`;
}

function renderOpsSupplyTree() {
  const commodityCategories = ["绿色建材", "智能装备", "部品部件", "设备租赁", "专业服务", "科技成果", "其他"];
  return `<aside class="supply-category-panel ops-supply-tree">
    <div class="supply-category-search"><input placeholder="请输入搜索关键字"><button type="button" data-action="placeholder" aria-label="搜索">⌕</button><button type="button" data-action="placeholder">更多⌄</button></div>
    <button type="button" class="supply-tree-root" data-action="placeholder"><span>▾</span><i>▣</i>服务</button>
    <div class="supply-tree-children">${opsSupplyTreeNode("专业服务")}<button type="button" class="supply-tree-node" data-action="placeholder"><span>›</span><i>□</i>分包</button></div>
    <button type="button" class="supply-tree-root ${state.opsFilters.category === "all" ? "active" : ""}" data-action="ops-category" data-value="all"><span>▾</span><i>▣</i>商品</button>
    <div class="supply-tree-children">${commodityCategories.map(opsSupplyTreeNode).join("")}</div>
    <button type="button" class="supply-tree-root" data-action="placeholder"><span>▾</span><i>▣</i>其他项目</button>
    <div class="supply-tree-children"><button type="button" class="supply-tree-node" data-action="placeholder"><span>›</span><i>□</i>测试</button></div>
    <button type="button" class="supply-tree-root" data-action="placeholder"><span>›</span><i>□</i>项目</button>
  </aside>`;
}

function renderOpsList() {
  const products = filteredOpsSupplyProducts();
  const libraryChoices = [["all", "全部"], ["none", "普通商品"], ...data.libraries.map((library) => [library.id, library.name])];
  const rows = products.map((product, index) => {
    const price = product.price === "面议" ? "面议" : `${esc(product.price)}元/${esc(product.unit)}`;
    return `<tr><td>${index + 1}</td><td><input class="ops-sort-input" value="${index ? index + 1 : 0}" aria-label="${esc(product.name)}排序"></td><td><a data-action="open-product" data-id="${product.id}" data-route="ops-supply-detail">${esc(product.name)}</a></td><td>${esc(product.company)}</td><td>${esc(product.category)}</td><td>长期</td><td class="wrap">${esc(product.regions)}</td><td>${esc(product.supplyStatus)}</td><td>${esc(supplyTradeMode(product))}</td><td>${price}</td><td class="wrap supply-library-cell">${opsSupplyTagOverview(product)}</td><td><button type="button" class="btn btn-link" data-action="edit-product" data-id="${product.id}" data-route="ops-supply-form">编辑</button></td></tr>`;
  }).join("") || `<tr><td colspan="12" class="empty-cell">没有符合筛选条件的供应信息</td></tr>`;
  const filters = `<div class="supply-search-row"><div class="supply-name-search"><input id="opsKeyword" value="${esc(state.opsFilters.keyword)}" placeholder="请输入商品名称"><button type="button" data-action="ops-search" aria-label="查询">⌕</button></div><span>高级查询⌄</span></div>
    <div class="supply-advanced-filter">
      <div class="supply-condition-summary"><strong>查询条件 ›</strong>${opsSupplyFilterSummary()}<button type="button" data-action="ops-reset">↻ 重置方案</button></div>
      <div class="supply-filter-row"><strong>状态</strong>${opsSupplyFilterChoices("supplyStatus", [["all", "全部"], "可供", "停供"])}</div>
      <div class="supply-filter-row"><strong>可供地区</strong>${opsSupplyFilterChoices("region", [["all", "全部"], "北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "台湾", "香港", "澳门"])}</div>
      <div class="supply-filter-row"><strong>海外地区</strong>${opsSupplyFilterChoices("overseas", [["all", "全部"], "韩国", "朝鲜", "日本", "马来西亚", "印度", "巴基斯坦", "泰国", "越南", "斯里兰卡", "缅甸", "孟加拉国", "不丹", "阿富汗", "柬埔寨", "尼泊尔", "老挝", "新加坡"])}</div>
      <div class="supply-filter-row"><strong>交易方式</strong>${opsSupplyFilterChoices("tradeMode", [["all", "全部"], "在线交易", "联系交易"])}</div>
      <div class="supply-filter-row"><strong>可供时间</strong>${opsSupplyFilterChoices("availability", [["all", "全部"], "长期"])}<div class="supply-date-range"><input type="date" aria-label="可供开始时间"><span>–</span><input type="date" aria-label="可供结束时间"></div></div>
      <div class="supply-filter-row ops-company-row"><strong>供应企业</strong><input id="opsCompany" value="${esc(state.opsFilters.company)}" placeholder="请输入关键字"></div>
      <div class="supply-filter-row"><strong>产品库标签</strong>${opsSupplyFilterChoices("library", libraryChoices)}</div>
    </div>`;
  const table = `<div class="table-wrap supply-table-wrap"><table class="data-table ops-supply-list-table"><thead><tr><th>序号</th><th>排序</th><th>供应名称</th><th>企业名称</th><th>品类</th><th>可供时间</th><th>可供地区</th><th>状态</th><th>交易方式</th><th>价格</th><th class="wrap">产品库标签 / 审批状态</th><th>操作</th></tr></thead><tbody>${rows}</tbody></table>${pager(products.length, 20)}</div>`;
  const headActions = `<button type="button" class="btn" data-action="placeholder">更新排序</button>`;
  return shell(`<section class="page supply-manager-page ops-supply-page">${pageHead("供应列表", "供应列表", headActions)}<div class="supply-workspace">${renderOpsSupplyTree()}<div class="supply-list-main">${filters}${table}</div></div></section>`, "operations", "ops-list");
}

function reviewPanel(type, currentStatus, reviewRecord) {
  const pendingStatus = type === "normal" ? "待运营审核" : "待审核";
  if (currentStatus !== pendingStatus) {
    return `<aside class="section flush review-side"><div class="section-title"><span>审核记录</span></div><div class="section-body"><p>${statusTag(currentStatus)}</p><dl class="kv"><dt>审核人</dt><dd>${esc(reviewRecord?.reviewer || "—")}</dd><dt style="margin-top:12px">审核时间</dt><dd>${esc(reviewRecord?.reviewedAt || "—")}</dd><dt style="margin-top:12px">审核意见</dt><dd>${esc(reviewRecord?.opinion || "—")}</dd></dl></div></aside>`;
  }
  return `<aside class="section flush review-side"><div class="section-title"><span>审核结论</span></div><div class="section-body"><div class="decision-grid"><label class="decision-option"><input type="radio" name="decision" value="pass">审核通过</label><label class="decision-option"><input type="radio" name="decision" value="reject">审核驳回</label></div><div class="field" style="margin-top:13px"><label class="required">审核意见</label><textarea id="reviewOpinion" maxlength="300" placeholder="请输入审核意见，最多 300 字"></textarea></div><button type="button" class="btn btn-primary btn-block" style="margin-top:13px" data-action="submit-review" data-review-type="${type}">确认提交</button></div></aside>`;
}

function productMaterial(product) {
  const contacts = product.contacts?.length ? product.contacts : [{ name: product.contact, phone: product.phone, extra: product.email }];
  const fileActions = (files) => files?.length ? files.map((file) => `<button type="button" class="btn btn-sm" data-action="open-file" data-file="${esc(file)}">${esc(file)}</button>`).join("") : `<span class="sub">未上传</span>`;
  const contactRows = contacts.map((item, index) => `<tr><td>${index + 1}</td><td>${esc(item.name)}</td><td>${esc(item.phone)}</td><td>${esc(item.extra || "—")}</td></tr>`).join("");
  const skuRows = (product.skus || []).map((item, index) => `<tr><td>${index + 1}</td><td>${esc(item.model)}</td><td>${esc(item.price || "面议")}</td><td>${esc(product.unit)}</td><td>${statusTag(item.supplyStatus || product.supplyStatus)}</td></tr>`).join("") || `<tr><td colspan="5" class="empty-cell">暂无型号</td></tr>`;
  const caseRows = (product.cases || []).map((item, index) => `<tr><td>${index + 1}</td><td>${esc(item.name || "—")}</td><td class="wrap">${esc(item.description || "—")}</td><td>${item.link ? `<button type="button" class="btn btn-sm" data-action="open-file" data-file="${esc(item.link)}">${esc(item.link)}</button>` : "—"}</td></tr>`).join("") || `<tr><td colspan="4" class="empty-cell">暂无典型案例</td></tr>`;
  return `<section class="section flush product-full-detail"><div class="section-title"><span>商品完整资料</span><span class="sub">与企业商品表单字段一致</span></div><div class="section-body">
    <div class="detail-group"><h3>基本信息</h3><dl class="kv-grid"><div class="kv"><dt>供应名称</dt><dd>${esc(product.name)}</dd></div><div class="kv"><dt>供应企业</dt><dd>${esc(product.company)}</dd></div><div class="kv"><dt>供应品类</dt><dd>${esc(product.category)}</dd></div><div class="kv"><dt>计量单位</dt><dd>${esc(product.unit)}</dd></div><div class="kv"><dt>国内可供地区</dt><dd>${esc(product.regions || "—")}</dd></div><div class="kv"><dt>产品产地</dt><dd>${esc(product.origin || "—")}</dd></div><div class="kv"><dt>参考价格</dt><dd>${esc(product.price)}</dd></div><div class="kv"><dt>产品来源</dt><dd>${esc(product.source)}</dd></div><div class="kv"><dt>商品 / 供货状态</dt><dd>${statusTag(product.status)} ${statusTag(product.supplyStatus)}</dd></div><div class="kv span-2"><dt>产品简介</dt><dd>${esc(product.summary || "—")}</dd></div><div class="kv"><dt>属性图片</dt><dd><div class="actions">${fileActions(product.images)}</div></dd></div></dl></div>
    <div class="detail-group"><h3>技术与市场信息</h3><dl class="kv-grid"><div class="kv"><dt>产品别名</dt><dd>${esc(product.aliases || "—")}</dd></div><div class="kv"><dt>产品分类标签</dt><dd>${esc(product.classification || "—")}</dd></div><div class="kv"><dt>执行标准</dt><dd>${esc(product.standard || "—")}</dd></div><div class="kv span-2"><dt>规格参数与性能指标</dt><dd>${esc(product.performance || "—")}</dd></div><div class="kv"><dt>产品认证</dt><dd><div class="actions">${fileActions(product.certifications)}</div></dd></div><div class="kv span-all"><dt>核心竞争优势、应用情况及推广前景</dt><dd>${esc(product.advantage || "—")}</dd></div></dl></div>
    <div class="detail-group"><h3>联系方式</h3><div class="table-wrap detail-table-wrap"><table class="data-table compact-table"><thead><tr><th>序号</th><th>联系人</th><th>手机号</th><th>邮箱 / 微信</th></tr></thead><tbody>${contactRows}</tbody></table></div></div>
    <div class="detail-group"><h3>型号与价格</h3><div class="table-wrap detail-table-wrap"><table class="data-table compact-table"><thead><tr><th>序号</th><th>规格型号</th><th>参考价</th><th>单位</th><th>供货状态</th></tr></thead><tbody>${skuRows}</tbody></table></div></div>
    <div class="detail-group"><h3>典型案例</h3><div class="table-wrap detail-table-wrap"><table class="data-table compact-table"><thead><tr><th>序号</th><th>项目名称</th><th>应用情况</th><th>案例图片 / 链接</th></tr></thead><tbody>${caseRows}</tbody></table></div></div>
  </div></section>`;
}

function renderOpsReview() {
  return renderEnterpriseDetail("operations");
}

function ruleLines(value) {
  return String(value || "").split("\n").filter(Boolean);
}

function ensureAdmissionRuleDraft() {
  if (!state.admissionRuleDraft) {
    state.admissionRuleDraft = clone(getLibrary().admissionRule);
    state.admissionRuleDraft.modules = normalizeAdmissionModules(state.admissionRuleDraft);
    state.admissionRuleDraft.scoreItems = normalizeScoreItems(state.admissionRuleDraft.scoreItems);
  }
  if (!state.admissionRuleDraft.modules.some((module) => module.id === state.selectedRuleModuleId)) state.selectedRuleModuleId = state.admissionRuleDraft.modules[0]?.id || "";
  return state.admissionRuleDraft;
}

function admissionModuleById(id, rule = ensureAdmissionRuleDraft()) {
  return rule.modules.find((module) => module.id === id);
}

function renderRuleModuleList(modules) {
  return modules.slice().sort((a, b) => a.sort - b.sort).map((module) => `<div class="rule-tree-branch"><button type="button" class="rule-tree-node ${state.selectedRuleModuleId === module.id ? "active" : ""}" data-action="select-rule-module" data-id="${esc(module.id)}"><span class="tree-node-icon">•</span><span class="tree-node-copy"><strong>${esc(module.title)}</strong><small>${module.items.length} 个条目</small></span></button></div>`).join("");
}

function renderRuleConfigTable(module) {
  const items = module.items.slice().sort((a, b) => a.sort - b.sort);
  const rows = items.map((item) => `<tr data-rule-row="${esc(module.id)}" data-id="${esc(item.id)}"><td><input class="table-input rule-item-sort" type="number" min="1" data-module-id="${esc(module.id)}" data-id="${esc(item.id)}" value="${esc(item.sort)}"></td><td><input class="table-input rule-item-text" data-module-id="${esc(module.id)}" data-id="${esc(item.id)}" value="${esc(item.text)}"></td><td><select class="table-select rule-item-selection" data-module-id="${esc(module.id)}" data-id="${esc(item.id)}"><option value="single" ${item.selectionType === "single" ? "selected" : ""}>单选</option><option value="multiple" ${item.selectionType === "multiple" ? "selected" : ""}>多选</option></select></td><td class="wrap">${item.options.map((option) => esc(option.label)).join("/")}</td><td class="wrap"><button type="button" class="btn btn-link" data-action="edit-rule-item" data-module-id="${esc(module.id)}" data-id="${esc(item.id)}">编辑</button><button type="button" class="btn btn-link danger-link" data-action="delete-rule-item" data-module-id="${esc(module.id)}" data-id="${esc(item.id)}">删除</button></td></tr>`).join("") || `<tr><td colspan="5" class="empty-cell">暂无条目，请点击右上角新增</td></tr>`;
  return `<section class="rule-config-block"><div class="rule-subsection-head"><div><h3>${esc(module.title)}</h3></div><button type="button" class="btn btn-primary btn-sm" data-action="new-rule-item" data-module-id="${esc(module.id)}">＋ 新增条目</button></div><div class="table-wrap rule-table-wrap"><table class="data-table rule-config-table"><thead><tr><th style="width:90px">排序</th><th>条目规则</th><th style="width:110px">选择方式</th><th style="width:280px">核查结果枚举</th><th style="width:130px">操作</th></tr></thead><tbody>${rows}</tbody></table></div></section>`;
}

function renderScoreItemTable(items) {
  const rows = items.slice().sort((a, b) => a.sort - b.sort).map((item) => `<tr><td><input class="table-input score-item-sort" data-id="${esc(item.id)}" type="number" min="1" value="${esc(item.sort)}"></td><td><input class="table-input score-item-name" data-id="${esc(item.id)}" value="${esc(item.name)}" placeholder="请输入评价指标"></td><td><div class="score-max-input"><input class="table-input score-item-max" data-id="${esc(item.id)}" type="number" min="1" max="100" value="${esc(item.maxScore)}"><span>分</span></div></td><td><button type="button" class="btn btn-link danger-link" data-action="delete-score-item" data-id="${esc(item.id)}">删除</button></td></tr>`).join("") || `<tr><td colspan="4" class="empty-cell">暂无评价指标，请点击右上角新增</td></tr>`;
  const total = items.reduce((sum, item) => sum + Number(item.maxScore || 0), 0);
  return `<section class="rule-config-block score-rule-block"><div class="rule-subsection-head"><div><h3>评分规则</h3></div><button type="button" class="btn btn-primary btn-sm" data-action="new-score-item">＋ 新增评价指标</button></div><div class="table-wrap rule-table-wrap"><table class="data-table score-item-table"><thead><tr><th style="width:100px">排序</th><th>评价指标</th><th style="width:180px">指标满分</th><th style="width:100px">操作</th></tr></thead><tbody>${rows}<tr class="total-row"><td colspan="2">指标满分合计</td><td><strong id="scoreRuleTotal" class="${total === 100 ? "score-total-valid" : "score-total-invalid"}">${esc(total)}</strong> / 100 分</td><td><span id="scoreRuleState">${total === 100 ? statusTag("已满足") : statusTag("需调整")}</span></td></tr></tbody></table></div><div class="rule-table-foot">保存时校验所有指标满分合计必须等于 100 分。</div></section>`;
}

function renderAdmissionRuleConfig() {
  const library = getLibrary();
  const rule = ensureAdmissionRuleDraft();
  const selectedModule = admissionModuleById(state.selectedRuleModuleId, rule);
  const modulePanel = selectedModule ? `<div class="rule-module-toolbar"><div><span class="sub">当前模块</span><strong>${esc(selectedModule.title)}</strong></div><div class="actions"><button type="button" class="btn btn-sm" data-action="edit-rule-module" data-id="${esc(selectedModule.id)}">编辑模块</button><button type="button" class="btn btn-sm btn-danger" data-action="delete-rule-module" data-id="${esc(selectedModule.id)}">删除模块</button></div></div>${renderRuleConfigTable(selectedModule)}` : `<div class="empty-cell">请先新增准入模块</div>`;
  const activeAdmins = library.admins.filter((admin) => admin.status === "启用");
  const approvalRows = activeAdmins.map((admin) => `<tr><td>${esc(admin.name)}</td><td>${esc(admin.phone)}</td><td>${statusTag(admin.status)}</td></tr>`).join("") || `<tr><td colspan="3" class="empty-cell">尚未配置审批人</td></tr>`;
  return shell(`<section class="page form-page">${pageHead("入库审批配置", `产品库管理 / ${library.name} / 入库审批配置`, `<button type="button" class="btn" data-action="open-library" data-id="${esc(library.id)}">返回</button><button type="button" class="btn btn-primary" data-action="save-rule-config" data-rule="admission">保存配置</button>`)}
    <div class="form-section">
      <h2>准入模块与条目</h2>
      <div class="rule-builder"><aside class="rule-tree-panel"><div class="rule-tree-head"><div><strong>模块列表</strong><span>${rule.modules.length} 个模块</span></div><button type="button" class="btn btn-primary btn-sm" data-action="new-rule-module">＋ 新增模块</button></div><div class="rule-tree-root"><span>一级准入模块</span></div><div class="rule-tree-list">${renderRuleModuleList(rule.modules) || `<div class="empty-cell">暂无模块</div>`}</div></aside><div class="rule-module-panel">${modulePanel}</div></div>
      <h2>评分规则</h2>${renderScoreItemTable(rule.scoreItems)}
      <h2>审批企业及审批人</h2>
      <section class="rule-config-block"><div class="rule-subsection-head"><div><h3>${esc(library.adminOrg || "未配置审批企业")}</h3><p>审批人从所选企业账号中产生；默认任一已选审批人审批通过，本次入库审批即通过。</p></div><button type="button" class="btn btn-primary" data-action="configure-approval-assignees">配置审批企业及审批人</button></div><div class="table-wrap rule-table-wrap"><table class="data-table"><thead><tr><th>姓名</th><th>手机号</th><th>状态</th></tr></thead><tbody>${approvalRows}</tbody></table></div></section>
    </div>
  </section>`, "operations", "library-config");
}

function openApprovalAssigneeEditor() {
  syncAdmissionRuleDraftFromPage();
  const library = getLibrary();
  const firstOrg = Object.keys(ORGANIZATIONS)[0] || "";
  const existingOrg = library.adminOrg && ORGANIZATIONS[library.adminOrg] ? library.adminOrg : "";
  const selectedIds = existingOrg ? library.admins.filter((admin) => admin.status === "启用").map((admin) => admin.id) : [];
  state.approvalAssigneeDraft = {
    org: selectedIds.length ? existingOrg : "",
    selectedIds,
    expandedOrgs: [existingOrg || firstOrg].filter(Boolean),
    sourceSearch: "",
    targetSearch: ""
  };
  renderApprovalAssigneeEditor();
  const modal = document.querySelector("#modalMask .modal");
  if (modal) modal.scrollTop = 0;
}

function approvalAccountById(id) {
  for (const [org, accounts] of Object.entries(ORGANIZATIONS)) {
    const account = accounts.find((item) => item.id === id);
    if (account) return { org, account };
  }
  return null;
}

function renderApprovalAssigneeEditor() {
  const draft = state.approvalAssigneeDraft;
  if (!draft) return;
  const selectedIds = new Set(draft.selectedIds);
  const expandedOrgs = new Set(draft.expandedOrgs || []);
  const sourceTree = Object.entries(ORGANIZATIONS).map(([org, accounts]) => {
    const expanded = expandedOrgs.has(org);
    const locked = Boolean(draft.org && draft.selectedIds.length && draft.org !== org);
    const people = accounts.map((account) => {
      const transferred = selectedIds.has(account.id);
      const disabled = locked || transferred || account.status !== "启用";
      const searchText = `${org} ${account.name} ${account.id} ${account.phone}`.toLowerCase();
      return `<label class="approval-tree-person ${disabled ? "is-disabled" : ""} ${transferred ? "is-transferred" : ""}" data-search="${esc(searchText)}"><input type="checkbox" name="approvalSourceChoice" value="${esc(account.id)}" data-org="${esc(org)}" ${disabled ? "disabled" : ""}><span><strong>${esc(account.name)}</strong><small>${esc(account.id)} · ${esc(account.phone)}</small></span>${transferred ? `<em>已选</em>` : account.status !== "启用" ? `<em>已停用</em>` : ""}</label>`;
    }).join("") || `<div class="empty-cell">该企业暂无可选人员</div>`;
    return `<section class="approval-tree-group" data-search="${esc(org.toLowerCase())}" data-expanded="${expanded}"><button type="button" class="approval-tree-org ${expanded ? "is-expanded" : ""}" data-action="toggle-approval-org" data-org="${esc(org)}" aria-expanded="${expanded}"><span class="approval-tree-switcher" aria-hidden="true"></span><strong>${esc(org)}</strong><span>${accounts.length} 人</span></button><div class="approval-tree-children" ${expanded ? "" : "hidden"}>${people}</div></section>`;
  }).join("");
  const selectedAccounts = draft.selectedIds.map(approvalAccountById).filter(Boolean);
  const targetRows = selectedAccounts.map(({ org, account }) => `<div class="approval-selected-item" data-search="${esc(`${org} ${account.name} ${account.id} ${account.phone}`.toLowerCase())}"><label><input type="checkbox" name="approvalTargetChoice" value="${esc(account.id)}"><span><strong>${esc(account.name)}</strong><small>${esc(org)}</small><small>${esc(account.id)} · ${esc(account.phone)}</small></span></label><button type="button" class="btn btn-link danger-link" data-action="remove-approval-assignee" data-id="${esc(account.id)}">移除</button></div>`).join("") || `<div class="approval-transfer-empty">暂未选择审批人</div>`;
  const currentOrgNote = draft.org && draft.selectedIds.length ? `当前审批企业：${esc(draft.org)}；如需更换，请先清空右侧已选人员。` : `可从任一企业选择人员，选定后本次配置限定为该企业。`;
  openModal("配置审批企业及审批人", `<div class="approval-transfer"><section class="approval-transfer-pane approval-source-pane"><header><div><strong>企业与人员</strong></div></header><div class="approval-transfer-search"><input id="approvalSourceSearch" data-action="approval-source-search" value="${esc(draft.sourceSearch || "")}" placeholder="搜索企业、姓名、账号或手机号"></div><div class="approval-transfer-scroll">${sourceTree}</div><footer>${currentOrgNote}</footer></section><div class="approval-transfer-actions"><button type="button" class="btn btn-primary" data-action="approval-transfer-add" disabled>添加 →</button><button type="button" class="btn" data-action="approval-transfer-remove" disabled>← 移除</button></div><section class="approval-transfer-pane approval-target-pane"><header><div><strong>已选审批人</strong><span>${selectedAccounts.length} 人</span></div></header><div class="approval-transfer-search"><input id="approvalTargetSearch" data-action="approval-target-search" value="${esc(draft.targetSearch || "")}" placeholder="搜索已选人员"></div><div class="approval-transfer-scroll">${targetRows}<div id="approvalTargetNoResults" class="approval-transfer-empty" hidden>未找到匹配的已选人员</div></div><footer>${draft.org ? `审批企业：<strong>${esc(draft.org)}</strong>` : `选中人员后自动确定审批企业`}</footer></section></div><div class="banner info flush approval-transfer-rule">任一已选审批人审批通过，本次入库审批即通过；其他审批人只能查看结果。</div>`, `<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-primary" data-action="confirm-approval-assignees">保存配置</button>`);
  filterApprovalTransfer("source", draft.sourceSearch || "");
  filterApprovalTransfer("target", draft.targetSearch || "");
}

function syncApprovalTransferSearches() {
  const draft = state.approvalAssigneeDraft;
  if (!draft) return;
  draft.sourceSearch = document.getElementById("approvalSourceSearch")?.value || "";
  draft.targetSearch = document.getElementById("approvalTargetSearch")?.value || "";
}

function filterApprovalTransfer(side, value) {
  const draft = state.approvalAssigneeDraft;
  if (!draft) return;
  const query = String(value || "").trim().toLowerCase();
  if (side === "source") {
    draft.sourceSearch = value;
    document.querySelectorAll(".approval-tree-group").forEach((group) => {
      const orgMatch = group.dataset.search.includes(query);
      let visiblePeople = 0;
      group.querySelectorAll(".approval-tree-person").forEach((row) => {
        const visible = !query || orgMatch || row.dataset.search.includes(query);
        row.hidden = !visible;
        if (visible) visiblePeople += 1;
      });
      group.hidden = Boolean(query && !orgMatch && visiblePeople === 0);
      const children = group.querySelector(".approval-tree-children");
      if (children) children.hidden = query ? false : group.dataset.expanded !== "true";
    });
  } else {
    draft.targetSearch = value;
    let visibleItems = 0;
    document.querySelectorAll(".approval-selected-item").forEach((row) => {
      const visible = !query || row.dataset.search.includes(query);
      row.hidden = !visible;
      if (visible) visibleItems += 1;
    });
    const noResults = document.getElementById("approvalTargetNoResults");
    if (noResults) noResults.hidden = !query || visibleItems > 0;
  }
}

function toggleApprovalOrganization(org) {
  syncApprovalTransferSearches();
  const draft = state.approvalAssigneeDraft;
  if (!draft) return;
  const expanded = new Set(draft.expandedOrgs || []);
  if (expanded.has(org)) expanded.delete(org);
  else expanded.add(org);
  draft.expandedOrgs = [...expanded];
  renderApprovalAssigneeEditor();
}

function addApprovalAssignees() {
  const draft = state.approvalAssigneeDraft;
  if (!draft) return;
  syncApprovalTransferSearches();
  const checked = [...document.querySelectorAll('input[name="approvalSourceChoice"]:checked')];
  if (!checked.length) return toast("请先在左侧选择审批人");
  const selectedOrgs = [...new Set(checked.map((input) => input.dataset.org))];
  if (selectedOrgs.length !== 1) return toast("一个产品库只能配置一个审批企业");
  const selectedOrg = selectedOrgs[0];
  if (draft.org && draft.selectedIds.length && draft.org !== selectedOrg) return toast("请先清空原审批企业的已选人员");
  draft.org = selectedOrg;
  draft.selectedIds = [...new Set([...draft.selectedIds, ...checked.map((input) => input.value)])];
  if (!draft.expandedOrgs.includes(selectedOrg)) draft.expandedOrgs.push(selectedOrg);
  renderApprovalAssigneeEditor();
}

function removeApprovalAssignees(ids) {
  const draft = state.approvalAssigneeDraft;
  if (!draft) return;
  syncApprovalTransferSearches();
  const removing = new Set(ids);
  draft.selectedIds = draft.selectedIds.filter((id) => !removing.has(id));
  if (!draft.selectedIds.length) draft.org = "";
  renderApprovalAssigneeEditor();
}

function removeCheckedApprovalAssignees() {
  const ids = [...document.querySelectorAll('input[name="approvalTargetChoice"]:checked')].map((input) => input.value);
  if (!ids.length) return toast("请先在右侧选择需要移除的人员");
  removeApprovalAssignees(ids);
}

function confirmApprovalAssignees() {
  const draft = state.approvalAssigneeDraft;
  if (!draft?.org) return toast("请选择审批企业");
  if (!draft.selectedIds.length) return toast("请至少选择一名审批人");
  const source = ORGANIZATIONS[draft.org] || [];
  const library = getLibrary();
  library.adminOrg = draft.org;
  library.admins = source.filter((account) => draft.selectedIds.includes(account.id)).map((account) => ({ ...account, status: "启用" }));
  library.approvalMode = "任一已选审批人审批通过即通过";
  persist();
  closeModal();
  toast("审批企业及审批人已更新");
  render();
}

function syncAdmissionRuleDraftFromPage() {
  const draft = ensureAdmissionRuleDraft();
  document.querySelectorAll(".rule-item-sort").forEach((input) => {
    const item = admissionModuleById(input.dataset.moduleId, draft)?.items.find((entry) => entry.id === input.dataset.id);
    if (item) item.sort = Math.max(1, Number(input.value) || 1);
  });
  document.querySelectorAll(".rule-item-text").forEach((input) => {
    const item = admissionModuleById(input.dataset.moduleId, draft)?.items.find((entry) => entry.id === input.dataset.id);
    if (item) item.text = input.value.trim();
  });
  document.querySelectorAll(".rule-item-selection").forEach((input) => {
    const item = admissionModuleById(input.dataset.moduleId, draft)?.items.find((entry) => entry.id === input.dataset.id);
    if (item) item.selectionType = input.value;
  });
  document.querySelectorAll(".score-item-sort").forEach((input) => {
    const item = draft.scoreItems.find((entry) => entry.id === input.dataset.id);
    if (item) item.sort = Math.max(1, Number(input.value) || 1);
  });
  document.querySelectorAll(".score-item-name").forEach((input) => {
    const item = draft.scoreItems.find((entry) => entry.id === input.dataset.id);
    if (item) item.name = input.value.trim();
  });
  document.querySelectorAll(".score-item-max").forEach((input) => {
    const item = draft.scoreItems.find((entry) => entry.id === input.dataset.id);
    if (item) item.maxScore = Math.max(1, Math.round(Number(input.value) || 0));
  });
}

function nextRuleItemId(moduleId) {
  const module = admissionModuleById(moduleId);
  const numbers = module.items.map((item) => Number(String(item.id).replace(/\D/g, "")) || 0);
  return `R${String(Math.max(0, ...numbers) + 1).padStart(2, "0")}`;
}

function nextRuleModuleId() {
  const numbers = ensureAdmissionRuleDraft().modules.map((module) => Number(String(module.id).replace(/\D/g, "")) || 0);
  return `RM${String(Math.max(0, ...numbers) + 1).padStart(2, "0")}`;
}

function openRuleModuleEditor(id = "") {
  syncAdmissionRuleDraftFromPage();
  const draft = ensureAdmissionRuleDraft();
  const existing = admissionModuleById(id, draft);
  const module = existing ? clone(existing) : { id: nextRuleModuleId(), sort: draft.modules.length + 1, title: "", items: [] };
  state.ruleModuleDraft = { id: module.id, isNew: !existing, module };
  renderRuleModuleEditorModal();
}

function syncRuleModuleEditorFromModal() {
  if (!state.ruleModuleDraft) return;
  state.ruleModuleDraft.module.title = document.getElementById("ruleModuleTitle")?.value.trim() || "";
  state.ruleModuleDraft.module.sort = Math.max(1, Number(document.getElementById("ruleModuleSort")?.value) || 1);
}

function renderRuleModuleEditorModal() {
  const editor = state.ruleModuleDraft;
  if (!editor) return;
  openModal(`${editor.isNew ? "新增" : "编辑"}准入模块`, `<div class="form-grid modal-form-grid"><div class="field"><label class="required">模块标题</label><input id="ruleModuleTitle" value="${esc(editor.module.title)}" placeholder="请输入模块标题"></div><div class="field"><label class="required">模块排序</label><input id="ruleModuleSort" type="number" min="1" value="${esc(editor.module.sort)}"></div></div><div class="banner info flush" style="margin-top:16px">所有模块均为一级模块；审批表单按模块排序依次编号。</div>`, `<button type="button" class="btn" data-action="close-rule-module-editor">取消</button><button type="button" class="btn btn-primary" data-action="confirm-rule-module-editor">保存</button>`);
}

function saveRuleModuleEditor() {
  syncRuleModuleEditorFromModal();
  const editor = state.ruleModuleDraft;
  if (!editor) return;
  if (!editor.module.title) return toast("请填写模块标题");
  const draft = ensureAdmissionRuleDraft();
  const index = draft.modules.findIndex((module) => module.id === editor.id);
  if (index >= 0) draft.modules[index] = clone(editor.module);
  else draft.modules.push(clone(editor.module));
  state.selectedRuleModuleId = editor.module.id;
  state.ruleModuleDraft = null;
  closeModal();
  toast(editor.isNew ? "已新增准入模块" : "模块配置已更新");
  render();
}

function requestDeleteRuleModule(id) {
  syncAdmissionRuleDraftFromPage();
  const draft = ensureAdmissionRuleDraft();
  const module = admissionModuleById(id, draft);
  if (!module) return;
  if (draft.modules.length === 1) return toast("准入规则至少保留一个模块");
  openModal("删除准入模块？", `<div class="banner danger flush">删除后，审批表单将不再生成该模块。</div><p><strong>${esc(module.title)}</strong> · ${module.items.length} 个条目</p>`, `<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-danger" data-action="confirm-delete-rule-module" data-id="${esc(id)}">删除</button>`);
}

function openRuleItemEditor(moduleId, id = "", mode = "edit") {
  syncAdmissionRuleDraftFromPage();
  const module = admissionModuleById(moduleId);
  if (!module) return;
  const existing = module.items.find((item) => item.id === id);
  const item = existing ? clone(existing) : { id: nextRuleItemId(moduleId), sort: module.items.length + 1, text: "", selectionType: "single", options: [{ label: "符合" }, { label: "不符合" }] };
  state.ruleItemDraft = { moduleId, id: item.id, isNew: !existing, mode, item };
  renderRuleItemEditorModal();
}

function syncRuleItemEditorFromModal() {
  const editor = state.ruleItemDraft;
  if (!editor) return;
  const sort = document.getElementById("ruleEditorSort");
  const textInput = document.getElementById("ruleEditorText");
  const selection = document.getElementById("ruleEditorSelection");
  if (sort) editor.item.sort = Math.max(1, Number(sort.value) || 1);
  if (textInput) editor.item.text = textInput.value.trim();
  if (selection) editor.item.selectionType = selection.value;
  const options = [...document.querySelectorAll(".enum-editor-row")].map((row) => ({
    label: row.querySelector(".enum-label")?.value.trim() || ""
  }));
  if (options.length) editor.item.options = options;
}

function renderRuleItemEditorModal() {
  const editor = state.ruleItemDraft;
  if (!editor) return;
  const module = admissionModuleById(editor.moduleId);
  if (!module) return;
  const enumRows = editor.item.options.map((option, index) => `<div class="enum-editor-row"><span>${index + 1}</span><input class="enum-label" value="${esc(option.label)}" placeholder="枚举值，如：完整"><button type="button" class="btn btn-link danger-link" data-action="remove-enum-value" data-index="${index}">删除</button></div>`).join("");
  const itemFields = editor.mode === "enum" ? `<div class="enum-context"><span>所属模块</span><strong>${esc(module.title)}</strong><span>条目规则</span><strong>${esc(editor.item.text)}</strong><span>选择方式</span><strong>${applicationFieldTypeLabel(editor.item.selectionType)}</strong></div>` : `<div class="form-grid modal-form-grid"><div class="field"><label class="required">排序</label><input id="ruleEditorSort" type="number" min="1" value="${esc(editor.item.sort)}"></div><div class="field"><label class="required">选择方式</label><select id="ruleEditorSelection"><option value="single" ${editor.item.selectionType === "single" ? "selected" : ""}>单选</option><option value="multiple" ${editor.item.selectionType === "multiple" ? "selected" : ""}>多选</option></select></div><div class="field span-all"><label class="required">条目规则</label><input id="ruleEditorText" value="${esc(editor.item.text)}" placeholder="请输入条目规则"></div></div>`;
  openModal(editor.mode === "enum" ? `配置“${module.title}”核查结果` : `${editor.isNew ? "新增" : "编辑"}条目`, `${itemFields}<div class="enum-editor"><div class="enum-editor-head"><div><strong>核查结果枚举</strong></div><button type="button" class="btn btn-sm" data-action="add-enum-value">＋ 增加枚举值</button></div><div class="enum-editor-labels"><span>序号</span><span>枚举值</span><span>操作</span></div>${enumRows || `<div class="empty-cell">暂无枚举值</div>`}</div>`, `<button type="button" class="btn" data-action="close-rule-item-editor">取消</button><button type="button" class="btn btn-primary" data-action="confirm-rule-item-editor">保存</button>`);
}

function saveRuleItemEditor() {
  syncRuleItemEditorFromModal();
  const editor = state.ruleItemDraft;
  if (!editor) return;
  if (!editor.item.text) return toast("请填写条目规则");
  if (!editor.item.options.length || editor.item.options.some((option) => !option.label)) return toast("请完整填写核查结果枚举值");
  const labels = editor.item.options.map((option) => option.label);
  if (new Set(labels).size !== labels.length) return toast("核查结果枚举值不能重复");
  const items = admissionModuleById(editor.moduleId)?.items;
  if (!items) return;
  const index = items.findIndex((item) => item.id === editor.id);
  if (index >= 0) items[index] = clone(editor.item);
  else items.push(clone(editor.item));
  state.ruleItemDraft = null;
  closeModal();
  toast(editor.isNew ? "已新增配置行" : "配置行已更新");
  render();
}

function requestDeleteRuleItem(moduleId, id) {
  syncAdmissionRuleDraftFromPage();
  const item = admissionModuleById(moduleId)?.items.find((entry) => entry.id === id);
  if (!item) return;
  openModal("删除配置行？", `<div class="banner danger flush">删除后，准入审批表单将不再生成这一核查项。</div><p><strong>${esc(item.text)}</strong></p>`, `<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-danger" data-action="confirm-delete-rule-item" data-module-id="${esc(moduleId)}" data-id="${esc(id)}">删除</button>`);
}

function renderScoreRuleConfig() {
  return renderAdmissionRuleConfig();
}

function industrialReviewProducts() {
  return nonScenarioProducts().filter((product) => product.tags.A && !product.tags.A.exempt);
}

function filterStageProducts(products) {
  const keyword = state.stageFilters.keyword.toLowerCase();
  const company = state.stageFilters.company.toLowerCase();
  return products.filter((product) => (!keyword || product.name.toLowerCase().includes(keyword)) && (!company || product.company.toLowerCase().includes(company)));
}

function renderStageFilters() {
  return `<div class="filter-panel"><div class="filter-grid"><div class="field"><label>产品名称</label><input id="stageKeyword" value="${esc(state.stageFilters.keyword)}" placeholder="请输入产品名称"></div><div class="field"><label>申报企业</label><input id="stageCompany" value="${esc(state.stageFilters.company)}" placeholder="请输入企业名称"></div><div class="field"><label>产品库</label><input value="三局工业化优品" disabled></div><div class="actions"><button type="button" class="btn btn-primary" data-action="stage-search">查询</button><button type="button" class="btn" data-action="stage-reset">重置</button></div></div></div>`;
}

function renderAdmissionList() {
  const all = industrialReviewProducts();
  const tabDefs = [["待初审", "待初审"], ["初审通过", "已通过"], ["初审退回", "已退回"], ["all", "全部"]];
  const tabs = `<div class="tabs">${tabDefs.map(([value, label]) => `<button type="button" class="tab ${state.admissionTab === value ? "active" : ""}" data-action="admission-tab" data-tab="${value}">${label}<span class="count">${value === "all" ? all.length : all.filter((product) => admissionStatus(product.tags.A) === value).length}</span></button>`).join("")}</div>`;
  const products = filterStageProducts(all).filter((product) => state.admissionTab === "all" || admissionStatus(product.tags.A) === state.admissionTab);
  const rows = products.map((product) => { const status = admissionStatus(product.tags.A); return `<tr><td>${product.id}-A-R1</td><td><a data-action="open-product" data-id="${product.id}" data-route="admission-review">${esc(product.name)}</a></td><td>${esc(product.company)}</td><td>${esc(product.category)}</td><td>${statusTag(product.status)}</td><td>${esc(product.tags.A.appliedAt)}</td><td>${statusTag(status)}</td><td><button type="button" class="btn btn-link" data-action="open-product" data-id="${product.id}" data-route="admission-review">${status === "待初审" ? "开始初审" : "查看初审记录"}</button></td></tr>`; }).join("") || `<tr><td colspan="8" class="empty-cell">当前没有符合条件的准入初审任务</td></tr>`;
  return shell(`<section class="page">${pageHead("准入初审任务", "我的审批任务 / 准入初审", `<span class="role-pill">角色：准入初审组</span>`)}<div class="workflow-strip compact"><div class="workflow-step active"><b>1</b><span>准入初审<small>当前角色处理</small></span></div><i>→</i><div class="workflow-step"><b>2</b><span>联合评分<small>另一角色处理</small></span></div><i>→</i><div class="workflow-step"><b>3</b><span>标签生效<small>不影响商品上下架</small></span></div></div>${tabs}${renderStageFilters()}<div class="table-wrap"><div class="table-note"><span>准入初审只影响A产品库标签，商品上架状态仅供参考。</span></div><table class="data-table"><thead><tr><th>任务编号</th><th>产品名称</th><th>申报企业</th><th>产品品类</th><th>商品状态</th><th>提交时间</th><th>初审状态</th><th>操作</th></tr></thead><tbody>${rows}</tbody></table>${pager(products.length)}</div></section>`, "admission", "admission-list");
}

function renderAdmissionDecisionPanel(task) {
  const record = task.admissionReview;
  if (task.status !== "待初审") return `<aside class="section flush review-side"><div class="section-title"><span>初审记录</span></div><div class="section-body"><p>${statusTag(admissionStatus(task))}</p><dl class="kv"><dt>初审人员</dt><dd>${esc(record?.reviewer || "—")}</dd><dt style="margin-top:12px">初审时间</dt><dd>${esc(record?.reviewedAt || "—")}</dd><dt style="margin-top:12px">初审意见</dt><dd>${esc(record?.opinion || task.opinion || "—")}</dd></dl></div></aside>`;
  return `<aside class="section flush review-side"><div class="section-title"><span>初审结论</span></div><div class="section-body"><div class="decision-stack"><label class="decision-option"><input type="radio" name="admissionDecision" value="pass">初审通过，进入联合评分</label><label class="decision-option"><input type="radio" name="admissionDecision" value="return">退回企业补充</label></div><div class="field" style="margin-top:13px"><label class="required">初审意见</label><textarea id="admissionOpinion" maxlength="300" placeholder="请说明检查结论或退回原因"></textarea></div><button type="button" class="btn btn-primary btn-block" style="margin-top:13px" data-action="submit-admission-review">提交初审结论</button><p class="hint">请结合核查结果人工判断审批结论。</p></div></aside>`;
}

function admissionCheckResult(task, moduleId, itemId) {
  return task.approvalReview?.checkResults?.find((result) => result.moduleId === moduleId && result.itemId === itemId) || null;
}

const APPROVAL_CHECK_NOTE_SAMPLES = {
  S01: "申报资料所述应用场景覆盖建筑新材料施工环节。",
  S02: "产品具备工业化部品部件配套应用能力。",
  S03: "设备支持智能系统接入与施工数据协同。",
  E01: "经核查，申报产品不属于临时施工机具。",
  E02: "经核查，申报产品不属于现场生产工装。",
  E03: "经核查，申报产品不属于可拆除施工设备。",
  M01: "入库申请表已填写完整并加盖企业印章。",
  M02: "产品图纸、技术说明书及使用说明齐全。",
  M03: "检测报告和产品资质在有效期内，内容完整。",
  M04: "知识产权证明及相关授权文件已提供。",
  M05: "营业执照、产能说明和典型案例材料齐全。",
  C01: "已提供典型项目案例，产品与工业化建造场景匹配。",
  C02: "技术方案稳定，已有多个项目落地验证。",
  C03: "资质和检测材料满足现行标准要求。",
  C04: "知识产权归属清晰，未发现授权争议。",
  V01: "技术标准及关键检测报告齐全，未发现不合格记录。",
  V02: "知识产权证明有效，未发现权属纠纷。",
  V03: "近两年未发现重大质量、安全或环保违规记录。"
};

const APPROVAL_SCORE_NOTE_SAMPLES = {
  scene: "应用场景与产品库定位匹配，案例覆盖典型施工环节。",
  maturity: "技术方案稳定，已提供量产及项目验证材料。",
  compliance: "资质、检测及知识产权材料齐全，未发现合规风险。"
};

function approvalCheckNote(item, result) {
  const note = String(result?.note || "").trim();
  if (note && note !== "历史审批按原结论回显") return note;
  return APPROVAL_CHECK_NOTE_SAMPLES[item.id] || "已按申请材料完成核查，未发现异常。";
}

function approvalScoreNote(item, result) {
  const note = String(result?.note || "").trim();
  if (note && note !== "历史审批评分") return note;
  return APPROVAL_SCORE_NOTE_SAMPLES[item.id] || "已结合申报材料和核查结果完成评分。";
}

function approvalResultTone(value) {
  if (/^(符合|完整|未涉及|未触发)$/.test(value)) return "is-positive";
  if (/^(不符合|缺失|涉及|已触发)$/.test(value)) return "is-negative";
  return "is-neutral";
}

function renderAdmissionRuleControl(module, item, task, pending) {
  const result = admissionCheckResult(task, module.id, item.id);
  const selectedValues = result?.values || [];
  if (!pending) {
    const values = selectedValues.map((value) => `<span class="review-readonly-value ${approvalResultTone(value)}">${esc(value)}</span>`).join("");
    return `<div class="review-readonly-values">${values || `<span class="review-readonly-empty">—</span>`}</div>`;
  }
  if (item.selectionType === "multiple") {
    return `<div class="admission-choice-group">${item.options.map((option) => `<label><input type="checkbox" class="admission-rule-control" data-module-id="${esc(module.id)}" data-rule-id="${esc(item.id)}" data-selection-type="multiple" value="${esc(option.label)}" ${selectedValues.includes(option.label) ? "checked" : ""}>${esc(option.label)}</label>`).join("")}</div>`;
  }
  return `<select class="table-select admission-rule-control" data-module-id="${esc(module.id)}" data-rule-id="${esc(item.id)}" data-selection-type="single"><option value="">请选择</option>${item.options.map((option) => `<option value="${esc(option.label)}" ${selectedValues.includes(option.label) ? "selected" : ""}>${esc(option.label)}</option>`).join("")}</select>`;
}

function renderAdmissionRuleModules(modules, task) {
  const pending = task.status === "待审核";
  return modules.slice().sort((a, b) => a.sort - b.sort).map((module, index) => {
    const rows = module.items.slice().sort((a, b) => a.sort - b.sort).map((item) => {
      const result = admissionCheckResult(task, module.id, item.id);
      const note = pending ? `<input class="table-input admission-rule-note" data-module-id="${esc(module.id)}" data-rule-id="${esc(item.id)}" value="${esc(result?.note || "")}" placeholder="可填写核查说明">` : `<div class="review-readonly-note">${esc(approvalCheckNote(item, result))}</div>`;
      return `<tr><td><span class="rule-index">${String(item.sort).padStart(2, "0")}</span></td><td class="wrap">${esc(item.text)}<div class="sub">${item.selectionType === "multiple" ? "多选" : "单选"}</div></td><td>${renderAdmissionRuleControl(module, item, task, pending)}</td><td>${note}</td></tr>`;
    }).join("") || `<tr><td colspan="4" class="empty-cell">该模块暂无条目</td></tr>`;
    return `<section class="section flush admission-module-section"><div class="section-title"><span>${index + 1}. ${esc(module.title)}</span></div><div class="table-wrap rule-table-wrap"><table class="data-table compact-table admission-check-table"><thead><tr><th>序号</th><th>条目规则</th><th>核查结果</th><th>核查说明</th></tr></thead><tbody>${rows}</tbody></table></div></section>`;
  }).join("");
}

function renderAdmissionReview() {
  let product = getProduct();
  if (!product.tags.A || product.tags.A.exempt) product = industrialReviewProducts().find((item) => item.tags.A.status === "待初审") || industrialReviewProducts()[0];
  state.productId = product.id;
  const task = product.tags.A;
  const library = getLibrary("A");
  const rule = task.admissionRuleSnapshot || library.admissionRule;
  const modules = normalizeAdmissionModules(rule);
  return shell(`<section class="page">${pageHead("准入初审表单", "准入初审 / 审批表单", `<button type="button" class="btn" data-action="navigate" data-route="admission-list">返回任务列表</button>`)}
    <div class="banner info"><strong>当前角色仅负责A产品库准入初审。</strong> 初审结论只影响标签流程，不改变商品上下架；通过后流转给联合评审人员。</div>
    <div class="review-layout wide-review"><div>
      <section class="section flush"><div class="section-title"><span>审批任务信息</span>${statusTag(admissionStatus(task))}</div><div class="section-body"><dl class="kv-grid"><div class="kv"><dt>任务编号</dt><dd>${esc(product.id)}-A-R1</dd></div><div class="kv"><dt>申请产品库</dt><dd>${libraryTag("A")}</dd></div><div class="kv"><dt>提交时间</dt><dd>${esc(task.appliedAt)}</dd></div><div class="kv"><dt>规则版本</dt><dd>${esc(rule.version)}</dd></div><div class="kv"><dt>流程节点</dt><dd>准入初审</dd></div><div class="kv"><dt>产品来源</dt><dd>${esc(product.source)}</dd></div></dl></div></section>
      ${renderApplicationSubmission(library, task)}
      ${productMaterial(product)}
      <div class="admission-rule-document"><div class="document-head"><div><strong>准入规则核查</strong><span>按提交时规则快照生成 · ${esc(rule.version)}</span></div><span>${modules.length} 个模块</span></div>${renderAdmissionRuleModules(modules, task)}</div>
    </div>${renderAdmissionDecisionPanel(task)}</div>
  </section>`, "admission", "admission-list");
}

function renderScoreList() {
  const all = industrialReviewProducts().filter((product) => admissionStatus(product.tags.A) === "初审通过");
  const tabDefs = [["待评分", "待评分"], ["评分通过", "已通过"], ["待补充", "待补充"], ["评分不通过", "不通过"], ["all", "全部"]];
  const tabs = `<div class="tabs">${tabDefs.map(([value, label]) => `<button type="button" class="tab ${state.scoreTab === value ? "active" : ""}" data-action="score-tab" data-tab="${value}">${label}<span class="count">${value === "all" ? all.length : all.filter((product) => scoreStatus(product.tags.A) === value).length}</span></button>`).join("")}</div>`;
  const products = filterStageProducts(all).filter((product) => state.scoreTab === "all" || scoreStatus(product.tags.A) === state.scoreTab);
  const rows = products.map((product) => { const task = product.tags.A; const status = scoreStatus(task); return `<tr><td>${product.id}-A-S1</td><td><a data-action="open-product" data-id="${product.id}" data-route="score-review">${esc(product.name)}</a></td><td>${esc(product.company)}</td><td>${esc(product.category)}</td><td>${statusTag(product.status)}</td><td>${esc(task.admissionReview?.reviewedAt || task.appliedAt)}</td><td>${statusTag(status)}</td><td>${task.scoreReview ? `${esc(task.scoreReview.total)} 分` : "—"}</td><td><button type="button" class="btn btn-link" data-action="open-product" data-id="${product.id}" data-route="score-review">${status === "待评分" ? "开始评分" : "查看评分记录"}</button></td></tr>`; }).join("") || `<tr><td colspan="9" class="empty-cell">当前没有符合条件的联合评分任务</td></tr>`;
  return shell(`<section class="page">${pageHead("联合评分任务", "我的审批任务 / 联合评分", `<span class="role-pill">角色：联合评审组</span>`)}<div class="workflow-strip compact"><div class="workflow-step done"><b>✓</b><span>准入初审<small>另一角色已完成</small></span></div><i>→</i><div class="workflow-step active"><b>2</b><span>联合评分<small>当前角色处理</small></span></div><i>→</i><div class="workflow-step"><b>3</b><span>标签生效<small>不影响商品上下架</small></span></div></div>${tabs}${renderStageFilters()}<div class="table-wrap"><div class="table-note"><span>联合评分只决定A产品库标签是否生效，商品上架状态仅供参考。</span></div><table class="data-table"><thead><tr><th>任务编号</th><th>产品名称</th><th>申报企业</th><th>产品品类</th><th>商品状态</th><th>初审通过时间</th><th>评分状态</th><th>总分</th><th>操作</th></tr></thead><tbody>${rows}</tbody></table>${pager(products.length)}</div></section>`, "score", "score-list");
}

function calculateScoreFromGrades(grades) {
  const rule = getLibrary("A").scoreRule;
  const scores = {};
  let total = 0;
  rule.dimensions.forEach((item) => {
    scores[item.id] = Number((rule.grades[grades[item.id]] * item.weight / 100).toFixed(2));
    total += scores[item.id];
  });
  return { scores, total: Number(total.toFixed(2)) };
}

function scoreOutcome(total) {
  const rule = getLibrary("A").scoreRule;
  if (total >= rule.passScore) return { status: "评分通过", taskStatus: "已通过", label: "评分通过，A标签生效", tone: "pass" };
  if (total >= rule.supplementScore) return { status: "待补充", taskStatus: "待补充", label: "退回补充后复审", tone: "supplement" };
  return { status: "评分不通过", taskStatus: "评分不通过", label: "评分不通过，A标签不生效", tone: "reject" };
}

function renderScoreReview() {
  let product = getProduct();
  const candidates = industrialReviewProducts().filter((item) => admissionStatus(item.tags.A) === "初审通过");
  if (!product.tags.A || admissionStatus(product.tags.A) !== "初审通过") product = candidates.find((item) => item.tags.A.status === "待评分") || candidates[0];
  state.productId = product.id;
  const task = product.tags.A;
  const rule = getLibrary("A").scoreRule;
  const pending = task.status === "待评分";
  const grades = task.scoreReview?.grades || { scene: "优", maturity: "良", compliance: "良" };
  const calculated = task.scoreReview ? { scores: task.scoreReview.scores, total: task.scoreReview.total } : calculateScoreFromGrades(grades);
  const outcome = scoreOutcome(calculated.total);
  const gradeOptions = (selected) => Object.keys(rule.grades).map((grade) => `<option ${grade === selected ? "selected" : ""}>${esc(grade)}</option>`).join("");
  const rows = rule.dimensions.map((item, index) => `<tr><td><span class="rule-index">${String(index + 1).padStart(2, "0")}</span></td><td><strong>${esc(item.name)}</strong><div class="sub">加权满分 ${esc(item.weight)} 分</div></td><td>${esc(item.weight)}%</td><td><select class="table-select score-grade" data-id="${item.id}" ${pending ? "" : "disabled"}>${gradeOptions(grades[item.id])}</select></td><td class="score-base" data-id="${item.id}">${esc(rule.grades[grades[item.id]])}</td><td><strong class="score-weighted" data-id="${item.id}">${esc(calculated.scores[item.id])}</strong></td><td><input class="table-input" placeholder="填写评分依据" ${pending ? "" : "disabled"}></td></tr>`).join("");
  const side = pending ? `<aside class="section flush review-side"><div class="section-title"><span>评分结论</span></div><div class="section-body"><div class="score-total"><span>加权总分</span><strong id="scoreTotal">${esc(calculated.total)}</strong><em>/ 100</em></div><div id="scoreOutcome" class="outcome-card ${outcome.tone}"><strong>${esc(outcome.label)}</strong><span>${esc(outcome.status)}</span></div><div class="field" style="margin-top:14px"><label class="required">联合评审意见</label><textarea id="scoreOpinion" maxlength="300" placeholder="请填写综合评审意见"></textarea></div><button type="button" class="btn btn-primary btn-block" style="margin-top:13px" data-action="submit-score-review">提交评分结论</button><p class="hint">系统按当前规则自动生成结论，评分人员无需手工选择结果。</p></div></aside>` : `<aside class="section flush review-side"><div class="section-title"><span>评分记录</span></div><div class="section-body"><div class="score-total"><span>加权总分</span><strong>${esc(calculated.total)}</strong><em>/ 100</em></div><p>${statusTag(scoreStatus(task))}</p><dl class="kv"><dt>评审人员</dt><dd>${esc(task.scoreReview?.reviewer || "—")}</dd><dt style="margin-top:12px">评审时间</dt><dd>${esc(task.scoreReview?.reviewedAt || "—")}</dd><dt style="margin-top:12px">评审意见</dt><dd>${esc(task.scoreReview?.opinion || "—")}</dd></dl></div></aside>`;
  return shell(`<section class="page">${pageHead("联合评分表单", "联合评分 / 评分表单", `<button type="button" class="btn" data-action="navigate" data-route="score-list">返回任务列表</button>`)}
    <div class="banner info"><strong>当前角色仅负责A产品库联合评分。</strong> 总分 ≥80 标签生效，60～79.99 退回补充，低于 60 标签不生效；结论不改变商品上下架。</div>
    <div class="review-layout wide-review"><div>
      <section class="section flush" style="margin-bottom:16px"><div class="section-title"><span>产品及准入结论</span>${statusTag(scoreStatus(task))}</div><div class="section-body"><dl class="kv-grid"><div class="kv"><dt>产品名称</dt><dd>${esc(product.name)}</dd></div><div class="kv"><dt>申报企业</dt><dd>${esc(product.company)}</dd></div><div class="kv"><dt>产品品类</dt><dd>${esc(product.category)}</dd></div><div class="kv"><dt>初审结论</dt><dd>${statusTag(admissionStatus(task))}</dd></div><div class="kv"><dt>初审人员</dt><dd>${esc(task.admissionReview?.reviewer || "—")}</dd></div><div class="kv"><dt>初审意见</dt><dd>${esc(task.admissionReview?.opinion || "—")}</dd></div></dl></div></section>
      ${renderApplicationSubmission(getLibrary("A"), task)}
      ${productMaterial(product)}
      <section class="section flush"><div class="section-title"><span>量化评分表</span><span class="sub">规则 ${esc(rule.version)}</span></div><div class="table-wrap rule-table-wrap"><table class="data-table score-table"><thead><tr><th>序号</th><th>评价指标</th><th>权重</th><th>评价等级</th><th>等级分</th><th>加权得分</th><th>评分依据</th></tr></thead><tbody>${rows}<tr class="total-row"><td colspan="5">合计</td><td><strong>${esc(calculated.total)}</strong></td><td>满分 100</td></tr></tbody></table></div></section>
    </div>${side}</div>
  </section>`, "score", "score-list");
}

function renderLibraryConfig() {
  const rows = data.libraries.sort((a, b) => a.sort - b.sort).map((library) => {
    return `<tr><td>${library.sort}</td><td><a data-action="open-library" data-id="${library.id}">${esc(library.name)}</a></td><td>${libraryTag(library.id)}</td><td class="wrap">${esc(library.adminOrg || "未配置")}</td><td>${statusTag(library.status)}</td><td><button type="button" class="btn btn-link" data-action="open-library" data-id="${library.id}">编辑</button><button type="button" class="btn btn-link" data-action="open-entry-config" data-id="${library.id}">入库审批配置</button><button type="button" class="btn btn-link ${library.status === "启用" ? "danger-link" : ""}" data-action="toggle-library-status" data-id="${library.id}">${library.status === "启用" ? "停用" : "启用"}</button><button type="button" class="btn btn-link danger-link" data-action="delete-library" data-id="${library.id}">删除</button></td></tr>`;
  }).join("");
  return shell(`<section class="page">${pageHead("产品库配置", "产品库管理 / 产品库配置", `<button type="button" class="btn btn-primary" data-action="new-library">＋ 新增产品库</button>`)}
    <div class="table-wrap"><div class="table-note"><span>每个产品库配置一个审批企业和多个审批人；任一已选审批人审批通过即形成结果。</span></div><table class="data-table"><thead><tr><th>排序</th><th>产品库名称</th><th>商城标签样式</th><th class="wrap">审批企业</th><th>状态</th><th>操作</th></tr></thead><tbody>${rows}</tbody></table>${pager(data.libraries.length)}</div>
  </section>`, "operations", "library-config");
}

function libraryReferenceCount(libraryId) {
  return data.products.filter((product) => Object.prototype.hasOwnProperty.call(product.tags || {}, libraryId)).length;
}

function requestDeleteLibrary(id) {
  const library = data.libraries.find((item) => item.id === id);
  if (!library) return;
  const referenceCount = libraryReferenceCount(id);
  if (referenceCount > 0) {
    openModal("暂不能删除产品库", `<div class="banner danger flush">该产品库已关联 ${referenceCount} 个商品的标签申请或审批记录，为保留历史数据，不可删除。</div><p>产品库：<strong>${esc(library.name)}</strong></p>`);
    return;
  }
  if (data.libraries.length <= 1) {
    openModal("暂不能删除产品库", `<div class="banner danger flush">系统至少需要保留一个产品库。</div><p>产品库：<strong>${esc(library.name)}</strong></p>`);
    return;
  }
  openModal("删除产品库？", `<div class="banner danger flush">删除后将不再显示该产品库及其入库审批配置，且无法恢复。</div><p>产品库：<strong>${esc(library.name)}</strong></p>`, `<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-danger" data-action="confirm-delete-library" data-id="${esc(id)}">确认删除</button>`);
}

function confirmDeleteLibrary(id) {
  const library = data.libraries.find((item) => item.id === id);
  if (!library) return closeModal();
  if (libraryReferenceCount(id) > 0 || data.libraries.length <= 1) return requestDeleteLibrary(id);
  data.libraries = data.libraries.filter((item) => item.id !== id);
  state.libraryId = data.libraries[0].id;
  state.libraryDraft = null;
  state.applicationFieldDraft = null;
  state.admissionRuleDraft = null;
  state.selectedRuleModuleId = "";
  state.formTags = state.formTags.filter((libraryId) => libraryId !== id);
  delete state.tagApplicationDrafts[id];
  persist();
  closeModal();
  toast("产品库已删除");
  render();
}

function ensureLibraryDraft() {
  if (!state.libraryDraft) state.libraryDraft = clone(getLibrary());
  state.libraryDraft.applicationFields = normalizeApplicationFields(state.libraryDraft.applicationFields, state.libraryDraft.id);
  state.libraryDraft.admissionRule = state.libraryDraft.admissionRule || clone(defaultEntryRule(data));
  return state.libraryDraft;
}

function nextApplicationFieldId() {
  const draft = ensureLibraryDraft();
  const numbers = draft.applicationFields.map((field) => Number(String(field.id).replace(/\D/g, "")) || 0);
  return `${draft.id || "F"}F${String(Math.max(0, ...numbers) + 1).padStart(2, "0")}`;
}

function openApplicationFieldEditor(id = "") {
  syncLibraryDraftFromInputs();
  const draft = ensureLibraryDraft();
  const existing = draft.applicationFields.find((field) => field.id === id);
  const field = existing ? clone(existing) : { id: nextApplicationFieldId(), sort: draft.applicationFields.length + 1, name: "", type: "single", required: true, status: "启用", options: ["选项一", "选项二"] };
  state.applicationFieldDraft = { id: field.id, isNew: !existing, field };
  renderApplicationFieldEditorModal();
}

function syncApplicationFieldEditorFromModal() {
  const editor = state.applicationFieldDraft;
  if (!editor) return;
  const name = document.getElementById("applicationFieldName");
  const sort = document.getElementById("applicationFieldSort");
  const type = document.getElementById("applicationFieldType");
  const required = document.getElementById("applicationFieldRequired");
  const status = document.getElementById("applicationFieldStatus");
  if (name) editor.field.name = name.value.trim();
  if (sort) editor.field.sort = Math.max(1, Number(sort.value) || 1);
  if (type) editor.field.type = type.value;
  if (required) editor.field.required = required.value === "true";
  if (status) editor.field.status = status.value;
  const options = [...document.querySelectorAll(".application-option-input")].map((input) => input.value.trim());
  if (options.length) editor.field.options = options;
}

function renderApplicationFieldEditorModal() {
  const editor = state.applicationFieldDraft;
  if (!editor) return;
  const field = editor.field;
  const needsOptions = ["single", "multiple"].includes(field.type);
  const optionRows = field.options.map((option, index) => `<div class="application-option-row"><span>${index + 1}</span><input class="application-option-input" value="${esc(option)}" placeholder="请输入选项值"><button type="button" class="btn btn-link danger-link" data-action="remove-application-option" data-index="${index}">删除</button></div>`).join("");
  const optionEditor = needsOptions ? `<div class="enum-editor"><div class="enum-editor-head"><div><strong>可选项配置</strong><p>单选、多选字段至少配置一个选项，企业端按此顺序展示。</p></div><button type="button" class="btn btn-sm" data-action="add-application-option">＋ 增加选项</button></div><div class="application-option-labels"><span>序号</span><span>选项值</span><span>操作</span></div>${optionRows || `<div class="empty-cell">暂无选项</div>`}</div>` : `<div class="banner info flush" style="margin-top:16px">${field.type === "attachment" ? "附件字段在企业端生成上传控件，并作为申报字段的一部分进入审批单。" : "富文本字段在企业端生成带基础格式工具栏的长文本编辑区。"}</div>`;
  openModal(`${editor.isNew ? "新增" : "编辑"}申报字段`, `<div class="form-grid modal-form-grid"><div class="field span-2"><label class="required">字段名称</label><input id="applicationFieldName" value="${esc(field.name)}" placeholder="请输入企业需要填写的字段名称"></div><div class="field"><label class="required">排序</label><input id="applicationFieldSort" type="number" min="1" value="${esc(field.sort)}"></div><div class="field"><label class="required">字段类型</label><select id="applicationFieldType"><option value="single" ${field.type === "single" ? "selected" : ""}>单选</option><option value="multiple" ${field.type === "multiple" ? "selected" : ""}>多选</option><option value="richtext" ${field.type === "richtext" ? "selected" : ""}>富文本</option><option value="attachment" ${field.type === "attachment" ? "selected" : ""}>附件</option></select></div><div class="field"><label>是否必填</label><select id="applicationFieldRequired"><option value="true" ${field.required ? "selected" : ""}>必填</option><option value="false" ${!field.required ? "selected" : ""}>选填</option></select></div><div class="field"><label>字段状态</label><select id="applicationFieldStatus"><option ${field.status === "启用" ? "selected" : ""}>启用</option><option ${field.status === "停用" ? "selected" : ""}>停用</option></select></div></div>${optionEditor}`, `<button type="button" class="btn" data-action="close-application-field-editor">取消</button><button type="button" class="btn btn-primary" data-action="confirm-application-field-editor">保存</button>`);
}

function saveApplicationFieldEditor() {
  syncApplicationFieldEditorFromModal();
  const editor = state.applicationFieldDraft;
  if (!editor) return;
  if (!editor.field.name) return toast("请填写字段名称");
  if (["single", "multiple"].includes(editor.field.type)) {
    editor.field.options = editor.field.options.filter(Boolean);
    if (!editor.field.options.length) return toast("单选或多选字段至少配置一个选项");
    if (new Set(editor.field.options).size !== editor.field.options.length) return toast("选项值不能重复");
  } else {
    editor.field.options = [];
  }
  const fields = ensureLibraryDraft().applicationFields;
  const index = fields.findIndex((field) => field.id === editor.id);
  if (index >= 0) fields[index] = clone(editor.field);
  else fields.push(clone(editor.field));
  state.applicationFieldDraft = null;
  closeModal();
  toast(editor.isNew ? "已新增申报字段" : "申报字段已更新");
  render();
}

function requestDeleteApplicationField(id) {
  syncLibraryDraftFromInputs();
  const field = ensureLibraryDraft().applicationFields.find((item) => item.id === id);
  if (!field) return;
  openModal("删除申报字段？", `<div class="banner danger flush">删除后，新申请不再展示该字段；历史审批单仍按提交快照展示。</div><p><strong>${esc(field.name)}</strong> · ${applicationFieldTypeLabel(field.type)}</p>`, `<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-danger" data-action="confirm-delete-application-field" data-id="${esc(id)}">删除</button>`);
}

function renderLibraryForm() {
  const library = ensureLibraryDraft();
  const isNew = !data.libraries.some((item) => item.id === library.id);
  const applicationRows = library.applicationFields.slice().sort((a, b) => a.sort - b.sort).map((field) => `<tr><td><input class="table-input application-field-sort" data-id="${esc(field.id)}" type="number" min="1" value="${esc(field.sort)}"></td><td class="wrap"><strong>${esc(field.name)}</strong><div class="sub">字段编码：${esc(field.id)}</div></td><td>${applicationFieldTypeLabel(field.type)}</td><td class="wrap">${["single", "multiple"].includes(field.type) ? field.options.map((option) => `<span class="enum-chip pass">${esc(option)}</span>`).join(" ") : field.type === "attachment" ? "上传文件" : "长文本编辑"}</td><td>${field.required ? statusTag("必填") : `<span class="tag tag-gray">选填</span>`}</td><td>${statusTag(field.status)}</td><td><button type="button" class="btn btn-link" data-action="edit-application-field" data-id="${esc(field.id)}">编辑</button><button type="button" class="btn btn-link danger-link" data-action="delete-application-field" data-id="${esc(field.id)}">删除</button></td></tr>`).join("") || `<tr><td colspan="7" class="empty-cell">暂无申报字段，企业选择该产品库后无需填写额外信息</td></tr>`;
  return shell(`<section class="page form-page">${pageHead(isNew ? "新增产品库" : "产品库配置详情", `产品库管理 / 产品库配置 / ${library.name}`, `<button type="button" class="btn" data-action="cancel-library">返回列表</button><button type="button" class="btn btn-primary" data-action="save-library">保存</button>`)}
    <div class="form-section">
      <h2>基本信息</h2><div class="form-grid">
        <div class="field"><label class="required">产品库名称</label><input id="libName" value="${esc(library.name)}"></div>
        <div class="field"><label class="required">状态</label><select id="libStatus"><option ${library.status === "启用" ? "selected" : ""}>启用</option><option ${library.status === "停用" ? "selected" : ""}>停用</option></select></div>
        <div class="field"><label class="required">商城标签颜色</label><select id="libColor"><option value="gold" ${library.color === "gold" ? "selected" : ""}>金色</option><option value="blue" ${library.color === "blue" ? "selected" : ""}>蓝色</option><option value="green" ${library.color === "green" ? "selected" : ""}>绿色</option></select></div>
        <div class="field"><label>排序</label><input id="libSort" type="number" min="1" value="${esc(library.sort)}"></div>
        <div class="field span-all"><label>产品库说明</label><textarea id="libDescription">${esc(library.description)}</textarea></div>
      </div>
      <h2>产品库信息（企业申报字段配置）</h2><div class="table-note"><button type="button" class="btn btn-primary btn-sm" style="margin-left:auto" data-action="new-application-field">＋ 新增条目</button></div><div class="table-wrap rule-table-wrap"><table class="data-table application-field-table"><thead><tr><th style="width:90px">排序</th><th>字段名称</th><th>字段类型</th><th>选项 / 控件</th><th>是否必填</th><th>状态</th><th>操作</th></tr></thead><tbody>${applicationRows}</tbody></table></div>
    </div><div class="form-footer"><button type="button" class="btn" data-action="cancel-library">取消</button><button type="button" class="btn btn-primary" data-action="save-library">保存</button></div>
  </section>`, "operations", "library-config");
}

function adminProducts() {
  const library = getLibrary();
  return nonScenarioProducts().filter((product) => product.tags[library.id]);
}

function filteredAdminProducts() {
  return adminProducts().filter((product) => {
    const task = product.tags[state.libraryId];
    const tabMatch = state.adminTab === "all" || task.status === state.adminTab;
    const keywordMatch = !state.adminFilters.keyword || product.name.toLowerCase().includes(state.adminFilters.keyword.toLowerCase());
    const companyMatch = !state.adminFilters.company || product.company.toLowerCase().includes(state.adminFilters.company.toLowerCase());
    return tabMatch && keywordMatch && companyMatch;
  });
}

function entryScoreResult(task, itemId) {
  return task.approvalReview?.scores?.find((item) => item.itemId === itemId) || null;
}

function renderEntryScoreTable(scoreItems, task) {
  const pending = task.status === "待审核";
  const rows = scoreItems.slice().sort((a, b) => a.sort - b.sort).map((item, index) => {
    const result = entryScoreResult(task, item.id);
    const score = pending ? `<div class="score-max-input"><input class="table-input entry-score-value" data-id="${esc(item.id)}" data-name="${esc(item.name)}" data-max="${esc(item.maxScore)}" type="number" min="0" max="${esc(item.maxScore)}" step="1" value="${esc(result?.score ?? "")}" placeholder="0"><span>分</span></div>` : `<span class="review-readonly-score">${esc(result?.score ?? "—")}<small> 分</small></span>`;
    const note = pending ? `<input class="table-input entry-score-note" data-id="${esc(item.id)}" value="${esc(result?.note || "")}" placeholder="填写评分说明（选填）">` : `<div class="review-readonly-note">${esc(approvalScoreNote(item, result))}</div>`;
    return `<tr><td><span class="rule-index">${String(index + 1).padStart(2, "0")}</span></td><td class="wrap"><strong>${esc(item.name)}</strong></td><td>${esc(item.maxScore)} 分</td><td>${score}</td><td>${note}</td></tr>`;
  }).join("") || `<tr><td colspan="5" class="empty-cell">该产品库未配置评价指标</td></tr>`;
  const total = task.approvalReview?.total ?? 0;
  return `<section class="section flush entry-score-section"><div class="section-title"><span>评价指标评分</span><span class="sub">直接打分 · 不自动判定结果</span></div><div class="table-wrap rule-table-wrap"><table class="data-table score-table entry-score-table"><thead><tr><th>序号</th><th>评价指标</th><th>指标满分</th><th>实际得分</th><th>评分说明</th></tr></thead><tbody>${rows}<tr class="total-row"><td colspan="3">总分</td><td><strong id="entryScoreTotal">${esc(total)}</strong> / 100</td><td>仅作为人工审批依据</td></tr></tbody></table></div></section>`;
}

function updateEntryScoreTotal() {
  const total = [...document.querySelectorAll(".entry-score-value")].reduce((sum, input) => sum + (Number(input.value) || 0), 0);
  const tableTotal = document.getElementById("entryScoreTotal");
  const sideTotal = document.getElementById("entryScoreSideTotal");
  if (tableTotal) tableTotal.textContent = total;
  if (sideTotal) sideTotal.textContent = total;
}

function updateScoreRuleTotal() {
  const total = [...document.querySelectorAll(".score-item-max")].reduce((sum, input) => sum + (Number(input.value) || 0), 0);
  const element = document.getElementById("scoreRuleTotal");
  if (!element) return;
  element.textContent = total;
  element.className = total === 100 ? "score-total-valid" : "score-total-invalid";
  const stateElement = document.getElementById("scoreRuleState");
  if (stateElement) stateElement.innerHTML = total === 100 ? statusTag("已满足") : statusTag("需调整");
}

function renderEntryDecisionPanel(task) {
  const record = task.approvalReview;
  if (task.status !== "待审核") return `<aside class="section flush review-side"><div class="section-title"><span>审批记录</span></div><div class="section-body"><p>${statusTag(task.status)}</p><div class="score-total"><span>审批评分</span><strong>${esc(record?.total ?? "—")}</strong><em>/ 100</em></div><dl class="kv" style="margin-top:16px"><dt>审批人</dt><dd>${esc(record?.reviewer || task.reviewer || "—")}</dd><dt style="margin-top:12px">审批时间</dt><dd>${esc(record?.reviewedAt || task.reviewedAt || "—")}</dd><dt style="margin-top:12px">审批意见</dt><dd>${esc(record?.opinion || task.opinion || "—")}</dd></dl><p class="hint">任一已选审批人提交通过结论后任务即完成，其他审批人仅可查看。</p></div></aside>`;
  return `<aside class="section flush review-side"><div class="section-title"><span>审批结论</span></div><div class="section-body"><div class="score-total"><span>当前总分</span><strong id="entryScoreSideTotal">0</strong><em>/ 100</em></div><div class="decision-stack" style="margin-top:14px"><label class="decision-option"><input type="radio" name="entryDecision" value="pass">入库通过</label><label class="decision-option"><input type="radio" name="entryDecision" value="return">退回企业补充</label></div><div class="field" style="margin-top:13px"><label class="required">审批意见</label><textarea id="entryOpinion" maxlength="300" placeholder="请填写审批意见或退回原因"></textarea></div><button type="button" class="btn btn-primary btn-block" style="margin-top:13px" data-action="submit-entry-review">提交</button><p class="hint">请结合准入核查与指标评分人工判断，分数不自动生成结论。</p></div></aside>`;
}

function renderAdminList() {
  const library = getLibrary();
  const all = adminProducts();
  const products = filteredAdminProducts();
  const tabs = `<div class="tabs">${[["待审核", "待审核"], ["已通过", "已通过"], ["已退回", "已退回"], ["all", "全部"]].map(([value, label]) => `<button type="button" class="tab ${state.adminTab === value ? "active" : ""}" data-action="admin-tab" data-tab="${value}">${label}<span class="count">${value === "all" ? all.length : all.filter((product) => product.tags[library.id].status === value).length}</span></button>`).join("")}</div>`;
  const rows = products.map((product) => { const task = product.tags[library.id]; return `<tr><td>${product.id}-${library.id}</td><td><a data-action="open-product" data-id="${product.id}" data-route="admin-review">${esc(product.name)}</a></td><td>${esc(product.company)}</td><td>${esc(product.category)}</td><td>${statusTag(product.status)}</td><td>${esc(task.appliedAt)}</td><td>${statusTag(task.status)}</td><td>${esc(task.approvalReview?.reviewer || task.reviewer || "—")}</td><td>${task.status === "待审核" ? `<button type="button" class="btn btn-link" data-action="open-product" data-id="${product.id}" data-route="admin-review">进入审批</button>` : ""}</td></tr>`; }).join("") || `<tr><td colspan="9" class="empty-cell">当前产品库没有符合条件的入库申请</td></tr>`;
  const libraryOptions = data.libraries.filter((item) => item.status === "启用").map((item) => `<option value="${item.id}" ${item.id === library.id ? "selected" : ""}>${esc(item.name)}</option>`).join("");
  return shell(`<section class="page">${pageHead(`${library.name}入库审批`, "企业工作台 / 产品库管理 / 入库审批")}${tabs}
    <div class="filter-panel"><div class="filter-grid"><div class="field"><label>当前产品库</label><select id="adminLibrary" data-action="switch-admin-library">${libraryOptions}</select></div><div class="field"><label>商品名称</label><input id="adminKeyword" value="${esc(state.adminFilters.keyword)}" placeholder="请输入商品名称"></div><div class="field"><label>申请企业</label><input id="adminCompany" value="${esc(state.adminFilters.company)}" placeholder="请输入企业名称"></div><div class="actions"><button type="button" class="btn btn-primary" data-action="admin-search">查询</button><button type="button" class="btn" data-action="admin-reset">重置</button></div></div></div>
    <div class="table-wrap"><table class="data-table"><thead><tr><th>申请单号</th><th>商品名称</th><th>申请企业</th><th>品类</th><th>商品状态</th><th>申请时间</th><th>审批状态</th><th>审批人</th><th>操作</th></tr></thead><tbody>${rows}</tbody></table>${pager(products.length)}</div>
  </section>`, "enterprise", "admin-list");
}

function managedLibraryProducts() {
  const library = getLibrary();
  return nonScenarioProducts().filter((product) => {
    const task = product.tags[library.id];
    return Boolean(task) && (task.status === "已通过" || taskTagStatus(task) === "已下架");
  });
}

function filteredManagedLibraryProducts() {
  const filters = state.adminProductFilters;
  return managedLibraryProducts().filter((product) => {
    const task = product.tags[state.libraryId];
    const keywordMatch = !filters.keyword || `${product.name}${product.id}`.toLowerCase().includes(filters.keyword.toLowerCase());
    const companyMatch = !filters.company || product.company.toLowerCase().includes(filters.company.toLowerCase());
    const categoryMatch = filters.category === "all" || product.category === filters.category;
    const approvalMatch = filters.approvalStatus === "all" || latestApprovalStatus(task) === filters.approvalStatus;
    return keywordMatch && companyMatch && categoryMatch && approvalMatch;
  });
}

function renderAdminProducts() {
  const library = getLibrary();
  const all = managedLibraryProducts();
  const products = filteredManagedLibraryProducts();
  const categories = [...new Set(all.map((product) => product.category))];
  const libraryOptions = data.libraries.filter((item) => item.status === "启用").map((item) => `<option value="${item.id}" ${item.id === library.id ? "selected" : ""}>${esc(item.name)}</option>`).join("");
  const tabs = `<div class="tabs">${[["all", "全部"], ["已通过", "已通过"], ["已退回", "已退回"]].map(([value, label]) => `<button type="button" class="tab ${state.adminProductFilters.approvalStatus === value ? "active" : ""}" data-action="admin-product-status" data-status="${value}">${label}<span class="count">${value === "all" ? all.length : all.filter((product) => latestApprovalStatus(product.tags[library.id]) === value).length}</span></button>`).join("")}</div>`;
  const rows = products.map((product) => {
    const task = product.tags[library.id];
    const lifecycle = taskTagStatus(task);
    const entered = latestLifecycleEvent(task, "入库生效");
    const changed = latestLifecycleEvent(task);
    const productStatus = product.status === "已上架" ? `<span class="tag tag-green">审批通过</span>` : statusTag(product.status);
    const actions = `<button type="button" class="btn btn-link" data-action="open-product" data-id="${product.id}" data-route="admin-review">${task.status === "待审核" ? "进入审批" : "查看审批"}</button>${lifecycle === "生效中" ? `<button type="button" class="btn btn-link danger-link" data-action="open-tag-delist" data-id="${product.id}" data-library-id="${library.id}">下架标签</button>` : ""}`;
    return `<tr><td>${esc(product.id)}</td><td><a data-action="open-product" data-id="${product.id}" data-route="admin-review">${esc(product.name)}</a></td><td>${esc(product.company)}</td><td>${esc(product.category)}</td><td>${productStatus} ${statusTag(product.supplyStatus)}</td><td>${statusTag(latestApprovalStatus(task))}</td><td>${esc(entered?.at || task.approvalReview?.reviewedAt || task.reviewedAt || "—")}</td><td><span>${esc(changed?.at || "—")}</span><div class="sub">${esc(changed?.operator || "—")}</div></td><td>${actions}</td></tr>`;
  }).join("") || `<tr><td colspan="9" class="empty-cell">当前产品库没有符合条件的商品</td></tr>`;
  return shell(`<section class="page admin-products-page">${pageHead(`${library.name}在库商品`, "企业工作台 / 产品库管理 / 在库商品")}${tabs}
    <div class="banner info">下架标签后，当前有效申请单退回企业；不改变商品平台上下架、供货状态及其他产品库标签。</div>
    <div class="filter-panel"><div class="filter-grid"><div class="field"><label>当前产品库</label><select id="adminProductLibrary" data-action="switch-admin-product-library">${libraryOptions}</select></div><div class="field"><label>商品名称 / 编号</label><input id="adminProductKeyword" value="${esc(state.adminProductFilters.keyword)}" placeholder="请输入商品名称或编号"></div><div class="field"><label>供应企业</label><input id="adminProductCompany" value="${esc(state.adminProductFilters.company)}" placeholder="请输入企业名称"></div><div class="field"><label>品类</label><select id="adminProductCategory"><option value="all">全部</option>${categories.map((category) => `<option value="${esc(category)}" ${state.adminProductFilters.category === category ? "selected" : ""}>${esc(category)}</option>`).join("")}</select></div><div class="actions"><button type="button" class="btn btn-primary" data-action="admin-product-search">查询</button><button type="button" class="btn" data-action="admin-product-reset">重置</button></div></div></div>
    <div class="table-wrap"><div class="table-note"><span class="sub" style="margin-left:auto">重新入库须由申请企业通过“供应管理 → 标签管理”重新申请</span></div><table class="data-table admin-products-table"><thead><tr><th>商品编号</th><th>供应名称</th><th>供应企业</th><th>需求品类</th><th>商品 / 供货状态</th><th>最近审批</th><th>入库时间</th><th>最近变更</th><th>操作</th></tr></thead><tbody>${rows}</tbody></table>${pager(products.length)}</div>
  </section>`, "enterprise", "admin-products");
}

function openTagDelistModal(productId, libraryId) {
  const product = getProduct(productId);
  const library = getLibrary(libraryId);
  const task = product.tags[library.id];
  if (!task || !isActiveLibraryTag(task)) return toast("该产品库标签当前不是生效状态");
  const productStatus = product.status === "已上架" ? `<span class="tag tag-green">审批通过</span>` : statusTag(product.status);
  openModal("下架产品库标签", `<div class="banner danger flush"><strong>${esc(library.name)}</strong> 标签将从“${esc(product.name)}”移除。</div><dl class="kv-grid compact-kv"><div class="kv"><dt>商品平台状态</dt><dd>${productStatus} ${statusTag(product.supplyStatus)}</dd></div><div class="kv"><dt>其他标签</dt><dd>${activeLibraryIds(product).filter((id) => id !== library.id).map(libraryTag).join("") || "无"}</dd></div></dl><div class="field" style="margin-top:16px"><label class="required">下架原因</label><textarea id="tagDelistReason" maxlength="200" placeholder="请填写下架原因，企业端将同步展示"></textarea><div class="hint">下架后企业可修改申报信息并重新申请；重新生效仍需完成入库审批。</div></div>`, `<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-danger" data-action="confirm-tag-delist" data-id="${product.id}" data-library-id="${library.id}">确认下架标签</button>`);
}

function confirmTagDelist(productId, libraryId) {
  const reason = document.getElementById("tagDelistReason")?.value.trim() || "";
  if (!reason) return toast("请填写下架原因");
  const product = getProduct(productId);
  const library = getLibrary(libraryId);
  const task = product.tags[library.id];
  if (!task || !isActiveLibraryTag(task)) return toast("该产品库标签状态已发生变化");
  const timestamp = nowText();
  const operator = library.admins.find((admin) => admin.status === "启用")?.name || "产品库管理员";
  task.lifecycleHistory = Array.isArray(task.lifecycleHistory) ? task.lifecycleHistory : [];
  if (!latestLifecycleEvent(task, "入库生效")) task.lifecycleHistory.push({ type: "入库生效", at: task.approvalReview?.reviewedAt || task.reviewedAt || task.appliedAt, operator: task.approvalReview?.reviewer || task.reviewer || operator, reason: task.approvalReview?.opinion || task.opinion || "入库审批通过" });
  task.tagStatus = "已下架";
  task.delistedAt = timestamp;
  task.delistedBy = operator;
  task.delistedReason = reason;
  task.lifecycleHistory.push({ type: "标签下架", at: timestamp, operator, reason });
  returnDelistedApplication(task);
  product.tagWorkflowActive = true;
  product.submissionHistory.push(`${timestamp} ${library.name}标签由${operator}下架：${reason}（商品平台状态不变）`);
  persist();
  closeModal();
  toast("标签已下架，当前有效申请单已退回，商品平台状态不变");
  render();
}

function renderAdminReview() {
  let product = getProduct();
  const library = getLibrary();
  let task = product.tags[library.id];
  if (!task) {
    product = adminProducts().find((item) => item.tags[library.id].status === "待审核") || adminProducts()[0];
    if (!product) return renderAdminList();
    state.productId = product.id;
    task = product.tags[library.id];
  }
  const rule = task.approvalRuleSnapshot || library.admissionRule;
  const modules = normalizeAdmissionModules(rule);
  const scoreItems = normalizeScoreItems(rule.scoreItems);
  return shell(`<section class="page">${pageHead(`${library.name}入库审批详情`, "企业工作台 / 产品库管理 / 入库审批详情", `<button type="button" class="btn" data-action="navigate" data-route="${esc(state.adminReviewBackRoute)}">${state.adminReviewBackRoute === "admin-products" ? "返回在库商品" : "返回审批列表"}</button>`)}
    <div class="banner info"><strong>一次审批完成。</strong> 当前管理员在同一张审批单中完成准入核查、指标评分和人工结论；结果只影响当前产品库标签，不改变商品上下架。</div>
    <div class="review-layout wide-review"><div>
      <section class="section flush" style="margin-bottom:16px"><div class="section-title"><span>入库申请信息</span><span>${statusTag(task.status)} ${tagLifecycleTag(task)}</span></div><div class="section-body"><dl class="kv-grid"><div class="kv"><dt>申请单号</dt><dd>${esc(product.id)}-${esc(library.id)}</dd></div><div class="kv"><dt>申请产品库</dt><dd>${libraryTag(library.id)}</dd></div><div class="kv"><dt>商品名称</dt><dd>${esc(product.name)}</dd></div><div class="kv"><dt>申请企业</dt><dd>${esc(product.company)}</dd></div><div class="kv"><dt>申请时间</dt><dd>${esc(task.appliedAt)}</dd></div><div class="kv"><dt>商品当前状态</dt><dd>${statusTag(product.status)}</dd></div><div class="kv"><dt>审批企业</dt><dd>${esc(library.adminOrg)}</dd></div><div class="kv"><dt>可审批人员</dt><dd>${esc(library.admins.filter((admin) => admin.status === "启用").map((admin) => admin.name).join("、"))}</dd></div></dl></div></section>
      ${renderApplicationSubmission(library, task)}
      ${productMaterial(product)}
      <div class="admission-rule-document"><div class="document-head"><strong>准入规则核查</strong></div>${renderAdmissionRuleModules(modules, task)}</div>${renderEntryScoreTable(scoreItems, task)}
    </div>${renderEntryDecisionPanel(task)}</div>
  </section>`, "enterprise", state.adminReviewBackRoute === "admin-products" ? "admin-products" : "admin-list");
}

function render() {
  let html;
  const current = route();
  if (current === "mall") html = renderMall();
  else if (current === "mall-detail") html = renderMallDetail();
  else if (current === "enterprise-list") html = renderEnterpriseList();
  else if (current === "enterprise-form") html = renderEnterpriseForm();
  else if (current === "enterprise-detail") html = renderEnterpriseDetail();
  else if (current === "ops-list") html = renderOpsList();
  else if (current === "ops-supply-form") html = renderEnterpriseForm("operations");
  else if (current === "ops-supply-detail") html = renderEnterpriseDetail("operations");
  else if (current === "ops-review") html = renderOpsList();
  else if (current === "import-products") html = renderLibraryConfig();
  else if (current === "library-config") html = renderLibraryConfig();
  else if (current === "library-form") html = renderLibraryForm();
  else if (current === "rule-admission") html = renderAdmissionRuleConfig();
  else if (current === "rule-score") html = renderAdmissionRuleConfig();
  else if (["admission-list", "score-list"].includes(current)) { state.libraryId = "A"; html = renderAdminList(); }
  else if (["admission-review", "score-review"].includes(current)) { state.libraryId = "A"; html = renderAdminReview(); }
  else if (current === "admin-list") html = renderAdminList();
  else if (current === "admin-review") html = renderAdminReview();
  else if (current === "admin-products") html = renderAdminProducts();
  else html = renderEnterpriseList();
  document.getElementById("app").innerHTML = html;
  renderSwitcher();
  if (typeof afterQrRender === "function") afterQrRender();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function beginNewProduct() {
  const nextId = `P${String(Math.max(...data.products.filter((item) => /^P\d+$/.test(item.id)).map((item) => Number(item.id.slice(1)) || 0)) + 1).padStart(3, "0")}`;
  const product = clone(INITIAL_DATA.products.find((item) => item.id === "P003"));
  Object.assign(product, { id: nextId, name: "", aliases: "", status: "草稿", supplyStatus: "停供", normalStatus: "未提交", submittedAt: "—", tags: {}, normalReview: null, submissionHistory: [], skus: [{ model: "", price: "", supplyStatus: "停供" }], cases: [], userCreated: true });
  data.products.push(product);
  state.productId = nextId;
  state.formMode = "new";
  state.formTags = [];
  state.tagApplicationDrafts = {};
  state.tagApplicationModal = null;
  persist();
  navigate("enterprise-form");
}

function beginEditProduct(id, targetRoute = "enterprise-form") {
  state.productId = id;
  state.formMode = "edit";
  state.formTags = [];
  state.tagApplicationDrafts = {};
  state.tagApplicationModal = null;
  navigate(targetRoute);
}

function beginTagApplication(product, libraryId = "") {
  openTagManagementModal(product, libraryId);
}

function applyFormToProduct(product, formData, submitted) {
  const tagOnly = formData.submissionMode === "tag";
  if (!tagOnly && formData.baseChanged) PRODUCT_FORM_FIELDS.forEach((field) => { product[field] = formData[field]; });
  if (!submitted) return;
  const submittedAt = nowText();
  if (!tagOnly && formData.baseChanged) {
    if (formData.keepListed) {
      product.submittedAt = submittedAt;
      product.normalReview = null;
      product.normalStatus = "待运营审核";
      product.submissionHistory.push(`${submittedAt} 提交商品字段变更审批（商品保持上架）`);
    } else {
      product.submittedAt = submittedAt;
      product.status = "待审核";
      product.supplyStatus = "停供";
      product.normalReview = null;
      product.normalStatus = "待运营审核";
      product.submissionHistory.push(`${submittedAt} 提交商品上架审批`);
    }
  }
  if (formData.selectedTags.length) {
    const nextTags = { ...product.tags };
    formData.selectedTags.forEach((id) => {
      const library = getLibrary(id);
      const previousTask = nextTags[id] || null;
      const wasDelisted = taskTagStatus(previousTask) === "已下架";
      const wasReturned = previousTask?.status === "已退回";
      const lifecycleHistory = clone(previousTask?.lifecycleHistory || []);
      if (wasDelisted && latestLifecycleEvent(previousTask)?.type === "标签下架") lifecycleHistory.push({ type: "下架后重新申请", at: submittedAt, operator: product.company, reason: "企业更新申报信息后重新申请产品库标签。" });
      else if (wasReturned) lifecycleHistory.push({ type: "退回后重新提交", at: submittedAt, operator: product.company, reason: "企业修改申报信息后重新提交。" });
      else if (wasDelisted) lifecycleHistory.push({ type: "下架后重新申请", at: submittedAt, operator: product.company, reason: "企业更新申报信息后重新申请产品库标签。" });
      else lifecycleHistory.push({ type: "提交申请", at: submittedAt, operator: product.company, reason: "企业提交产品库标签申请。" });
      const applicationBundle = formData.tagApplications[id] || { fields: [], values: {} };
      const richTextField = applicationBundle.fields.find((field) => field.type === "richtext");
      const attachmentFields = applicationBundle.fields.filter((field) => field.type === "attachment");
      nextTags[id] = {
        status: "待审核",
        tagStatus: wasDelisted ? "已下架" : "未生效",
        lifecycleHistory,
        applicationFields: clone(applicationBundle.fields),
        applicationData: clone(applicationBundle.values),
        application: richTextField ? applicationBundle.values[richTextField.id] || "" : "",
        files: attachmentFields.flatMap((field) => applicationBundle.values[field.id] || []),
        appliedAt: submittedAt,
        reviewer: "",
        reviewedAt: "",
        opinion: "",
        approvalRuleSnapshot: clone(library.admissionRule),
        approvalReview: null
      };
    });
    product.tags = nextTags;
    product.submissionHistory.push(`${submittedAt} 提交 ${formData.selectedTags.join("、")} 标签申请（不影响商品上下架）`);
  }
}

function handleSubmitReview(type) {
  const decision = document.querySelector('input[name="decision"]:checked');
  const opinion = document.getElementById("reviewOpinion")?.value.trim();
  if (!decision) return toast("请选择审核结论");
  if (!opinion) return toast("请输入审核意见");
  const target = decision.value === "pass" ? "已通过" : type === "library" ? "已退回" : "已驳回";
  state.pendingReview = { type, target, opinion };
  const resultText = type === "library" && getProduct().tags[state.libraryId] ? `${getLibrary().name}标签：${target}` : `商品上架审批：${target}`;
  openModal("确认提交审核结论？", `<p><strong>${esc(resultText)}</strong></p><p>审核意见：${esc(opinion)}</p><p class="sub">提交后将记录审核人员和时间，并通知申请企业。</p>`, `<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-primary" data-action="confirm-review">确认提交</button>`);
}

function confirmReview() {
  const pending = state.pendingReview;
  if (!pending) return;
  const product = getProduct();
  const timestamp = nowText();
  if (pending.type === "normal") {
    product.normalStatus = pending.target;
    product.normalReview = { reviewer: "刘运营", reviewedAt: timestamp, opinion: pending.opinion, status: pending.target };
    product.status = pending.target === "已通过" ? "已上架" : "审核驳回";
    product.supplyStatus = pending.target === "已通过" ? "可供" : "停供";
    product.submissionHistory.push(`${timestamp} 运营上架审核${pending.target === "已通过" ? "通过" : "驳回"}`);
  } else {
    const task = product.tags[state.libraryId];
    task.status = pending.target;
    task.reviewer = getLibrary().admins.find((admin) => admin.status === "启用")?.name || "产品库管理员";
    task.reviewedAt = timestamp;
    task.opinion = pending.opinion;
    task.lifecycleHistory = Array.isArray(task.lifecycleHistory) ? task.lifecycleHistory : [];
    if (pending.target === "已通过") {
      task.tagStatus = "生效中";
      task.lifecycleHistory.push({ type: "入库生效", at: timestamp, operator: task.reviewer, reason: pending.opinion });
    } else {
      if (taskTagStatus(task) !== "已下架") task.tagStatus = "未生效";
      task.lifecycleHistory.push({ type: "审批退回", at: timestamp, operator: task.reviewer, reason: pending.opinion });
    }
    product.submissionHistory.push(`${timestamp} ${getLibrary().name}标签${pending.target === "已通过" ? "通过" : "驳回"}`);
  }
  persist();
  state.pendingReview = null;
  closeModal();
  toast(pending.type === "normal" ? "上架审核结论已提交，商品状态已更新" : "标签审核结论已提交，不影响商品上下架");
  navigate(pending.type === "normal" ? "ops-list" : "admin-list");
}

function handleEntryReview() {
  const product = getProduct();
  const library = getLibrary();
  const task = product.tags[library.id];
  if (!task || task.status !== "待审核") return toast("该任务已由其他管理员处理");
  const decision = document.querySelector('input[name="entryDecision"]:checked')?.value;
  const opinion = document.getElementById("entryOpinion")?.value.trim();
  if (!decision) return toast("请选择审批结论");
  if (!opinion) return toast("请填写审批意见");

  const rule = task.approvalRuleSnapshot || library.admissionRule;
  const modules = normalizeAdmissionModules(rule);
  const controls = [...document.querySelectorAll(".admission-rule-control")];
  const notes = [...document.querySelectorAll(".admission-rule-note")];
  const checkResults = [];
  for (const module of modules) {
    for (const item of module.items) {
      const itemControls = controls.filter((control) => control.dataset.moduleId === module.id && control.dataset.ruleId === item.id);
      let selected = [];
      if (item.selectionType === "multiple") {
        const checked = itemControls.filter((control) => control.checked);
        selected = checked.map((control) => control.value);
      } else {
        const select = itemControls[0];
        if (select?.value) {
          selected = [select.value];
        }
      }
      if (!selected.length) return toast(`请完成“${module.title}”中的核查项`);
      const note = notes.find((input) => input.dataset.moduleId === module.id && input.dataset.ruleId === item.id)?.value.trim() || "";
      checkResults.push({ moduleId: module.id, moduleTitle: module.title, itemId: item.id, itemText: item.text, selectionType: item.selectionType, values: selected, note });
    }
  }

  const scoreItems = normalizeScoreItems(rule.scoreItems);
  const scoreInputs = [...document.querySelectorAll(".entry-score-value")];
  const scores = [];
  for (const item of scoreItems) {
    const input = scoreInputs.find((element) => element.dataset.id === item.id);
    if (!input || input.value === "") return toast(`请填写“${item.name}”的实际得分`);
    const score = Number(input.value);
    if (!Number.isInteger(score) || score < 0 || score > item.maxScore) return toast(`“${item.name}”得分须为 0 至 ${item.maxScore} 的整数`);
    scores.push({ itemId: item.id, itemName: item.name, maxScore: item.maxScore, score, note: document.querySelector(`.entry-score-note[data-id="${item.id}"]`)?.value.trim() || "" });
  }
  const total = scores.reduce((sum, item) => sum + item.score, 0);
  const target = decision === "pass" ? "已通过" : "已退回";
  state.pendingReview = { type: "entry", target, opinion, checkResults, scores, total };
  openModal("确认提交入库审批？", `<div class="score-confirm"><span>本次评分</span><strong>${esc(total)}</strong><em>分</em></div><p>${statusTag(target)}　${decision === "pass" ? "通过后当前产品库标签生效" : "企业补充后可重新申请"}</p><p>审批意见：${esc(opinion)}</p><p class="sub">任一已选审批人提交通过结论后，本次任务立即完成，其他审批人只能查看记录。</p>`, `<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-primary" data-action="confirm-entry-review">确认提交</button>`);
}

function confirmEntryReview() {
  const pending = state.pendingReview;
  if (!pending || pending.type !== "entry") return;
  const product = getProduct();
  const library = getLibrary();
  const task = product.tags[library.id];
  if (!task || task.status !== "待审核") {
    state.pendingReview = null;
    closeModal();
    return toast("该任务已由其他管理员处理");
  }
  const timestamp = nowText();
  const reviewer = library.admins.find((admin) => admin.status === "启用")?.name || "产品库管理员";
  task.status = pending.target;
  task.reviewer = reviewer;
  task.reviewedAt = timestamp;
  task.opinion = pending.opinion;
  task.approvalReview = { status: pending.target, reviewer, reviewedAt: timestamp, opinion: pending.opinion, checkResults: clone(pending.checkResults), scores: clone(pending.scores), total: pending.total };
  task.lifecycleHistory = Array.isArray(task.lifecycleHistory) ? task.lifecycleHistory : [];
  if (pending.target === "已通过") {
    task.tagStatus = "生效中";
    task.lifecycleHistory.push({ type: "入库生效", at: timestamp, operator: reviewer, reason: pending.opinion });
  } else {
    if (taskTagStatus(task) !== "已下架") task.tagStatus = "未生效";
    task.lifecycleHistory.push({ type: "审批退回", at: timestamp, operator: reviewer, reason: pending.opinion });
  }
  product.submissionHistory.push(`${timestamp} ${library.name}入库审批${pending.target === "已通过" ? "通过，标签生效" : "退回补充"}（${pending.total} 分）`);
  persist();
  state.pendingReview = null;
  closeModal();
  toast("入库审批结论已提交，不影响商品上下架");
  navigate("admin-list");
}

function syncLibraryDraftFromInputs() {
  const draft = ensureLibraryDraft();
  const fieldMap = {
    libName: "name", libStatus: "status", libColor: "color", libDescription: "description",
    libOrg: "adminOrg", libApprovalMode: "approvalMode", libPassAction: "passAction", libRejectAction: "rejectAction"
  };
  Object.entries(fieldMap).forEach(([id, field]) => {
    const element = document.getElementById(id);
    if (element) draft[field] = element.value.trim();
  });
  const sort = Number(document.getElementById("libSort")?.value);
  if (sort) draft.sort = sort;
  document.querySelectorAll(".application-field-sort").forEach((input) => {
    const field = draft.applicationFields.find((item) => item.id === input.dataset.id);
    if (field) field.sort = Math.max(1, Number(input.value) || 1);
  });
}

function chooseOrganization() {
  syncLibraryDraftFromInputs();
  openModal("选择管理员组织", `<div class="field"><label>企业名称</label><input placeholder="输入企业名称搜索"></div><div style="margin-top:12px">${Object.keys(ORGANIZATIONS).map((name) => `<button type="button" class="scenario-card" style="width:100%;margin-bottom:8px" data-action="select-org" data-org="${esc(name)}"><strong>${esc(name)}</strong><span>可选账号 ${ORGANIZATIONS[name].length} 个</span></button>`).join("")}</div>`);
}

function chooseAdmins() {
  syncLibraryDraftFromInputs();
  const draft = ensureLibraryDraft();
  const accounts = ORGANIZATIONS[draft.adminOrg] || [];
  const selectedIds = new Set(draft.admins.map((admin) => admin.id));
  openModal("选择管理员账号", accounts.length ? accounts.map((account) => `<label class="check-card"><input type="checkbox" name="adminChoice" value="${account.id}" ${selectedIds.has(account.id) ? "checked" : ""}><span><strong>${esc(account.name)}</strong><span class="sub">${esc(account.id)} · ${esc(account.phone)}</span></span></label>`).join("") : `<div class="empty-cell">该组织暂无可选账号</div>`, `<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-primary" data-action="confirm-admins">确认</button>`);
}

function saveLibrary() {
  syncLibraryDraftFromInputs();
  const draft = ensureLibraryDraft();
  if (!draft.name) return toast("请填写产品库名称");
  if (!draft.id) return toast("系统未生成产品库标识，请返回重试");
  draft.applicationFields = normalizeApplicationFields(draft.applicationFields, draft.id);
  const existingIndex = data.libraries.findIndex((item) => item.id === draft.id);
  if (existingIndex >= 0) data.libraries[existingIndex] = clone(draft);
  else data.libraries.push(clone(draft));
  persist();
  state.libraryId = draft.id;
  state.libraryDraft = null;
  toast("产品库配置已保存");
  navigate("library-config");
}

function saveRuleConfig(type) {
  const library = getLibrary();
  syncAdmissionRuleDraftFromPage();
  const draft = ensureAdmissionRuleDraft();
  if (!library.adminOrg) return toast("请配置审批企业");
  if (!library.admins.some((admin) => admin.status === "启用")) return toast("请至少配置一名审批人");
  if (!draft.modules.length) return toast("准入规则至少配置一个模块");
  const invalidModule = draft.modules.find((module) => !module.title || !module.items.length || module.items.some((item) => !item.text || !item.options.length || item.options.some((option) => !option.label)));
  if (invalidModule) return toast(`请完整配置模块“${invalidModule.title || "未命名模块"}”及其条目`);
  if (!draft.scoreItems.length) return toast("请至少配置一个评价指标");
  if (draft.scoreItems.some((item) => !item.name || !Number.isInteger(item.maxScore) || item.maxScore <= 0)) return toast("请完整填写评价指标和正整数满分");
  const total = draft.scoreItems.reduce((sum, item) => sum + item.maxScore, 0);
  if (total !== 100) return toast(`评价指标满分合计必须为 100 分，当前为 ${total} 分`);
  draft.modules.forEach((module) => { module.items.sort((a, b) => a.sort - b.sort); });
  draft.modules.sort((a, b) => a.sort - b.sort);
  draft.scoreItems.sort((a, b) => a.sort - b.sort);
  library.admissionRule = clone({ ...draft, updatedAt: nowText() });
  library.approvalMode = "任一已选审批人审批通过即通过";
  state.admissionRuleDraft = null;
  state.selectedRuleModuleId = "";
  persist();
  toast("入库审批配置已保存");
  render();
}

function handleAdmissionReview() {
  const decision = document.querySelector('input[name="admissionDecision"]:checked')?.value;
  const opinion = document.getElementById("admissionOpinion")?.value.trim();
  if (!decision) return toast("请选择初审结论");
  if (!opinion) return toast("请填写初审意见");
  const task = getProduct().tags.A;
  const rule = task.admissionRuleSnapshot || getLibrary("A").admissionRule;
  const modules = normalizeAdmissionModules(rule);
  const controls = [...document.querySelectorAll(".admission-rule-control")];
  const notes = [...document.querySelectorAll(".admission-rule-note")];
  const checkResults = [];
  for (const module of modules) {
    for (const item of module.items) {
      const itemControls = controls.filter((control) => control.dataset.moduleId === module.id && control.dataset.ruleId === item.id);
      let selected = [];
      if (item.selectionType === "multiple") {
        const checked = itemControls.filter((control) => control.checked);
        selected = checked.map((control) => control.value);
      } else {
        const select = itemControls[0];
        if (select?.value) {
          selected = [select.value];
        }
      }
      if (!selected.length) return toast(`请完成“${module.title}”中的核查项`);
      const note = notes.find((input) => input.dataset.moduleId === module.id && input.dataset.ruleId === item.id)?.value.trim() || "";
      checkResults.push({ moduleId: module.id, moduleTitle: module.title, itemId: item.id, itemText: item.text, selectionType: item.selectionType, values: selected, note });
    }
  }
  const map = {
    pass: { taskStatus: "待评分", status: "初审通过", label: "初审通过，流转联合评分" },
    return: { taskStatus: "初审退回", status: "初审退回", label: "退回企业补充资料" }
  };
  state.pendingReview = { type: "admission", ...map[decision], opinion, checkResults };
  openModal("确认提交准入初审？", `<p><strong>${esc(map[decision].label)}</strong></p><p>初审意见：${esc(opinion)}</p><p class="sub">提交后由现有流程引擎根据结论流转任务。</p>`, `<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-primary" data-action="confirm-stage-review">确认提交</button>`);
}

function currentScoreForm() {
  const grades = {};
  document.querySelectorAll(".score-grade").forEach((select) => { grades[select.dataset.id] = select.value; });
  return { grades, ...calculateScoreFromGrades(grades) };
}

function updateScorePreview() {
  const current = currentScoreForm();
  const rule = getLibrary("A").scoreRule;
  rule.dimensions.forEach((item) => {
    const grade = current.grades[item.id];
    const base = document.querySelector(`.score-base[data-id="${item.id}"]`);
    const weighted = document.querySelector(`.score-weighted[data-id="${item.id}"]`);
    if (base) base.textContent = rule.grades[grade];
    if (weighted) weighted.textContent = current.scores[item.id];
  });
  const total = document.getElementById("scoreTotal");
  if (total) total.textContent = current.total;
  const tableTotal = document.querySelector(".score-table .total-row strong");
  if (tableTotal) tableTotal.textContent = current.total;
  const outcome = scoreOutcome(current.total);
  const card = document.getElementById("scoreOutcome");
  if (card) {
    card.className = `outcome-card ${outcome.tone}`;
    card.innerHTML = `<strong>${esc(outcome.label)}</strong><span>${esc(outcome.status)}</span>`;
  }
}

function handleScoreReview() {
  const opinion = document.getElementById("scoreOpinion")?.value.trim();
  if (!opinion) return toast("请填写联合评审意见");
  const current = currentScoreForm();
  const outcome = scoreOutcome(current.total);
  state.pendingReview = { type: "score", ...outcome, ...current, opinion };
  openModal("确认提交联合评分？", `<div class="score-confirm"><span>加权总分</span><strong>${esc(current.total)}</strong><em>分</em></div><p>${statusTag(outcome.status)}　${esc(outcome.label)}</p><p>评审意见：${esc(opinion)}</p>`, `<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-primary" data-action="confirm-stage-review">确认提交</button>`);
}

function confirmStageReview() {
  const pending = state.pendingReview;
  if (!pending || !["admission", "score"].includes(pending.type)) return;
  const product = getProduct();
  const task = product.tags.A;
  const timestamp = nowText();
  if (pending.type === "admission") {
    task.status = pending.taskStatus;
    task.admissionReview = { status: pending.status, reviewer: "周初审", reviewedAt: timestamp, opinion: pending.opinion, checkResults: clone(pending.checkResults || []) };
    task.reviewer = "周初审";
    task.reviewedAt = timestamp;
    task.opinion = pending.opinion;
    product.submissionHistory.push(`${timestamp} 准入初审：${pending.status}`);
  } else {
    task.status = pending.taskStatus;
    task.scoreReview = { status: pending.status, reviewer: "何评审", reviewedAt: timestamp, opinion: pending.opinion, grades: pending.grades, scores: pending.scores, total: pending.total };
    task.reviewer = "何评审";
    task.reviewedAt = timestamp;
    task.opinion = pending.opinion;
    product.submissionHistory.push(`${timestamp} 联合评分：${pending.total} 分，${pending.status}`);
  }
  persist();
  state.pendingReview = null;
  closeModal();
  toast(pending.type === "admission" ? "初审结论已提交，任务已按标签流程流转" : "评分结论已提交，仅更新A产品库标签状态");
  navigate(pending.type === "admission" ? "admission-list" : "score-list");
}

function runScenario(name) {
  if (name === "ordinary") {
    state.productId = "P005";
    navigate("ops-supply-detail");
  } else if (name === "multi-a") {
    state.productId = "P006";
    state.libraryId = "A";
    navigate("admin-review");
  } else if (name === "entry-config") {
    state.libraryId = "A";
    state.admissionRuleDraft = null;
    navigate("rule-admission");
  } else if (name === "multi-b") {
    state.productId = "P006";
    state.libraryId = "B";
    navigate("admin-review");
  } else if (name === "partial") {
    state.productId = "P001";
    navigate("enterprise-detail");
  } else if (name === "listed") {
    state.productId = "P007";
    beginTagApplication(getProduct("P007"));
  } else if (name === "existing") {
    state.productId = "P002";
    beginTagApplication(getProduct("P002"), "A");
  }
}

document.addEventListener("click", (event) => {
  const actionElement = event.target.closest("[data-action]");
  if (!actionElement) return;
  const action = actionElement.dataset.action;
  if (action === "navigate") {
    if (route() === "rule-admission" && actionElement.dataset.route !== "rule-admission") state.admissionRuleDraft = null;
    navigate(actionElement.dataset.route);
  } else if (action === "toggle-switcher") {
    const panel = document.getElementById("switcherPanel");
    const open = panel.classList.toggle("open");
    panel.setAttribute("aria-hidden", String(!open));
    actionElement.setAttribute("aria-expanded", String(open));
  } else if (action === "close-modal") closeModal();
  else if (action === "open-tag-application") openTagApplicationFromButton(actionElement.dataset.libraryId);
  else if (action === "confirm-tag-application") confirmTagApplicationModal();
  else if (action === "choose-managed-library") openTagManagementModal(getProduct(state.tagApplicationModal?.productId), actionElement.dataset.id, false);
  else if (action === "submit-list-tag-application") submitListTagApplication();
  else if (action === "placeholder") toast("该基础能力沿用现有系统，本原型不展开");
  else if (action === "global-search") {
    state.mallKeyword = document.querySelector(".top-search-input")?.value.trim() || "";
    if (roleForRoute(route()) === "mall") render();
    else toast(state.mallKeyword ? `已搜索：${state.mallKeyword}` : "请输入搜索关键词");
  } else if (action === "mall-filter") {
    state.mallFilter = actionElement.dataset.filter;
    render();
  } else if (action === "open-product") {
    state.productId = actionElement.dataset.id;
    if (actionElement.dataset.route === "admin-review") state.adminReviewBackRoute = route() === "admin-products" ? "admin-products" : "admin-list";
    navigate(actionElement.dataset.route);
  } else if (action === "contact-supplier") {
    const product = getProduct();
    openModal("联系供应商", `<dl class="kv-grid"><div class="kv"><dt>供应企业</dt><dd>${esc(product.company)}</dd></div><div class="kv"><dt>联系人</dt><dd>${esc(product.contact)}</dd></div><div class="kv"><dt>联系电话</dt><dd>${esc(product.phone)}</dd></div></dl>`);
  } else if (action === "export") toast("导出任务已创建，完成后将在消息中心通知");
  else if (action === "new-product") beginNewProduct();
  else if (action === "edit-product") beginEditProduct(actionElement.dataset.id, actionElement.dataset.route || "enterprise-form");
  else if (action === "manage-tags") beginTagApplication(getProduct(actionElement.dataset.id));
  else if (action === "reapply-tag") beginTagApplication(getProduct(actionElement.dataset.id), actionElement.dataset.libraryId);
  else if (action === "delete-product") {
    const product = getProduct(actionElement.dataset.id);
    openModal("删除供应信息？", `<p>确认删除 <strong>${esc(product.name || product.id)}</strong>？此操作仅用于原型演示。</p>`, `<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-danger" data-action="confirm-delete-product" data-id="${product.id}">删除</button>`);
  } else if (action === "confirm-delete-product") {
    data.products = data.products.filter((item) => item.id !== actionElement.dataset.id);
    persist(); closeModal(); toast("供应信息已删除"); render();
  } else if (action === "add-repeat") {
    const target = document.getElementById(actionElement.dataset.target);
    if (actionElement.dataset.kind === "contact" && target.children.length >= 2) return toast("联系人最多添加 2 个");
    target.insertAdjacentHTML("beforeend", repeatRow(actionElement.dataset.kind));
  } else if (action === "remove-repeat") {
    const list = actionElement.closest(".repeat-list");
    if (list && list.children.length <= 1 && list.id !== "caseList") return toast("至少保留一条记录");
    actionElement.closest(".repeat-row")?.remove();
  } else if (action === "mock-upload") {
    const files = (actionElement.dataset.files || "").split("||").filter(Boolean);
    if (!files.includes(actionElement.dataset.filename)) files.push(actionElement.dataset.filename);
    actionElement.dataset.files = files.join("||");
    actionElement.innerHTML = `<span class="upload-file-list">${files.map((file) => `<span class="tag tag-green">✓ ${esc(file)}</span>`).join("")}</span><span class="hint">上传成功（原型模拟）</span>`;
  } else if (action === "preview-product") {
    const formData = collectProductForm();
    if (!formData) return;
    const previewTagIds = [...new Set([...Object.keys(getProduct().tags), ...formData.selectedTags])];
    openModal("商品预览", `<div class="detail-hero" style="grid-template-columns:180px 1fr;padding:0;border:0"><div class="product-visual" style="min-height:170px"><div class="product-glyph">${productGlyph(formData.category)}</div></div><div><div>${previewTagIds.map(libraryTag).join("") || `<span class="tag tag-gray">普通商品</span>`}</div><h2>${esc(formData.name)}</h2><p>${esc(formData.summary)}</p><div class="price">${formData.price === "面议" ? "面议" : `￥${esc(formData.price)}`} <small>/ ${esc(formData.unit)}</small></div></div></div>`);
  } else if (action === "submit-product") {
    const formData = collectProductForm();
    if (!formData) return;
    const taskCount = (formData.baseChanged ? 1 : 0) + formData.selectedTags.length;
    if (!taskCount) {
      toast(route() === "enterprise-form" ? "未修改商品信息" : "未修改商品字段，也未选择需要提交的产品库标签");
      return;
    }
    state.pendingFormData = formData;
    const listingTask = formData.baseChanged ? formData.keepListed ? `<li><strong>商品字段变更审批</strong>：平台运营（商品保持上架）</li>` : `<li><strong>商品上架审批</strong>：平台运营</li>` : "";
    const tagTasks = formData.selectedTags.map((id) => { const library = getLibrary(id); return `<li><strong>${esc(library.name)}标签</strong>：${esc(library.adminOrg)}审批</li>`; }).join("");
    const confirmTitle = formData.submissionMode === "tag" ? "确认提交标签申请？" : "确认提交审批？";
    const confirmNotice = route() === "enterprise-form" ? "本次仅提交商品信息审核，已有产品库标签及审批状态保持不变。" : "商品字段审批与产品库标签审批相互独立；每个选中的产品库标签分别生成 1 个审批单。";
    openModal(confirmTitle, `<p>本次将生成 <strong>${taskCount}</strong> 个独立审批单：</p><ul>${listingTask}${tagTasks}</ul><div class="banner info flush">${confirmNotice}</div>`, `<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-primary" data-action="confirm-submit-product">确认提交</button>`);
  } else if (action === "confirm-submit-product") {
    const product = getProduct();
    const formData = state.pendingFormData;
    const taskCount = (formData.baseChanged ? 1 : 0) + formData.selectedTags.length;
    applyFormToProduct(product, formData, true);
    const nextRoute = route() === "ops-supply-form" ? "ops-supply-detail" : "enterprise-detail";
    state.pendingFormData = null; state.formMode = "edit"; state.formTags = []; state.tagApplicationDrafts = {}; state.tagApplicationModal = null; persist(); closeModal(); toast(`提交成功，已生成 ${taskCount} 个独立审批单`); navigate(nextRoute);
  } else if (action === "enterprise-search") {
    state.enterpriseFilters.keyword = document.getElementById("enterpriseKeyword")?.value.trim() || ""; render();
  } else if (action === "enterprise-condition") {
    state.enterpriseFilters[actionElement.dataset.field] = actionElement.dataset.value; render();
  } else if (action === "enterprise-category") {
    state.enterpriseFilters.category = actionElement.dataset.value; render();
  } else if (action === "enterprise-reset") {
    state.enterpriseFilters = { keyword: "", category: "all", supplyStatus: "all", reviewStatus: "all", region: "all", overseas: "all", tradeMode: "all", availability: "all", library: "all" }; render();
  } else if (action === "ops-search") {
    state.opsFilters.keyword = document.getElementById("opsKeyword")?.value.trim() || "";
    state.opsFilters.company = document.getElementById("opsCompany")?.value.trim() || "";
    render();
  } else if (action === "ops-condition") {
    state.opsFilters[actionElement.dataset.field] = actionElement.dataset.value;
    render();
  } else if (action === "ops-category") {
    state.opsFilters.category = actionElement.dataset.value;
    render();
  } else if (action === "ops-reset") {
    state.opsFilters = { keyword: "", company: "", category: "all", supplyStatus: "all", region: "all", overseas: "all", tradeMode: "all", availability: "all", library: "all" };
    render();
  } else if (action === "admission-tab") { state.admissionTab = actionElement.dataset.tab; render();
  } else if (action === "score-tab") { state.scoreTab = actionElement.dataset.tab; render();
  } else if (action === "stage-search") { state.stageFilters = { keyword: document.getElementById("stageKeyword")?.value.trim() || "", company: document.getElementById("stageCompany")?.value.trim() || "" }; render();
  } else if (action === "stage-reset") { state.stageFilters = { keyword: "", company: "" }; render();
  } else if (action === "admin-tab") { state.adminTab = actionElement.dataset.tab; render();
  } else if (action === "admin-search") { state.adminFilters = { keyword: document.getElementById("adminKeyword").value.trim(), company: document.getElementById("adminCompany").value.trim() }; render();
  } else if (action === "admin-reset") { state.adminFilters = { keyword: "", company: "" }; render();
  } else if (action === "admin-product-status") { state.adminProductFilters.approvalStatus = actionElement.dataset.status; render();
  } else if (action === "admin-product-search") {
    state.adminProductFilters.keyword = document.getElementById("adminProductKeyword")?.value.trim() || "";
    state.adminProductFilters.company = document.getElementById("adminProductCompany")?.value.trim() || "";
    state.adminProductFilters.category = document.getElementById("adminProductCategory")?.value || "all";
    render();
  } else if (action === "admin-product-reset") {
    state.adminProductFilters = { keyword: "", company: "", category: "all", approvalStatus: "all" };
    render();
  } else if (action === "open-tag-delist") openTagDelistModal(actionElement.dataset.id, actionElement.dataset.libraryId);
  else if (action === "confirm-tag-delist") confirmTagDelist(actionElement.dataset.id, actionElement.dataset.libraryId);
  else if (action === "submit-review") handleSubmitReview(actionElement.dataset.reviewType);
  else if (action === "confirm-review") confirmReview();
  else if (action === "submit-entry-review") handleEntryReview();
  else if (action === "confirm-entry-review") confirmEntryReview();
  else if (action === "submit-admission-review") handleAdmissionReview();
  else if (action === "submit-score-review") handleScoreReview();
  else if (action === "confirm-stage-review") confirmStageReview();
  else if (action === "configure-approval-assignees") openApprovalAssigneeEditor();
  else if (action === "toggle-approval-org") toggleApprovalOrganization(actionElement.dataset.org);
  else if (action === "approval-transfer-add") addApprovalAssignees();
  else if (action === "approval-transfer-remove") removeCheckedApprovalAssignees();
  else if (action === "remove-approval-assignee") removeApprovalAssignees([actionElement.dataset.id]);
  else if (action === "confirm-approval-assignees") confirmApprovalAssignees();
  else if (action === "save-rule-config") saveRuleConfig(actionElement.dataset.rule);
  else if (action === "select-rule-module") { syncAdmissionRuleDraftFromPage(); state.selectedRuleModuleId = actionElement.dataset.id; render(); }
  else if (action === "new-rule-module") openRuleModuleEditor();
  else if (action === "edit-rule-module") openRuleModuleEditor(actionElement.dataset.id);
  else if (action === "confirm-rule-module-editor") saveRuleModuleEditor();
  else if (action === "close-rule-module-editor") { state.ruleModuleDraft = null; closeModal(); }
  else if (action === "delete-rule-module") requestDeleteRuleModule(actionElement.dataset.id);
  else if (action === "confirm-delete-rule-module") {
    const draft = ensureAdmissionRuleDraft();
    draft.modules = draft.modules.filter((module) => module.id !== actionElement.dataset.id);
    state.selectedRuleModuleId = draft.modules[0]?.id || "";
    closeModal(); toast("准入模块已删除"); render();
  }
  else if (action === "new-rule-item") openRuleItemEditor(actionElement.dataset.moduleId, "", "edit");
  else if (action === "edit-rule-item") openRuleItemEditor(actionElement.dataset.moduleId, actionElement.dataset.id, "edit");
  else if (action === "add-enum-value") {
    syncRuleItemEditorFromModal();
    state.ruleItemDraft.item.options.push({ label: "" });
    renderRuleItemEditorModal();
  } else if (action === "remove-enum-value") {
    syncRuleItemEditorFromModal();
    if (state.ruleItemDraft.item.options.length <= 1) return toast("至少保留一个核查结果枚举值");
    state.ruleItemDraft.item.options.splice(Number(actionElement.dataset.index), 1);
    renderRuleItemEditorModal();
  } else if (action === "confirm-rule-item-editor") saveRuleItemEditor();
  else if (action === "close-rule-item-editor") { state.ruleItemDraft = null; closeModal(); }
  else if (action === "delete-rule-item") requestDeleteRuleItem(actionElement.dataset.moduleId, actionElement.dataset.id);
  else if (action === "confirm-delete-rule-item") {
    const module = admissionModuleById(actionElement.dataset.moduleId);
    if (module) module.items = module.items.filter((item) => item.id !== actionElement.dataset.id);
    closeModal(); toast("配置行已删除"); render();
  }
  else if (action === "new-score-item") {
    syncAdmissionRuleDraftFromPage();
    const draft = ensureAdmissionRuleDraft();
    const numbers = draft.scoreItems.map((item) => Number(String(item.id).replace(/\D/g, "")) || 0);
    draft.scoreItems.push({ id: `SI${String(Math.max(0, ...numbers) + 1).padStart(2, "0")}`, sort: draft.scoreItems.length + 1, name: "新评价指标", maxScore: 10 });
    render();
  }
  else if (action === "delete-score-item") {
    syncAdmissionRuleDraftFromPage();
    const draft = ensureAdmissionRuleDraft();
    if (draft.scoreItems.length <= 1) return toast("至少保留一个评价指标");
    draft.scoreItems = draft.scoreItems.filter((item) => item.id !== actionElement.dataset.id);
    render();
  }
  else if (action === "new-application-field") openApplicationFieldEditor();
  else if (action === "edit-application-field") openApplicationFieldEditor(actionElement.dataset.id);
  else if (action === "add-application-option") {
    syncApplicationFieldEditorFromModal();
    state.applicationFieldDraft.field.options.push("");
    renderApplicationFieldEditorModal();
  }
  else if (action === "remove-application-option") {
    syncApplicationFieldEditorFromModal();
    if (state.applicationFieldDraft.field.options.length <= 1) return toast("至少保留一个选项");
    state.applicationFieldDraft.field.options.splice(Number(actionElement.dataset.index), 1);
    renderApplicationFieldEditorModal();
  }
  else if (action === "confirm-application-field-editor") saveApplicationFieldEditor();
  else if (action === "close-application-field-editor") { state.applicationFieldDraft = null; closeModal(); }
  else if (action === "delete-application-field") requestDeleteApplicationField(actionElement.dataset.id);
  else if (action === "confirm-delete-application-field") {
    ensureLibraryDraft().applicationFields = ensureLibraryDraft().applicationFields.filter((field) => field.id !== actionElement.dataset.id);
    closeModal(); toast("申报字段已删除"); render();
  }
  else if (action === "open-file") toast(`正在打开 ${actionElement.dataset.file}（原型模拟）`);
  else if (action === "open-library") {
    if (route() === "rule-admission") state.admissionRuleDraft = null;
    state.libraryId = actionElement.dataset.id; state.libraryDraft = clone(getLibrary()); navigate("library-form");
  } else if (action === "open-entry-config") {
    state.libraryId = actionElement.dataset.id;
    state.libraryDraft = null;
    state.admissionRuleDraft = null;
    state.selectedRuleModuleId = "";
    navigate("rule-admission");
  } else if (action === "new-library") {
    const usedIds = new Set(data.libraries.map((item) => item.id));
    const nextId = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").find((id) => !usedIds.has(id)) || `L${data.libraries.length + 1}`;
    state.libraryDraft = { id: nextId, name: "新产品库", color: "blue", description: "", applicationFields: [], adminOrg: "", admins: [], status: "停用", sort: data.libraries.length + 1, approvalMode: "任一已选审批人审批通过即通过", passAction: "入库审批通过后标签生效，不影响商品上下架", rejectAction: "退回后企业可修改并重新申请", admissionRule: clone(defaultEntryRule(data)) };
    navigate("library-form");
  } else if (action === "cancel-library") { state.libraryDraft = null; navigate("library-config"); }
  else if (action === "choose-org") chooseOrganization();
  else if (action === "select-org") {
    const org = actionElement.dataset.org;
    const draft = ensureLibraryDraft();
    if (draft.adminOrg && draft.adminOrg !== org) draft.admins = [];
    draft.adminOrg = org; closeModal(); toast(`已选择 ${org}`); render();
  } else if (action === "choose-admins") chooseAdmins();
  else if (action === "confirm-admins") {
    const draft = ensureLibraryDraft();
    const selected = [...document.querySelectorAll('input[name="adminChoice"]:checked')].map((input) => input.value);
    const source = ORGANIZATIONS[draft.adminOrg] || [];
    draft.admins = source.filter((account) => selected.includes(account.id)).map((account) => ({ ...account, status: draft.admins.find((item) => item.id === account.id)?.status || "启用" }));
    closeModal(); toast("管理员账号已更新"); render();
  } else if (action === "toggle-admin-status") {
    syncLibraryDraftFromInputs();
    const admin = ensureLibraryDraft().admins.find((item) => item.id === actionElement.dataset.id);
    admin.status = admin.status === "启用" ? "停用" : "启用"; toast(`管理员已${admin.status}`); render();
  } else if (action === "remove-admin") {
    syncLibraryDraftFromInputs();
    const admin = ensureLibraryDraft().admins.find((item) => item.id === actionElement.dataset.id);
    openModal("解除管理员绑定？", `<p>确认解除 <strong>${esc(admin.name)}</strong> 与该产品库的管理员绑定？历史审批记录仍保留姓名。</p>`, `<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-danger" data-action="confirm-remove-admin" data-id="${admin.id}">解除绑定</button>`);
  } else if (action === "confirm-remove-admin") {
    ensureLibraryDraft().admins = ensureLibraryDraft().admins.filter((item) => item.id !== actionElement.dataset.id); closeModal(); toast("管理员绑定已解除"); render();
  } else if (action === "save-library") saveLibrary();
  else if (action === "delete-library") requestDeleteLibrary(actionElement.dataset.id);
  else if (action === "confirm-delete-library") confirmDeleteLibrary(actionElement.dataset.id);
  else if (action === "toggle-library-status") {
    const library = getLibrary(actionElement.dataset.id);
    const next = library.status === "启用" ? "停用" : "启用";
    openModal(`确认${next}产品库？`, `<p>产品库：<strong>${esc(library.name)}</strong></p><p>${next === "停用" ? "停用后企业端不可发起新申请，历史标签和审批记录保留。" : "启用后企业端可重新发起标签申请。"}</p>`, `<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn ${next === "停用" ? "btn-danger" : "btn-primary"}" data-action="confirm-toggle-library" data-id="${library.id}">${next}</button>`);
  } else if (action === "confirm-toggle-library") {
    const library = getLibrary(actionElement.dataset.id); library.status = library.status === "启用" ? "停用" : "启用"; persist(); closeModal(); toast(`产品库已${library.status}`); render();
  } else if (action === "scenario") runScenario(actionElement.dataset.scenario);
  else if (action === "reset-prototype") {
    openModal("恢复初始演示数据？", `<p>这会清除本浏览器中对商品、审批和产品库配置所做的演示修改。</p>`, `<button type="button" class="btn" data-action="close-modal">取消</button><button type="button" class="btn btn-danger" data-action="confirm-reset">恢复初始数据</button>`);
  } else if (action === "confirm-reset") {
    data = normalizePrototypeData(clone(INITIAL_DATA)); persist(); state.productId = "P006"; state.libraryId = "A"; state.libraryDraft = null; state.applicationFieldDraft = null; state.admissionRuleDraft = null; state.selectedRuleModuleId = ""; state.tagApplicationDrafts = {}; state.tagApplicationModal = null; state.adminProductFilters = { keyword: "", company: "", category: "all", approvalStatus: "all" }; state.adminReviewBackRoute = "admin-list"; closeModal(); toast("已恢复初始演示数据"); navigate("enterprise-list");
  }
});

document.addEventListener("change", (event) => {
  const element = event.target;
  if (element.matches('[data-action="toggle-library-application"]')) {
    element.closest(".check-card")?.classList.toggle("selected", element.checked);
    const trigger = [...document.querySelectorAll('[data-action="open-tag-application"]')].find((button) => button.dataset.libraryId === element.value);
    if (element.checked) {
      if (!state.formTags.includes(element.value)) state.formTags.push(element.value);
      if (trigger) trigger.disabled = false;
      openTagApplicationModal(element.value, true);
    } else {
      state.formTags = state.formTags.filter((id) => id !== element.value);
      delete state.tagApplicationDrafts[element.value];
      if (trigger) {
        trigger.disabled = false;
        trigger.textContent = "填写申报信息";
      }
    }
  }
  if (element.matches('[data-action="switch-admin-library"]')) {
    state.libraryId = element.value;
    state.adminTab = "待审核";
    render();
  }
  if (element.matches('[data-action="switch-admin-product-library"]')) {
    state.libraryId = element.value;
    state.adminProductFilters = { keyword: "", company: "", category: "all", approvalStatus: "all" };
    render();
  }
  if (element.matches('input[name="approvalSourceChoice"]')) {
    const button = document.querySelector('[data-action="approval-transfer-add"]');
    if (button) button.disabled = !document.querySelector('input[name="approvalSourceChoice"]:checked');
  }
  if (element.matches('input[name="approvalTargetChoice"]')) {
    const button = document.querySelector('[data-action="approval-transfer-remove"]');
    if (button) button.disabled = !document.querySelector('input[name="approvalTargetChoice"]:checked');
  }
  if (element.id === "applicationFieldType" && state.applicationFieldDraft) {
    syncApplicationFieldEditorFromModal();
    if (["single", "multiple"].includes(state.applicationFieldDraft.field.type) && !state.applicationFieldDraft.field.options.length) state.applicationFieldDraft.field.options = ["选项一", "选项二"];
    renderApplicationFieldEditorModal();
  }
  if (element.matches(".score-grade")) updateScorePreview();
});

document.addEventListener("input", (event) => {
  if (event.target.matches('[data-action="approval-source-search"]')) filterApprovalTransfer("source", event.target.value);
  if (event.target.matches('[data-action="approval-target-search"]')) filterApprovalTransfer("target", event.target.value);
  if (event.target.matches(".entry-score-value")) updateEntryScoreTotal();
  if (event.target.matches(".score-item-max")) updateScoreRuleTotal();
});

document.getElementById("modalMask").addEventListener("click", (event) => {
  if (event.target.id === "modalMask") closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") { closeModal(); closeSwitcher(); }
});

window.addEventListener("hashchange", render);
render();
