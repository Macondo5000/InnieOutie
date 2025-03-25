const questions = [
    {
        question: "如果可以选择，你希望工作中的记忆和生活中的记忆完全隔离吗？",
        options: [
            { text: "是的，完全隔离更高效", type: "INNIE" },
            { text: "部分隔离，但需要某些关键记忆共享", type: "BALANCED" },
            { text: "不希望隔离，记忆应该完整连贯", type: "OUTIE" }
        ]
    },
    {
        question: "你更倾向于因为什么原因去做一件事？",
        options: [
            { text: "外部规则或要求（如公司制度）", type: "INNIE" },
            { text: "结合外部要求和自己的兴趣", type: "BALANCED" },
            { text: "纯粹的个人目标或兴趣", type: "OUTIE" }
        ]
    },
    {
        question: "进入特定环境（如办公室或家）时，你的性格会变化吗？",
        options: [
            { text: "会，像切换成另一个人", type: "INNIE" },
            { text: "有轻微调整，但核心一致", type: "BALANCED" },
            { text: "基本不会变，我就是我", type: "OUTIE" }
        ]
    },
    {
        question: "如果另一人格拥有你未知的记忆，你会？",
        options: [
            { text: "无所谓，反正不影响我", type: "INNIE" },
            { text: "有点不安，但可以接受", type: "BALANCED" },
            { text: "强烈希望夺回控制权", type: "OUTIE" }
        ]
    },
    {
        question: "面对一项无意义但必须完成的任务，你会？",
        options: [
            { text: "高效执行，不质疑", type: "INNIE" },
            { text: "边做边吐槽，但仍会完成", type: "BALANCED" },
            { text: "试图拒绝或努力寻找意义", type: "OUTIE" }
        ]
    },
    {
        question: "你更恐惧以下哪种情况？",
        options: [
            { text: "完全不知道另一人格在做什么", type: "INNIE" },
            { text: "两种恐惧程度相当", type: "BALANCED" },
            { text: "另一人格擅自替你做重要决定", type: "OUTIE" }
        ]
    },
    {
        question: "在工作中，你是否会刻意隐藏自己的真实情绪？",
        options: [
            { text: "总是，工作需要我保持专业", type: "INNIE" },
            { text: "偶尔，视情况而定", type: "BALANCED" },
            { text: "从不，我完全做自己", type: "OUTIE" }
        ]
    },
    {
        question: "下班后，你是否会突然忘记白天工作的具体内容？",
        options: [
            { text: "经常", type: "INNIE" },
            { text: "偶尔", type: "BALANCED" },
            { text: "从不", type: "OUTIE" }
        ]
    },
    {
        question: "你更倾向于哪种工作模式？",
        options: [
            { text: "严格遵守公司规则", type: "INNIE" },
            { text: "灵活调整，视情况而定", type: "BALANCED" },
            { text: "完全独立，不受干扰", type: "OUTIE" }
        ]
    },
    {
        question: "如果你的工作人格发现了公司的黑暗秘密，你会？",
        options: [
            { text: "默默接受，不反抗", type: "INNIE" },
            { text: "尝试向生活人格传递信息", type: "BALANCED" },
            { text: "直接辞职", type: "OUTIE" }
        ]
    }
];

const personalityResults = {
    INNIE: {
        title: "「模范Innie™」",
        subtitle: "您对公司的忠诚度超越自我意识，建议晋升至'永恒数据部'。",
        certification: "检测到99.9%纯净工作意识，建议批量克隆",
        
        traits: [
            "擅长自我规训",
            "享受规则",
            "「工作人格」才是真实的自己"
        ],
        
        recommendedPositions: [
            "永恒数据部（无窗办公室优先）",
            "微笑培训教官",
            "休息室监控员"
        ],
        
        recommendations: [
            "奖励一次「音乐舞蹈体验」或额外5分钟休息时间",
            "奖励「永久切割体验券」（可自愿删除童年记忆换取加班津贴）",
            "提供「无菌情感替代包」（预设37种合规微笑模式）"
        ],
        
        theme: {
            color: "#2E5077",
            icon: "🎯"
        }
    },

    OUTIE: {
        title: "「叛逆Outie®」",
        subtitle: "检测到强烈自我意识高浓度污染，建议立即安排'心灵净化疗程'。",
        
        traits: [
            "抗拒记忆分割",
            "下班后立刻失忆式狂欢",
            "偷偷研究劳动法"
        ],
        
        mandatoryMeasures: [
            "安装GPS定位员工杯",
            "每日背诵《基尔南语录》半小时",
            "派遣快乐督导员贴身指导"
        ],
        
        recommendations: [
            "强制观看CEO基尔南的励志演讲循环播放",
            "强制安装「思想矫正屏保」",
            "推荐参加「感恩切割术」互助会（主讲人：Mark S.）"
        ],
        
        theme: {
            color: "#CC4444",
            icon: "⚠️"
        }
    },

    BALANCED: {
        title: "「分裂风险者」",
        subtitle: "系统无法定义，建议人道回收或升职",
        warning: "警告！检测到人格不稳定波动，您可能需要'优化校准'。",
        
        traits: [
            "上班时想辞职",
            "下班后愧疚",
            "常对镜子自言自语：「你到底是谁？」"
        ],
        
        mercifulSolutions: [
            "赠送人格稳定手环（实际为电极刺激器）",
            "安排与Burt进行模范员工疗愈对话"
        ],
        
        recommendations: [
            "订购卢蒙「人格粘合套餐」（含免费华夫饼安慰剂）",
            "发放「人格粘合胶水」",
            "安排与Miss Casey共进午餐"
        ],
        
        theme: {
            color: "#FFA500",
            icon: "🔄"
        }
    }
}; 