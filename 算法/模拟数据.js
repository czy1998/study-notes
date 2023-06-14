/**
 * 日常记录.md
 * @title 1.遍历区域对象，返回数组
 * @description 其中使用的 data
 */
const data = [
    {
        value: 0,
        label: '全国',
        children: [
            {
                value: 0,
                label: '全国',
                children: [],
            },
        ],
    },
    {
        value: 1,
        label: '北京市',
        children: [
            {
                value: 1,
                label: '市辖区',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1,
                        label: '东城区',
                        children: [],
                    },
                    {
                        value: 2,
                        label: '西城区',
                        children: [],
                    },
                    {
                        value: 3,
                        label: '朝阳区',
                        children: [],
                    },
                    {
                        value: 4,
                        label: '丰台区',
                        children: [],
                    },
                    {
                        value: 5,
                        label: '石景山区',
                        children: [],
                    },
                    {
                        value: 6,
                        label: '海淀区',
                        children: [],
                    },
                    {
                        value: 7,
                        label: '门头沟区',
                        children: [],
                    },
                    {
                        value: 8,
                        label: '房山区',
                        children: [],
                    },
                    {
                        value: 9,
                        label: '通州区',
                        children: [],
                    },
                    {
                        value: 10,
                        label: '顺义区',
                        children: [],
                    },
                    {
                        value: 11,
                        label: '昌平区',
                        children: [],
                    },
                    {
                        value: 12,
                        label: '大兴区',
                        children: [],
                    },
                    {
                        value: 13,
                        label: '怀柔区',
                        children: [],
                    },
                    {
                        value: 14,
                        label: '平谷区',
                        children: [],
                    },
                    {
                        value: 15,
                        label: '密云区',
                        children: [],
                    },
                    {
                        value: 16,
                        label: '延庆区',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 2,
        label: '天津市',
        children: [
            {
                value: 2,
                label: '市辖区',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 17,
                        label: '和平区',
                        children: [],
                    },
                    {
                        value: 18,
                        label: '河东区',
                        children: [],
                    },
                    {
                        value: 19,
                        label: '河西区',
                        children: [],
                    },
                    {
                        value: 20,
                        label: '南开区',
                        children: [],
                    },
                    {
                        value: 21,
                        label: '河北区',
                        children: [],
                    },
                    {
                        value: 22,
                        label: '红桥区',
                        children: [],
                    },
                    {
                        value: 23,
                        label: '东丽区',
                        children: [],
                    },
                    {
                        value: 24,
                        label: '西青区',
                        children: [],
                    },
                    {
                        value: 25,
                        label: '津南区',
                        children: [],
                    },
                    {
                        value: 26,
                        label: '北辰区',
                        children: [],
                    },
                    {
                        value: 27,
                        label: '武清区',
                        children: [],
                    },
                    {
                        value: 28,
                        label: '宝坻区',
                        children: [],
                    },
                    {
                        value: 29,
                        label: '滨海新区',
                        children: [],
                    },
                    {
                        value: 30,
                        label: '宁河区',
                        children: [],
                    },
                    {
                        value: 31,
                        label: '静海区',
                        children: [],
                    },
                    {
                        value: 32,
                        label: '蓟州区',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 3,
        label: '河北省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 3,
                label: '石家庄市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 34,
                        label: '长安区',
                        children: [],
                    },
                    {
                        value: 35,
                        label: '桥西区',
                        children: [],
                    },
                    {
                        value: 36,
                        label: '新华区',
                        children: [],
                    },
                    {
                        value: 37,
                        label: '井陉矿区',
                        children: [],
                    },
                    {
                        value: 38,
                        label: '裕华区',
                        children: [],
                    },
                    {
                        value: 39,
                        label: '藁城区',
                        children: [],
                    },
                    {
                        value: 40,
                        label: '鹿泉区',
                        children: [],
                    },
                    {
                        value: 41,
                        label: '栾城区',
                        children: [],
                    },
                    {
                        value: 42,
                        label: '井陉县',
                        children: [],
                    },
                    {
                        value: 43,
                        label: '正定县',
                        children: [],
                    },
                    {
                        value: 44,
                        label: '行唐县',
                        children: [],
                    },
                    {
                        value: 45,
                        label: '灵寿县',
                        children: [],
                    },
                    {
                        value: 46,
                        label: '高邑县',
                        children: [],
                    },
                    {
                        value: 47,
                        label: '深泽县',
                        children: [],
                    },
                    {
                        value: 48,
                        label: '赞皇县',
                        children: [],
                    },
                    {
                        value: 49,
                        label: '无极县',
                        children: [],
                    },
                    {
                        value: 50,
                        label: '平山县',
                        children: [],
                    },
                    {
                        value: 51,
                        label: '元氏县',
                        children: [],
                    },
                    {
                        value: 52,
                        label: '赵县',
                        children: [],
                    },
                    {
                        value: 53,
                        label: '晋州市',
                        children: [],
                    },
                    {
                        value: 54,
                        label: '新乐市',
                        children: [],
                    },
                ],
            },
            {
                value: 4,
                label: '唐山市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 56,
                        label: '路南区',
                        children: [],
                    },
                    {
                        value: 57,
                        label: '路北区',
                        children: [],
                    },
                    {
                        value: 58,
                        label: '古冶区',
                        children: [],
                    },
                    {
                        value: 59,
                        label: '开平区',
                        children: [],
                    },
                    {
                        value: 60,
                        label: '丰南区',
                        children: [],
                    },
                    {
                        value: 61,
                        label: '丰润区',
                        children: [],
                    },
                    {
                        value: 62,
                        label: '曹妃甸区',
                        children: [],
                    },
                    {
                        value: 63,
                        label: '滦县',
                        children: [],
                    },
                    {
                        value: 64,
                        label: '滦南县',
                        children: [],
                    },
                    {
                        value: 65,
                        label: '乐亭县',
                        children: [],
                    },
                    {
                        value: 66,
                        label: '迁西县',
                        children: [],
                    },
                    {
                        value: 67,
                        label: '玉田县',
                        children: [],
                    },
                    {
                        value: 68,
                        label: '遵化市',
                        children: [],
                    },
                    {
                        value: 69,
                        label: '迁安市',
                        children: [],
                    },
                ],
            },
            {
                value: 5,
                label: '秦皇岛市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 71,
                        label: '海港区',
                        children: [],
                    },
                    {
                        value: 72,
                        label: '山海关区',
                        children: [],
                    },
                    {
                        value: 73,
                        label: '北戴河区',
                        children: [],
                    },
                    {
                        value: 74,
                        label: '抚宁区',
                        children: [],
                    },
                    {
                        value: 75,
                        label: '青龙满族自治县',
                        children: [],
                    },
                    {
                        value: 76,
                        label: '昌黎县',
                        children: [],
                    },
                    {
                        value: 77,
                        label: '卢龙县',
                        children: [],
                    },
                ],
            },
            {
                value: 6,
                label: '邯郸市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 79,
                        label: '邯山区',
                        children: [],
                    },
                    {
                        value: 80,
                        label: '丛台区',
                        children: [],
                    },
                    {
                        value: 81,
                        label: '复兴区',
                        children: [],
                    },
                    {
                        value: 82,
                        label: '峰峰矿区',
                        children: [],
                    },
                    {
                        value: 83,
                        label: '邯郸县',
                        children: [],
                    },
                    {
                        value: 84,
                        label: '临漳县',
                        children: [],
                    },
                    {
                        value: 85,
                        label: '成安县',
                        children: [],
                    },
                    {
                        value: 86,
                        label: '大名县',
                        children: [],
                    },
                    {
                        value: 87,
                        label: '涉县',
                        children: [],
                    },
                    {
                        value: 88,
                        label: '磁县',
                        children: [],
                    },
                    {
                        value: 89,
                        label: '肥乡县',
                        children: [],
                    },
                    {
                        value: 90,
                        label: '永年县',
                        children: [],
                    },
                    {
                        value: 91,
                        label: '邱县',
                        children: [],
                    },
                    {
                        value: 92,
                        label: '鸡泽县',
                        children: [],
                    },
                    {
                        value: 93,
                        label: '广平县',
                        children: [],
                    },
                    {
                        value: 94,
                        label: '馆陶县',
                        children: [],
                    },
                    {
                        value: 95,
                        label: '魏县',
                        children: [],
                    },
                    {
                        value: 96,
                        label: '曲周县',
                        children: [],
                    },
                    {
                        value: 97,
                        label: '武安市',
                        children: [],
                    },
                ],
            },
            {
                value: 7,
                label: '邢台市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 99,
                        label: '襄都区',
                        children: [],
                    },
                    {
                        value: 100,
                        label: '信都区',
                        children: [],
                    },
                    {
                        value: 102,
                        label: '临城县',
                        children: [],
                    },
                    {
                        value: 103,
                        label: '内丘县',
                        children: [],
                    },
                    {
                        value: 104,
                        label: '柏乡县',
                        children: [],
                    },
                    {
                        value: 105,
                        label: '隆尧县',
                        children: [],
                    },
                    {
                        value: 106,
                        label: '任泽区',
                        children: [],
                    },
                    {
                        value: 107,
                        label: '南和区',
                        children: [],
                    },
                    {
                        value: 108,
                        label: '宁晋县',
                        children: [],
                    },
                    {
                        value: 109,
                        label: '巨鹿县',
                        children: [],
                    },
                    {
                        value: 110,
                        label: '新河县',
                        children: [],
                    },
                    {
                        value: 111,
                        label: '广宗县',
                        children: [],
                    },
                    {
                        value: 112,
                        label: '平乡县',
                        children: [],
                    },
                    {
                        value: 113,
                        label: '威县',
                        children: [],
                    },
                    {
                        value: 114,
                        label: '清河县',
                        children: [],
                    },
                    {
                        value: 115,
                        label: '临西县',
                        children: [],
                    },
                    {
                        value: 116,
                        label: '南宫市',
                        children: [],
                    },
                    {
                        value: 117,
                        label: '沙河市',
                        children: [],
                    },
                ],
            },
            {
                value: 8,
                label: '保定市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 119,
                        label: '竞秀区',
                        children: [],
                    },
                    {
                        value: 120,
                        label: '莲池区',
                        children: [],
                    },
                    {
                        value: 121,
                        label: '满城区',
                        children: [],
                    },
                    {
                        value: 122,
                        label: '清苑区',
                        children: [],
                    },
                    {
                        value: 123,
                        label: '徐水区',
                        children: [],
                    },
                    {
                        value: 124,
                        label: '涞水县',
                        children: [],
                    },
                    {
                        value: 125,
                        label: '阜平县',
                        children: [],
                    },
                    {
                        value: 126,
                        label: '定兴县',
                        children: [],
                    },
                    {
                        value: 127,
                        label: '唐县',
                        children: [],
                    },
                    {
                        value: 128,
                        label: '高阳县',
                        children: [],
                    },
                    {
                        value: 129,
                        label: '容城县',
                        children: [],
                    },
                    {
                        value: 130,
                        label: '涞源县',
                        children: [],
                    },
                    {
                        value: 131,
                        label: '望都县',
                        children: [],
                    },
                    {
                        value: 132,
                        label: '安新县',
                        children: [],
                    },
                    {
                        value: 133,
                        label: '易县',
                        children: [],
                    },
                    {
                        value: 134,
                        label: '曲阳县',
                        children: [],
                    },
                    {
                        value: 135,
                        label: '蠡县',
                        children: [],
                    },
                    {
                        value: 136,
                        label: '顺平县',
                        children: [],
                    },
                    {
                        value: 137,
                        label: '博野县',
                        children: [],
                    },
                    {
                        value: 138,
                        label: '雄县',
                        children: [],
                    },
                    {
                        value: 139,
                        label: '涿州市',
                        children: [],
                    },
                    {
                        value: 140,
                        label: '安国市',
                        children: [],
                    },
                    {
                        value: 141,
                        label: '高碑店市',
                        children: [],
                    },
                ],
            },
            {
                value: 9,
                label: '张家口市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 143,
                        label: '桥东区',
                        children: [],
                    },
                    {
                        value: 144,
                        label: '桥西区',
                        children: [],
                    },
                    {
                        value: 145,
                        label: '宣化区',
                        children: [],
                    },
                    {
                        value: 146,
                        label: '下花园区',
                        children: [],
                    },
                    {
                        value: 147,
                        label: '万全区',
                        children: [],
                    },
                    {
                        value: 148,
                        label: '崇礼区',
                        children: [],
                    },
                    {
                        value: 149,
                        label: '张北县',
                        children: [],
                    },
                    {
                        value: 150,
                        label: '康保县',
                        children: [],
                    },
                    {
                        value: 151,
                        label: '沽源县',
                        children: [],
                    },
                    {
                        value: 152,
                        label: '尚义县',
                        children: [],
                    },
                    {
                        value: 153,
                        label: '蔚县',
                        children: [],
                    },
                    {
                        value: 154,
                        label: '阳原县',
                        children: [],
                    },
                    {
                        value: 155,
                        label: '怀安县',
                        children: [],
                    },
                    {
                        value: 156,
                        label: '怀来县',
                        children: [],
                    },
                    {
                        value: 157,
                        label: '涿鹿县',
                        children: [],
                    },
                    {
                        value: 158,
                        label: '赤城县',
                        children: [],
                    },
                ],
            },
            {
                value: 10,
                label: '承德市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 160,
                        label: '双桥区',
                        children: [],
                    },
                    {
                        value: 161,
                        label: '双滦区',
                        children: [],
                    },
                    {
                        value: 162,
                        label: '鹰手营子矿区',
                        children: [],
                    },
                    {
                        value: 163,
                        label: '承德县',
                        children: [],
                    },
                    {
                        value: 164,
                        label: '兴隆县',
                        children: [],
                    },
                    {
                        value: 165,
                        label: '平泉县',
                        children: [],
                    },
                    {
                        value: 166,
                        label: '滦平县',
                        children: [],
                    },
                    {
                        value: 167,
                        label: '隆化县',
                        children: [],
                    },
                    {
                        value: 168,
                        label: '丰宁满族自治县',
                        children: [],
                    },
                    {
                        value: 169,
                        label: '宽城满族自治县',
                        children: [],
                    },
                    {
                        value: 170,
                        label: '围场满族蒙古族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 11,
                label: '沧州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 172,
                        label: '新华区',
                        children: [],
                    },
                    {
                        value: 173,
                        label: '运河区',
                        children: [],
                    },
                    {
                        value: 174,
                        label: '沧县',
                        children: [],
                    },
                    {
                        value: 175,
                        label: '青县',
                        children: [],
                    },
                    {
                        value: 176,
                        label: '东光县',
                        children: [],
                    },
                    {
                        value: 177,
                        label: '海兴县',
                        children: [],
                    },
                    {
                        value: 178,
                        label: '盐山县',
                        children: [],
                    },
                    {
                        value: 179,
                        label: '肃宁县',
                        children: [],
                    },
                    {
                        value: 180,
                        label: '南皮县',
                        children: [],
                    },
                    {
                        value: 181,
                        label: '吴桥县',
                        children: [],
                    },
                    {
                        value: 182,
                        label: '献县',
                        children: [],
                    },
                    {
                        value: 183,
                        label: '孟村回族自治县',
                        children: [],
                    },
                    {
                        value: 184,
                        label: '泊头市',
                        children: [],
                    },
                    {
                        value: 185,
                        label: '任丘市',
                        children: [],
                    },
                    {
                        value: 186,
                        label: '黄骅市',
                        children: [],
                    },
                    {
                        value: 187,
                        label: '河间市',
                        children: [],
                    },
                ],
            },
            {
                value: 12,
                label: '廊坊市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 189,
                        label: '安次区',
                        children: [],
                    },
                    {
                        value: 190,
                        label: '广阳区',
                        children: [],
                    },
                    {
                        value: 191,
                        label: '固安县',
                        children: [],
                    },
                    {
                        value: 192,
                        label: '永清县',
                        children: [],
                    },
                    {
                        value: 193,
                        label: '香河县',
                        children: [],
                    },
                    {
                        value: 194,
                        label: '大城县',
                        children: [],
                    },
                    {
                        value: 195,
                        label: '文安县',
                        children: [],
                    },
                    {
                        value: 196,
                        label: '大厂回族自治县',
                        children: [],
                    },
                    {
                        value: 197,
                        label: '霸州市',
                        children: [],
                    },
                    {
                        value: 198,
                        label: '三河市',
                        children: [],
                    },
                ],
            },
            {
                value: 13,
                label: '衡水市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 200,
                        label: '桃城区',
                        children: [],
                    },
                    {
                        value: 201,
                        label: '冀州区',
                        children: [],
                    },
                    {
                        value: 202,
                        label: '枣强县',
                        children: [],
                    },
                    {
                        value: 203,
                        label: '武邑县',
                        children: [],
                    },
                    {
                        value: 204,
                        label: '武强县',
                        children: [],
                    },
                    {
                        value: 205,
                        label: '饶阳县',
                        children: [],
                    },
                    {
                        value: 206,
                        label: '安平县',
                        children: [],
                    },
                    {
                        value: 207,
                        label: '故城县',
                        children: [],
                    },
                    {
                        value: 208,
                        label: '景县',
                        children: [],
                    },
                    {
                        value: 209,
                        label: '阜城县',
                        children: [],
                    },
                    {
                        value: 210,
                        label: '深州市',
                        children: [],
                    },
                ],
            },
            {
                value: 14,
                label: '省直辖县级行政单位',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 211,
                        label: '定州市',
                        children: [],
                    },
                    {
                        value: 212,
                        label: '辛集市',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 4,
        label: '山西省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 15,
                label: '太原市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 214,
                        label: '小店区',
                        children: [],
                    },
                    {
                        value: 215,
                        label: '迎泽区',
                        children: [],
                    },
                    {
                        value: 216,
                        label: '杏花岭区',
                        children: [],
                    },
                    {
                        value: 217,
                        label: '尖草坪区',
                        children: [],
                    },
                    {
                        value: 218,
                        label: '万柏林区',
                        children: [],
                    },
                    {
                        value: 219,
                        label: '晋源区',
                        children: [],
                    },
                    {
                        value: 220,
                        label: '清徐县',
                        children: [],
                    },
                    {
                        value: 221,
                        label: '阳曲县',
                        children: [],
                    },
                    {
                        value: 222,
                        label: '娄烦县',
                        children: [],
                    },
                    {
                        value: 223,
                        label: '古交市',
                        children: [],
                    },
                ],
            },
            {
                value: 16,
                label: '大同市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 225,
                        label: '城区',
                        children: [],
                    },
                    {
                        value: 226,
                        label: '矿区',
                        children: [],
                    },
                    {
                        value: 227,
                        label: '南郊区',
                        children: [],
                    },
                    {
                        value: 228,
                        label: '新荣区',
                        children: [],
                    },
                    {
                        value: 229,
                        label: '阳高县',
                        children: [],
                    },
                    {
                        value: 230,
                        label: '天镇县',
                        children: [],
                    },
                    {
                        value: 231,
                        label: '广灵县',
                        children: [],
                    },
                    {
                        value: 232,
                        label: '灵丘县',
                        children: [],
                    },
                    {
                        value: 233,
                        label: '浑源县',
                        children: [],
                    },
                    {
                        value: 234,
                        label: '左云县',
                        children: [],
                    },
                    {
                        value: 235,
                        label: '大同县',
                        children: [],
                    },
                    {
                        value: 3147,
                        label: '平城区',
                        children: [],
                    },
                    {
                        value: 3148,
                        label: '云冈区',
                        children: [],
                    },
                    {
                        value: 3149,
                        label: '云州区',
                        children: [],
                    },
                ],
            },
            {
                value: 17,
                label: '阳泉市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 237,
                        label: '城区',
                        children: [],
                    },
                    {
                        value: 238,
                        label: '矿区',
                        children: [],
                    },
                    {
                        value: 239,
                        label: '郊区',
                        children: [],
                    },
                    {
                        value: 240,
                        label: '平定县',
                        children: [],
                    },
                    {
                        value: 241,
                        label: '盂县',
                        children: [],
                    },
                ],
            },
            {
                value: 18,
                label: '长治市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 243,
                        label: '城区',
                        children: [],
                    },
                    {
                        value: 244,
                        label: '郊区',
                        children: [],
                    },
                    {
                        value: 245,
                        label: '长治县',
                        children: [],
                    },
                    {
                        value: 246,
                        label: '襄垣县',
                        children: [],
                    },
                    {
                        value: 247,
                        label: '屯留县',
                        children: [],
                    },
                    {
                        value: 248,
                        label: '平顺县',
                        children: [],
                    },
                    {
                        value: 249,
                        label: '黎城县',
                        children: [],
                    },
                    {
                        value: 250,
                        label: '壶关县',
                        children: [],
                    },
                    {
                        value: 251,
                        label: '长子县',
                        children: [],
                    },
                    {
                        value: 252,
                        label: '武乡县',
                        children: [],
                    },
                    {
                        value: 253,
                        label: '沁县',
                        children: [],
                    },
                    {
                        value: 254,
                        label: '沁源县',
                        children: [],
                    },
                    {
                        value: 255,
                        label: '潞城市',
                        children: [],
                    },
                    {
                        value: 3150,
                        label: '潞州区',
                        children: [],
                    },
                    {
                        value: 3151,
                        label: '上党区',
                        children: [],
                    },
                ],
            },
            {
                value: 19,
                label: '晋城市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 257,
                        label: '城区',
                        children: [],
                    },
                    {
                        value: 258,
                        label: '沁水县',
                        children: [],
                    },
                    {
                        value: 259,
                        label: '阳城县',
                        children: [],
                    },
                    {
                        value: 260,
                        label: '陵川县',
                        children: [],
                    },
                    {
                        value: 261,
                        label: '泽州县',
                        children: [],
                    },
                    {
                        value: 262,
                        label: '高平市',
                        children: [],
                    },
                ],
            },
            {
                value: 20,
                label: '朔州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 264,
                        label: '朔城区',
                        children: [],
                    },
                    {
                        value: 265,
                        label: '平鲁区',
                        children: [],
                    },
                    {
                        value: 266,
                        label: '山阴县',
                        children: [],
                    },
                    {
                        value: 267,
                        label: '应县',
                        children: [],
                    },
                    {
                        value: 268,
                        label: '右玉县',
                        children: [],
                    },
                    {
                        value: 269,
                        label: '怀仁县',
                        children: [],
                    },
                ],
            },
            {
                value: 21,
                label: '晋中市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 271,
                        label: '榆次区',
                        children: [],
                    },
                    {
                        value: 272,
                        label: '榆社县',
                        children: [],
                    },
                    {
                        value: 273,
                        label: '左权县',
                        children: [],
                    },
                    {
                        value: 274,
                        label: '和顺县',
                        children: [],
                    },
                    {
                        value: 275,
                        label: '昔阳县',
                        children: [],
                    },
                    {
                        value: 276,
                        label: '寿阳县',
                        children: [],
                    },
                    {
                        value: 277,
                        label: '太谷县',
                        children: [],
                    },
                    {
                        value: 278,
                        label: '祁县',
                        children: [],
                    },
                    {
                        value: 279,
                        label: '平遥县',
                        children: [],
                    },
                    {
                        value: 280,
                        label: '灵石县',
                        children: [],
                    },
                    {
                        value: 281,
                        label: '介休市',
                        children: [],
                    },
                ],
            },
            {
                value: 22,
                label: '运城市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 283,
                        label: '盐湖区',
                        children: [],
                    },
                    {
                        value: 284,
                        label: '临猗县',
                        children: [],
                    },
                    {
                        value: 285,
                        label: '万荣县',
                        children: [],
                    },
                    {
                        value: 286,
                        label: '闻喜县',
                        children: [],
                    },
                    {
                        value: 287,
                        label: '稷山县',
                        children: [],
                    },
                    {
                        value: 288,
                        label: '新绛县',
                        children: [],
                    },
                    {
                        value: 289,
                        label: '绛县',
                        children: [],
                    },
                    {
                        value: 290,
                        label: '垣曲县',
                        children: [],
                    },
                    {
                        value: 291,
                        label: '夏县',
                        children: [],
                    },
                    {
                        value: 292,
                        label: '平陆县',
                        children: [],
                    },
                    {
                        value: 293,
                        label: '芮城县',
                        children: [],
                    },
                    {
                        value: 294,
                        label: '永济市',
                        children: [],
                    },
                    {
                        value: 295,
                        label: '河津市',
                        children: [],
                    },
                ],
            },
            {
                value: 23,
                label: '忻州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 297,
                        label: '忻府区',
                        children: [],
                    },
                    {
                        value: 298,
                        label: '定襄县',
                        children: [],
                    },
                    {
                        value: 299,
                        label: '五台县',
                        children: [],
                    },
                    {
                        value: 300,
                        label: '代县',
                        children: [],
                    },
                    {
                        value: 301,
                        label: '繁峙县',
                        children: [],
                    },
                    {
                        value: 302,
                        label: '宁武县',
                        children: [],
                    },
                    {
                        value: 303,
                        label: '静乐县',
                        children: [],
                    },
                    {
                        value: 304,
                        label: '神池县',
                        children: [],
                    },
                    {
                        value: 305,
                        label: '五寨县',
                        children: [],
                    },
                    {
                        value: 306,
                        label: '岢岚县',
                        children: [],
                    },
                    {
                        value: 307,
                        label: '河曲县',
                        children: [],
                    },
                    {
                        value: 308,
                        label: '保德县',
                        children: [],
                    },
                    {
                        value: 309,
                        label: '偏关县',
                        children: [],
                    },
                    {
                        value: 310,
                        label: '原平市',
                        children: [],
                    },
                ],
            },
            {
                value: 24,
                label: '临汾市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 312,
                        label: '尧都区',
                        children: [],
                    },
                    {
                        value: 313,
                        label: '曲沃县',
                        children: [],
                    },
                    {
                        value: 314,
                        label: '翼城县',
                        children: [],
                    },
                    {
                        value: 315,
                        label: '襄汾县',
                        children: [],
                    },
                    {
                        value: 316,
                        label: '洪洞县',
                        children: [],
                    },
                    {
                        value: 317,
                        label: '古县',
                        children: [],
                    },
                    {
                        value: 318,
                        label: '安泽县',
                        children: [],
                    },
                    {
                        value: 319,
                        label: '浮山县',
                        children: [],
                    },
                    {
                        value: 320,
                        label: '吉县',
                        children: [],
                    },
                    {
                        value: 321,
                        label: '乡宁县',
                        children: [],
                    },
                    {
                        value: 322,
                        label: '大宁县',
                        children: [],
                    },
                    {
                        value: 323,
                        label: '隰县',
                        children: [],
                    },
                    {
                        value: 324,
                        label: '永和县',
                        children: [],
                    },
                    {
                        value: 325,
                        label: '蒲县',
                        children: [],
                    },
                    {
                        value: 326,
                        label: '汾西县',
                        children: [],
                    },
                    {
                        value: 327,
                        label: '侯马市',
                        children: [],
                    },
                    {
                        value: 328,
                        label: '霍州市',
                        children: [],
                    },
                ],
            },
            {
                value: 25,
                label: '吕梁市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 330,
                        label: '离石区',
                        children: [],
                    },
                    {
                        value: 331,
                        label: '文水县',
                        children: [],
                    },
                    {
                        value: 332,
                        label: '交城县',
                        children: [],
                    },
                    {
                        value: 333,
                        label: '兴县',
                        children: [],
                    },
                    {
                        value: 334,
                        label: '临县',
                        children: [],
                    },
                    {
                        value: 335,
                        label: '柳林县',
                        children: [],
                    },
                    {
                        value: 336,
                        label: '石楼县',
                        children: [],
                    },
                    {
                        value: 337,
                        label: '岚县',
                        children: [],
                    },
                    {
                        value: 338,
                        label: '方山县',
                        children: [],
                    },
                    {
                        value: 339,
                        label: '中阳县',
                        children: [],
                    },
                    {
                        value: 340,
                        label: '交口县',
                        children: [],
                    },
                    {
                        value: 341,
                        label: '孝义市',
                        children: [],
                    },
                    {
                        value: 342,
                        label: '汾阳市',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 5,
        label: '内蒙古自治区',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 26,
                label: '呼和浩特市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 344,
                        label: '新城区',
                        children: [],
                    },
                    {
                        value: 345,
                        label: '回民区',
                        children: [],
                    },
                    {
                        value: 346,
                        label: '玉泉区',
                        children: [],
                    },
                    {
                        value: 347,
                        label: '赛罕区',
                        children: [],
                    },
                    {
                        value: 348,
                        label: '土默特左旗',
                        children: [],
                    },
                    {
                        value: 349,
                        label: '托克托县',
                        children: [],
                    },
                    {
                        value: 350,
                        label: '和林格尔县',
                        children: [],
                    },
                    {
                        value: 351,
                        label: '清水河县',
                        children: [],
                    },
                    {
                        value: 352,
                        label: '武川县',
                        children: [],
                    },
                ],
            },
            {
                value: 27,
                label: '包头市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 354,
                        label: '东河区',
                        children: [],
                    },
                    {
                        value: 355,
                        label: '昆都仑区',
                        children: [],
                    },
                    {
                        value: 356,
                        label: '青山区',
                        children: [],
                    },
                    {
                        value: 357,
                        label: '石拐区',
                        children: [],
                    },
                    {
                        value: 358,
                        label: '白云鄂博矿区',
                        children: [],
                    },
                    {
                        value: 359,
                        label: '九原区',
                        children: [],
                    },
                    {
                        value: 360,
                        label: '土默特右旗',
                        children: [],
                    },
                    {
                        value: 361,
                        label: '固阳县',
                        children: [],
                    },
                    {
                        value: 362,
                        label: '达尔罕茂明安联合旗',
                        children: [],
                    },
                ],
            },
            {
                value: 28,
                label: '乌海市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 364,
                        label: '海勃湾区',
                        children: [],
                    },
                    {
                        value: 365,
                        label: '海南区',
                        children: [],
                    },
                    {
                        value: 366,
                        label: '乌达区',
                        children: [],
                    },
                ],
            },
            {
                value: 29,
                label: '赤峰市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 368,
                        label: '红山区',
                        children: [],
                    },
                    {
                        value: 369,
                        label: '元宝山区',
                        children: [],
                    },
                    {
                        value: 370,
                        label: '松山区',
                        children: [],
                    },
                    {
                        value: 371,
                        label: '阿鲁科尔沁旗',
                        children: [],
                    },
                    {
                        value: 372,
                        label: '巴林左旗',
                        children: [],
                    },
                    {
                        value: 373,
                        label: '巴林右旗',
                        children: [],
                    },
                    {
                        value: 374,
                        label: '林西县',
                        children: [],
                    },
                    {
                        value: 375,
                        label: '克什克腾旗',
                        children: [],
                    },
                    {
                        value: 376,
                        label: '翁牛特旗',
                        children: [],
                    },
                    {
                        value: 377,
                        label: '喀喇沁旗',
                        children: [],
                    },
                    {
                        value: 378,
                        label: '宁城县',
                        children: [],
                    },
                    {
                        value: 379,
                        label: '敖汉旗',
                        children: [],
                    },
                ],
            },
            {
                value: 30,
                label: '通辽市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 381,
                        label: '科尔沁区',
                        children: [],
                    },
                    {
                        value: 382,
                        label: '科尔沁左翼中旗',
                        children: [],
                    },
                    {
                        value: 383,
                        label: '科尔沁左翼后旗',
                        children: [],
                    },
                    {
                        value: 384,
                        label: '开鲁县',
                        children: [],
                    },
                    {
                        value: 385,
                        label: '库伦旗',
                        children: [],
                    },
                    {
                        value: 386,
                        label: '奈曼旗',
                        children: [],
                    },
                    {
                        value: 387,
                        label: '扎鲁特旗',
                        children: [],
                    },
                    {
                        value: 388,
                        label: '霍林郭勒市',
                        children: [],
                    },
                ],
            },
            {
                value: 31,
                label: '鄂尔多斯市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 390,
                        label: '东胜区',
                        children: [],
                    },
                    {
                        value: 391,
                        label: '康巴什区',
                        children: [],
                    },
                    {
                        value: 392,
                        label: '达拉特旗',
                        children: [],
                    },
                    {
                        value: 393,
                        label: '准格尔旗',
                        children: [],
                    },
                    {
                        value: 394,
                        label: '鄂托克前旗',
                        children: [],
                    },
                    {
                        value: 395,
                        label: '鄂托克旗',
                        children: [],
                    },
                    {
                        value: 396,
                        label: '杭锦旗',
                        children: [],
                    },
                    {
                        value: 397,
                        label: '乌审旗',
                        children: [],
                    },
                    {
                        value: 398,
                        label: '伊金霍洛旗',
                        children: [],
                    },
                ],
            },
            {
                value: 32,
                label: '呼伦贝尔市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 400,
                        label: '海拉尔区',
                        children: [],
                    },
                    {
                        value: 401,
                        label: '扎赉诺尔区',
                        children: [],
                    },
                    {
                        value: 402,
                        label: '阿荣旗',
                        children: [],
                    },
                    {
                        value: 403,
                        label: '莫力达瓦达斡尔族自治旗',
                        children: [],
                    },
                    {
                        value: 404,
                        label: '鄂伦春自治旗',
                        children: [],
                    },
                    {
                        value: 405,
                        label: '鄂温克族自治旗',
                        children: [],
                    },
                    {
                        value: 406,
                        label: '陈巴尔虎旗',
                        children: [],
                    },
                    {
                        value: 407,
                        label: '新巴尔虎左旗',
                        children: [],
                    },
                    {
                        value: 408,
                        label: '新巴尔虎右旗',
                        children: [],
                    },
                    {
                        value: 409,
                        label: '满洲里市',
                        children: [],
                    },
                    {
                        value: 410,
                        label: '牙克石市',
                        children: [],
                    },
                    {
                        value: 411,
                        label: '扎兰屯市',
                        children: [],
                    },
                    {
                        value: 412,
                        label: '额尔古纳市',
                        children: [],
                    },
                    {
                        value: 413,
                        label: '根河市',
                        children: [],
                    },
                ],
            },
            {
                value: 33,
                label: '巴彦淖尔市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 415,
                        label: '临河区',
                        children: [],
                    },
                    {
                        value: 416,
                        label: '五原县',
                        children: [],
                    },
                    {
                        value: 417,
                        label: '磴口县',
                        children: [],
                    },
                    {
                        value: 418,
                        label: '乌拉特前旗',
                        children: [],
                    },
                    {
                        value: 419,
                        label: '乌拉特中旗',
                        children: [],
                    },
                    {
                        value: 420,
                        label: '乌拉特后旗',
                        children: [],
                    },
                    {
                        value: 421,
                        label: '杭锦后旗',
                        children: [],
                    },
                ],
            },
            {
                value: 34,
                label: '乌兰察布市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 423,
                        label: '集宁区',
                        children: [],
                    },
                    {
                        value: 424,
                        label: '卓资县',
                        children: [],
                    },
                    {
                        value: 425,
                        label: '化德县',
                        children: [],
                    },
                    {
                        value: 426,
                        label: '商都县',
                        children: [],
                    },
                    {
                        value: 427,
                        label: '兴和县',
                        children: [],
                    },
                    {
                        value: 428,
                        label: '凉城县',
                        children: [],
                    },
                    {
                        value: 429,
                        label: '察哈尔右翼前旗',
                        children: [],
                    },
                    {
                        value: 430,
                        label: '察哈尔右翼中旗',
                        children: [],
                    },
                    {
                        value: 431,
                        label: '察哈尔右翼后旗',
                        children: [],
                    },
                    {
                        value: 432,
                        label: '四子王旗',
                        children: [],
                    },
                    {
                        value: 433,
                        label: '丰镇市',
                        children: [],
                    },
                ],
            },
            {
                value: 35,
                label: '兴安盟',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 434,
                        label: '乌兰浩特市',
                        children: [],
                    },
                    {
                        value: 435,
                        label: '阿尔山市',
                        children: [],
                    },
                    {
                        value: 436,
                        label: '科尔沁右翼前旗',
                        children: [],
                    },
                    {
                        value: 437,
                        label: '科尔沁右翼中旗',
                        children: [],
                    },
                    {
                        value: 438,
                        label: '扎赉特旗',
                        children: [],
                    },
                    {
                        value: 439,
                        label: '突泉县',
                        children: [],
                    },
                ],
            },
            {
                value: 36,
                label: '锡林郭勒盟',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 440,
                        label: '二连浩特市',
                        children: [],
                    },
                    {
                        value: 441,
                        label: '锡林浩特市',
                        children: [],
                    },
                    {
                        value: 442,
                        label: '阿巴嘎旗',
                        children: [],
                    },
                    {
                        value: 443,
                        label: '苏尼特左旗',
                        children: [],
                    },
                    {
                        value: 444,
                        label: '苏尼特右旗',
                        children: [],
                    },
                    {
                        value: 445,
                        label: '东乌珠穆沁旗',
                        children: [],
                    },
                    {
                        value: 446,
                        label: '西乌珠穆沁旗',
                        children: [],
                    },
                    {
                        value: 447,
                        label: '太仆寺旗',
                        children: [],
                    },
                    {
                        value: 448,
                        label: '镶黄旗',
                        children: [],
                    },
                    {
                        value: 449,
                        label: '正镶白旗',
                        children: [],
                    },
                    {
                        value: 450,
                        label: '正蓝旗',
                        children: [],
                    },
                    {
                        value: 451,
                        label: '多伦县',
                        children: [],
                    },
                ],
            },
            {
                value: 37,
                label: '阿拉善盟',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 452,
                        label: '阿拉善左旗',
                        children: [],
                    },
                    {
                        value: 453,
                        label: '阿拉善右旗',
                        children: [],
                    },
                    {
                        value: 454,
                        label: '额济纳旗',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 6,
        label: '辽宁省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 38,
                label: '沈阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 456,
                        label: '和平区',
                        children: [],
                    },
                    {
                        value: 457,
                        label: '沈河区',
                        children: [],
                    },
                    {
                        value: 458,
                        label: '大东区',
                        children: [],
                    },
                    {
                        value: 459,
                        label: '皇姑区',
                        children: [],
                    },
                    {
                        value: 460,
                        label: '铁西区',
                        children: [],
                    },
                    {
                        value: 461,
                        label: '苏家屯区',
                        children: [],
                    },
                    {
                        value: 462,
                        label: '浑南区',
                        children: [],
                    },
                    {
                        value: 463,
                        label: '沈北新区',
                        children: [],
                    },
                    {
                        value: 464,
                        label: '于洪区',
                        children: [],
                    },
                    {
                        value: 465,
                        label: '辽中区',
                        children: [],
                    },
                    {
                        value: 466,
                        label: '康平县',
                        children: [],
                    },
                    {
                        value: 467,
                        label: '法库县',
                        children: [],
                    },
                    {
                        value: 468,
                        label: '新民市',
                        children: [],
                    },
                ],
            },
            {
                value: 39,
                label: '大连市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 470,
                        label: '中山区',
                        children: [],
                    },
                    {
                        value: 471,
                        label: '西岗区',
                        children: [],
                    },
                    {
                        value: 472,
                        label: '沙河口区',
                        children: [],
                    },
                    {
                        value: 473,
                        label: '甘井子区',
                        children: [],
                    },
                    {
                        value: 474,
                        label: '旅顺口区',
                        children: [],
                    },
                    {
                        value: 475,
                        label: '金州区',
                        children: [],
                    },
                    {
                        value: 476,
                        label: '普兰店区',
                        children: [],
                    },
                    {
                        value: 477,
                        label: '长海县',
                        children: [],
                    },
                    {
                        value: 478,
                        label: '瓦房店市',
                        children: [],
                    },
                    {
                        value: 479,
                        label: '庄河市',
                        children: [],
                    },
                ],
            },
            {
                value: 40,
                label: '鞍山市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 481,
                        label: '铁东区',
                        children: [],
                    },
                    {
                        value: 482,
                        label: '铁西区',
                        children: [],
                    },
                    {
                        value: 483,
                        label: '立山区',
                        children: [],
                    },
                    {
                        value: 484,
                        label: '千山区',
                        children: [],
                    },
                    {
                        value: 485,
                        label: '台安县',
                        children: [],
                    },
                    {
                        value: 486,
                        label: '岫岩满族自治县',
                        children: [],
                    },
                    {
                        value: 487,
                        label: '海城市',
                        children: [],
                    },
                ],
            },
            {
                value: 41,
                label: '抚顺市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 489,
                        label: '新抚区',
                        children: [],
                    },
                    {
                        value: 490,
                        label: '东洲区',
                        children: [],
                    },
                    {
                        value: 491,
                        label: '望花区',
                        children: [],
                    },
                    {
                        value: 492,
                        label: '顺城区',
                        children: [],
                    },
                    {
                        value: 493,
                        label: '抚顺县',
                        children: [],
                    },
                    {
                        value: 494,
                        label: '新宾满族自治县',
                        children: [],
                    },
                    {
                        value: 495,
                        label: '清原满族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 42,
                label: '本溪市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 497,
                        label: '平山区',
                        children: [],
                    },
                    {
                        value: 498,
                        label: '溪湖区',
                        children: [],
                    },
                    {
                        value: 499,
                        label: '明山区',
                        children: [],
                    },
                    {
                        value: 500,
                        label: '南芬区',
                        children: [],
                    },
                    {
                        value: 501,
                        label: '本溪满族自治县',
                        children: [],
                    },
                    {
                        value: 502,
                        label: '桓仁满族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 43,
                label: '丹东市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 504,
                        label: '元宝区',
                        children: [],
                    },
                    {
                        value: 505,
                        label: '振兴区',
                        children: [],
                    },
                    {
                        value: 506,
                        label: '振安区',
                        children: [],
                    },
                    {
                        value: 507,
                        label: '宽甸满族自治县',
                        children: [],
                    },
                    {
                        value: 508,
                        label: '东港市',
                        children: [],
                    },
                    {
                        value: 509,
                        label: '凤城市',
                        children: [],
                    },
                ],
            },
            {
                value: 44,
                label: '锦州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 511,
                        label: '古塔区',
                        children: [],
                    },
                    {
                        value: 512,
                        label: '凌河区',
                        children: [],
                    },
                    {
                        value: 513,
                        label: '太和区',
                        children: [],
                    },
                    {
                        value: 514,
                        label: '黑山县',
                        children: [],
                    },
                    {
                        value: 515,
                        label: '义县',
                        children: [],
                    },
                    {
                        value: 516,
                        label: '凌海市',
                        children: [],
                    },
                    {
                        value: 517,
                        label: '北镇市',
                        children: [],
                    },
                ],
            },
            {
                value: 45,
                label: '营口市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 519,
                        label: '站前区',
                        children: [],
                    },
                    {
                        value: 520,
                        label: '西市区',
                        children: [],
                    },
                    {
                        value: 521,
                        label: '鲅鱼圈区',
                        children: [],
                    },
                    {
                        value: 522,
                        label: '老边区',
                        children: [],
                    },
                    {
                        value: 523,
                        label: '盖州市',
                        children: [],
                    },
                    {
                        value: 524,
                        label: '大石桥市',
                        children: [],
                    },
                ],
            },
            {
                value: 46,
                label: '阜新市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 526,
                        label: '海州区',
                        children: [],
                    },
                    {
                        value: 527,
                        label: '新邱区',
                        children: [],
                    },
                    {
                        value: 528,
                        label: '太平区',
                        children: [],
                    },
                    {
                        value: 529,
                        label: '清河门区',
                        children: [],
                    },
                    {
                        value: 530,
                        label: '细河区',
                        children: [],
                    },
                    {
                        value: 531,
                        label: '阜新蒙古族自治县',
                        children: [],
                    },
                    {
                        value: 532,
                        label: '彰武县',
                        children: [],
                    },
                ],
            },
            {
                value: 47,
                label: '辽阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 534,
                        label: '白塔区',
                        children: [],
                    },
                    {
                        value: 535,
                        label: '文圣区',
                        children: [],
                    },
                    {
                        value: 536,
                        label: '宏伟区',
                        children: [],
                    },
                    {
                        value: 537,
                        label: '弓长岭区',
                        children: [],
                    },
                    {
                        value: 538,
                        label: '太子河区',
                        children: [],
                    },
                    {
                        value: 539,
                        label: '辽阳县',
                        children: [],
                    },
                    {
                        value: 540,
                        label: '灯塔市',
                        children: [],
                    },
                ],
            },
            {
                value: 48,
                label: '盘锦市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 542,
                        label: '双台子区',
                        children: [],
                    },
                    {
                        value: 543,
                        label: '兴隆台区',
                        children: [],
                    },
                    {
                        value: 544,
                        label: '大洼区',
                        children: [],
                    },
                    {
                        value: 545,
                        label: '盘山县',
                        children: [],
                    },
                ],
            },
            {
                value: 49,
                label: '铁岭市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 547,
                        label: '银州区',
                        children: [],
                    },
                    {
                        value: 548,
                        label: '清河区',
                        children: [],
                    },
                    {
                        value: 549,
                        label: '铁岭县',
                        children: [],
                    },
                    {
                        value: 550,
                        label: '西丰县',
                        children: [],
                    },
                    {
                        value: 551,
                        label: '昌图县',
                        children: [],
                    },
                    {
                        value: 552,
                        label: '调兵山市',
                        children: [],
                    },
                    {
                        value: 553,
                        label: '开原市',
                        children: [],
                    },
                ],
            },
            {
                value: 50,
                label: '朝阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 555,
                        label: '双塔区',
                        children: [],
                    },
                    {
                        value: 556,
                        label: '龙城区',
                        children: [],
                    },
                    {
                        value: 557,
                        label: '朝阳县',
                        children: [],
                    },
                    {
                        value: 558,
                        label: '建平县',
                        children: [],
                    },
                    {
                        value: 559,
                        label: '喀喇沁左翼蒙古族自治县',
                        children: [],
                    },
                    {
                        value: 560,
                        label: '北票市',
                        children: [],
                    },
                    {
                        value: 561,
                        label: '凌源市',
                        children: [],
                    },
                ],
            },
            {
                value: 51,
                label: '葫芦岛市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 563,
                        label: '连山区',
                        children: [],
                    },
                    {
                        value: 564,
                        label: '龙港区',
                        children: [],
                    },
                    {
                        value: 565,
                        label: '南票区',
                        children: [],
                    },
                    {
                        value: 566,
                        label: '绥中县',
                        children: [],
                    },
                    {
                        value: 567,
                        label: '建昌县',
                        children: [],
                    },
                    {
                        value: 568,
                        label: '兴城市',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 7,
        label: '吉林省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 52,
                label: '长春市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 570,
                        label: '南关区',
                        children: [],
                    },
                    {
                        value: 571,
                        label: '宽城区',
                        children: [],
                    },
                    {
                        value: 572,
                        label: '朝阳区',
                        children: [],
                    },
                    {
                        value: 573,
                        label: '二道区',
                        children: [],
                    },
                    {
                        value: 574,
                        label: '绿园区',
                        children: [],
                    },
                    {
                        value: 575,
                        label: '双阳区',
                        children: [],
                    },
                    {
                        value: 576,
                        label: '九台区',
                        children: [],
                    },
                    {
                        value: 577,
                        label: '农安县',
                        children: [],
                    },
                    {
                        value: 578,
                        label: '榆树市',
                        children: [],
                    },
                    {
                        value: 579,
                        label: '德惠市',
                        children: [],
                    },
                ],
            },
            {
                value: 53,
                label: '吉林市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 581,
                        label: '昌邑区',
                        children: [],
                    },
                    {
                        value: 582,
                        label: '龙潭区',
                        children: [],
                    },
                    {
                        value: 583,
                        label: '船营区',
                        children: [],
                    },
                    {
                        value: 584,
                        label: '丰满区',
                        children: [],
                    },
                    {
                        value: 585,
                        label: '永吉县',
                        children: [],
                    },
                    {
                        value: 586,
                        label: '蛟河市',
                        children: [],
                    },
                    {
                        value: 587,
                        label: '桦甸市',
                        children: [],
                    },
                    {
                        value: 588,
                        label: '舒兰市',
                        children: [],
                    },
                    {
                        value: 589,
                        label: '磐石市',
                        children: [],
                    },
                ],
            },
            {
                value: 54,
                label: '四平市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 591,
                        label: '铁西区',
                        children: [],
                    },
                    {
                        value: 592,
                        label: '铁东区',
                        children: [],
                    },
                    {
                        value: 593,
                        label: '梨树县',
                        children: [],
                    },
                    {
                        value: 594,
                        label: '伊通满族自治县',
                        children: [],
                    },
                    {
                        value: 595,
                        label: '公主岭市',
                        children: [],
                    },
                    {
                        value: 596,
                        label: '双辽市',
                        children: [],
                    },
                ],
            },
            {
                value: 55,
                label: '辽源市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 598,
                        label: '龙山区',
                        children: [],
                    },
                    {
                        value: 599,
                        label: '西安区',
                        children: [],
                    },
                    {
                        value: 600,
                        label: '东丰县',
                        children: [],
                    },
                    {
                        value: 601,
                        label: '东辽县',
                        children: [],
                    },
                ],
            },
            {
                value: 56,
                label: '通化市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 603,
                        label: '东昌区',
                        children: [],
                    },
                    {
                        value: 604,
                        label: '二道江区',
                        children: [],
                    },
                    {
                        value: 605,
                        label: '通化县',
                        children: [],
                    },
                    {
                        value: 606,
                        label: '辉南县',
                        children: [],
                    },
                    {
                        value: 607,
                        label: '柳河县',
                        children: [],
                    },
                    {
                        value: 608,
                        label: '梅河口市',
                        children: [],
                    },
                    {
                        value: 609,
                        label: '集安市',
                        children: [],
                    },
                ],
            },
            {
                value: 57,
                label: '白山市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 611,
                        label: '浑江区',
                        children: [],
                    },
                    {
                        value: 612,
                        label: '江源区',
                        children: [],
                    },
                    {
                        value: 613,
                        label: '抚松县',
                        children: [],
                    },
                    {
                        value: 614,
                        label: '靖宇县',
                        children: [],
                    },
                    {
                        value: 615,
                        label: '长白朝鲜族自治县',
                        children: [],
                    },
                    {
                        value: 616,
                        label: '临江市',
                        children: [],
                    },
                ],
            },
            {
                value: 58,
                label: '松原市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 618,
                        label: '宁江区',
                        children: [],
                    },
                    {
                        value: 619,
                        label: '前郭尔罗斯蒙古族自治县',
                        children: [],
                    },
                    {
                        value: 620,
                        label: '长岭县',
                        children: [],
                    },
                    {
                        value: 621,
                        label: '乾安县',
                        children: [],
                    },
                    {
                        value: 622,
                        label: '扶余市',
                        children: [],
                    },
                ],
            },
            {
                value: 59,
                label: '白城市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 624,
                        label: '洮北区',
                        children: [],
                    },
                    {
                        value: 625,
                        label: '镇赉县',
                        children: [],
                    },
                    {
                        value: 626,
                        label: '通榆县',
                        children: [],
                    },
                    {
                        value: 627,
                        label: '洮南市',
                        children: [],
                    },
                    {
                        value: 628,
                        label: '大安市',
                        children: [],
                    },
                ],
            },
            {
                value: 60,
                label: '延边朝鲜族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 629,
                        label: '延吉市',
                        children: [],
                    },
                    {
                        value: 630,
                        label: '图们市',
                        children: [],
                    },
                    {
                        value: 631,
                        label: '敦化市',
                        children: [],
                    },
                    {
                        value: 632,
                        label: '珲春市',
                        children: [],
                    },
                    {
                        value: 633,
                        label: '龙井市',
                        children: [],
                    },
                    {
                        value: 634,
                        label: '和龙市',
                        children: [],
                    },
                    {
                        value: 635,
                        label: '汪清县',
                        children: [],
                    },
                    {
                        value: 636,
                        label: '安图县',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 8,
        label: '黑龙江省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 61,
                label: '哈尔滨市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 638,
                        label: '道里区',
                        children: [],
                    },
                    {
                        value: 639,
                        label: '南岗区',
                        children: [],
                    },
                    {
                        value: 640,
                        label: '道外区',
                        children: [],
                    },
                    {
                        value: 641,
                        label: '平房区',
                        children: [],
                    },
                    {
                        value: 642,
                        label: '松北区',
                        children: [],
                    },
                    {
                        value: 643,
                        label: '香坊区',
                        children: [],
                    },
                    {
                        value: 644,
                        label: '呼兰区',
                        children: [],
                    },
                    {
                        value: 645,
                        label: '阿城区',
                        children: [],
                    },
                    {
                        value: 646,
                        label: '双城区',
                        children: [],
                    },
                    {
                        value: 647,
                        label: '依兰县',
                        children: [],
                    },
                    {
                        value: 648,
                        label: '方正县',
                        children: [],
                    },
                    {
                        value: 649,
                        label: '宾县',
                        children: [],
                    },
                    {
                        value: 650,
                        label: '巴彦县',
                        children: [],
                    },
                    {
                        value: 651,
                        label: '木兰县',
                        children: [],
                    },
                    {
                        value: 652,
                        label: '通河县',
                        children: [],
                    },
                    {
                        value: 653,
                        label: '延寿县',
                        children: [],
                    },
                    {
                        value: 654,
                        label: '尚志市',
                        children: [],
                    },
                    {
                        value: 655,
                        label: '五常市',
                        children: [],
                    },
                ],
            },
            {
                value: 62,
                label: '齐齐哈尔市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 657,
                        label: '龙沙区',
                        children: [],
                    },
                    {
                        value: 658,
                        label: '建华区',
                        children: [],
                    },
                    {
                        value: 659,
                        label: '铁锋区',
                        children: [],
                    },
                    {
                        value: 660,
                        label: '昂昂溪区',
                        children: [],
                    },
                    {
                        value: 661,
                        label: '富拉尔基区',
                        children: [],
                    },
                    {
                        value: 662,
                        label: '碾子山区',
                        children: [],
                    },
                    {
                        value: 663,
                        label: '梅里斯达斡尔族区',
                        children: [],
                    },
                    {
                        value: 664,
                        label: '龙江县',
                        children: [],
                    },
                    {
                        value: 665,
                        label: '依安县',
                        children: [],
                    },
                    {
                        value: 666,
                        label: '泰来县',
                        children: [],
                    },
                    {
                        value: 667,
                        label: '甘南县',
                        children: [],
                    },
                    {
                        value: 668,
                        label: '富裕县',
                        children: [],
                    },
                    {
                        value: 669,
                        label: '克山县',
                        children: [],
                    },
                    {
                        value: 670,
                        label: '克东县',
                        children: [],
                    },
                    {
                        value: 671,
                        label: '拜泉县',
                        children: [],
                    },
                    {
                        value: 672,
                        label: '讷河市',
                        children: [],
                    },
                ],
            },
            {
                value: 63,
                label: '鸡西市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 674,
                        label: '鸡冠区',
                        children: [],
                    },
                    {
                        value: 675,
                        label: '恒山区',
                        children: [],
                    },
                    {
                        value: 676,
                        label: '滴道区',
                        children: [],
                    },
                    {
                        value: 677,
                        label: '梨树区',
                        children: [],
                    },
                    {
                        value: 678,
                        label: '城子河区',
                        children: [],
                    },
                    {
                        value: 679,
                        label: '麻山区',
                        children: [],
                    },
                    {
                        value: 680,
                        label: '鸡东县',
                        children: [],
                    },
                    {
                        value: 681,
                        label: '虎林市',
                        children: [],
                    },
                    {
                        value: 682,
                        label: '密山市',
                        children: [],
                    },
                ],
            },
            {
                value: 64,
                label: '鹤岗市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 684,
                        label: '向阳区',
                        children: [],
                    },
                    {
                        value: 685,
                        label: '工农区',
                        children: [],
                    },
                    {
                        value: 686,
                        label: '南山区',
                        children: [],
                    },
                    {
                        value: 687,
                        label: '兴安区',
                        children: [],
                    },
                    {
                        value: 688,
                        label: '东山区',
                        children: [],
                    },
                    {
                        value: 689,
                        label: '兴山区',
                        children: [],
                    },
                    {
                        value: 690,
                        label: '萝北县',
                        children: [],
                    },
                    {
                        value: 691,
                        label: '绥滨县',
                        children: [],
                    },
                ],
            },
            {
                value: 65,
                label: '双鸭山市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 693,
                        label: '尖山区',
                        children: [],
                    },
                    {
                        value: 694,
                        label: '岭东区',
                        children: [],
                    },
                    {
                        value: 695,
                        label: '四方台区',
                        children: [],
                    },
                    {
                        value: 696,
                        label: '宝山区',
                        children: [],
                    },
                    {
                        value: 697,
                        label: '集贤县',
                        children: [],
                    },
                    {
                        value: 698,
                        label: '友谊县',
                        children: [],
                    },
                    {
                        value: 699,
                        label: '宝清县',
                        children: [],
                    },
                    {
                        value: 700,
                        label: '饶河县',
                        children: [],
                    },
                ],
            },
            {
                value: 66,
                label: '大庆市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 702,
                        label: '萨尔图区',
                        children: [],
                    },
                    {
                        value: 703,
                        label: '龙凤区',
                        children: [],
                    },
                    {
                        value: 704,
                        label: '让胡路区',
                        children: [],
                    },
                    {
                        value: 705,
                        label: '红岗区',
                        children: [],
                    },
                    {
                        value: 706,
                        label: '大同区',
                        children: [],
                    },
                    {
                        value: 707,
                        label: '肇州县',
                        children: [],
                    },
                    {
                        value: 708,
                        label: '肇源县',
                        children: [],
                    },
                    {
                        value: 709,
                        label: '林甸县',
                        children: [],
                    },
                    {
                        value: 710,
                        label: '杜尔伯特蒙古族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 67,
                label: '伊春市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 712,
                        label: '伊春区',
                        children: [],
                    },
                    {
                        value: 713,
                        label: '南岔区',
                        children: [],
                    },
                    {
                        value: 714,
                        label: '友好区',
                        children: [],
                    },
                    {
                        value: 715,
                        label: '西林区',
                        children: [],
                    },
                    {
                        value: 716,
                        label: '翠峦区',
                        children: [],
                    },
                    {
                        value: 717,
                        label: '新青区',
                        children: [],
                    },
                    {
                        value: 718,
                        label: '美溪区',
                        children: [],
                    },
                    {
                        value: 719,
                        label: '金山屯区',
                        children: [],
                    },
                    {
                        value: 720,
                        label: '五营区',
                        children: [],
                    },
                    {
                        value: 721,
                        label: '乌马河区',
                        children: [],
                    },
                    {
                        value: 722,
                        label: '汤旺河区',
                        children: [],
                    },
                    {
                        value: 723,
                        label: '带岭区',
                        children: [],
                    },
                    {
                        value: 724,
                        label: '乌伊岭区',
                        children: [],
                    },
                    {
                        value: 725,
                        label: '红星区',
                        children: [],
                    },
                    {
                        value: 726,
                        label: '上甘岭区',
                        children: [],
                    },
                    {
                        value: 727,
                        label: '嘉荫县',
                        children: [],
                    },
                    {
                        value: 728,
                        label: '铁力市',
                        children: [],
                    },
                ],
            },
            {
                value: 68,
                label: '佳木斯市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 730,
                        label: '向阳区',
                        children: [],
                    },
                    {
                        value: 731,
                        label: '前进区',
                        children: [],
                    },
                    {
                        value: 732,
                        label: '东风区',
                        children: [],
                    },
                    {
                        value: 733,
                        label: '郊区',
                        children: [],
                    },
                    {
                        value: 734,
                        label: '桦南县',
                        children: [],
                    },
                    {
                        value: 735,
                        label: '桦川县',
                        children: [],
                    },
                    {
                        value: 736,
                        label: '汤原县',
                        children: [],
                    },
                    {
                        value: 737,
                        label: '同江市',
                        children: [],
                    },
                    {
                        value: 738,
                        label: '富锦市',
                        children: [],
                    },
                    {
                        value: 739,
                        label: '抚远市',
                        children: [],
                    },
                ],
            },
            {
                value: 69,
                label: '七台河市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 741,
                        label: '新兴区',
                        children: [],
                    },
                    {
                        value: 742,
                        label: '桃山区',
                        children: [],
                    },
                    {
                        value: 743,
                        label: '茄子河区',
                        children: [],
                    },
                    {
                        value: 744,
                        label: '勃利县',
                        children: [],
                    },
                ],
            },
            {
                value: 70,
                label: '牡丹江市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 746,
                        label: '东安区',
                        children: [],
                    },
                    {
                        value: 747,
                        label: '阳明区',
                        children: [],
                    },
                    {
                        value: 748,
                        label: '爱民区',
                        children: [],
                    },
                    {
                        value: 749,
                        label: '西安区',
                        children: [],
                    },
                    {
                        value: 750,
                        label: '林口县',
                        children: [],
                    },
                    {
                        value: 751,
                        label: '绥芬河市',
                        children: [],
                    },
                    {
                        value: 752,
                        label: '海林市',
                        children: [],
                    },
                    {
                        value: 753,
                        label: '宁安市',
                        children: [],
                    },
                    {
                        value: 754,
                        label: '穆棱市',
                        children: [],
                    },
                    {
                        value: 755,
                        label: '东宁市',
                        children: [],
                    },
                ],
            },
            {
                value: 71,
                label: '黑河市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 757,
                        label: '爱辉区',
                        children: [],
                    },
                    {
                        value: 758,
                        label: '嫩江县',
                        children: [],
                    },
                    {
                        value: 759,
                        label: '逊克县',
                        children: [],
                    },
                    {
                        value: 760,
                        label: '孙吴县',
                        children: [],
                    },
                    {
                        value: 761,
                        label: '北安市',
                        children: [],
                    },
                    {
                        value: 762,
                        label: '五大连池市',
                        children: [],
                    },
                ],
            },
            {
                value: 72,
                label: '绥化市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 764,
                        label: '北林区',
                        children: [],
                    },
                    {
                        value: 765,
                        label: '望奎县',
                        children: [],
                    },
                    {
                        value: 766,
                        label: '兰西县',
                        children: [],
                    },
                    {
                        value: 767,
                        label: '青冈县',
                        children: [],
                    },
                    {
                        value: 768,
                        label: '庆安县',
                        children: [],
                    },
                    {
                        value: 769,
                        label: '明水县',
                        children: [],
                    },
                    {
                        value: 770,
                        label: '绥棱县',
                        children: [],
                    },
                    {
                        value: 771,
                        label: '安达市',
                        children: [],
                    },
                    {
                        value: 772,
                        label: '肇东市',
                        children: [],
                    },
                    {
                        value: 773,
                        label: '海伦市',
                        children: [],
                    },
                ],
            },
            {
                value: 73,
                label: '大兴安岭地区',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 774,
                        label: '呼玛县',
                        children: [],
                    },
                    {
                        value: 775,
                        label: '塔河县',
                        children: [],
                    },
                    {
                        value: 776,
                        label: '漠河县',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 9,
        label: '上海市',
        children: [
            {
                value: 74,
                label: '市辖区',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 777,
                        label: '黄浦区',
                        children: [],
                    },
                    {
                        value: 778,
                        label: '徐汇区',
                        children: [],
                    },
                    {
                        value: 779,
                        label: '长宁区',
                        children: [],
                    },
                    {
                        value: 780,
                        label: '静安区',
                        children: [],
                    },
                    {
                        value: 781,
                        label: '普陀区',
                        children: [],
                    },
                    {
                        value: 782,
                        label: '虹口区',
                        children: [],
                    },
                    {
                        value: 783,
                        label: '杨浦区',
                        children: [],
                    },
                    {
                        value: 784,
                        label: '闵行区',
                        children: [],
                    },
                    {
                        value: 785,
                        label: '宝山区',
                        children: [],
                    },
                    {
                        value: 786,
                        label: '嘉定区',
                        children: [],
                    },
                    {
                        value: 787,
                        label: '浦东新区',
                        children: [],
                    },
                    {
                        value: 788,
                        label: '金山区',
                        children: [],
                    },
                    {
                        value: 789,
                        label: '松江区',
                        children: [],
                    },
                    {
                        value: 790,
                        label: '青浦区',
                        children: [],
                    },
                    {
                        value: 791,
                        label: '奉贤区',
                        children: [],
                    },
                    {
                        value: 792,
                        label: '崇明区',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 10,
        label: '江苏省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 75,
                label: '南京市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 794,
                        label: '玄武区',
                        children: [],
                    },
                    {
                        value: 795,
                        label: '秦淮区',
                        children: [],
                    },
                    {
                        value: 796,
                        label: '建邺区',
                        children: [],
                    },
                    {
                        value: 797,
                        label: '鼓楼区',
                        children: [],
                    },
                    {
                        value: 798,
                        label: '浦口区',
                        children: [],
                    },
                    {
                        value: 799,
                        label: '栖霞区',
                        children: [],
                    },
                    {
                        value: 800,
                        label: '雨花台区',
                        children: [],
                    },
                    {
                        value: 801,
                        label: '江宁区',
                        children: [],
                    },
                    {
                        value: 802,
                        label: '六合区',
                        children: [],
                    },
                    {
                        value: 803,
                        label: '溧水区',
                        children: [],
                    },
                    {
                        value: 804,
                        label: '高淳区',
                        children: [],
                    },
                ],
            },
            {
                value: 76,
                label: '无锡市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 806,
                        label: '锡山区',
                        children: [],
                    },
                    {
                        value: 807,
                        label: '惠山区',
                        children: [],
                    },
                    {
                        value: 808,
                        label: '滨湖区',
                        children: [],
                    },
                    {
                        value: 809,
                        label: '梁溪区',
                        children: [],
                    },
                    {
                        value: 810,
                        label: '新吴区',
                        children: [],
                    },
                    {
                        value: 811,
                        label: '江阴市',
                        children: [],
                    },
                    {
                        value: 812,
                        label: '宜兴市',
                        children: [],
                    },
                ],
            },
            {
                value: 77,
                label: '徐州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 814,
                        label: '鼓楼区',
                        children: [],
                    },
                    {
                        value: 815,
                        label: '云龙区',
                        children: [],
                    },
                    {
                        value: 816,
                        label: '贾汪区',
                        children: [],
                    },
                    {
                        value: 817,
                        label: '泉山区',
                        children: [],
                    },
                    {
                        value: 818,
                        label: '铜山区',
                        children: [],
                    },
                    {
                        value: 819,
                        label: '丰县',
                        children: [],
                    },
                    {
                        value: 820,
                        label: '沛县',
                        children: [],
                    },
                    {
                        value: 821,
                        label: '睢宁县',
                        children: [],
                    },
                    {
                        value: 822,
                        label: '新沂市',
                        children: [],
                    },
                    {
                        value: 823,
                        label: '邳州市',
                        children: [],
                    },
                ],
            },
            {
                value: 78,
                label: '常州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 825,
                        label: '天宁区',
                        children: [],
                    },
                    {
                        value: 826,
                        label: '钟楼区',
                        children: [],
                    },
                    {
                        value: 827,
                        label: '新北区',
                        children: [],
                    },
                    {
                        value: 828,
                        label: '武进区',
                        children: [],
                    },
                    {
                        value: 829,
                        label: '金坛区',
                        children: [],
                    },
                    {
                        value: 830,
                        label: '溧阳市',
                        children: [],
                    },
                ],
            },
            {
                value: 79,
                label: '苏州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 832,
                        label: '虎丘区',
                        children: [],
                    },
                    {
                        value: 833,
                        label: '吴中区',
                        children: [],
                    },
                    {
                        value: 834,
                        label: '相城区',
                        children: [],
                    },
                    {
                        value: 835,
                        label: '姑苏区',
                        children: [],
                    },
                    {
                        value: 836,
                        label: '吴江区',
                        children: [],
                    },
                    {
                        value: 837,
                        label: '常熟市',
                        children: [],
                    },
                    {
                        value: 838,
                        label: '张家港市',
                        children: [],
                    },
                    {
                        value: 839,
                        label: '昆山市',
                        children: [],
                    },
                    {
                        value: 840,
                        label: '太仓市',
                        children: [],
                    },
                ],
            },
            {
                value: 80,
                label: '南通市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 842,
                        label: '崇川区',
                        children: [],
                    },
                    {
                        value: 843,
                        label: '港闸区',
                        children: [],
                    },
                    {
                        value: 844,
                        label: '通州区',
                        children: [],
                    },
                    {
                        value: 845,
                        label: '海安县',
                        children: [],
                    },
                    {
                        value: 846,
                        label: '如东县',
                        children: [],
                    },
                    {
                        value: 847,
                        label: '启东市',
                        children: [],
                    },
                    {
                        value: 848,
                        label: '如皋市',
                        children: [],
                    },
                    {
                        value: 849,
                        label: '海门市',
                        children: [],
                    },
                ],
            },
            {
                value: 81,
                label: '连云港市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 851,
                        label: '连云区',
                        children: [],
                    },
                    {
                        value: 852,
                        label: '海州区',
                        children: [],
                    },
                    {
                        value: 853,
                        label: '赣榆区',
                        children: [],
                    },
                    {
                        value: 854,
                        label: '东海县',
                        children: [],
                    },
                    {
                        value: 855,
                        label: '灌云县',
                        children: [],
                    },
                    {
                        value: 856,
                        label: '灌南县',
                        children: [],
                    },
                ],
            },
            {
                value: 82,
                label: '淮安市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 858,
                        label: '淮安区',
                        children: [],
                    },
                    {
                        value: 859,
                        label: '淮阴区',
                        children: [],
                    },
                    {
                        value: 860,
                        label: '清江浦区',
                        children: [],
                    },
                    {
                        value: 861,
                        label: '洪泽区',
                        children: [],
                    },
                    {
                        value: 862,
                        label: '涟水县',
                        children: [],
                    },
                    {
                        value: 863,
                        label: '盱眙县',
                        children: [],
                    },
                    {
                        value: 864,
                        label: '金湖县',
                        children: [],
                    },
                ],
            },
            {
                value: 83,
                label: '盐城市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 866,
                        label: '亭湖区',
                        children: [],
                    },
                    {
                        value: 867,
                        label: '盐都区',
                        children: [],
                    },
                    {
                        value: 868,
                        label: '大丰区',
                        children: [],
                    },
                    {
                        value: 869,
                        label: '响水县',
                        children: [],
                    },
                    {
                        value: 870,
                        label: '滨海县',
                        children: [],
                    },
                    {
                        value: 871,
                        label: '阜宁县',
                        children: [],
                    },
                    {
                        value: 872,
                        label: '射阳县',
                        children: [],
                    },
                    {
                        value: 873,
                        label: '建湖县',
                        children: [],
                    },
                    {
                        value: 874,
                        label: '东台市',
                        children: [],
                    },
                ],
            },
            {
                value: 84,
                label: '扬州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 876,
                        label: '广陵区',
                        children: [],
                    },
                    {
                        value: 877,
                        label: '邗江区',
                        children: [],
                    },
                    {
                        value: 878,
                        label: '江都区',
                        children: [],
                    },
                    {
                        value: 879,
                        label: '宝应县',
                        children: [],
                    },
                    {
                        value: 880,
                        label: '仪征市',
                        children: [],
                    },
                    {
                        value: 881,
                        label: '高邮市',
                        children: [],
                    },
                ],
            },
            {
                value: 85,
                label: '镇江市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 883,
                        label: '京口区',
                        children: [],
                    },
                    {
                        value: 884,
                        label: '润州区',
                        children: [],
                    },
                    {
                        value: 885,
                        label: '丹徒区',
                        children: [],
                    },
                    {
                        value: 886,
                        label: '丹阳市',
                        children: [],
                    },
                    {
                        value: 887,
                        label: '扬中市',
                        children: [],
                    },
                    {
                        value: 888,
                        label: '句容市',
                        children: [],
                    },
                ],
            },
            {
                value: 86,
                label: '泰州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 890,
                        label: '海陵区',
                        children: [],
                    },
                    {
                        value: 891,
                        label: '高港区',
                        children: [],
                    },
                    {
                        value: 892,
                        label: '姜堰区',
                        children: [],
                    },
                    {
                        value: 893,
                        label: '兴化市',
                        children: [],
                    },
                    {
                        value: 894,
                        label: '靖江市',
                        children: [],
                    },
                    {
                        value: 895,
                        label: '泰兴市',
                        children: [],
                    },
                ],
            },
            {
                value: 87,
                label: '宿迁市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 897,
                        label: '宿城区',
                        children: [],
                    },
                    {
                        value: 898,
                        label: '宿豫区',
                        children: [],
                    },
                    {
                        value: 899,
                        label: '沭阳县',
                        children: [],
                    },
                    {
                        value: 900,
                        label: '泗阳县',
                        children: [],
                    },
                    {
                        value: 901,
                        label: '泗洪县',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 11,
        label: '浙江省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 88,
                label: '杭州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 903,
                        label: '上城区',
                        children: [],
                    },
                    {
                        value: 906,
                        label: '拱墅区',
                        children: [],
                    },
                    {
                        value: 907,
                        label: '西湖区',
                        children: [],
                    },
                    {
                        value: 908,
                        label: '滨江区',
                        children: [],
                    },
                    {
                        value: 909,
                        label: '萧山区',
                        children: [],
                    },
                    {
                        value: 910,
                        label: '余杭区',
                        children: [],
                    },
                    {
                        value: 911,
                        label: '富阳区',
                        children: [],
                    },
                    {
                        value: 912,
                        label: '桐庐县',
                        children: [],
                    },
                    {
                        value: 913,
                        label: '淳安县',
                        children: [],
                    },
                    {
                        value: 914,
                        label: '建德市',
                        children: [],
                    },
                    {
                        value: 915,
                        label: '临安区',
                        children: [],
                    },
                    {
                        value: 3143,
                        label: '钱塘区',
                        children: [],
                    },
                    {
                        value: 3167,
                        label: '临平区',
                        children: [],
                    },
                ],
            },
            {
                value: 89,
                label: '宁波市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 917,
                        label: '海曙区',
                        children: [],
                    },
                    {
                        value: 918,
                        label: '江东区',
                        children: [],
                    },
                    {
                        value: 919,
                        label: '江北区',
                        children: [],
                    },
                    {
                        value: 920,
                        label: '北仑区',
                        children: [],
                    },
                    {
                        value: 921,
                        label: '镇海区',
                        children: [],
                    },
                    {
                        value: 922,
                        label: '鄞州区',
                        children: [],
                    },
                    {
                        value: 923,
                        label: '象山县',
                        children: [],
                    },
                    {
                        value: 924,
                        label: '宁海县',
                        children: [],
                    },
                    {
                        value: 925,
                        label: '余姚市',
                        children: [],
                    },
                    {
                        value: 926,
                        label: '慈溪市',
                        children: [],
                    },
                    {
                        value: 927,
                        label: '奉化市',
                        children: [],
                    },
                ],
            },
            {
                value: 90,
                label: '温州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 929,
                        label: '鹿城区',
                        children: [],
                    },
                    {
                        value: 930,
                        label: '龙湾区',
                        children: [],
                    },
                    {
                        value: 931,
                        label: '瓯海区',
                        children: [],
                    },
                    {
                        value: 932,
                        label: '洞头区',
                        children: [],
                    },
                    {
                        value: 933,
                        label: '永嘉县',
                        children: [],
                    },
                    {
                        value: 934,
                        label: '平阳县',
                        children: [],
                    },
                    {
                        value: 935,
                        label: '苍南县',
                        children: [],
                    },
                    {
                        value: 936,
                        label: '文成县',
                        children: [],
                    },
                    {
                        value: 937,
                        label: '泰顺县',
                        children: [],
                    },
                    {
                        value: 938,
                        label: '瑞安市',
                        children: [],
                    },
                    {
                        value: 939,
                        label: '乐清市',
                        children: [],
                    },
                    {
                        value: 3168,
                        label: '龙港市',
                        children: [],
                    },
                ],
            },
            {
                value: 91,
                label: '嘉兴市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 941,
                        label: '南湖区',
                        children: [],
                    },
                    {
                        value: 942,
                        label: '秀洲区',
                        children: [],
                    },
                    {
                        value: 943,
                        label: '嘉善县',
                        children: [],
                    },
                    {
                        value: 944,
                        label: '海盐县',
                        children: [],
                    },
                    {
                        value: 945,
                        label: '海宁市',
                        children: [],
                    },
                    {
                        value: 946,
                        label: '平湖市',
                        children: [],
                    },
                    {
                        value: 947,
                        label: '桐乡市',
                        children: [],
                    },
                ],
            },
            {
                value: 92,
                label: '湖州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 949,
                        label: '吴兴区',
                        children: [],
                    },
                    {
                        value: 950,
                        label: '南浔区',
                        children: [],
                    },
                    {
                        value: 951,
                        label: '德清县',
                        children: [],
                    },
                    {
                        value: 952,
                        label: '长兴县',
                        children: [],
                    },
                    {
                        value: 953,
                        label: '安吉县',
                        children: [],
                    },
                ],
            },
            {
                value: 93,
                label: '绍兴市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 955,
                        label: '越城区',
                        children: [],
                    },
                    {
                        value: 956,
                        label: '柯桥区',
                        children: [],
                    },
                    {
                        value: 957,
                        label: '上虞区',
                        children: [],
                    },
                    {
                        value: 958,
                        label: '新昌县',
                        children: [],
                    },
                    {
                        value: 959,
                        label: '诸暨市',
                        children: [],
                    },
                    {
                        value: 960,
                        label: '嵊州市',
                        children: [],
                    },
                ],
            },
            {
                value: 94,
                label: '金华市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 962,
                        label: '婺城区',
                        children: [],
                    },
                    {
                        value: 963,
                        label: '金东区',
                        children: [],
                    },
                    {
                        value: 964,
                        label: '武义县',
                        children: [],
                    },
                    {
                        value: 965,
                        label: '浦江县',
                        children: [],
                    },
                    {
                        value: 966,
                        label: '磐安县',
                        children: [],
                    },
                    {
                        value: 967,
                        label: '兰溪市',
                        children: [],
                    },
                    {
                        value: 968,
                        label: '义乌市',
                        children: [],
                    },
                    {
                        value: 969,
                        label: '东阳市',
                        children: [],
                    },
                    {
                        value: 970,
                        label: '永康市',
                        children: [],
                    },
                ],
            },
            {
                value: 95,
                label: '衢州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 972,
                        label: '柯城区',
                        children: [],
                    },
                    {
                        value: 973,
                        label: '衢江区',
                        children: [],
                    },
                    {
                        value: 974,
                        label: '常山县',
                        children: [],
                    },
                    {
                        value: 975,
                        label: '开化县',
                        children: [],
                    },
                    {
                        value: 976,
                        label: '龙游县',
                        children: [],
                    },
                    {
                        value: 977,
                        label: '江山市',
                        children: [],
                    },
                ],
            },
            {
                value: 96,
                label: '舟山市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 979,
                        label: '定海区',
                        children: [],
                    },
                    {
                        value: 980,
                        label: '普陀区',
                        children: [],
                    },
                    {
                        value: 981,
                        label: '岱山县',
                        children: [],
                    },
                    {
                        value: 982,
                        label: '嵊泗县',
                        children: [],
                    },
                ],
            },
            {
                value: 97,
                label: '台州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 984,
                        label: '椒江区',
                        children: [],
                    },
                    {
                        value: 985,
                        label: '黄岩区',
                        children: [],
                    },
                    {
                        value: 986,
                        label: '路桥区',
                        children: [],
                    },
                    {
                        value: 987,
                        label: '玉环县',
                        children: [],
                    },
                    {
                        value: 988,
                        label: '三门县',
                        children: [],
                    },
                    {
                        value: 989,
                        label: '天台县',
                        children: [],
                    },
                    {
                        value: 990,
                        label: '仙居县',
                        children: [],
                    },
                    {
                        value: 991,
                        label: '温岭市',
                        children: [],
                    },
                    {
                        value: 992,
                        label: '临海市',
                        children: [],
                    },
                ],
            },
            {
                value: 98,
                label: '丽水市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 994,
                        label: '莲都区',
                        children: [],
                    },
                    {
                        value: 995,
                        label: '青田县',
                        children: [],
                    },
                    {
                        value: 996,
                        label: '缙云县',
                        children: [],
                    },
                    {
                        value: 997,
                        label: '遂昌县',
                        children: [],
                    },
                    {
                        value: 998,
                        label: '松阳县',
                        children: [],
                    },
                    {
                        value: 999,
                        label: '云和县',
                        children: [],
                    },
                    {
                        value: 1000,
                        label: '庆元县',
                        children: [],
                    },
                    {
                        value: 1001,
                        label: '景宁畲族自治县',
                        children: [],
                    },
                    {
                        value: 1002,
                        label: '龙泉市',
                        children: [],
                    },
                ],
            },
            {
                value: 348,
                label: 'hzx自定义的市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3163,
                        label: 'hzx自定义的区',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 12,
        label: '安徽省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 99,
                label: '合肥市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1004,
                        label: '瑶海区',
                        children: [],
                    },
                    {
                        value: 1005,
                        label: '庐阳区',
                        children: [],
                    },
                    {
                        value: 1006,
                        label: '蜀山区',
                        children: [],
                    },
                    {
                        value: 1007,
                        label: '包河区',
                        children: [],
                    },
                    {
                        value: 1008,
                        label: '长丰县',
                        children: [],
                    },
                    {
                        value: 1009,
                        label: '肥东县',
                        children: [],
                    },
                    {
                        value: 1010,
                        label: '肥西县',
                        children: [],
                    },
                    {
                        value: 1011,
                        label: '庐江县',
                        children: [],
                    },
                    {
                        value: 1012,
                        label: '巢湖市',
                        children: [],
                    },
                ],
            },
            {
                value: 100,
                label: '芜湖市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1014,
                        label: '镜湖区',
                        children: [],
                    },
                    {
                        value: 1015,
                        label: '弋江区',
                        children: [],
                    },
                    {
                        value: 1016,
                        label: '鸠江区',
                        children: [],
                    },
                    {
                        value: 1017,
                        label: '三山区',
                        children: [],
                    },
                    {
                        value: 1018,
                        label: '芜湖县',
                        children: [],
                    },
                    {
                        value: 1019,
                        label: '繁昌县',
                        children: [],
                    },
                    {
                        value: 1020,
                        label: '南陵县',
                        children: [],
                    },
                    {
                        value: 1021,
                        label: '无为县',
                        children: [],
                    },
                ],
            },
            {
                value: 101,
                label: '蚌埠市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1023,
                        label: '龙子湖区',
                        children: [],
                    },
                    {
                        value: 1024,
                        label: '蚌山区',
                        children: [],
                    },
                    {
                        value: 1025,
                        label: '禹会区',
                        children: [],
                    },
                    {
                        value: 1026,
                        label: '淮上区',
                        children: [],
                    },
                    {
                        value: 1027,
                        label: '怀远县',
                        children: [],
                    },
                    {
                        value: 1028,
                        label: '五河县',
                        children: [],
                    },
                    {
                        value: 1029,
                        label: '固镇县',
                        children: [],
                    },
                ],
            },
            {
                value: 102,
                label: '淮南市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1031,
                        label: '大通区',
                        children: [],
                    },
                    {
                        value: 1032,
                        label: '田家庵区',
                        children: [],
                    },
                    {
                        value: 1033,
                        label: '谢家集区',
                        children: [],
                    },
                    {
                        value: 1034,
                        label: '八公山区',
                        children: [],
                    },
                    {
                        value: 1035,
                        label: '潘集区',
                        children: [],
                    },
                    {
                        value: 1036,
                        label: '凤台县',
                        children: [],
                    },
                    {
                        value: 1037,
                        label: '寿县',
                        children: [],
                    },
                ],
            },
            {
                value: 103,
                label: '马鞍山市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1039,
                        label: '花山区',
                        children: [],
                    },
                    {
                        value: 1040,
                        label: '雨山区',
                        children: [],
                    },
                    {
                        value: 1041,
                        label: '博望区',
                        children: [],
                    },
                    {
                        value: 1042,
                        label: '当涂县',
                        children: [],
                    },
                    {
                        value: 1043,
                        label: '含山县',
                        children: [],
                    },
                    {
                        value: 1044,
                        label: '和县',
                        children: [],
                    },
                ],
            },
            {
                value: 104,
                label: '淮北市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1046,
                        label: '杜集区',
                        children: [],
                    },
                    {
                        value: 1047,
                        label: '相山区',
                        children: [],
                    },
                    {
                        value: 1048,
                        label: '烈山区',
                        children: [],
                    },
                    {
                        value: 1049,
                        label: '濉溪县',
                        children: [],
                    },
                ],
            },
            {
                value: 105,
                label: '铜陵市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1051,
                        label: '铜官区',
                        children: [],
                    },
                    {
                        value: 1052,
                        label: '义安区',
                        children: [],
                    },
                    {
                        value: 1053,
                        label: '郊区',
                        children: [],
                    },
                    {
                        value: 1054,
                        label: '枞阳县',
                        children: [],
                    },
                ],
            },
            {
                value: 106,
                label: '安庆市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1056,
                        label: '迎江区',
                        children: [],
                    },
                    {
                        value: 1057,
                        label: '大观区',
                        children: [],
                    },
                    {
                        value: 1058,
                        label: '宜秀区',
                        children: [],
                    },
                    {
                        value: 1059,
                        label: '怀宁县',
                        children: [],
                    },
                    {
                        value: 1060,
                        label: '潜山县',
                        children: [],
                    },
                    {
                        value: 1061,
                        label: '太湖县',
                        children: [],
                    },
                    {
                        value: 1062,
                        label: '宿松县',
                        children: [],
                    },
                    {
                        value: 1063,
                        label: '望江县',
                        children: [],
                    },
                    {
                        value: 1064,
                        label: '岳西县',
                        children: [],
                    },
                    {
                        value: 1065,
                        label: '桐城市',
                        children: [],
                    },
                ],
            },
            {
                value: 107,
                label: '黄山市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1067,
                        label: '屯溪区',
                        children: [],
                    },
                    {
                        value: 1068,
                        label: '黄山区',
                        children: [],
                    },
                    {
                        value: 1069,
                        label: '徽州区',
                        children: [],
                    },
                    {
                        value: 1070,
                        label: '歙县',
                        children: [],
                    },
                    {
                        value: 1071,
                        label: '休宁县',
                        children: [],
                    },
                    {
                        value: 1072,
                        label: '黟县',
                        children: [],
                    },
                    {
                        value: 1073,
                        label: '祁门县',
                        children: [],
                    },
                ],
            },
            {
                value: 108,
                label: '滁州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1075,
                        label: '琅琊区',
                        children: [],
                    },
                    {
                        value: 1076,
                        label: '南谯区',
                        children: [],
                    },
                    {
                        value: 1077,
                        label: '来安县',
                        children: [],
                    },
                    {
                        value: 1078,
                        label: '全椒县',
                        children: [],
                    },
                    {
                        value: 1079,
                        label: '定远县',
                        children: [],
                    },
                    {
                        value: 1080,
                        label: '凤阳县',
                        children: [],
                    },
                    {
                        value: 1081,
                        label: '天长市',
                        children: [],
                    },
                    {
                        value: 1082,
                        label: '明光市',
                        children: [],
                    },
                ],
            },
            {
                value: 109,
                label: '阜阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1084,
                        label: '颍州区',
                        children: [],
                    },
                    {
                        value: 1085,
                        label: '颍东区',
                        children: [],
                    },
                    {
                        value: 1086,
                        label: '颍泉区',
                        children: [],
                    },
                    {
                        value: 1087,
                        label: '临泉县',
                        children: [],
                    },
                    {
                        value: 1088,
                        label: '太和县',
                        children: [],
                    },
                    {
                        value: 1089,
                        label: '阜南县',
                        children: [],
                    },
                    {
                        value: 1090,
                        label: '颍上县',
                        children: [],
                    },
                    {
                        value: 1091,
                        label: '界首市',
                        children: [],
                    },
                ],
            },
            {
                value: 110,
                label: '宿州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1093,
                        label: '埇桥区',
                        children: [],
                    },
                    {
                        value: 1094,
                        label: '砀山县',
                        children: [],
                    },
                    {
                        value: 1095,
                        label: '萧县',
                        children: [],
                    },
                    {
                        value: 1096,
                        label: '灵璧县',
                        children: [],
                    },
                    {
                        value: 1097,
                        label: '泗县',
                        children: [],
                    },
                ],
            },
            {
                value: 111,
                label: '六安市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1099,
                        label: '金安区',
                        children: [],
                    },
                    {
                        value: 1100,
                        label: '裕安区',
                        children: [],
                    },
                    {
                        value: 1101,
                        label: '叶集区',
                        children: [],
                    },
                    {
                        value: 1102,
                        label: '霍邱县',
                        children: [],
                    },
                    {
                        value: 1103,
                        label: '舒城县',
                        children: [],
                    },
                    {
                        value: 1104,
                        label: '金寨县',
                        children: [],
                    },
                    {
                        value: 1105,
                        label: '霍山县',
                        children: [],
                    },
                ],
            },
            {
                value: 112,
                label: '亳州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1107,
                        label: '谯城区',
                        children: [],
                    },
                    {
                        value: 1108,
                        label: '涡阳县',
                        children: [],
                    },
                    {
                        value: 1109,
                        label: '蒙城县',
                        children: [],
                    },
                    {
                        value: 1110,
                        label: '利辛县',
                        children: [],
                    },
                ],
            },
            {
                value: 113,
                label: '池州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1112,
                        label: '贵池区',
                        children: [],
                    },
                    {
                        value: 1113,
                        label: '东至县',
                        children: [],
                    },
                    {
                        value: 1114,
                        label: '石台县',
                        children: [],
                    },
                    {
                        value: 1115,
                        label: '青阳县',
                        children: [],
                    },
                ],
            },
            {
                value: 114,
                label: '宣城市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1117,
                        label: '宣州区',
                        children: [],
                    },
                    {
                        value: 1118,
                        label: '郎溪县',
                        children: [],
                    },
                    {
                        value: 1119,
                        label: '广德县',
                        children: [],
                    },
                    {
                        value: 1120,
                        label: '泾县',
                        children: [],
                    },
                    {
                        value: 1121,
                        label: '绩溪县',
                        children: [],
                    },
                    {
                        value: 1122,
                        label: '旌德县',
                        children: [],
                    },
                    {
                        value: 1123,
                        label: '宁国市',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 13,
        label: '福建省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 115,
                label: '福州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1125,
                        label: '鼓楼区',
                        children: [],
                    },
                    {
                        value: 1126,
                        label: '台江区',
                        children: [],
                    },
                    {
                        value: 1127,
                        label: '仓山区',
                        children: [],
                    },
                    {
                        value: 1128,
                        label: '马尾区',
                        children: [],
                    },
                    {
                        value: 1129,
                        label: '晋安区',
                        children: [],
                    },
                    {
                        value: 1130,
                        label: '闽侯县',
                        children: [],
                    },
                    {
                        value: 1131,
                        label: '连江县',
                        children: [],
                    },
                    {
                        value: 1132,
                        label: '罗源县',
                        children: [],
                    },
                    {
                        value: 1133,
                        label: '闽清县',
                        children: [],
                    },
                    {
                        value: 1134,
                        label: '永泰县',
                        children: [],
                    },
                    {
                        value: 1135,
                        label: '平潭县',
                        children: [],
                    },
                    {
                        value: 1136,
                        label: '福清市',
                        children: [],
                    },
                    {
                        value: 1137,
                        label: '长乐市',
                        children: [],
                    },
                ],
            },
            {
                value: 116,
                label: '厦门市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1139,
                        label: '思明区',
                        children: [],
                    },
                    {
                        value: 1140,
                        label: '海沧区',
                        children: [],
                    },
                    {
                        value: 1141,
                        label: '湖里区',
                        children: [],
                    },
                    {
                        value: 1142,
                        label: '集美区',
                        children: [],
                    },
                    {
                        value: 1143,
                        label: '同安区',
                        children: [],
                    },
                    {
                        value: 1144,
                        label: '翔安区',
                        children: [],
                    },
                ],
            },
            {
                value: 117,
                label: '莆田市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1146,
                        label: '城厢区',
                        children: [],
                    },
                    {
                        value: 1147,
                        label: '涵江区',
                        children: [],
                    },
                    {
                        value: 1148,
                        label: '荔城区',
                        children: [],
                    },
                    {
                        value: 1149,
                        label: '秀屿区',
                        children: [],
                    },
                    {
                        value: 1150,
                        label: '仙游县',
                        children: [],
                    },
                ],
            },
            {
                value: 118,
                label: '三明市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1151,
                        label: '三明市',
                        children: [],
                    },
                    {
                        value: 1152,
                        label: '梅列区',
                        children: [],
                    },
                    {
                        value: 1153,
                        label: '三元区',
                        children: [],
                    },
                    {
                        value: 1154,
                        label: '明溪县',
                        children: [],
                    },
                    {
                        value: 1155,
                        label: '清流县',
                        children: [],
                    },
                    {
                        value: 1156,
                        label: '宁化县',
                        children: [],
                    },
                    {
                        value: 1157,
                        label: '大田县',
                        children: [],
                    },
                    {
                        value: 1158,
                        label: '尤溪县',
                        children: [],
                    },
                    {
                        value: 1159,
                        label: '沙县',
                        children: [],
                    },
                    {
                        value: 1160,
                        label: '将乐县',
                        children: [],
                    },
                    {
                        value: 1161,
                        label: '泰宁县',
                        children: [],
                    },
                    {
                        value: 1162,
                        label: '建宁县',
                        children: [],
                    },
                    {
                        value: 1163,
                        label: '永安市',
                        children: [],
                    },
                ],
            },
            {
                value: 119,
                label: '泉州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1165,
                        label: '鲤城区',
                        children: [],
                    },
                    {
                        value: 1166,
                        label: '丰泽区',
                        children: [],
                    },
                    {
                        value: 1167,
                        label: '洛江区',
                        children: [],
                    },
                    {
                        value: 1168,
                        label: '泉港区',
                        children: [],
                    },
                    {
                        value: 1169,
                        label: '惠安县',
                        children: [],
                    },
                    {
                        value: 1170,
                        label: '安溪县',
                        children: [],
                    },
                    {
                        value: 1171,
                        label: '永春县',
                        children: [],
                    },
                    {
                        value: 1172,
                        label: '德化县',
                        children: [],
                    },
                    {
                        value: 1173,
                        label: '金门县',
                        children: [],
                    },
                    {
                        value: 1174,
                        label: '石狮市',
                        children: [],
                    },
                    {
                        value: 1175,
                        label: '晋江市',
                        children: [],
                    },
                    {
                        value: 1176,
                        label: '南安市',
                        children: [],
                    },
                ],
            },
            {
                value: 120,
                label: '漳州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1178,
                        label: '芗城区',
                        children: [],
                    },
                    {
                        value: 1179,
                        label: '龙文区',
                        children: [],
                    },
                    {
                        value: 1180,
                        label: '云霄县',
                        children: [],
                    },
                    {
                        value: 1181,
                        label: '漳浦县',
                        children: [],
                    },
                    {
                        value: 1182,
                        label: '诏安县',
                        children: [],
                    },
                    {
                        value: 1183,
                        label: '长泰县',
                        children: [],
                    },
                    {
                        value: 1184,
                        label: '东山县',
                        children: [],
                    },
                    {
                        value: 1185,
                        label: '南靖县',
                        children: [],
                    },
                    {
                        value: 1186,
                        label: '平和县',
                        children: [],
                    },
                    {
                        value: 1187,
                        label: '华安县',
                        children: [],
                    },
                    {
                        value: 1188,
                        label: '龙海市',
                        children: [],
                    },
                ],
            },
            {
                value: 121,
                label: '南平市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1190,
                        label: '延平区',
                        children: [],
                    },
                    {
                        value: 1191,
                        label: '建阳区',
                        children: [],
                    },
                    {
                        value: 1192,
                        label: '顺昌县',
                        children: [],
                    },
                    {
                        value: 1193,
                        label: '浦城县',
                        children: [],
                    },
                    {
                        value: 1194,
                        label: '光泽县',
                        children: [],
                    },
                    {
                        value: 1195,
                        label: '松溪县',
                        children: [],
                    },
                    {
                        value: 1196,
                        label: '政和县',
                        children: [],
                    },
                    {
                        value: 1197,
                        label: '邵武市',
                        children: [],
                    },
                    {
                        value: 1198,
                        label: '武夷山市',
                        children: [],
                    },
                    {
                        value: 1199,
                        label: '建瓯市',
                        children: [],
                    },
                ],
            },
            {
                value: 122,
                label: '龙岩市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1201,
                        label: '新罗区',
                        children: [],
                    },
                    {
                        value: 1202,
                        label: '永定区',
                        children: [],
                    },
                    {
                        value: 1203,
                        label: '长汀县',
                        children: [],
                    },
                    {
                        value: 1204,
                        label: '上杭县',
                        children: [],
                    },
                    {
                        value: 1205,
                        label: '武平县',
                        children: [],
                    },
                    {
                        value: 1206,
                        label: '连城县',
                        children: [],
                    },
                    {
                        value: 1207,
                        label: '漳平市',
                        children: [],
                    },
                ],
            },
            {
                value: 123,
                label: '宁德市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1209,
                        label: '蕉城区',
                        children: [],
                    },
                    {
                        value: 1210,
                        label: '霞浦县',
                        children: [],
                    },
                    {
                        value: 1211,
                        label: '古田县',
                        children: [],
                    },
                    {
                        value: 1212,
                        label: '屏南县',
                        children: [],
                    },
                    {
                        value: 1213,
                        label: '寿宁县',
                        children: [],
                    },
                    {
                        value: 1214,
                        label: '周宁县',
                        children: [],
                    },
                    {
                        value: 1215,
                        label: '柘荣县',
                        children: [],
                    },
                    {
                        value: 1216,
                        label: '福安市',
                        children: [],
                    },
                    {
                        value: 1217,
                        label: '福鼎市',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 14,
        label: '江西省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 124,
                label: '南昌市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1219,
                        label: '东湖区',
                        children: [],
                    },
                    {
                        value: 1220,
                        label: '西湖区',
                        children: [],
                    },
                    {
                        value: 1221,
                        label: '青云谱区',
                        children: [],
                    },
                    {
                        value: 1222,
                        label: '湾里区',
                        children: [],
                    },
                    {
                        value: 1223,
                        label: '青山湖区',
                        children: [],
                    },
                    {
                        value: 1224,
                        label: '新建区',
                        children: [],
                    },
                    {
                        value: 1225,
                        label: '南昌县',
                        children: [],
                    },
                    {
                        value: 1226,
                        label: '安义县',
                        children: [],
                    },
                    {
                        value: 1227,
                        label: '进贤县',
                        children: [],
                    },
                    {
                        value: 3146,
                        label: '红谷滩区',
                        children: [],
                    },
                ],
            },
            {
                value: 125,
                label: '景德镇市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1229,
                        label: '昌江区',
                        children: [],
                    },
                    {
                        value: 1230,
                        label: '珠山区',
                        children: [],
                    },
                    {
                        value: 1231,
                        label: '浮梁县',
                        children: [],
                    },
                    {
                        value: 1232,
                        label: '乐平市',
                        children: [],
                    },
                ],
            },
            {
                value: 126,
                label: '萍乡市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1234,
                        label: '安源区',
                        children: [],
                    },
                    {
                        value: 1235,
                        label: '湘东区',
                        children: [],
                    },
                    {
                        value: 1236,
                        label: '莲花县',
                        children: [],
                    },
                    {
                        value: 1237,
                        label: '上栗县',
                        children: [],
                    },
                    {
                        value: 1238,
                        label: '芦溪县',
                        children: [],
                    },
                ],
            },
            {
                value: 127,
                label: '九江市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1240,
                        label: '濂溪区',
                        children: [],
                    },
                    {
                        value: 1241,
                        label: '浔阳区',
                        children: [],
                    },
                    {
                        value: 1242,
                        label: '九江县',
                        children: [],
                    },
                    {
                        value: 1243,
                        label: '武宁县',
                        children: [],
                    },
                    {
                        value: 1244,
                        label: '修水县',
                        children: [],
                    },
                    {
                        value: 1245,
                        label: '永修县',
                        children: [],
                    },
                    {
                        value: 1246,
                        label: '德安县',
                        children: [],
                    },
                    {
                        value: 1247,
                        label: '都昌县',
                        children: [],
                    },
                    {
                        value: 1248,
                        label: '湖口县',
                        children: [],
                    },
                    {
                        value: 1249,
                        label: '彭泽县',
                        children: [],
                    },
                    {
                        value: 1250,
                        label: '瑞昌市',
                        children: [],
                    },
                    {
                        value: 1251,
                        label: '共青城市',
                        children: [],
                    },
                    {
                        value: 1252,
                        label: '庐山市',
                        children: [],
                    },
                ],
            },
            {
                value: 128,
                label: '新余市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1254,
                        label: '渝水区',
                        children: [],
                    },
                    {
                        value: 1255,
                        label: '分宜县',
                        children: [],
                    },
                ],
            },
            {
                value: 129,
                label: '鹰潭市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1257,
                        label: '月湖区',
                        children: [],
                    },
                    {
                        value: 1258,
                        label: '余江县',
                        children: [],
                    },
                    {
                        value: 1259,
                        label: '贵溪市',
                        children: [],
                    },
                ],
            },
            {
                value: 130,
                label: '赣州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1261,
                        label: '章贡区',
                        children: [],
                    },
                    {
                        value: 1262,
                        label: '南康区',
                        children: [],
                    },
                    {
                        value: 1263,
                        label: '赣县',
                        children: [],
                    },
                    {
                        value: 1264,
                        label: '信丰县',
                        children: [],
                    },
                    {
                        value: 1265,
                        label: '大余县',
                        children: [],
                    },
                    {
                        value: 1266,
                        label: '上犹县',
                        children: [],
                    },
                    {
                        value: 1267,
                        label: '崇义县',
                        children: [],
                    },
                    {
                        value: 1268,
                        label: '安远县',
                        children: [],
                    },
                    {
                        value: 1269,
                        label: '龙南县',
                        children: [],
                    },
                    {
                        value: 1270,
                        label: '定南县',
                        children: [],
                    },
                    {
                        value: 1271,
                        label: '全南县',
                        children: [],
                    },
                    {
                        value: 1272,
                        label: '宁都县',
                        children: [],
                    },
                    {
                        value: 1273,
                        label: '于都县',
                        children: [],
                    },
                    {
                        value: 1274,
                        label: '兴国县',
                        children: [],
                    },
                    {
                        value: 1275,
                        label: '会昌县',
                        children: [],
                    },
                    {
                        value: 1276,
                        label: '寻乌县',
                        children: [],
                    },
                    {
                        value: 1277,
                        label: '石城县',
                        children: [],
                    },
                    {
                        value: 1278,
                        label: '瑞金市',
                        children: [],
                    },
                ],
            },
            {
                value: 131,
                label: '吉安市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1280,
                        label: '吉州区',
                        children: [],
                    },
                    {
                        value: 1281,
                        label: '青原区',
                        children: [],
                    },
                    {
                        value: 1282,
                        label: '吉安县',
                        children: [],
                    },
                    {
                        value: 1283,
                        label: '吉水县',
                        children: [],
                    },
                    {
                        value: 1284,
                        label: '峡江县',
                        children: [],
                    },
                    {
                        value: 1285,
                        label: '新干县',
                        children: [],
                    },
                    {
                        value: 1286,
                        label: '永丰县',
                        children: [],
                    },
                    {
                        value: 1287,
                        label: '泰和县',
                        children: [],
                    },
                    {
                        value: 1288,
                        label: '遂川县',
                        children: [],
                    },
                    {
                        value: 1289,
                        label: '万安县',
                        children: [],
                    },
                    {
                        value: 1290,
                        label: '安福县',
                        children: [],
                    },
                    {
                        value: 1291,
                        label: '永新县',
                        children: [],
                    },
                    {
                        value: 1292,
                        label: '井冈山市',
                        children: [],
                    },
                ],
            },
            {
                value: 132,
                label: '宜春市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1294,
                        label: '袁州区',
                        children: [],
                    },
                    {
                        value: 1295,
                        label: '奉新县',
                        children: [],
                    },
                    {
                        value: 1296,
                        label: '万载县',
                        children: [],
                    },
                    {
                        value: 1297,
                        label: '上高县',
                        children: [],
                    },
                    {
                        value: 1298,
                        label: '宜丰县',
                        children: [],
                    },
                    {
                        value: 1299,
                        label: '靖安县',
                        children: [],
                    },
                    {
                        value: 1300,
                        label: '铜鼓县',
                        children: [],
                    },
                    {
                        value: 1301,
                        label: '丰城市',
                        children: [],
                    },
                    {
                        value: 1302,
                        label: '樟树市',
                        children: [],
                    },
                    {
                        value: 1303,
                        label: '高安市',
                        children: [],
                    },
                ],
            },
            {
                value: 133,
                label: '抚州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1305,
                        label: '临川区',
                        children: [],
                    },
                    {
                        value: 1306,
                        label: '南城县',
                        children: [],
                    },
                    {
                        value: 1307,
                        label: '黎川县',
                        children: [],
                    },
                    {
                        value: 1308,
                        label: '南丰县',
                        children: [],
                    },
                    {
                        value: 1309,
                        label: '崇仁县',
                        children: [],
                    },
                    {
                        value: 1310,
                        label: '乐安县',
                        children: [],
                    },
                    {
                        value: 1311,
                        label: '宜黄县',
                        children: [],
                    },
                    {
                        value: 1312,
                        label: '金溪县',
                        children: [],
                    },
                    {
                        value: 1313,
                        label: '资溪县',
                        children: [],
                    },
                    {
                        value: 1314,
                        label: '东乡县',
                        children: [],
                    },
                    {
                        value: 1315,
                        label: '广昌县',
                        children: [],
                    },
                ],
            },
            {
                value: 134,
                label: '上饶市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1317,
                        label: '信州区',
                        children: [],
                    },
                    {
                        value: 1318,
                        label: '广丰区',
                        children: [],
                    },
                    {
                        value: 1319,
                        label: '上饶县',
                        children: [],
                    },
                    {
                        value: 1320,
                        label: '玉山县',
                        children: [],
                    },
                    {
                        value: 1321,
                        label: '铅山县',
                        children: [],
                    },
                    {
                        value: 1322,
                        label: '横峰县',
                        children: [],
                    },
                    {
                        value: 1323,
                        label: '弋阳县',
                        children: [],
                    },
                    {
                        value: 1324,
                        label: '余干县',
                        children: [],
                    },
                    {
                        value: 1325,
                        label: '鄱阳县',
                        children: [],
                    },
                    {
                        value: 1326,
                        label: '万年县',
                        children: [],
                    },
                    {
                        value: 1327,
                        label: '婺源县',
                        children: [],
                    },
                    {
                        value: 1328,
                        label: '德兴市',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 15,
        label: '山东省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 135,
                label: '济南市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1330,
                        label: '历下区',
                        children: [],
                    },
                    {
                        value: 1331,
                        label: '市中区',
                        children: [],
                    },
                    {
                        value: 1332,
                        label: '槐荫区',
                        children: [],
                    },
                    {
                        value: 1333,
                        label: '天桥区',
                        children: [],
                    },
                    {
                        value: 1334,
                        label: '历城区',
                        children: [],
                    },
                    {
                        value: 1335,
                        label: '长清区',
                        children: [],
                    },
                    {
                        value: 1336,
                        label: '平阴县',
                        children: [],
                    },
                    {
                        value: 1337,
                        label: '济阳县',
                        children: [],
                    },
                    {
                        value: 1338,
                        label: '商河县',
                        children: [],
                    },
                    {
                        value: 1339,
                        label: '章丘市',
                        children: [],
                    },
                    {
                        value: 3144,
                        label: '莱芜区',
                        children: [],
                    },
                    {
                        value: 3145,
                        label: '钢城区',
                        children: [],
                    },
                ],
            },
            {
                value: 136,
                label: '青岛市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1341,
                        label: '市南区',
                        children: [],
                    },
                    {
                        value: 1342,
                        label: '市北区',
                        children: [],
                    },
                    {
                        value: 1343,
                        label: '黄岛区',
                        children: [],
                    },
                    {
                        value: 1344,
                        label: '崂山区',
                        children: [],
                    },
                    {
                        value: 1345,
                        label: '李沧区',
                        children: [],
                    },
                    {
                        value: 1346,
                        label: '城阳区',
                        children: [],
                    },
                    {
                        value: 1347,
                        label: '胶州市',
                        children: [],
                    },
                    {
                        value: 1348,
                        label: '即墨市',
                        children: [],
                    },
                    {
                        value: 1349,
                        label: '平度市',
                        children: [],
                    },
                    {
                        value: 1350,
                        label: '莱西市',
                        children: [],
                    },
                ],
            },
            {
                value: 137,
                label: '淄博市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1352,
                        label: '淄川区',
                        children: [],
                    },
                    {
                        value: 1353,
                        label: '张店区',
                        children: [],
                    },
                    {
                        value: 1354,
                        label: '博山区',
                        children: [],
                    },
                    {
                        value: 1355,
                        label: '临淄区',
                        children: [],
                    },
                    {
                        value: 1356,
                        label: '周村区',
                        children: [],
                    },
                    {
                        value: 1357,
                        label: '桓台县',
                        children: [],
                    },
                    {
                        value: 1358,
                        label: '高青县',
                        children: [],
                    },
                    {
                        value: 1359,
                        label: '沂源县',
                        children: [],
                    },
                ],
            },
            {
                value: 138,
                label: '枣庄市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1361,
                        label: '市中区',
                        children: [],
                    },
                    {
                        value: 1362,
                        label: '薛城区',
                        children: [],
                    },
                    {
                        value: 1363,
                        label: '峄城区',
                        children: [],
                    },
                    {
                        value: 1364,
                        label: '台儿庄区',
                        children: [],
                    },
                    {
                        value: 1365,
                        label: '山亭区',
                        children: [],
                    },
                    {
                        value: 1366,
                        label: '滕州市',
                        children: [],
                    },
                ],
            },
            {
                value: 139,
                label: '东营市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1368,
                        label: '东营区',
                        children: [],
                    },
                    {
                        value: 1369,
                        label: '河口区',
                        children: [],
                    },
                    {
                        value: 1370,
                        label: '垦利区',
                        children: [],
                    },
                    {
                        value: 1371,
                        label: '利津县',
                        children: [],
                    },
                    {
                        value: 1372,
                        label: '广饶县',
                        children: [],
                    },
                ],
            },
            {
                value: 140,
                label: '烟台市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1374,
                        label: '芝罘区',
                        children: [],
                    },
                    {
                        value: 1375,
                        label: '福山区',
                        children: [],
                    },
                    {
                        value: 1376,
                        label: '牟平区',
                        children: [],
                    },
                    {
                        value: 1377,
                        label: '莱山区',
                        children: [],
                    },
                    {
                        value: 1378,
                        label: '长岛县',
                        children: [],
                    },
                    {
                        value: 1379,
                        label: '龙口市',
                        children: [],
                    },
                    {
                        value: 1380,
                        label: '莱阳市',
                        children: [],
                    },
                    {
                        value: 1381,
                        label: '莱州市',
                        children: [],
                    },
                    {
                        value: 1382,
                        label: '蓬莱市',
                        children: [],
                    },
                    {
                        value: 1383,
                        label: '招远市',
                        children: [],
                    },
                    {
                        value: 1384,
                        label: '栖霞市',
                        children: [],
                    },
                    {
                        value: 1385,
                        label: '海阳市',
                        children: [],
                    },
                ],
            },
            {
                value: 141,
                label: '潍坊市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1387,
                        label: '潍城区',
                        children: [],
                    },
                    {
                        value: 1388,
                        label: '寒亭区',
                        children: [],
                    },
                    {
                        value: 1389,
                        label: '坊子区',
                        children: [],
                    },
                    {
                        value: 1390,
                        label: '奎文区',
                        children: [],
                    },
                    {
                        value: 1391,
                        label: '临朐县',
                        children: [],
                    },
                    {
                        value: 1392,
                        label: '昌乐县',
                        children: [],
                    },
                    {
                        value: 1393,
                        label: '青州市',
                        children: [],
                    },
                    {
                        value: 1394,
                        label: '诸城市',
                        children: [],
                    },
                    {
                        value: 1395,
                        label: '寿光市',
                        children: [],
                    },
                    {
                        value: 1396,
                        label: '安丘市',
                        children: [],
                    },
                    {
                        value: 1397,
                        label: '高密市',
                        children: [],
                    },
                    {
                        value: 1398,
                        label: '昌邑市',
                        children: [],
                    },
                ],
            },
            {
                value: 142,
                label: '济宁市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1400,
                        label: '任城区',
                        children: [],
                    },
                    {
                        value: 1401,
                        label: '兖州区',
                        children: [],
                    },
                    {
                        value: 1402,
                        label: '微山县',
                        children: [],
                    },
                    {
                        value: 1403,
                        label: '鱼台县',
                        children: [],
                    },
                    {
                        value: 1404,
                        label: '金乡县',
                        children: [],
                    },
                    {
                        value: 1405,
                        label: '嘉祥县',
                        children: [],
                    },
                    {
                        value: 1406,
                        label: '汶上县',
                        children: [],
                    },
                    {
                        value: 1407,
                        label: '泗水县',
                        children: [],
                    },
                    {
                        value: 1408,
                        label: '梁山县',
                        children: [],
                    },
                    {
                        value: 1409,
                        label: '曲阜市',
                        children: [],
                    },
                    {
                        value: 1410,
                        label: '邹城市',
                        children: [],
                    },
                ],
            },
            {
                value: 143,
                label: '泰安市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1412,
                        label: '泰山区',
                        children: [],
                    },
                    {
                        value: 1413,
                        label: '岱岳区',
                        children: [],
                    },
                    {
                        value: 1414,
                        label: '宁阳县',
                        children: [],
                    },
                    {
                        value: 1415,
                        label: '东平县',
                        children: [],
                    },
                    {
                        value: 1416,
                        label: '新泰市',
                        children: [],
                    },
                    {
                        value: 1417,
                        label: '肥城市',
                        children: [],
                    },
                ],
            },
            {
                value: 144,
                label: '威海市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1419,
                        label: '环翠区',
                        children: [],
                    },
                    {
                        value: 1420,
                        label: '文登区',
                        children: [],
                    },
                    {
                        value: 1421,
                        label: '荣成市',
                        children: [],
                    },
                    {
                        value: 1422,
                        label: '乳山市',
                        children: [],
                    },
                ],
            },
            {
                value: 145,
                label: '日照市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1424,
                        label: '东港区',
                        children: [],
                    },
                    {
                        value: 1425,
                        label: '岚山区',
                        children: [],
                    },
                    {
                        value: 1426,
                        label: '五莲县',
                        children: [],
                    },
                    {
                        value: 1427,
                        label: '莒县',
                        children: [],
                    },
                ],
            },
            {
                value: 146,
                label: '莱芜市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1429,
                        label: '莱城区',
                        children: [],
                    },
                    {
                        value: 1430,
                        label: '钢城区',
                        children: [],
                    },
                ],
            },
            {
                value: 147,
                label: '临沂市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1432,
                        label: '兰山区',
                        children: [],
                    },
                    {
                        value: 1433,
                        label: '罗庄区',
                        children: [],
                    },
                    {
                        value: 1434,
                        label: '河东区',
                        children: [],
                    },
                    {
                        value: 1435,
                        label: '沂南县',
                        children: [],
                    },
                    {
                        value: 1436,
                        label: '郯城县',
                        children: [],
                    },
                    {
                        value: 1437,
                        label: '沂水县',
                        children: [],
                    },
                    {
                        value: 1438,
                        label: '兰陵县',
                        children: [],
                    },
                    {
                        value: 1439,
                        label: '费县',
                        children: [],
                    },
                    {
                        value: 1440,
                        label: '平邑县',
                        children: [],
                    },
                    {
                        value: 1441,
                        label: '莒南县',
                        children: [],
                    },
                    {
                        value: 1442,
                        label: '蒙阴县',
                        children: [],
                    },
                    {
                        value: 1443,
                        label: '临沭县',
                        children: [],
                    },
                ],
            },
            {
                value: 148,
                label: '德州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1445,
                        label: '德城区',
                        children: [],
                    },
                    {
                        value: 1446,
                        label: '陵城区',
                        children: [],
                    },
                    {
                        value: 1447,
                        label: '宁津县',
                        children: [],
                    },
                    {
                        value: 1448,
                        label: '庆云县',
                        children: [],
                    },
                    {
                        value: 1449,
                        label: '临邑县',
                        children: [],
                    },
                    {
                        value: 1450,
                        label: '齐河县',
                        children: [],
                    },
                    {
                        value: 1451,
                        label: '平原县',
                        children: [],
                    },
                    {
                        value: 1452,
                        label: '夏津县',
                        children: [],
                    },
                    {
                        value: 1453,
                        label: '武城县',
                        children: [],
                    },
                    {
                        value: 1454,
                        label: '乐陵市',
                        children: [],
                    },
                    {
                        value: 1455,
                        label: '禹城市',
                        children: [],
                    },
                ],
            },
            {
                value: 149,
                label: '聊城市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1457,
                        label: '东昌府区',
                        children: [],
                    },
                    {
                        value: 1458,
                        label: '阳谷县',
                        children: [],
                    },
                    {
                        value: 1459,
                        label: '莘县',
                        children: [],
                    },
                    {
                        value: 1460,
                        label: '茌平县',
                        children: [],
                    },
                    {
                        value: 1461,
                        label: '东阿县',
                        children: [],
                    },
                    {
                        value: 1462,
                        label: '冠县',
                        children: [],
                    },
                    {
                        value: 1463,
                        label: '高唐县',
                        children: [],
                    },
                    {
                        value: 1464,
                        label: '临清市',
                        children: [],
                    },
                ],
            },
            {
                value: 150,
                label: '滨州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1466,
                        label: '滨城区',
                        children: [],
                    },
                    {
                        value: 1467,
                        label: '沾化区',
                        children: [],
                    },
                    {
                        value: 1468,
                        label: '惠民县',
                        children: [],
                    },
                    {
                        value: 1469,
                        label: '阳信县',
                        children: [],
                    },
                    {
                        value: 1470,
                        label: '无棣县',
                        children: [],
                    },
                    {
                        value: 1471,
                        label: '博兴县',
                        children: [],
                    },
                    {
                        value: 1472,
                        label: '邹平县',
                        children: [],
                    },
                ],
            },
            {
                value: 151,
                label: '菏泽市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1474,
                        label: '牡丹区',
                        children: [],
                    },
                    {
                        value: 1475,
                        label: '定陶区',
                        children: [],
                    },
                    {
                        value: 1476,
                        label: '曹县',
                        children: [],
                    },
                    {
                        value: 1477,
                        label: '单县',
                        children: [],
                    },
                    {
                        value: 1478,
                        label: '成武县',
                        children: [],
                    },
                    {
                        value: 1479,
                        label: '巨野县',
                        children: [],
                    },
                    {
                        value: 1480,
                        label: '郓城县',
                        children: [],
                    },
                    {
                        value: 1481,
                        label: '鄄城县',
                        children: [],
                    },
                    {
                        value: 1482,
                        label: '东明县',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 16,
        label: '河南省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 152,
                label: '郑州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1484,
                        label: '中原区',
                        children: [],
                    },
                    {
                        value: 1485,
                        label: '二七区',
                        children: [],
                    },
                    {
                        value: 1486,
                        label: '管城回族区',
                        children: [],
                    },
                    {
                        value: 1487,
                        label: '金水区',
                        children: [],
                    },
                    {
                        value: 1488,
                        label: '上街区',
                        children: [],
                    },
                    {
                        value: 1489,
                        label: '惠济区',
                        children: [],
                    },
                    {
                        value: 1490,
                        label: '中牟县',
                        children: [],
                    },
                    {
                        value: 1491,
                        label: '巩义市',
                        children: [],
                    },
                    {
                        value: 1492,
                        label: '荥阳市',
                        children: [],
                    },
                    {
                        value: 1493,
                        label: '新密市',
                        children: [],
                    },
                    {
                        value: 1494,
                        label: '新郑市',
                        children: [],
                    },
                    {
                        value: 1495,
                        label: '登封市',
                        children: [],
                    },
                ],
            },
            {
                value: 153,
                label: '开封市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1497,
                        label: '龙亭区',
                        children: [],
                    },
                    {
                        value: 1498,
                        label: '顺河回族区',
                        children: [],
                    },
                    {
                        value: 1499,
                        label: '鼓楼区',
                        children: [],
                    },
                    {
                        value: 1500,
                        label: '禹王台区',
                        children: [],
                    },
                    {
                        value: 1501,
                        label: '金明区',
                        children: [],
                    },
                    {
                        value: 1502,
                        label: '祥符区',
                        children: [],
                    },
                    {
                        value: 1503,
                        label: '杞县',
                        children: [],
                    },
                    {
                        value: 1504,
                        label: '通许县',
                        children: [],
                    },
                    {
                        value: 1505,
                        label: '尉氏县',
                        children: [],
                    },
                    {
                        value: 1506,
                        label: '兰考县',
                        children: [],
                    },
                ],
            },
            {
                value: 154,
                label: '洛阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1508,
                        label: '老城区',
                        children: [],
                    },
                    {
                        value: 1509,
                        label: '西工区',
                        children: [],
                    },
                    {
                        value: 1510,
                        label: '瀍河回族区',
                        children: [],
                    },
                    {
                        value: 1511,
                        label: '涧西区',
                        children: [],
                    },
                    {
                        value: 1512,
                        label: '吉利区',
                        children: [],
                    },
                    {
                        value: 1513,
                        label: '洛龙区',
                        children: [],
                    },
                    {
                        value: 1514,
                        label: '孟津县',
                        children: [],
                    },
                    {
                        value: 1515,
                        label: '新安县',
                        children: [],
                    },
                    {
                        value: 1516,
                        label: '栾川县',
                        children: [],
                    },
                    {
                        value: 1517,
                        label: '嵩县',
                        children: [],
                    },
                    {
                        value: 1518,
                        label: '汝阳县',
                        children: [],
                    },
                    {
                        value: 1519,
                        label: '宜阳县',
                        children: [],
                    },
                    {
                        value: 1520,
                        label: '洛宁县',
                        children: [],
                    },
                    {
                        value: 1521,
                        label: '伊川县',
                        children: [],
                    },
                    {
                        value: 1522,
                        label: '偃师市',
                        children: [],
                    },
                ],
            },
            {
                value: 155,
                label: '平顶山市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1524,
                        label: '新华区',
                        children: [],
                    },
                    {
                        value: 1525,
                        label: '卫东区',
                        children: [],
                    },
                    {
                        value: 1526,
                        label: '石龙区',
                        children: [],
                    },
                    {
                        value: 1527,
                        label: '湛河区',
                        children: [],
                    },
                    {
                        value: 1528,
                        label: '宝丰县',
                        children: [],
                    },
                    {
                        value: 1529,
                        label: '叶县',
                        children: [],
                    },
                    {
                        value: 1530,
                        label: '鲁山县',
                        children: [],
                    },
                    {
                        value: 1531,
                        label: '郏县',
                        children: [],
                    },
                    {
                        value: 1532,
                        label: '舞钢市',
                        children: [],
                    },
                    {
                        value: 1533,
                        label: '汝州市',
                        children: [],
                    },
                ],
            },
            {
                value: 156,
                label: '安阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1535,
                        label: '文峰区',
                        children: [],
                    },
                    {
                        value: 1536,
                        label: '北关区',
                        children: [],
                    },
                    {
                        value: 1537,
                        label: '殷都区',
                        children: [],
                    },
                    {
                        value: 1538,
                        label: '龙安区',
                        children: [],
                    },
                    {
                        value: 1539,
                        label: '安阳县',
                        children: [],
                    },
                    {
                        value: 1540,
                        label: '汤阴县',
                        children: [],
                    },
                    {
                        value: 1541,
                        label: '滑县',
                        children: [],
                    },
                    {
                        value: 1542,
                        label: '内黄县',
                        children: [],
                    },
                    {
                        value: 1543,
                        label: '林州市',
                        children: [],
                    },
                ],
            },
            {
                value: 157,
                label: '鹤壁市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1545,
                        label: '鹤山区',
                        children: [],
                    },
                    {
                        value: 1546,
                        label: '山城区',
                        children: [],
                    },
                    {
                        value: 1547,
                        label: '淇滨区',
                        children: [],
                    },
                    {
                        value: 1548,
                        label: '浚县',
                        children: [],
                    },
                    {
                        value: 1549,
                        label: '淇县',
                        children: [],
                    },
                ],
            },
            {
                value: 158,
                label: '新乡市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1551,
                        label: '红旗区',
                        children: [],
                    },
                    {
                        value: 1552,
                        label: '卫滨区',
                        children: [],
                    },
                    {
                        value: 1553,
                        label: '凤泉区',
                        children: [],
                    },
                    {
                        value: 1554,
                        label: '牧野区',
                        children: [],
                    },
                    {
                        value: 1555,
                        label: '新乡县',
                        children: [],
                    },
                    {
                        value: 1556,
                        label: '获嘉县',
                        children: [],
                    },
                    {
                        value: 1557,
                        label: '原阳县',
                        children: [],
                    },
                    {
                        value: 1558,
                        label: '延津县',
                        children: [],
                    },
                    {
                        value: 1559,
                        label: '封丘县',
                        children: [],
                    },
                    {
                        value: 1560,
                        label: '长垣县',
                        children: [],
                    },
                    {
                        value: 1561,
                        label: '卫辉市',
                        children: [],
                    },
                    {
                        value: 1562,
                        label: '辉县市',
                        children: [],
                    },
                ],
            },
            {
                value: 159,
                label: '焦作市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1564,
                        label: '解放区',
                        children: [],
                    },
                    {
                        value: 1565,
                        label: '中站区',
                        children: [],
                    },
                    {
                        value: 1566,
                        label: '马村区',
                        children: [],
                    },
                    {
                        value: 1567,
                        label: '山阳区',
                        children: [],
                    },
                    {
                        value: 1568,
                        label: '修武县',
                        children: [],
                    },
                    {
                        value: 1569,
                        label: '博爱县',
                        children: [],
                    },
                    {
                        value: 1570,
                        label: '武陟县',
                        children: [],
                    },
                    {
                        value: 1571,
                        label: '温县',
                        children: [],
                    },
                    {
                        value: 1572,
                        label: '沁阳市',
                        children: [],
                    },
                    {
                        value: 1573,
                        label: '孟州市',
                        children: [],
                    },
                ],
            },
            {
                value: 160,
                label: '濮阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1575,
                        label: '华龙区',
                        children: [],
                    },
                    {
                        value: 1576,
                        label: '清丰县',
                        children: [],
                    },
                    {
                        value: 1577,
                        label: '南乐县',
                        children: [],
                    },
                    {
                        value: 1578,
                        label: '范县',
                        children: [],
                    },
                    {
                        value: 1579,
                        label: '台前县',
                        children: [],
                    },
                    {
                        value: 1580,
                        label: '濮阳县',
                        children: [],
                    },
                ],
            },
            {
                value: 161,
                label: '许昌市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1582,
                        label: '魏都区',
                        children: [],
                    },
                    {
                        value: 1583,
                        label: '许昌县',
                        children: [],
                    },
                    {
                        value: 1584,
                        label: '鄢陵县',
                        children: [],
                    },
                    {
                        value: 1585,
                        label: '襄城县',
                        children: [],
                    },
                    {
                        value: 1586,
                        label: '禹州市',
                        children: [],
                    },
                    {
                        value: 1587,
                        label: '长葛市',
                        children: [],
                    },
                ],
            },
            {
                value: 162,
                label: '漯河市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1589,
                        label: '源汇区',
                        children: [],
                    },
                    {
                        value: 1590,
                        label: '郾城区',
                        children: [],
                    },
                    {
                        value: 1591,
                        label: '召陵区',
                        children: [],
                    },
                    {
                        value: 1592,
                        label: '舞阳县',
                        children: [],
                    },
                    {
                        value: 1593,
                        label: '临颍县',
                        children: [],
                    },
                ],
            },
            {
                value: 163,
                label: '三门峡市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1595,
                        label: '湖滨区',
                        children: [],
                    },
                    {
                        value: 1596,
                        label: '陕州区',
                        children: [],
                    },
                    {
                        value: 1597,
                        label: '渑池县',
                        children: [],
                    },
                    {
                        value: 1598,
                        label: '卢氏县',
                        children: [],
                    },
                    {
                        value: 1599,
                        label: '义马市',
                        children: [],
                    },
                    {
                        value: 1600,
                        label: '灵宝市',
                        children: [],
                    },
                ],
            },
            {
                value: 164,
                label: '南阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1602,
                        label: '宛城区',
                        children: [],
                    },
                    {
                        value: 1603,
                        label: '卧龙区',
                        children: [],
                    },
                    {
                        value: 1604,
                        label: '南召县',
                        children: [],
                    },
                    {
                        value: 1605,
                        label: '方城县',
                        children: [],
                    },
                    {
                        value: 1606,
                        label: '西峡县',
                        children: [],
                    },
                    {
                        value: 1607,
                        label: '镇平县',
                        children: [],
                    },
                    {
                        value: 1608,
                        label: '内乡县',
                        children: [],
                    },
                    {
                        value: 1609,
                        label: '淅川县',
                        children: [],
                    },
                    {
                        value: 1610,
                        label: '社旗县',
                        children: [],
                    },
                    {
                        value: 1611,
                        label: '唐河县',
                        children: [],
                    },
                    {
                        value: 1612,
                        label: '新野县',
                        children: [],
                    },
                    {
                        value: 1613,
                        label: '桐柏县',
                        children: [],
                    },
                    {
                        value: 1614,
                        label: '邓州市',
                        children: [],
                    },
                ],
            },
            {
                value: 165,
                label: '商丘市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1616,
                        label: '梁园区',
                        children: [],
                    },
                    {
                        value: 1617,
                        label: '睢阳区',
                        children: [],
                    },
                    {
                        value: 1618,
                        label: '民权县',
                        children: [],
                    },
                    {
                        value: 1619,
                        label: '睢县',
                        children: [],
                    },
                    {
                        value: 1620,
                        label: '宁陵县',
                        children: [],
                    },
                    {
                        value: 1621,
                        label: '柘城县',
                        children: [],
                    },
                    {
                        value: 1622,
                        label: '虞城县',
                        children: [],
                    },
                    {
                        value: 1623,
                        label: '夏邑县',
                        children: [],
                    },
                    {
                        value: 1624,
                        label: '永城市',
                        children: [],
                    },
                ],
            },
            {
                value: 166,
                label: '信阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1626,
                        label: '浉河区',
                        children: [],
                    },
                    {
                        value: 1627,
                        label: '平桥区',
                        children: [],
                    },
                    {
                        value: 1628,
                        label: '罗山县',
                        children: [],
                    },
                    {
                        value: 1629,
                        label: '光山县',
                        children: [],
                    },
                    {
                        value: 1630,
                        label: '新县',
                        children: [],
                    },
                    {
                        value: 1631,
                        label: '商城县',
                        children: [],
                    },
                    {
                        value: 1632,
                        label: '固始县',
                        children: [],
                    },
                    {
                        value: 1633,
                        label: '潢川县',
                        children: [],
                    },
                    {
                        value: 1634,
                        label: '淮滨县',
                        children: [],
                    },
                    {
                        value: 1635,
                        label: '息县',
                        children: [],
                    },
                ],
            },
            {
                value: 167,
                label: '周口市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1637,
                        label: '川汇区',
                        children: [],
                    },
                    {
                        value: 1638,
                        label: '扶沟县',
                        children: [],
                    },
                    {
                        value: 1639,
                        label: '西华县',
                        children: [],
                    },
                    {
                        value: 1640,
                        label: '商水县',
                        children: [],
                    },
                    {
                        value: 1641,
                        label: '沈丘县',
                        children: [],
                    },
                    {
                        value: 1642,
                        label: '郸城县',
                        children: [],
                    },
                    {
                        value: 1643,
                        label: '淮阳县',
                        children: [],
                    },
                    {
                        value: 1644,
                        label: '太康县',
                        children: [],
                    },
                    {
                        value: 1645,
                        label: '鹿邑县',
                        children: [],
                    },
                    {
                        value: 1646,
                        label: '项城市',
                        children: [],
                    },
                ],
            },
            {
                value: 168,
                label: '驻马店市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1648,
                        label: '驿城区',
                        children: [],
                    },
                    {
                        value: 1649,
                        label: '西平县',
                        children: [],
                    },
                    {
                        value: 1650,
                        label: '上蔡县',
                        children: [],
                    },
                    {
                        value: 1651,
                        label: '平舆县',
                        children: [],
                    },
                    {
                        value: 1652,
                        label: '正阳县',
                        children: [],
                    },
                    {
                        value: 1653,
                        label: '确山县',
                        children: [],
                    },
                    {
                        value: 1654,
                        label: '泌阳县',
                        children: [],
                    },
                    {
                        value: 1655,
                        label: '汝南县',
                        children: [],
                    },
                    {
                        value: 1656,
                        label: '遂平县',
                        children: [],
                    },
                    {
                        value: 1657,
                        label: '新蔡县',
                        children: [],
                    },
                ],
            },
            {
                value: 169,
                label: '省直辖县级行政单位',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1658,
                        label: '济源市',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 17,
        label: '湖北省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 170,
                label: '武汉市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1660,
                        label: '江岸区',
                        children: [],
                    },
                    {
                        value: 1661,
                        label: '江汉区',
                        children: [],
                    },
                    {
                        value: 1662,
                        label: '硚口区',
                        children: [],
                    },
                    {
                        value: 1663,
                        label: '汉阳区',
                        children: [],
                    },
                    {
                        value: 1664,
                        label: '武昌区',
                        children: [],
                    },
                    {
                        value: 1665,
                        label: '青山区',
                        children: [],
                    },
                    {
                        value: 1666,
                        label: '洪山区',
                        children: [],
                    },
                    {
                        value: 1667,
                        label: '东西湖区',
                        children: [],
                    },
                    {
                        value: 1668,
                        label: '汉南区',
                        children: [],
                    },
                    {
                        value: 1669,
                        label: '蔡甸区',
                        children: [],
                    },
                    {
                        value: 1670,
                        label: '江夏区',
                        children: [],
                    },
                    {
                        value: 1671,
                        label: '黄陂区',
                        children: [],
                    },
                    {
                        value: 1672,
                        label: '新洲区',
                        children: [],
                    },
                ],
            },
            {
                value: 171,
                label: '黄石市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1674,
                        label: '黄石港区',
                        children: [],
                    },
                    {
                        value: 1675,
                        label: '西塞山区',
                        children: [],
                    },
                    {
                        value: 1676,
                        label: '下陆区',
                        children: [],
                    },
                    {
                        value: 1677,
                        label: '铁山区',
                        children: [],
                    },
                    {
                        value: 1678,
                        label: '阳新县',
                        children: [],
                    },
                    {
                        value: 1679,
                        label: '大冶市',
                        children: [],
                    },
                ],
            },
            {
                value: 172,
                label: '十堰市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1681,
                        label: '茅箭区',
                        children: [],
                    },
                    {
                        value: 1682,
                        label: '张湾区',
                        children: [],
                    },
                    {
                        value: 1683,
                        label: '郧阳区',
                        children: [],
                    },
                    {
                        value: 1684,
                        label: '郧西县',
                        children: [],
                    },
                    {
                        value: 1685,
                        label: '竹山县',
                        children: [],
                    },
                    {
                        value: 1686,
                        label: '竹溪县',
                        children: [],
                    },
                    {
                        value: 1687,
                        label: '房县',
                        children: [],
                    },
                    {
                        value: 1688,
                        label: '丹江口市',
                        children: [],
                    },
                ],
            },
            {
                value: 173,
                label: '宜昌市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1690,
                        label: '西陵区',
                        children: [],
                    },
                    {
                        value: 1691,
                        label: '伍家岗区',
                        children: [],
                    },
                    {
                        value: 1692,
                        label: '点军区',
                        children: [],
                    },
                    {
                        value: 1693,
                        label: '猇亭区',
                        children: [],
                    },
                    {
                        value: 1694,
                        label: '夷陵区',
                        children: [],
                    },
                    {
                        value: 1695,
                        label: '远安县',
                        children: [],
                    },
                    {
                        value: 1696,
                        label: '兴山县',
                        children: [],
                    },
                    {
                        value: 1697,
                        label: '秭归县',
                        children: [],
                    },
                    {
                        value: 1698,
                        label: '长阳土家族自治县',
                        children: [],
                    },
                    {
                        value: 1699,
                        label: '五峰土家族自治县',
                        children: [],
                    },
                    {
                        value: 1700,
                        label: '宜都市',
                        children: [],
                    },
                    {
                        value: 1701,
                        label: '当阳市',
                        children: [],
                    },
                    {
                        value: 1702,
                        label: '枝江市',
                        children: [],
                    },
                ],
            },
            {
                value: 174,
                label: '襄阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1704,
                        label: '襄城区',
                        children: [],
                    },
                    {
                        value: 1705,
                        label: '樊城区',
                        children: [],
                    },
                    {
                        value: 1706,
                        label: '襄州区',
                        children: [],
                    },
                    {
                        value: 1707,
                        label: '南漳县',
                        children: [],
                    },
                    {
                        value: 1708,
                        label: '谷城县',
                        children: [],
                    },
                    {
                        value: 1709,
                        label: '保康县',
                        children: [],
                    },
                    {
                        value: 1710,
                        label: '老河口市',
                        children: [],
                    },
                    {
                        value: 1711,
                        label: '枣阳市',
                        children: [],
                    },
                    {
                        value: 1712,
                        label: '宜城市',
                        children: [],
                    },
                ],
            },
            {
                value: 175,
                label: '鄂州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1714,
                        label: '梁子湖区',
                        children: [],
                    },
                    {
                        value: 1715,
                        label: '华容区',
                        children: [],
                    },
                    {
                        value: 1716,
                        label: '鄂城区',
                        children: [],
                    },
                ],
            },
            {
                value: 176,
                label: '荆门市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1718,
                        label: '东宝区',
                        children: [],
                    },
                    {
                        value: 1719,
                        label: '掇刀区',
                        children: [],
                    },
                    {
                        value: 1720,
                        label: '京山县',
                        children: [],
                    },
                    {
                        value: 1721,
                        label: '沙洋县',
                        children: [],
                    },
                    {
                        value: 1722,
                        label: '钟祥市',
                        children: [],
                    },
                ],
            },
            {
                value: 177,
                label: '孝感市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1724,
                        label: '孝南区',
                        children: [],
                    },
                    {
                        value: 1725,
                        label: '孝昌县',
                        children: [],
                    },
                    {
                        value: 1726,
                        label: '大悟县',
                        children: [],
                    },
                    {
                        value: 1727,
                        label: '云梦县',
                        children: [],
                    },
                    {
                        value: 1728,
                        label: '应城市',
                        children: [],
                    },
                    {
                        value: 1729,
                        label: '安陆市',
                        children: [],
                    },
                    {
                        value: 1730,
                        label: '汉川市',
                        children: [],
                    },
                ],
            },
            {
                value: 178,
                label: '荆州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1732,
                        label: '沙市区',
                        children: [],
                    },
                    {
                        value: 1733,
                        label: '荆州区',
                        children: [],
                    },
                    {
                        value: 1734,
                        label: '公安县',
                        children: [],
                    },
                    {
                        value: 1735,
                        label: '监利县',
                        children: [],
                    },
                    {
                        value: 1736,
                        label: '江陵县',
                        children: [],
                    },
                    {
                        value: 1737,
                        label: '石首市',
                        children: [],
                    },
                    {
                        value: 1738,
                        label: '洪湖市',
                        children: [],
                    },
                    {
                        value: 1739,
                        label: '松滋市',
                        children: [],
                    },
                ],
            },
            {
                value: 179,
                label: '黄冈市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1741,
                        label: '黄州区',
                        children: [],
                    },
                    {
                        value: 1742,
                        label: '团风县',
                        children: [],
                    },
                    {
                        value: 1743,
                        label: '红安县',
                        children: [],
                    },
                    {
                        value: 1744,
                        label: '罗田县',
                        children: [],
                    },
                    {
                        value: 1745,
                        label: '英山县',
                        children: [],
                    },
                    {
                        value: 1746,
                        label: '浠水县',
                        children: [],
                    },
                    {
                        value: 1747,
                        label: '蕲春县',
                        children: [],
                    },
                    {
                        value: 1748,
                        label: '黄梅县',
                        children: [],
                    },
                    {
                        value: 1749,
                        label: '麻城市',
                        children: [],
                    },
                    {
                        value: 1750,
                        label: '武穴市',
                        children: [],
                    },
                ],
            },
            {
                value: 180,
                label: '咸宁市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1752,
                        label: '咸安区',
                        children: [],
                    },
                    {
                        value: 1753,
                        label: '嘉鱼县',
                        children: [],
                    },
                    {
                        value: 1754,
                        label: '通城县',
                        children: [],
                    },
                    {
                        value: 1755,
                        label: '崇阳县',
                        children: [],
                    },
                    {
                        value: 1756,
                        label: '通山县',
                        children: [],
                    },
                    {
                        value: 1757,
                        label: '赤壁市',
                        children: [],
                    },
                ],
            },
            {
                value: 181,
                label: '随州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1759,
                        label: '曾都区',
                        children: [],
                    },
                    {
                        value: 1760,
                        label: '随县',
                        children: [],
                    },
                    {
                        value: 1761,
                        label: '广水市',
                        children: [],
                    },
                ],
            },
            {
                value: 182,
                label: '恩施土家族苗族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1762,
                        label: '恩施市',
                        children: [],
                    },
                    {
                        value: 1763,
                        label: '利川市',
                        children: [],
                    },
                    {
                        value: 1764,
                        label: '建始县',
                        children: [],
                    },
                    {
                        value: 1765,
                        label: '巴东县',
                        children: [],
                    },
                    {
                        value: 1766,
                        label: '宣恩县',
                        children: [],
                    },
                    {
                        value: 1767,
                        label: '咸丰县',
                        children: [],
                    },
                    {
                        value: 1768,
                        label: '来凤县',
                        children: [],
                    },
                    {
                        value: 1769,
                        label: '鹤峰县',
                        children: [],
                    },
                ],
            },
            {
                value: 183,
                label: '省直辖县级行政单位',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1770,
                        label: '仙桃市',
                        children: [],
                    },
                    {
                        value: 1771,
                        label: '潜江市',
                        children: [],
                    },
                    {
                        value: 1772,
                        label: '天门市',
                        children: [],
                    },
                    {
                        value: 1773,
                        label: '神农架林区',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 18,
        label: '湖南省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 184,
                label: '长沙市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1775,
                        label: '芙蓉区',
                        children: [],
                    },
                    {
                        value: 1776,
                        label: '天心区',
                        children: [],
                    },
                    {
                        value: 1777,
                        label: '岳麓区',
                        children: [],
                    },
                    {
                        value: 1778,
                        label: '开福区',
                        children: [],
                    },
                    {
                        value: 1779,
                        label: '雨花区',
                        children: [],
                    },
                    {
                        value: 1780,
                        label: '望城区',
                        children: [],
                    },
                    {
                        value: 1782,
                        label: '宁乡市',
                        children: [],
                    },
                    {
                        value: 1783,
                        label: '浏阳市',
                        children: [],
                    },
                ],
            },
            {
                value: 185,
                label: '株洲市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1785,
                        label: '荷塘区',
                        children: [],
                    },
                    {
                        value: 1786,
                        label: '芦淞区',
                        children: [],
                    },
                    {
                        value: 1787,
                        label: '石峰区',
                        children: [],
                    },
                    {
                        value: 1788,
                        label: '天元区',
                        children: [],
                    },
                    {
                        value: 1789,
                        label: '株洲县',
                        children: [],
                    },
                    {
                        value: 1790,
                        label: '攸县',
                        children: [],
                    },
                    {
                        value: 1791,
                        label: '茶陵县',
                        children: [],
                    },
                    {
                        value: 1792,
                        label: '炎陵县',
                        children: [],
                    },
                    {
                        value: 1793,
                        label: '醴陵市',
                        children: [],
                    },
                ],
            },
            {
                value: 186,
                label: '湘潭市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1795,
                        label: '雨湖区',
                        children: [],
                    },
                    {
                        value: 1796,
                        label: '岳塘区',
                        children: [],
                    },
                    {
                        value: 1797,
                        label: '湘潭县',
                        children: [],
                    },
                    {
                        value: 1798,
                        label: '湘乡市',
                        children: [],
                    },
                    {
                        value: 1799,
                        label: '韶山市',
                        children: [],
                    },
                ],
            },
            {
                value: 187,
                label: '衡阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1801,
                        label: '珠晖区',
                        children: [],
                    },
                    {
                        value: 1802,
                        label: '雁峰区',
                        children: [],
                    },
                    {
                        value: 1803,
                        label: '石鼓区',
                        children: [],
                    },
                    {
                        value: 1804,
                        label: '蒸湘区',
                        children: [],
                    },
                    {
                        value: 1805,
                        label: '南岳区',
                        children: [],
                    },
                    {
                        value: 1806,
                        label: '衡阳县',
                        children: [],
                    },
                    {
                        value: 1807,
                        label: '衡南县',
                        children: [],
                    },
                    {
                        value: 1808,
                        label: '衡山县',
                        children: [],
                    },
                    {
                        value: 1809,
                        label: '衡东县',
                        children: [],
                    },
                    {
                        value: 1810,
                        label: '祁东县',
                        children: [],
                    },
                    {
                        value: 1811,
                        label: '耒阳市',
                        children: [],
                    },
                    {
                        value: 1812,
                        label: '常宁市',
                        children: [],
                    },
                ],
            },
            {
                value: 188,
                label: '邵阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1814,
                        label: '双清区',
                        children: [],
                    },
                    {
                        value: 1815,
                        label: '大祥区',
                        children: [],
                    },
                    {
                        value: 1816,
                        label: '北塔区',
                        children: [],
                    },
                    {
                        value: 1817,
                        label: '邵东县',
                        children: [],
                    },
                    {
                        value: 1818,
                        label: '新邵县',
                        children: [],
                    },
                    {
                        value: 1819,
                        label: '邵阳县',
                        children: [],
                    },
                    {
                        value: 1820,
                        label: '隆回县',
                        children: [],
                    },
                    {
                        value: 1821,
                        label: '洞口县',
                        children: [],
                    },
                    {
                        value: 1822,
                        label: '绥宁县',
                        children: [],
                    },
                    {
                        value: 1823,
                        label: '新宁县',
                        children: [],
                    },
                    {
                        value: 1824,
                        label: '城步苗族自治县',
                        children: [],
                    },
                    {
                        value: 1825,
                        label: '武冈市',
                        children: [],
                    },
                ],
            },
            {
                value: 189,
                label: '岳阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1827,
                        label: '岳阳楼区',
                        children: [],
                    },
                    {
                        value: 1828,
                        label: '云溪区',
                        children: [],
                    },
                    {
                        value: 1829,
                        label: '君山区',
                        children: [],
                    },
                    {
                        value: 1830,
                        label: '岳阳县',
                        children: [],
                    },
                    {
                        value: 1831,
                        label: '华容县',
                        children: [],
                    },
                    {
                        value: 1832,
                        label: '湘阴县',
                        children: [],
                    },
                    {
                        value: 1833,
                        label: '平江县',
                        children: [],
                    },
                    {
                        value: 1834,
                        label: '汨罗市',
                        children: [],
                    },
                    {
                        value: 1835,
                        label: '临湘市',
                        children: [],
                    },
                ],
            },
            {
                value: 190,
                label: '常德市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1837,
                        label: '武陵区',
                        children: [],
                    },
                    {
                        value: 1838,
                        label: '鼎城区',
                        children: [],
                    },
                    {
                        value: 1839,
                        label: '安乡县',
                        children: [],
                    },
                    {
                        value: 1840,
                        label: '汉寿县',
                        children: [],
                    },
                    {
                        value: 1841,
                        label: '澧县',
                        children: [],
                    },
                    {
                        value: 1842,
                        label: '临澧县',
                        children: [],
                    },
                    {
                        value: 1843,
                        label: '桃源县',
                        children: [],
                    },
                    {
                        value: 1844,
                        label: '石门县',
                        children: [],
                    },
                    {
                        value: 1845,
                        label: '津市市',
                        children: [],
                    },
                ],
            },
            {
                value: 191,
                label: '张家界市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1847,
                        label: '永定区',
                        children: [],
                    },
                    {
                        value: 1848,
                        label: '武陵源区',
                        children: [],
                    },
                    {
                        value: 1849,
                        label: '慈利县',
                        children: [],
                    },
                    {
                        value: 1850,
                        label: '桑植县',
                        children: [],
                    },
                ],
            },
            {
                value: 192,
                label: '益阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1852,
                        label: '资阳区',
                        children: [],
                    },
                    {
                        value: 1853,
                        label: '赫山区',
                        children: [],
                    },
                    {
                        value: 1854,
                        label: '南县',
                        children: [],
                    },
                    {
                        value: 1855,
                        label: '桃江县',
                        children: [],
                    },
                    {
                        value: 1856,
                        label: '安化县',
                        children: [],
                    },
                    {
                        value: 1857,
                        label: '沅江市',
                        children: [],
                    },
                ],
            },
            {
                value: 193,
                label: '郴州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1859,
                        label: '北湖区',
                        children: [],
                    },
                    {
                        value: 1860,
                        label: '苏仙区',
                        children: [],
                    },
                    {
                        value: 1861,
                        label: '桂阳县',
                        children: [],
                    },
                    {
                        value: 1862,
                        label: '宜章县',
                        children: [],
                    },
                    {
                        value: 1863,
                        label: '永兴县',
                        children: [],
                    },
                    {
                        value: 1864,
                        label: '嘉禾县',
                        children: [],
                    },
                    {
                        value: 1865,
                        label: '临武县',
                        children: [],
                    },
                    {
                        value: 1866,
                        label: '汝城县',
                        children: [],
                    },
                    {
                        value: 1867,
                        label: '桂东县',
                        children: [],
                    },
                    {
                        value: 1868,
                        label: '安仁县',
                        children: [],
                    },
                    {
                        value: 1869,
                        label: '资兴市',
                        children: [],
                    },
                ],
            },
            {
                value: 194,
                label: '永州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1871,
                        label: '零陵区',
                        children: [],
                    },
                    {
                        value: 1872,
                        label: '冷水滩区',
                        children: [],
                    },
                    {
                        value: 1873,
                        label: '祁阳县',
                        children: [],
                    },
                    {
                        value: 1874,
                        label: '东安县',
                        children: [],
                    },
                    {
                        value: 1875,
                        label: '双牌县',
                        children: [],
                    },
                    {
                        value: 1876,
                        label: '道县',
                        children: [],
                    },
                    {
                        value: 1877,
                        label: '江永县',
                        children: [],
                    },
                    {
                        value: 1878,
                        label: '宁远县',
                        children: [],
                    },
                    {
                        value: 1879,
                        label: '蓝山县',
                        children: [],
                    },
                    {
                        value: 1880,
                        label: '新田县',
                        children: [],
                    },
                    {
                        value: 1881,
                        label: '江华瑶族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 195,
                label: '怀化市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1883,
                        label: '鹤城区',
                        children: [],
                    },
                    {
                        value: 1884,
                        label: '中方县',
                        children: [],
                    },
                    {
                        value: 1885,
                        label: '沅陵县',
                        children: [],
                    },
                    {
                        value: 1886,
                        label: '辰溪县',
                        children: [],
                    },
                    {
                        value: 1887,
                        label: '溆浦县',
                        children: [],
                    },
                    {
                        value: 1888,
                        label: '会同县',
                        children: [],
                    },
                    {
                        value: 1889,
                        label: '麻阳苗族自治县',
                        children: [],
                    },
                    {
                        value: 1890,
                        label: '新晃侗族自治县',
                        children: [],
                    },
                    {
                        value: 1891,
                        label: '芷江侗族自治县',
                        children: [],
                    },
                    {
                        value: 1892,
                        label: '靖州苗族侗族自治县',
                        children: [],
                    },
                    {
                        value: 1893,
                        label: '通道侗族自治县',
                        children: [],
                    },
                    {
                        value: 1894,
                        label: '洪江市',
                        children: [],
                    },
                ],
            },
            {
                value: 196,
                label: '娄底市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1896,
                        label: '娄星区',
                        children: [],
                    },
                    {
                        value: 1897,
                        label: '双峰县',
                        children: [],
                    },
                    {
                        value: 1898,
                        label: '新化县',
                        children: [],
                    },
                    {
                        value: 1899,
                        label: '冷水江市',
                        children: [],
                    },
                    {
                        value: 1900,
                        label: '涟源市',
                        children: [],
                    },
                ],
            },
            {
                value: 197,
                label: '湘西土家族苗族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1901,
                        label: '吉首市',
                        children: [],
                    },
                    {
                        value: 1902,
                        label: '泸溪县',
                        children: [],
                    },
                    {
                        value: 1903,
                        label: '凤凰县',
                        children: [],
                    },
                    {
                        value: 1904,
                        label: '花垣县',
                        children: [],
                    },
                    {
                        value: 1905,
                        label: '保靖县',
                        children: [],
                    },
                    {
                        value: 1906,
                        label: '古丈县',
                        children: [],
                    },
                    {
                        value: 1907,
                        label: '永顺县',
                        children: [],
                    },
                    {
                        value: 1908,
                        label: '龙山县',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 19,
        label: '广东省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 198,
                label: '广州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1910,
                        label: '荔湾区',
                        children: [],
                    },
                    {
                        value: 1911,
                        label: '越秀区',
                        children: [],
                    },
                    {
                        value: 1912,
                        label: '海珠区',
                        children: [],
                    },
                    {
                        value: 1913,
                        label: '天河区',
                        children: [],
                    },
                    {
                        value: 1914,
                        label: '白云区',
                        children: [],
                    },
                    {
                        value: 1915,
                        label: '黄埔区',
                        children: [],
                    },
                    {
                        value: 1916,
                        label: '番禺区',
                        children: [],
                    },
                    {
                        value: 1917,
                        label: '花都区',
                        children: [],
                    },
                    {
                        value: 1918,
                        label: '南沙区',
                        children: [],
                    },
                    {
                        value: 1919,
                        label: '从化区',
                        children: [],
                    },
                    {
                        value: 1920,
                        label: '增城区',
                        children: [],
                    },
                ],
            },
            {
                value: 199,
                label: '韶关市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1922,
                        label: '武江区',
                        children: [],
                    },
                    {
                        value: 1923,
                        label: '浈江区',
                        children: [],
                    },
                    {
                        value: 1924,
                        label: '曲江区',
                        children: [],
                    },
                    {
                        value: 1925,
                        label: '始兴县',
                        children: [],
                    },
                    {
                        value: 1926,
                        label: '仁化县',
                        children: [],
                    },
                    {
                        value: 1927,
                        label: '翁源县',
                        children: [],
                    },
                    {
                        value: 1928,
                        label: '乳源瑶族自治县',
                        children: [],
                    },
                    {
                        value: 1929,
                        label: '新丰县',
                        children: [],
                    },
                    {
                        value: 1930,
                        label: '乐昌市',
                        children: [],
                    },
                    {
                        value: 1931,
                        label: '南雄市',
                        children: [],
                    },
                ],
            },
            {
                value: 200,
                label: '深圳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1933,
                        label: '罗湖区',
                        children: [],
                    },
                    {
                        value: 1934,
                        label: '福田区',
                        children: [],
                    },
                    {
                        value: 1935,
                        label: '南山区',
                        children: [],
                    },
                    {
                        value: 1936,
                        label: '宝安区',
                        children: [],
                    },
                    {
                        value: 1937,
                        label: '龙岗区',
                        children: [],
                    },
                    {
                        value: 1938,
                        label: '盐田区',
                        children: [],
                    },
                    {
                        value: 3140,
                        label: '龙华区',
                        children: [],
                    },
                ],
            },
            {
                value: 201,
                label: '珠海市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1940,
                        label: '香洲区',
                        children: [],
                    },
                    {
                        value: 1941,
                        label: '斗门区',
                        children: [],
                    },
                    {
                        value: 1942,
                        label: '金湾区',
                        children: [],
                    },
                ],
            },
            {
                value: 202,
                label: '汕头市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1944,
                        label: '龙湖区',
                        children: [],
                    },
                    {
                        value: 1945,
                        label: '金平区',
                        children: [],
                    },
                    {
                        value: 1946,
                        label: '濠江区',
                        children: [],
                    },
                    {
                        value: 1947,
                        label: '潮阳区',
                        children: [],
                    },
                    {
                        value: 1948,
                        label: '潮南区',
                        children: [],
                    },
                    {
                        value: 1949,
                        label: '澄海区',
                        children: [],
                    },
                    {
                        value: 1950,
                        label: '南澳县',
                        children: [],
                    },
                ],
            },
            {
                value: 203,
                label: '佛山市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1952,
                        label: '禅城区',
                        children: [],
                    },
                    {
                        value: 1953,
                        label: '南海区',
                        children: [],
                    },
                    {
                        value: 1954,
                        label: '顺德区',
                        children: [],
                    },
                    {
                        value: 1955,
                        label: '三水区',
                        children: [],
                    },
                    {
                        value: 1956,
                        label: '高明区',
                        children: [],
                    },
                ],
            },
            {
                value: 204,
                label: '江门市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1958,
                        label: '蓬江区',
                        children: [],
                    },
                    {
                        value: 1959,
                        label: '江海区',
                        children: [],
                    },
                    {
                        value: 1960,
                        label: '新会区',
                        children: [],
                    },
                    {
                        value: 1961,
                        label: '台山市',
                        children: [],
                    },
                    {
                        value: 1962,
                        label: '开平市',
                        children: [],
                    },
                    {
                        value: 1963,
                        label: '鹤山市',
                        children: [],
                    },
                    {
                        value: 1964,
                        label: '恩平市',
                        children: [],
                    },
                ],
            },
            {
                value: 205,
                label: '湛江市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1966,
                        label: '赤坎区',
                        children: [],
                    },
                    {
                        value: 1967,
                        label: '霞山区',
                        children: [],
                    },
                    {
                        value: 1968,
                        label: '坡头区',
                        children: [],
                    },
                    {
                        value: 1969,
                        label: '麻章区',
                        children: [],
                    },
                    {
                        value: 1970,
                        label: '遂溪县',
                        children: [],
                    },
                    {
                        value: 1971,
                        label: '徐闻县',
                        children: [],
                    },
                    {
                        value: 1972,
                        label: '廉江市',
                        children: [],
                    },
                    {
                        value: 1973,
                        label: '雷州市',
                        children: [],
                    },
                    {
                        value: 1974,
                        label: '吴川市',
                        children: [],
                    },
                ],
            },
            {
                value: 206,
                label: '茂名市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1976,
                        label: '茂南区',
                        children: [],
                    },
                    {
                        value: 1977,
                        label: '电白区',
                        children: [],
                    },
                    {
                        value: 1978,
                        label: '高州市',
                        children: [],
                    },
                    {
                        value: 1979,
                        label: '化州市',
                        children: [],
                    },
                    {
                        value: 1980,
                        label: '信宜市',
                        children: [],
                    },
                ],
            },
            {
                value: 207,
                label: '肇庆市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1982,
                        label: '端州区',
                        children: [],
                    },
                    {
                        value: 1983,
                        label: '鼎湖区',
                        children: [],
                    },
                    {
                        value: 1984,
                        label: '高要区',
                        children: [],
                    },
                    {
                        value: 1985,
                        label: '广宁县',
                        children: [],
                    },
                    {
                        value: 1986,
                        label: '怀集县',
                        children: [],
                    },
                    {
                        value: 1987,
                        label: '封开县',
                        children: [],
                    },
                    {
                        value: 1988,
                        label: '德庆县',
                        children: [],
                    },
                    {
                        value: 1989,
                        label: '四会市',
                        children: [],
                    },
                ],
            },
            {
                value: 208,
                label: '惠州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1991,
                        label: '惠城区',
                        children: [],
                    },
                    {
                        value: 1992,
                        label: '惠阳区',
                        children: [],
                    },
                    {
                        value: 1993,
                        label: '博罗县',
                        children: [],
                    },
                    {
                        value: 1994,
                        label: '惠东县',
                        children: [],
                    },
                    {
                        value: 1995,
                        label: '龙门县',
                        children: [],
                    },
                ],
            },
            {
                value: 209,
                label: '梅州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 1997,
                        label: '梅江区',
                        children: [],
                    },
                    {
                        value: 1998,
                        label: '梅县区',
                        children: [],
                    },
                    {
                        value: 1999,
                        label: '大埔县',
                        children: [],
                    },
                    {
                        value: 2000,
                        label: '丰顺县',
                        children: [],
                    },
                    {
                        value: 2001,
                        label: '五华县',
                        children: [],
                    },
                    {
                        value: 2002,
                        label: '平远县',
                        children: [],
                    },
                    {
                        value: 2003,
                        label: '蕉岭县',
                        children: [],
                    },
                    {
                        value: 2004,
                        label: '兴宁市',
                        children: [],
                    },
                ],
            },
            {
                value: 210,
                label: '汕尾市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2006,
                        label: '城区',
                        children: [],
                    },
                    {
                        value: 2007,
                        label: '海丰县',
                        children: [],
                    },
                    {
                        value: 2008,
                        label: '陆河县',
                        children: [],
                    },
                    {
                        value: 2009,
                        label: '陆丰市',
                        children: [],
                    },
                ],
            },
            {
                value: 211,
                label: '河源市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2011,
                        label: '源城区',
                        children: [],
                    },
                    {
                        value: 2012,
                        label: '紫金县',
                        children: [],
                    },
                    {
                        value: 2013,
                        label: '龙川县',
                        children: [],
                    },
                    {
                        value: 2014,
                        label: '连平县',
                        children: [],
                    },
                    {
                        value: 2015,
                        label: '和平县',
                        children: [],
                    },
                    {
                        value: 2016,
                        label: '东源县',
                        children: [],
                    },
                ],
            },
            {
                value: 212,
                label: '阳江市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2018,
                        label: '江城区',
                        children: [],
                    },
                    {
                        value: 2019,
                        label: '阳东区',
                        children: [],
                    },
                    {
                        value: 2020,
                        label: '阳西县',
                        children: [],
                    },
                    {
                        value: 2021,
                        label: '阳春市',
                        children: [],
                    },
                ],
            },
            {
                value: 213,
                label: '清远市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2023,
                        label: '清城区',
                        children: [],
                    },
                    {
                        value: 2024,
                        label: '清新区',
                        children: [],
                    },
                    {
                        value: 2025,
                        label: '佛冈县',
                        children: [],
                    },
                    {
                        value: 2026,
                        label: '阳山县',
                        children: [],
                    },
                    {
                        value: 2027,
                        label: '连山壮族瑶族自治县',
                        children: [],
                    },
                    {
                        value: 2028,
                        label: '连南瑶族自治县',
                        children: [],
                    },
                    {
                        value: 2029,
                        label: '英德市',
                        children: [],
                    },
                    {
                        value: 2030,
                        label: '连州市',
                        children: [],
                    },
                ],
            },
            {
                value: 214,
                label: '东莞市修1',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3135,
                        label: '市辖区',
                        children: [],
                    },
                ],
            },
            {
                value: 215,
                label: '中山市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3137,
                        label: '市辖区',
                        children: [],
                    },
                ],
            },
            {
                value: 216,
                label: '潮州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2032,
                        label: '湘桥区',
                        children: [],
                    },
                    {
                        value: 2033,
                        label: '潮安区',
                        children: [],
                    },
                    {
                        value: 2034,
                        label: '饶平县',
                        children: [],
                    },
                ],
            },
            {
                value: 217,
                label: '揭阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2036,
                        label: '榕城区',
                        children: [],
                    },
                    {
                        value: 2037,
                        label: '揭东区',
                        children: [],
                    },
                    {
                        value: 2038,
                        label: '揭西县',
                        children: [],
                    },
                    {
                        value: 2039,
                        label: '惠来县',
                        children: [],
                    },
                    {
                        value: 2040,
                        label: '普宁市',
                        children: [],
                    },
                ],
            },
            {
                value: 218,
                label: '云浮市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2042,
                        label: '云城区',
                        children: [],
                    },
                    {
                        value: 2043,
                        label: '云安区',
                        children: [],
                    },
                    {
                        value: 2044,
                        label: '新兴县',
                        children: [],
                    },
                    {
                        value: 2045,
                        label: '郁南县',
                        children: [],
                    },
                    {
                        value: 2046,
                        label: '罗定市',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 20,
        label: '广西壮族自治区',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 219,
                label: '南宁市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2048,
                        label: '兴宁区',
                        children: [],
                    },
                    {
                        value: 2049,
                        label: '青秀区',
                        children: [],
                    },
                    {
                        value: 2050,
                        label: '江南区',
                        children: [],
                    },
                    {
                        value: 2051,
                        label: '西乡塘区',
                        children: [],
                    },
                    {
                        value: 2052,
                        label: '良庆区',
                        children: [],
                    },
                    {
                        value: 2053,
                        label: '邕宁区',
                        children: [],
                    },
                    {
                        value: 2054,
                        label: '武鸣区',
                        children: [],
                    },
                    {
                        value: 2055,
                        label: '隆安县',
                        children: [],
                    },
                    {
                        value: 2056,
                        label: '马山县',
                        children: [],
                    },
                    {
                        value: 2057,
                        label: '上林县',
                        children: [],
                    },
                    {
                        value: 2058,
                        label: '宾阳县',
                        children: [],
                    },
                    {
                        value: 2059,
                        label: '横县',
                        children: [],
                    },
                ],
            },
            {
                value: 220,
                label: '柳州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2061,
                        label: '城中区',
                        children: [],
                    },
                    {
                        value: 2062,
                        label: '鱼峰区',
                        children: [],
                    },
                    {
                        value: 2063,
                        label: '柳南区',
                        children: [],
                    },
                    {
                        value: 2064,
                        label: '柳北区',
                        children: [],
                    },
                    {
                        value: 2065,
                        label: '柳江区',
                        children: [],
                    },
                    {
                        value: 2066,
                        label: '柳城县',
                        children: [],
                    },
                    {
                        value: 2067,
                        label: '鹿寨县',
                        children: [],
                    },
                    {
                        value: 2068,
                        label: '融安县',
                        children: [],
                    },
                    {
                        value: 2069,
                        label: '融水苗族自治县',
                        children: [],
                    },
                    {
                        value: 2070,
                        label: '三江侗族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 221,
                label: '桂林市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2072,
                        label: '秀峰区',
                        children: [],
                    },
                    {
                        value: 2073,
                        label: '叠彩区',
                        children: [],
                    },
                    {
                        value: 2074,
                        label: '象山区',
                        children: [],
                    },
                    {
                        value: 2075,
                        label: '七星区',
                        children: [],
                    },
                    {
                        value: 2076,
                        label: '雁山区',
                        children: [],
                    },
                    {
                        value: 2077,
                        label: '临桂区',
                        children: [],
                    },
                    {
                        value: 2078,
                        label: '阳朔县',
                        children: [],
                    },
                    {
                        value: 2079,
                        label: '灵川县',
                        children: [],
                    },
                    {
                        value: 2080,
                        label: '全州县',
                        children: [],
                    },
                    {
                        value: 2081,
                        label: '兴安县',
                        children: [],
                    },
                    {
                        value: 2082,
                        label: '永福县',
                        children: [],
                    },
                    {
                        value: 2083,
                        label: '灌阳县',
                        children: [],
                    },
                    {
                        value: 2084,
                        label: '龙胜各族自治县',
                        children: [],
                    },
                    {
                        value: 2085,
                        label: '资源县',
                        children: [],
                    },
                    {
                        value: 2086,
                        label: '平乐县',
                        children: [],
                    },
                    {
                        value: 2087,
                        label: '荔浦县',
                        children: [],
                    },
                    {
                        value: 2088,
                        label: '恭城瑶族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 222,
                label: '梧州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2090,
                        label: '万秀区',
                        children: [],
                    },
                    {
                        value: 2091,
                        label: '长洲区',
                        children: [],
                    },
                    {
                        value: 2092,
                        label: '龙圩区',
                        children: [],
                    },
                    {
                        value: 2093,
                        label: '苍梧县',
                        children: [],
                    },
                    {
                        value: 2094,
                        label: '藤县',
                        children: [],
                    },
                    {
                        value: 2095,
                        label: '蒙山县',
                        children: [],
                    },
                    {
                        value: 2096,
                        label: '岑溪市',
                        children: [],
                    },
                ],
            },
            {
                value: 223,
                label: '北海市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2098,
                        label: '海城区',
                        children: [],
                    },
                    {
                        value: 2099,
                        label: '银海区',
                        children: [],
                    },
                    {
                        value: 2100,
                        label: '铁山港区',
                        children: [],
                    },
                    {
                        value: 2101,
                        label: '合浦县',
                        children: [],
                    },
                ],
            },
            {
                value: 224,
                label: '防城港市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2103,
                        label: '港口区',
                        children: [],
                    },
                    {
                        value: 2104,
                        label: '防城区',
                        children: [],
                    },
                    {
                        value: 2105,
                        label: '上思县',
                        children: [],
                    },
                    {
                        value: 2106,
                        label: '东兴市',
                        children: [],
                    },
                ],
            },
            {
                value: 225,
                label: '钦州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2108,
                        label: '钦南区',
                        children: [],
                    },
                    {
                        value: 2109,
                        label: '钦北区',
                        children: [],
                    },
                    {
                        value: 2110,
                        label: '灵山县',
                        children: [],
                    },
                    {
                        value: 2111,
                        label: '浦北县',
                        children: [],
                    },
                ],
            },
            {
                value: 226,
                label: '贵港市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2113,
                        label: '港北区',
                        children: [],
                    },
                    {
                        value: 2114,
                        label: '港南区',
                        children: [],
                    },
                    {
                        value: 2115,
                        label: '覃塘区',
                        children: [],
                    },
                    {
                        value: 2116,
                        label: '平南县',
                        children: [],
                    },
                    {
                        value: 2117,
                        label: '桂平市',
                        children: [],
                    },
                ],
            },
            {
                value: 227,
                label: '玉林市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2119,
                        label: '玉州区',
                        children: [],
                    },
                    {
                        value: 2120,
                        label: '福绵区',
                        children: [],
                    },
                    {
                        value: 2121,
                        label: '容县',
                        children: [],
                    },
                    {
                        value: 2122,
                        label: '陆川县',
                        children: [],
                    },
                    {
                        value: 2123,
                        label: '博白县',
                        children: [],
                    },
                    {
                        value: 2124,
                        label: '兴业县',
                        children: [],
                    },
                    {
                        value: 2125,
                        label: '北流市',
                        children: [],
                    },
                ],
            },
            {
                value: 228,
                label: '百色市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2127,
                        label: '右江区',
                        children: [],
                    },
                    {
                        value: 2128,
                        label: '田阳县',
                        children: [],
                    },
                    {
                        value: 2129,
                        label: '田东县',
                        children: [],
                    },
                    {
                        value: 2130,
                        label: '平果县',
                        children: [],
                    },
                    {
                        value: 2131,
                        label: '德保县',
                        children: [],
                    },
                    {
                        value: 2132,
                        label: '那坡县',
                        children: [],
                    },
                    {
                        value: 2133,
                        label: '凌云县',
                        children: [],
                    },
                    {
                        value: 2134,
                        label: '乐业县',
                        children: [],
                    },
                    {
                        value: 2135,
                        label: '田林县',
                        children: [],
                    },
                    {
                        value: 2136,
                        label: '西林县',
                        children: [],
                    },
                    {
                        value: 2137,
                        label: '隆林各族自治县',
                        children: [],
                    },
                    {
                        value: 2138,
                        label: '靖西市',
                        children: [],
                    },
                ],
            },
            {
                value: 229,
                label: '贺州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2140,
                        label: '八步区',
                        children: [],
                    },
                    {
                        value: 2141,
                        label: '平桂区',
                        children: [],
                    },
                    {
                        value: 2142,
                        label: '昭平县',
                        children: [],
                    },
                    {
                        value: 2143,
                        label: '钟山县',
                        children: [],
                    },
                    {
                        value: 2144,
                        label: '富川瑶族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 230,
                label: '河池市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2146,
                        label: '金城江区',
                        children: [],
                    },
                    {
                        value: 2147,
                        label: '南丹县',
                        children: [],
                    },
                    {
                        value: 2148,
                        label: '天峨县',
                        children: [],
                    },
                    {
                        value: 2149,
                        label: '凤山县',
                        children: [],
                    },
                    {
                        value: 2150,
                        label: '东兰县',
                        children: [],
                    },
                    {
                        value: 2151,
                        label: '罗城仫佬族自治县',
                        children: [],
                    },
                    {
                        value: 2152,
                        label: '环江毛南族自治县',
                        children: [],
                    },
                    {
                        value: 2153,
                        label: '巴马瑶族自治县',
                        children: [],
                    },
                    {
                        value: 2154,
                        label: '都安瑶族自治县',
                        children: [],
                    },
                    {
                        value: 2155,
                        label: '大化瑶族自治县',
                        children: [],
                    },
                    {
                        value: 2156,
                        label: '宜州市',
                        children: [],
                    },
                ],
            },
            {
                value: 231,
                label: '来宾市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2158,
                        label: '兴宾区',
                        children: [],
                    },
                    {
                        value: 2159,
                        label: '忻城县',
                        children: [],
                    },
                    {
                        value: 2160,
                        label: '象州县',
                        children: [],
                    },
                    {
                        value: 2161,
                        label: '武宣县',
                        children: [],
                    },
                    {
                        value: 2162,
                        label: '金秀瑶族自治县',
                        children: [],
                    },
                    {
                        value: 2163,
                        label: '合山市',
                        children: [],
                    },
                ],
            },
            {
                value: 232,
                label: '崇左市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2165,
                        label: '江州区',
                        children: [],
                    },
                    {
                        value: 2166,
                        label: '扶绥县',
                        children: [],
                    },
                    {
                        value: 2167,
                        label: '宁明县',
                        children: [],
                    },
                    {
                        value: 2168,
                        label: '龙州县',
                        children: [],
                    },
                    {
                        value: 2169,
                        label: '大新县',
                        children: [],
                    },
                    {
                        value: 2170,
                        label: '天等县',
                        children: [],
                    },
                    {
                        value: 2171,
                        label: '凭祥市',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 21,
        label: '海南省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 233,
                label: '海口市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2173,
                        label: '秀英区',
                        children: [],
                    },
                    {
                        value: 2174,
                        label: '龙华区',
                        children: [],
                    },
                    {
                        value: 2175,
                        label: '琼山区',
                        children: [],
                    },
                    {
                        value: 2176,
                        label: '美兰区',
                        children: [],
                    },
                ],
            },
            {
                value: 234,
                label: '三亚市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2178,
                        label: '海棠区',
                        children: [],
                    },
                    {
                        value: 2179,
                        label: '吉阳区',
                        children: [],
                    },
                    {
                        value: 2180,
                        label: '天涯区',
                        children: [],
                    },
                    {
                        value: 2181,
                        label: '崖州区',
                        children: [],
                    },
                ],
            },
            {
                value: 235,
                label: '三沙市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3169,
                        label: '西沙区',
                        children: [],
                    },
                    {
                        value: 3170,
                        label: '南沙区',
                        children: [],
                    },
                ],
            },
            {
                value: 236,
                label: '儋州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3136,
                        label: '市辖区',
                        children: [],
                    },
                ],
            },
            {
                value: 237,
                label: '省直辖县级行政单位',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2182,
                        label: '五指山市',
                        children: [],
                    },
                    {
                        value: 2183,
                        label: '琼海市',
                        children: [],
                    },
                    {
                        value: 2184,
                        label: '文昌市',
                        children: [],
                    },
                    {
                        value: 2185,
                        label: '万宁市',
                        children: [],
                    },
                    {
                        value: 2186,
                        label: '东方市',
                        children: [],
                    },
                    {
                        value: 2187,
                        label: '定安县',
                        children: [],
                    },
                    {
                        value: 2188,
                        label: '屯昌县',
                        children: [],
                    },
                    {
                        value: 2189,
                        label: '澄迈县',
                        children: [],
                    },
                    {
                        value: 2190,
                        label: '临高县',
                        children: [],
                    },
                    {
                        value: 2191,
                        label: '白沙黎族自治县',
                        children: [],
                    },
                    {
                        value: 2192,
                        label: '昌江黎族自治县',
                        children: [],
                    },
                    {
                        value: 2193,
                        label: '乐东黎族自治县',
                        children: [],
                    },
                    {
                        value: 2194,
                        label: '陵水黎族自治县',
                        children: [],
                    },
                    {
                        value: 2195,
                        label: '保亭黎族苗族自治县',
                        children: [],
                    },
                    {
                        value: 2196,
                        label: '琼中黎族苗族自治县',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 22,
        label: '重庆市',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 238,
                label: '市辖区',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2197,
                        label: '万州区',
                        children: [],
                    },
                    {
                        value: 2198,
                        label: '涪陵区',
                        children: [],
                    },
                    {
                        value: 2199,
                        label: '渝中区',
                        children: [],
                    },
                    {
                        value: 2200,
                        label: '大渡口区',
                        children: [],
                    },
                    {
                        value: 2201,
                        label: '江北区',
                        children: [],
                    },
                    {
                        value: 2202,
                        label: '沙坪坝区',
                        children: [],
                    },
                    {
                        value: 2203,
                        label: '九龙坡区',
                        children: [],
                    },
                    {
                        value: 2204,
                        label: '南岸区',
                        children: [],
                    },
                    {
                        value: 2205,
                        label: '北碚区',
                        children: [],
                    },
                    {
                        value: 2206,
                        label: '綦江区',
                        children: [],
                    },
                    {
                        value: 2207,
                        label: '大足区',
                        children: [],
                    },
                    {
                        value: 2208,
                        label: '渝北区',
                        children: [],
                    },
                    {
                        value: 2209,
                        label: '巴南区',
                        children: [],
                    },
                    {
                        value: 2210,
                        label: '黔江区',
                        children: [],
                    },
                    {
                        value: 2211,
                        label: '长寿区',
                        children: [],
                    },
                    {
                        value: 2212,
                        label: '江津区',
                        children: [],
                    },
                    {
                        value: 2213,
                        label: '合川区',
                        children: [],
                    },
                    {
                        value: 2214,
                        label: '永川区',
                        children: [],
                    },
                    {
                        value: 2215,
                        label: '南川区',
                        children: [],
                    },
                    {
                        value: 2216,
                        label: '璧山区',
                        children: [],
                    },
                    {
                        value: 2217,
                        label: '铜梁区',
                        children: [],
                    },
                    {
                        value: 2218,
                        label: '潼南区',
                        children: [],
                    },
                    {
                        value: 2219,
                        label: '荣昌区',
                        children: [],
                    },
                    {
                        value: 2220,
                        label: '开州区',
                        children: [],
                    },
                    {
                        value: 3165,
                        label: '巫山县',
                        children: [],
                    },
                    {
                        value: 3166,
                        label: '奉节县',
                        children: [],
                    },
                ],
            },
            {
                value: 239,
                label: '重庆县',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2221,
                        label: '梁平县',
                        children: [],
                    },
                    {
                        value: 2222,
                        label: '城口县',
                        children: [],
                    },
                    {
                        value: 2223,
                        label: '丰都县',
                        children: [],
                    },
                    {
                        value: 2224,
                        label: '垫江县',
                        children: [],
                    },
                    {
                        value: 2225,
                        label: '武隆县',
                        children: [],
                    },
                    {
                        value: 2226,
                        label: '忠县',
                        children: [],
                    },
                    {
                        value: 2227,
                        label: '云阳县',
                        children: [],
                    },
                    {
                        value: 2229,
                        label: '巫山县',
                        children: [],
                    },
                    {
                        value: 2230,
                        label: '巫溪县',
                        children: [],
                    },
                    {
                        value: 2231,
                        label: '石柱土家族自治县',
                        children: [],
                    },
                    {
                        value: 2232,
                        label: '秀山土家族苗族自治县',
                        children: [],
                    },
                    {
                        value: 2233,
                        label: '酉阳土家族苗族自治县',
                        children: [],
                    },
                    {
                        value: 2234,
                        label: '彭水苗族土家族自治县',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 23,
        label: '四川省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 240,
                label: '成都市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2236,
                        label: '锦江区',
                        children: [],
                    },
                    {
                        value: 2237,
                        label: '青羊区',
                        children: [],
                    },
                    {
                        value: 2238,
                        label: '金牛区',
                        children: [],
                    },
                    {
                        value: 2239,
                        label: '武侯区',
                        children: [],
                    },
                    {
                        value: 2240,
                        label: '成华区',
                        children: [],
                    },
                    {
                        value: 2241,
                        label: '龙泉驿区',
                        children: [],
                    },
                    {
                        value: 2242,
                        label: '青白江区',
                        children: [],
                    },
                    {
                        value: 2243,
                        label: '新都区',
                        children: [],
                    },
                    {
                        value: 2244,
                        label: '温江区',
                        children: [],
                    },
                    {
                        value: 2245,
                        label: '双流区',
                        children: [],
                    },
                    {
                        value: 2246,
                        label: '金堂县',
                        children: [],
                    },
                    {
                        value: 2247,
                        label: '郫县',
                        children: [],
                    },
                    {
                        value: 2248,
                        label: '大邑县',
                        children: [],
                    },
                    {
                        value: 2249,
                        label: '蒲江县',
                        children: [],
                    },
                    {
                        value: 2250,
                        label: '新津县',
                        children: [],
                    },
                    {
                        value: 2251,
                        label: '都江堰市',
                        children: [],
                    },
                    {
                        value: 2252,
                        label: '彭州市',
                        children: [],
                    },
                    {
                        value: 2253,
                        label: '邛崃市',
                        children: [],
                    },
                    {
                        value: 2254,
                        label: '崇州市',
                        children: [],
                    },
                    {
                        value: 2255,
                        label: '简阳市',
                        children: [],
                    },
                ],
            },
            {
                value: 241,
                label: '自贡市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2257,
                        label: '自流井区',
                        children: [],
                    },
                    {
                        value: 2258,
                        label: '贡井区',
                        children: [],
                    },
                    {
                        value: 2259,
                        label: '大安区',
                        children: [],
                    },
                    {
                        value: 2260,
                        label: '沿滩区',
                        children: [],
                    },
                    {
                        value: 2261,
                        label: '荣县',
                        children: [],
                    },
                    {
                        value: 2262,
                        label: '富顺县',
                        children: [],
                    },
                ],
            },
            {
                value: 242,
                label: '攀枝花市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2264,
                        label: '东区',
                        children: [],
                    },
                    {
                        value: 2265,
                        label: '西区',
                        children: [],
                    },
                    {
                        value: 2266,
                        label: '仁和区',
                        children: [],
                    },
                    {
                        value: 2267,
                        label: '米易县',
                        children: [],
                    },
                    {
                        value: 2268,
                        label: '盐边县',
                        children: [],
                    },
                ],
            },
            {
                value: 243,
                label: '泸州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2270,
                        label: '江阳区',
                        children: [],
                    },
                    {
                        value: 2271,
                        label: '纳溪区',
                        children: [],
                    },
                    {
                        value: 2272,
                        label: '龙马潭区',
                        children: [],
                    },
                    {
                        value: 2273,
                        label: '泸县',
                        children: [],
                    },
                    {
                        value: 2274,
                        label: '合江县',
                        children: [],
                    },
                    {
                        value: 2275,
                        label: '叙永县',
                        children: [],
                    },
                    {
                        value: 2276,
                        label: '古蔺县',
                        children: [],
                    },
                ],
            },
            {
                value: 244,
                label: '德阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2278,
                        label: '旌阳区',
                        children: [],
                    },
                    {
                        value: 2279,
                        label: '中江县',
                        children: [],
                    },
                    {
                        value: 2280,
                        label: '罗江县',
                        children: [],
                    },
                    {
                        value: 2281,
                        label: '广汉市',
                        children: [],
                    },
                    {
                        value: 2282,
                        label: '什邡市',
                        children: [],
                    },
                    {
                        value: 2283,
                        label: '绵竹市',
                        children: [],
                    },
                ],
            },
            {
                value: 245,
                label: '绵阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2285,
                        label: '涪城区',
                        children: [],
                    },
                    {
                        value: 2286,
                        label: '游仙区',
                        children: [],
                    },
                    {
                        value: 2287,
                        label: '安州区',
                        children: [],
                    },
                    {
                        value: 2288,
                        label: '三台县',
                        children: [],
                    },
                    {
                        value: 2289,
                        label: '盐亭县',
                        children: [],
                    },
                    {
                        value: 2290,
                        label: '梓潼县',
                        children: [],
                    },
                    {
                        value: 2291,
                        label: '北川羌族自治县',
                        children: [],
                    },
                    {
                        value: 2292,
                        label: '平武县',
                        children: [],
                    },
                    {
                        value: 2293,
                        label: '江油市',
                        children: [],
                    },
                ],
            },
            {
                value: 246,
                label: '广元市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2295,
                        label: '利州区',
                        children: [],
                    },
                    {
                        value: 2296,
                        label: '昭化区',
                        children: [],
                    },
                    {
                        value: 2297,
                        label: '朝天区',
                        children: [],
                    },
                    {
                        value: 2298,
                        label: '旺苍县',
                        children: [],
                    },
                    {
                        value: 2299,
                        label: '青川县',
                        children: [],
                    },
                    {
                        value: 2300,
                        label: '剑阁县',
                        children: [],
                    },
                    {
                        value: 2301,
                        label: '苍溪县',
                        children: [],
                    },
                ],
            },
            {
                value: 247,
                label: '遂宁市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2303,
                        label: '船山区',
                        children: [],
                    },
                    {
                        value: 2304,
                        label: '安居区',
                        children: [],
                    },
                    {
                        value: 2305,
                        label: '蓬溪县',
                        children: [],
                    },
                    {
                        value: 2306,
                        label: '射洪县',
                        children: [],
                    },
                    {
                        value: 2307,
                        label: '大英县',
                        children: [],
                    },
                ],
            },
            {
                value: 248,
                label: '内江市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2309,
                        label: '市中区',
                        children: [],
                    },
                    {
                        value: 2310,
                        label: '东兴区',
                        children: [],
                    },
                    {
                        value: 2311,
                        label: '威远县',
                        children: [],
                    },
                    {
                        value: 2312,
                        label: '资中县',
                        children: [],
                    },
                    {
                        value: 2313,
                        label: '隆昌县',
                        children: [],
                    },
                ],
            },
            {
                value: 249,
                label: '乐山市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2315,
                        label: '市中区',
                        children: [],
                    },
                    {
                        value: 2316,
                        label: '沙湾区',
                        children: [],
                    },
                    {
                        value: 2317,
                        label: '五通桥区',
                        children: [],
                    },
                    {
                        value: 2318,
                        label: '金口河区',
                        children: [],
                    },
                    {
                        value: 2319,
                        label: '犍为县',
                        children: [],
                    },
                    {
                        value: 2320,
                        label: '井研县',
                        children: [],
                    },
                    {
                        value: 2321,
                        label: '夹江县',
                        children: [],
                    },
                    {
                        value: 2322,
                        label: '沐川县',
                        children: [],
                    },
                    {
                        value: 2323,
                        label: '峨边彝族自治县',
                        children: [],
                    },
                    {
                        value: 2324,
                        label: '马边彝族自治县',
                        children: [],
                    },
                    {
                        value: 2325,
                        label: '峨眉山市',
                        children: [],
                    },
                ],
            },
            {
                value: 250,
                label: '南充市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2327,
                        label: '顺庆区',
                        children: [],
                    },
                    {
                        value: 2328,
                        label: '高坪区',
                        children: [],
                    },
                    {
                        value: 2329,
                        label: '嘉陵区',
                        children: [],
                    },
                    {
                        value: 2330,
                        label: '南部县',
                        children: [],
                    },
                    {
                        value: 2331,
                        label: '营山县',
                        children: [],
                    },
                    {
                        value: 2332,
                        label: '蓬安县',
                        children: [],
                    },
                    {
                        value: 2333,
                        label: '仪陇县',
                        children: [],
                    },
                    {
                        value: 2334,
                        label: '西充县',
                        children: [],
                    },
                    {
                        value: 2335,
                        label: '阆中市',
                        children: [],
                    },
                ],
            },
            {
                value: 251,
                label: '眉山市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2337,
                        label: '东坡区',
                        children: [],
                    },
                    {
                        value: 2338,
                        label: '彭山区',
                        children: [],
                    },
                    {
                        value: 2339,
                        label: '仁寿县',
                        children: [],
                    },
                    {
                        value: 2340,
                        label: '洪雅县',
                        children: [],
                    },
                    {
                        value: 2341,
                        label: '丹棱县',
                        children: [],
                    },
                    {
                        value: 2342,
                        label: '青神县',
                        children: [],
                    },
                ],
            },
            {
                value: 252,
                label: '宜宾市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2344,
                        label: '翠屏区',
                        children: [],
                    },
                    {
                        value: 2345,
                        label: '南溪区',
                        children: [],
                    },
                    {
                        value: 2346,
                        label: '叙州区',
                        children: [],
                    },
                    {
                        value: 2347,
                        label: '江安县',
                        children: [],
                    },
                    {
                        value: 2348,
                        label: '长宁县',
                        children: [],
                    },
                    {
                        value: 2349,
                        label: '高县',
                        children: [],
                    },
                    {
                        value: 2350,
                        label: '珙县',
                        children: [],
                    },
                    {
                        value: 2351,
                        label: '筠连县',
                        children: [],
                    },
                    {
                        value: 2352,
                        label: '兴文县',
                        children: [],
                    },
                    {
                        value: 2353,
                        label: '屏山县',
                        children: [],
                    },
                ],
            },
            {
                value: 253,
                label: '广安市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2355,
                        label: '广安区',
                        children: [],
                    },
                    {
                        value: 2356,
                        label: '前锋区',
                        children: [],
                    },
                    {
                        value: 2357,
                        label: '岳池县',
                        children: [],
                    },
                    {
                        value: 2358,
                        label: '武胜县',
                        children: [],
                    },
                    {
                        value: 2359,
                        label: '邻水县',
                        children: [],
                    },
                    {
                        value: 2360,
                        label: '华蓥市',
                        children: [],
                    },
                ],
            },
            {
                value: 254,
                label: '达州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2362,
                        label: '通川区',
                        children: [],
                    },
                    {
                        value: 2363,
                        label: '达川区',
                        children: [],
                    },
                    {
                        value: 2364,
                        label: '宣汉县',
                        children: [],
                    },
                    {
                        value: 2365,
                        label: '开江县',
                        children: [],
                    },
                    {
                        value: 2366,
                        label: '大竹县',
                        children: [],
                    },
                    {
                        value: 2367,
                        label: '渠县',
                        children: [],
                    },
                    {
                        value: 2368,
                        label: '万源市',
                        children: [],
                    },
                ],
            },
            {
                value: 255,
                label: '雅安市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2370,
                        label: '雨城区',
                        children: [],
                    },
                    {
                        value: 2371,
                        label: '名山区',
                        children: [],
                    },
                    {
                        value: 2372,
                        label: '荥经县',
                        children: [],
                    },
                    {
                        value: 2373,
                        label: '汉源县',
                        children: [],
                    },
                    {
                        value: 2374,
                        label: '石棉县',
                        children: [],
                    },
                    {
                        value: 2375,
                        label: '天全县',
                        children: [],
                    },
                    {
                        value: 2376,
                        label: '芦山县',
                        children: [],
                    },
                    {
                        value: 2377,
                        label: '宝兴县',
                        children: [],
                    },
                ],
            },
            {
                value: 256,
                label: '巴中市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2379,
                        label: '巴州区',
                        children: [],
                    },
                    {
                        value: 2380,
                        label: '恩阳区',
                        children: [],
                    },
                    {
                        value: 2381,
                        label: '通江县',
                        children: [],
                    },
                    {
                        value: 2382,
                        label: '南江县',
                        children: [],
                    },
                    {
                        value: 2383,
                        label: '平昌县',
                        children: [],
                    },
                ],
            },
            {
                value: 257,
                label: '资阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2385,
                        label: '雁江区',
                        children: [],
                    },
                    {
                        value: 2386,
                        label: '安岳县',
                        children: [],
                    },
                    {
                        value: 2387,
                        label: '乐至县',
                        children: [],
                    },
                ],
            },
            {
                value: 258,
                label: '阿坝藏族羌族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2388,
                        label: '马尔康市',
                        children: [],
                    },
                    {
                        value: 2389,
                        label: '汶川县',
                        children: [],
                    },
                    {
                        value: 2390,
                        label: '理县',
                        children: [],
                    },
                    {
                        value: 2391,
                        label: '茂县',
                        children: [],
                    },
                    {
                        value: 2392,
                        label: '松潘县',
                        children: [],
                    },
                    {
                        value: 2393,
                        label: '九寨沟县',
                        children: [],
                    },
                    {
                        value: 2394,
                        label: '金川县',
                        children: [],
                    },
                    {
                        value: 2395,
                        label: '小金县',
                        children: [],
                    },
                    {
                        value: 2396,
                        label: '黑水县',
                        children: [],
                    },
                    {
                        value: 2397,
                        label: '壤塘县',
                        children: [],
                    },
                    {
                        value: 2398,
                        label: '阿坝县',
                        children: [],
                    },
                    {
                        value: 2399,
                        label: '若尔盖县',
                        children: [],
                    },
                    {
                        value: 2400,
                        label: '红原县',
                        children: [],
                    },
                ],
            },
            {
                value: 259,
                label: '甘孜藏族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2401,
                        label: '康定市',
                        children: [],
                    },
                    {
                        value: 2402,
                        label: '泸定县',
                        children: [],
                    },
                    {
                        value: 2403,
                        label: '丹巴县',
                        children: [],
                    },
                    {
                        value: 2404,
                        label: '九龙县',
                        children: [],
                    },
                    {
                        value: 2405,
                        label: '雅江县',
                        children: [],
                    },
                    {
                        value: 2406,
                        label: '道孚县',
                        children: [],
                    },
                    {
                        value: 2407,
                        label: '炉霍县',
                        children: [],
                    },
                    {
                        value: 2408,
                        label: '甘孜县',
                        children: [],
                    },
                    {
                        value: 2409,
                        label: '新龙县',
                        children: [],
                    },
                    {
                        value: 2410,
                        label: '德格县',
                        children: [],
                    },
                    {
                        value: 2411,
                        label: '白玉县',
                        children: [],
                    },
                    {
                        value: 2412,
                        label: '石渠县',
                        children: [],
                    },
                    {
                        value: 2413,
                        label: '色达县',
                        children: [],
                    },
                    {
                        value: 2414,
                        label: '理塘县',
                        children: [],
                    },
                    {
                        value: 2415,
                        label: '巴塘县',
                        children: [],
                    },
                    {
                        value: 2416,
                        label: '乡城县',
                        children: [],
                    },
                    {
                        value: 2417,
                        label: '稻城县',
                        children: [],
                    },
                    {
                        value: 2418,
                        label: '得荣县',
                        children: [],
                    },
                ],
            },
            {
                value: 260,
                label: '凉山彝族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2419,
                        label: '西昌市',
                        children: [],
                    },
                    {
                        value: 2420,
                        label: '木里藏族自治县',
                        children: [],
                    },
                    {
                        value: 2421,
                        label: '盐源县',
                        children: [],
                    },
                    {
                        value: 2422,
                        label: '德昌县',
                        children: [],
                    },
                    {
                        value: 2423,
                        label: '会理县',
                        children: [],
                    },
                    {
                        value: 2424,
                        label: '会东县',
                        children: [],
                    },
                    {
                        value: 2425,
                        label: '宁南县',
                        children: [],
                    },
                    {
                        value: 2426,
                        label: '普格县',
                        children: [],
                    },
                    {
                        value: 2427,
                        label: '布拖县',
                        children: [],
                    },
                    {
                        value: 2428,
                        label: '金阳县',
                        children: [],
                    },
                    {
                        value: 2429,
                        label: '昭觉县',
                        children: [],
                    },
                    {
                        value: 2430,
                        label: '喜德县',
                        children: [],
                    },
                    {
                        value: 2431,
                        label: '冕宁县',
                        children: [],
                    },
                    {
                        value: 2432,
                        label: '越西县',
                        children: [],
                    },
                    {
                        value: 2433,
                        label: '甘洛县',
                        children: [],
                    },
                    {
                        value: 2434,
                        label: '美姑县',
                        children: [],
                    },
                    {
                        value: 2435,
                        label: '雷波县',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 24,
        label: '贵州省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 261,
                label: '贵阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2437,
                        label: '南明区',
                        children: [],
                    },
                    {
                        value: 2438,
                        label: '云岩区',
                        children: [],
                    },
                    {
                        value: 2439,
                        label: '花溪区',
                        children: [],
                    },
                    {
                        value: 2440,
                        label: '乌当区',
                        children: [],
                    },
                    {
                        value: 2441,
                        label: '白云区',
                        children: [],
                    },
                    {
                        value: 2442,
                        label: '观山湖区',
                        children: [],
                    },
                    {
                        value: 2443,
                        label: '开阳县',
                        children: [],
                    },
                    {
                        value: 2444,
                        label: '息烽县',
                        children: [],
                    },
                    {
                        value: 2445,
                        label: '修文县',
                        children: [],
                    },
                    {
                        value: 2446,
                        label: '清镇市',
                        children: [],
                    },
                ],
            },
            {
                value: 262,
                label: '六盘水市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2447,
                        label: '钟山区',
                        children: [],
                    },
                    {
                        value: 2448,
                        label: '六枝特区',
                        children: [],
                    },
                    {
                        value: 2449,
                        label: '水城县',
                        children: [],
                    },
                    {
                        value: 2450,
                        label: '盘县',
                        children: [],
                    },
                ],
            },
            {
                value: 263,
                label: '遵义市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2452,
                        label: '红花岗区',
                        children: [],
                    },
                    {
                        value: 2453,
                        label: '汇川区',
                        children: [],
                    },
                    {
                        value: 2454,
                        label: '播州区',
                        children: [],
                    },
                    {
                        value: 2455,
                        label: '桐梓县',
                        children: [],
                    },
                    {
                        value: 2456,
                        label: '绥阳县',
                        children: [],
                    },
                    {
                        value: 2457,
                        label: '正安县',
                        children: [],
                    },
                    {
                        value: 2458,
                        label: '道真仡佬族苗族自治县',
                        children: [],
                    },
                    {
                        value: 2459,
                        label: '务川仡佬族苗族自治县',
                        children: [],
                    },
                    {
                        value: 2460,
                        label: '凤冈县',
                        children: [],
                    },
                    {
                        value: 2461,
                        label: '湄潭县',
                        children: [],
                    },
                    {
                        value: 2462,
                        label: '余庆县',
                        children: [],
                    },
                    {
                        value: 2463,
                        label: '习水县',
                        children: [],
                    },
                    {
                        value: 2464,
                        label: '赤水市',
                        children: [],
                    },
                    {
                        value: 2465,
                        label: '仁怀市',
                        children: [],
                    },
                ],
            },
            {
                value: 264,
                label: '安顺市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2467,
                        label: '西秀区',
                        children: [],
                    },
                    {
                        value: 2468,
                        label: '平坝区',
                        children: [],
                    },
                    {
                        value: 2469,
                        label: '普定县',
                        children: [],
                    },
                    {
                        value: 2470,
                        label: '镇宁布依族苗族自治县',
                        children: [],
                    },
                    {
                        value: 2471,
                        label: '关岭布依族苗族自治县',
                        children: [],
                    },
                    {
                        value: 2472,
                        label: '紫云苗族布依族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 265,
                label: '毕节市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2474,
                        label: '七星关区',
                        children: [],
                    },
                    {
                        value: 2475,
                        label: '大方县',
                        children: [],
                    },
                    {
                        value: 2476,
                        label: '黔西县',
                        children: [],
                    },
                    {
                        value: 2477,
                        label: '金沙县',
                        children: [],
                    },
                    {
                        value: 2478,
                        label: '织金县',
                        children: [],
                    },
                    {
                        value: 2479,
                        label: '纳雍县',
                        children: [],
                    },
                    {
                        value: 2480,
                        label: '威宁彝族回族苗族自治县',
                        children: [],
                    },
                    {
                        value: 2481,
                        label: '赫章县',
                        children: [],
                    },
                ],
            },
            {
                value: 266,
                label: '铜仁市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2483,
                        label: '碧江区',
                        children: [],
                    },
                    {
                        value: 2484,
                        label: '万山区',
                        children: [],
                    },
                    {
                        value: 2485,
                        label: '江口县',
                        children: [],
                    },
                    {
                        value: 2486,
                        label: '玉屏侗族自治县',
                        children: [],
                    },
                    {
                        value: 2487,
                        label: '石阡县',
                        children: [],
                    },
                    {
                        value: 2488,
                        label: '思南县',
                        children: [],
                    },
                    {
                        value: 2489,
                        label: '印江土家族苗族自治县',
                        children: [],
                    },
                    {
                        value: 2490,
                        label: '德江县',
                        children: [],
                    },
                    {
                        value: 2491,
                        label: '沿河土家族自治县',
                        children: [],
                    },
                    {
                        value: 2492,
                        label: '松桃苗族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 267,
                label: '黔西南布依族苗族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2493,
                        label: '兴义市',
                        children: [],
                    },
                    {
                        value: 2494,
                        label: '兴仁县',
                        children: [],
                    },
                    {
                        value: 2495,
                        label: '普安县',
                        children: [],
                    },
                    {
                        value: 2496,
                        label: '晴隆县',
                        children: [],
                    },
                    {
                        value: 2497,
                        label: '贞丰县',
                        children: [],
                    },
                    {
                        value: 2498,
                        label: '望谟县',
                        children: [],
                    },
                    {
                        value: 2499,
                        label: '册亨县',
                        children: [],
                    },
                    {
                        value: 2500,
                        label: '安龙县',
                        children: [],
                    },
                ],
            },
            {
                value: 268,
                label: '黔东南苗族侗族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2501,
                        label: '凯里市',
                        children: [],
                    },
                    {
                        value: 2502,
                        label: '黄平县',
                        children: [],
                    },
                    {
                        value: 2503,
                        label: '施秉县',
                        children: [],
                    },
                    {
                        value: 2504,
                        label: '三穗县',
                        children: [],
                    },
                    {
                        value: 2505,
                        label: '镇远县',
                        children: [],
                    },
                    {
                        value: 2506,
                        label: '岑巩县',
                        children: [],
                    },
                    {
                        value: 2507,
                        label: '天柱县',
                        children: [],
                    },
                    {
                        value: 2508,
                        label: '锦屏县',
                        children: [],
                    },
                    {
                        value: 2509,
                        label: '剑河县',
                        children: [],
                    },
                    {
                        value: 2510,
                        label: '台江县',
                        children: [],
                    },
                    {
                        value: 2511,
                        label: '黎平县',
                        children: [],
                    },
                    {
                        value: 2512,
                        label: '榕江县',
                        children: [],
                    },
                    {
                        value: 2513,
                        label: '从江县',
                        children: [],
                    },
                    {
                        value: 2514,
                        label: '雷山县',
                        children: [],
                    },
                    {
                        value: 2515,
                        label: '麻江县',
                        children: [],
                    },
                    {
                        value: 2516,
                        label: '丹寨县',
                        children: [],
                    },
                ],
            },
            {
                value: 269,
                label: '黔南布依族苗族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2517,
                        label: '都匀市',
                        children: [],
                    },
                    {
                        value: 2518,
                        label: '福泉市',
                        children: [],
                    },
                    {
                        value: 2519,
                        label: '荔波县',
                        children: [],
                    },
                    {
                        value: 2520,
                        label: '贵定县',
                        children: [],
                    },
                    {
                        value: 2521,
                        label: '瓮安县',
                        children: [],
                    },
                    {
                        value: 2522,
                        label: '独山县',
                        children: [],
                    },
                    {
                        value: 2523,
                        label: '平塘县',
                        children: [],
                    },
                    {
                        value: 2524,
                        label: '罗甸县',
                        children: [],
                    },
                    {
                        value: 2525,
                        label: '长顺县',
                        children: [],
                    },
                    {
                        value: 2526,
                        label: '龙里县',
                        children: [],
                    },
                    {
                        value: 2527,
                        label: '惠水县',
                        children: [],
                    },
                    {
                        value: 2528,
                        label: '三都水族自治县',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 25,
        label: '云南省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 270,
                label: '昆明市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2530,
                        label: '五华区',
                        children: [],
                    },
                    {
                        value: 2531,
                        label: '盘龙区',
                        children: [],
                    },
                    {
                        value: 2532,
                        label: '官渡区',
                        children: [],
                    },
                    {
                        value: 2533,
                        label: '西山区',
                        children: [],
                    },
                    {
                        value: 2534,
                        label: '东川区',
                        children: [],
                    },
                    {
                        value: 2535,
                        label: '呈贡区',
                        children: [],
                    },
                    {
                        value: 2536,
                        label: '晋宁县',
                        children: [],
                    },
                    {
                        value: 2537,
                        label: '富民县',
                        children: [],
                    },
                    {
                        value: 2538,
                        label: '宜良县',
                        children: [],
                    },
                    {
                        value: 2539,
                        label: '石林彝族自治县',
                        children: [],
                    },
                    {
                        value: 2540,
                        label: '嵩明县',
                        children: [],
                    },
                    {
                        value: 2541,
                        label: '禄劝彝族苗族自治县',
                        children: [],
                    },
                    {
                        value: 2542,
                        label: '寻甸回族彝族自治县',
                        children: [],
                    },
                    {
                        value: 2543,
                        label: '安宁市',
                        children: [],
                    },
                ],
            },
            {
                value: 271,
                label: '曲靖市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2545,
                        label: '麒麟区',
                        children: [],
                    },
                    {
                        value: 2546,
                        label: '沾益区',
                        children: [],
                    },
                    {
                        value: 2547,
                        label: '马龙县',
                        children: [],
                    },
                    {
                        value: 2548,
                        label: '陆良县',
                        children: [],
                    },
                    {
                        value: 2549,
                        label: '师宗县',
                        children: [],
                    },
                    {
                        value: 2550,
                        label: '罗平县',
                        children: [],
                    },
                    {
                        value: 2551,
                        label: '富源县',
                        children: [],
                    },
                    {
                        value: 2552,
                        label: '会泽县',
                        children: [],
                    },
                    {
                        value: 2553,
                        label: '宣威市',
                        children: [],
                    },
                ],
            },
            {
                value: 272,
                label: '玉溪市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2555,
                        label: '红塔区',
                        children: [],
                    },
                    {
                        value: 2556,
                        label: '江川区',
                        children: [],
                    },
                    {
                        value: 2557,
                        label: '澄江县',
                        children: [],
                    },
                    {
                        value: 2558,
                        label: '通海县',
                        children: [],
                    },
                    {
                        value: 2559,
                        label: '华宁县',
                        children: [],
                    },
                    {
                        value: 2560,
                        label: '易门县',
                        children: [],
                    },
                    {
                        value: 2561,
                        label: '峨山彝族自治县',
                        children: [],
                    },
                    {
                        value: 2562,
                        label: '新平彝族傣族自治县',
                        children: [],
                    },
                    {
                        value: 2563,
                        label: '元江哈尼族彝族傣族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 273,
                label: '保山市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2565,
                        label: '隆阳区',
                        children: [],
                    },
                    {
                        value: 2566,
                        label: '施甸县',
                        children: [],
                    },
                    {
                        value: 2567,
                        label: '龙陵县',
                        children: [],
                    },
                    {
                        value: 2568,
                        label: '昌宁县',
                        children: [],
                    },
                    {
                        value: 2569,
                        label: '腾冲市',
                        children: [],
                    },
                ],
            },
            {
                value: 274,
                label: '昭通市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2571,
                        label: '昭阳区',
                        children: [],
                    },
                    {
                        value: 2572,
                        label: '鲁甸县',
                        children: [],
                    },
                    {
                        value: 2573,
                        label: '巧家县',
                        children: [],
                    },
                    {
                        value: 2574,
                        label: '盐津县',
                        children: [],
                    },
                    {
                        value: 2575,
                        label: '大关县',
                        children: [],
                    },
                    {
                        value: 2576,
                        label: '永善县',
                        children: [],
                    },
                    {
                        value: 2577,
                        label: '绥江县',
                        children: [],
                    },
                    {
                        value: 2578,
                        label: '镇雄县',
                        children: [],
                    },
                    {
                        value: 2579,
                        label: '彝良县',
                        children: [],
                    },
                    {
                        value: 2580,
                        label: '威信县',
                        children: [],
                    },
                    {
                        value: 2581,
                        label: '水富县',
                        children: [],
                    },
                ],
            },
            {
                value: 275,
                label: '丽江市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2583,
                        label: '古城区',
                        children: [],
                    },
                    {
                        value: 2584,
                        label: '玉龙纳西族自治县',
                        children: [],
                    },
                    {
                        value: 2585,
                        label: '永胜县',
                        children: [],
                    },
                    {
                        value: 2586,
                        label: '华坪县',
                        children: [],
                    },
                    {
                        value: 2587,
                        label: '宁蒗彝族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 276,
                label: '普洱市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2589,
                        label: '思茅区',
                        children: [],
                    },
                    {
                        value: 2590,
                        label: '宁洱哈尼族彝族自治县',
                        children: [],
                    },
                    {
                        value: 2591,
                        label: '墨江哈尼族自治县',
                        children: [],
                    },
                    {
                        value: 2592,
                        label: '景东彝族自治县',
                        children: [],
                    },
                    {
                        value: 2593,
                        label: '景谷傣族彝族自治县',
                        children: [],
                    },
                    {
                        value: 2594,
                        label: '镇沅彝族哈尼族拉祜族自治县',
                        children: [],
                    },
                    {
                        value: 2595,
                        label: '江城哈尼族彝族自治县',
                        children: [],
                    },
                    {
                        value: 2596,
                        label: '孟连傣族拉祜族佤族自治县',
                        children: [],
                    },
                    {
                        value: 2597,
                        label: '澜沧拉祜族自治县',
                        children: [],
                    },
                    {
                        value: 2598,
                        label: '西盟佤族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 277,
                label: '临沧市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2600,
                        label: '临翔区',
                        children: [],
                    },
                    {
                        value: 2601,
                        label: '凤庆县',
                        children: [],
                    },
                    {
                        value: 2602,
                        label: '云县',
                        children: [],
                    },
                    {
                        value: 2603,
                        label: '永德县',
                        children: [],
                    },
                    {
                        value: 2604,
                        label: '镇康县',
                        children: [],
                    },
                    {
                        value: 2605,
                        label: '双江拉祜族佤族布朗族傣族自治县',
                        children: [],
                    },
                    {
                        value: 2606,
                        label: '耿马傣族佤族自治县',
                        children: [],
                    },
                    {
                        value: 2607,
                        label: '沧源佤族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 278,
                label: '楚雄彝族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2608,
                        label: '楚雄市',
                        children: [],
                    },
                    {
                        value: 2609,
                        label: '双柏县',
                        children: [],
                    },
                    {
                        value: 2610,
                        label: '牟定县',
                        children: [],
                    },
                    {
                        value: 2611,
                        label: '南华县',
                        children: [],
                    },
                    {
                        value: 2612,
                        label: '姚安县',
                        children: [],
                    },
                    {
                        value: 2613,
                        label: '大姚县',
                        children: [],
                    },
                    {
                        value: 2614,
                        label: '永仁县',
                        children: [],
                    },
                    {
                        value: 2615,
                        label: '元谋县',
                        children: [],
                    },
                    {
                        value: 2616,
                        label: '武定县',
                        children: [],
                    },
                    {
                        value: 2617,
                        label: '禄丰县',
                        children: [],
                    },
                ],
            },
            {
                value: 279,
                label: '红河哈尼族彝族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2618,
                        label: '个旧市',
                        children: [],
                    },
                    {
                        value: 2619,
                        label: '开远市',
                        children: [],
                    },
                    {
                        value: 2620,
                        label: '蒙自市',
                        children: [],
                    },
                    {
                        value: 2621,
                        label: '弥勒市',
                        children: [],
                    },
                    {
                        value: 2622,
                        label: '屏边苗族自治县',
                        children: [],
                    },
                    {
                        value: 2623,
                        label: '建水县',
                        children: [],
                    },
                    {
                        value: 2624,
                        label: '石屏县',
                        children: [],
                    },
                    {
                        value: 2625,
                        label: '泸西县',
                        children: [],
                    },
                    {
                        value: 2626,
                        label: '元阳县',
                        children: [],
                    },
                    {
                        value: 2627,
                        label: '红河县',
                        children: [],
                    },
                    {
                        value: 2628,
                        label: '金平苗族瑶族傣族自治县',
                        children: [],
                    },
                    {
                        value: 2629,
                        label: '绿春县',
                        children: [],
                    },
                    {
                        value: 2630,
                        label: '河口瑶族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 280,
                label: '文山壮族苗族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2631,
                        label: '文山市',
                        children: [],
                    },
                    {
                        value: 2632,
                        label: '砚山县',
                        children: [],
                    },
                    {
                        value: 2633,
                        label: '西畴县',
                        children: [],
                    },
                    {
                        value: 2634,
                        label: '麻栗坡县',
                        children: [],
                    },
                    {
                        value: 2635,
                        label: '马关县',
                        children: [],
                    },
                    {
                        value: 2636,
                        label: '丘北县',
                        children: [],
                    },
                    {
                        value: 2637,
                        label: '广南县',
                        children: [],
                    },
                    {
                        value: 2638,
                        label: '富宁县',
                        children: [],
                    },
                ],
            },
            {
                value: 281,
                label: '西双版纳傣族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2639,
                        label: '景洪市',
                        children: [],
                    },
                    {
                        value: 2640,
                        label: '勐海县',
                        children: [],
                    },
                    {
                        value: 2641,
                        label: '勐腊县',
                        children: [],
                    },
                ],
            },
            {
                value: 282,
                label: '大理白族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2642,
                        label: '大理市',
                        children: [],
                    },
                    {
                        value: 2643,
                        label: '漾濞彝族自治县',
                        children: [],
                    },
                    {
                        value: 2644,
                        label: '祥云县',
                        children: [],
                    },
                    {
                        value: 2645,
                        label: '宾川县',
                        children: [],
                    },
                    {
                        value: 2646,
                        label: '弥渡县',
                        children: [],
                    },
                    {
                        value: 2647,
                        label: '南涧彝族自治县',
                        children: [],
                    },
                    {
                        value: 2648,
                        label: '巍山彝族回族自治县',
                        children: [],
                    },
                    {
                        value: 2649,
                        label: '永平县',
                        children: [],
                    },
                    {
                        value: 2650,
                        label: '云龙县',
                        children: [],
                    },
                    {
                        value: 2651,
                        label: '洱源县',
                        children: [],
                    },
                    {
                        value: 2652,
                        label: '剑川县',
                        children: [],
                    },
                    {
                        value: 2653,
                        label: '鹤庆县',
                        children: [],
                    },
                ],
            },
            {
                value: 283,
                label: '德宏傣族景颇族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2654,
                        label: '瑞丽市',
                        children: [],
                    },
                    {
                        value: 2655,
                        label: '芒市',
                        children: [],
                    },
                    {
                        value: 2656,
                        label: '梁河县',
                        children: [],
                    },
                    {
                        value: 2657,
                        label: '盈江县',
                        children: [],
                    },
                    {
                        value: 2658,
                        label: '陇川县',
                        children: [],
                    },
                ],
            },
            {
                value: 284,
                label: '怒江傈僳族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2659,
                        label: '泸水市',
                        children: [],
                    },
                    {
                        value: 2660,
                        label: '福贡县',
                        children: [],
                    },
                    {
                        value: 2661,
                        label: '贡山独龙族怒族自治县',
                        children: [],
                    },
                    {
                        value: 2662,
                        label: '兰坪白族普米族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 285,
                label: '迪庆藏族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2663,
                        label: '香格里拉市',
                        children: [],
                    },
                    {
                        value: 2664,
                        label: '德钦县',
                        children: [],
                    },
                    {
                        value: 2665,
                        label: '维西傈僳族自治县',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 26,
        label: '西藏自治区',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 286,
                label: '拉萨市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2667,
                        label: '城关区',
                        children: [],
                    },
                    {
                        value: 2668,
                        label: '堆龙德庆区',
                        children: [],
                    },
                    {
                        value: 2669,
                        label: '林周县',
                        children: [],
                    },
                    {
                        value: 2670,
                        label: '当雄县',
                        children: [],
                    },
                    {
                        value: 2671,
                        label: '尼木县',
                        children: [],
                    },
                    {
                        value: 2672,
                        label: '曲水县',
                        children: [],
                    },
                    {
                        value: 2673,
                        label: '达孜县',
                        children: [],
                    },
                    {
                        value: 2674,
                        label: '墨竹工卡县',
                        children: [],
                    },
                ],
            },
            {
                value: 287,
                label: '日喀则市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2675,
                        label: '桑珠孜区',
                        children: [],
                    },
                    {
                        value: 2676,
                        label: '南木林县',
                        children: [],
                    },
                    {
                        value: 2677,
                        label: '江孜县',
                        children: [],
                    },
                    {
                        value: 2678,
                        label: '定日县',
                        children: [],
                    },
                    {
                        value: 2679,
                        label: '萨迦县',
                        children: [],
                    },
                    {
                        value: 2680,
                        label: '拉孜县',
                        children: [],
                    },
                    {
                        value: 2681,
                        label: '昂仁县',
                        children: [],
                    },
                    {
                        value: 2682,
                        label: '谢通门县',
                        children: [],
                    },
                    {
                        value: 2683,
                        label: '白朗县',
                        children: [],
                    },
                    {
                        value: 2684,
                        label: '仁布县',
                        children: [],
                    },
                    {
                        value: 2685,
                        label: '康马县',
                        children: [],
                    },
                    {
                        value: 2686,
                        label: '定结县',
                        children: [],
                    },
                    {
                        value: 2687,
                        label: '仲巴县',
                        children: [],
                    },
                    {
                        value: 2688,
                        label: '亚东县',
                        children: [],
                    },
                    {
                        value: 2689,
                        label: '吉隆县',
                        children: [],
                    },
                    {
                        value: 2690,
                        label: '聂拉木县',
                        children: [],
                    },
                    {
                        value: 2691,
                        label: '萨嘎县',
                        children: [],
                    },
                    {
                        value: 2692,
                        label: '岗巴县',
                        children: [],
                    },
                ],
            },
            {
                value: 288,
                label: '昌都市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2693,
                        label: '卡若区',
                        children: [],
                    },
                    {
                        value: 2694,
                        label: '江达县',
                        children: [],
                    },
                    {
                        value: 2695,
                        label: '贡觉县',
                        children: [],
                    },
                    {
                        value: 2696,
                        label: '类乌齐县',
                        children: [],
                    },
                    {
                        value: 2697,
                        label: '丁青县',
                        children: [],
                    },
                    {
                        value: 2698,
                        label: '察雅县',
                        children: [],
                    },
                    {
                        value: 2699,
                        label: '八宿县',
                        children: [],
                    },
                    {
                        value: 2700,
                        label: '左贡县',
                        children: [],
                    },
                    {
                        value: 2701,
                        label: '芒康县',
                        children: [],
                    },
                    {
                        value: 2702,
                        label: '洛隆县',
                        children: [],
                    },
                    {
                        value: 2703,
                        label: '边坝县',
                        children: [],
                    },
                ],
            },
            {
                value: 289,
                label: '林芝市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2704,
                        label: '巴宜区',
                        children: [],
                    },
                    {
                        value: 2705,
                        label: '工布江达县',
                        children: [],
                    },
                    {
                        value: 2706,
                        label: '米林县',
                        children: [],
                    },
                    {
                        value: 2707,
                        label: '墨脱县',
                        children: [],
                    },
                    {
                        value: 2708,
                        label: '波密县',
                        children: [],
                    },
                    {
                        value: 2709,
                        label: '察隅县',
                        children: [],
                    },
                    {
                        value: 2710,
                        label: '朗县',
                        children: [],
                    },
                ],
            },
            {
                value: 290,
                label: '山南市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2712,
                        label: '乃东区',
                        children: [],
                    },
                    {
                        value: 2713,
                        label: '扎囊县',
                        children: [],
                    },
                    {
                        value: 2714,
                        label: '贡嘎县',
                        children: [],
                    },
                    {
                        value: 2715,
                        label: '桑日县',
                        children: [],
                    },
                    {
                        value: 2716,
                        label: '琼结县',
                        children: [],
                    },
                    {
                        value: 2717,
                        label: '曲松县',
                        children: [],
                    },
                    {
                        value: 2718,
                        label: '措美县',
                        children: [],
                    },
                    {
                        value: 2719,
                        label: '洛扎县',
                        children: [],
                    },
                    {
                        value: 2720,
                        label: '加查县',
                        children: [],
                    },
                    {
                        value: 2721,
                        label: '隆子县',
                        children: [],
                    },
                    {
                        value: 2722,
                        label: '错那县',
                        children: [],
                    },
                    {
                        value: 2723,
                        label: '浪卡子县',
                        children: [],
                    },
                ],
            },
            {
                value: 291,
                label: '那曲地区',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2724,
                        label: '那曲县',
                        children: [],
                    },
                    {
                        value: 2725,
                        label: '嘉黎县',
                        children: [],
                    },
                    {
                        value: 2726,
                        label: '比如县',
                        children: [],
                    },
                    {
                        value: 2727,
                        label: '聂荣县',
                        children: [],
                    },
                    {
                        value: 2728,
                        label: '安多县',
                        children: [],
                    },
                    {
                        value: 2729,
                        label: '申扎县',
                        children: [],
                    },
                    {
                        value: 2730,
                        label: '索县',
                        children: [],
                    },
                    {
                        value: 2731,
                        label: '班戈县',
                        children: [],
                    },
                    {
                        value: 2732,
                        label: '巴青县',
                        children: [],
                    },
                    {
                        value: 2733,
                        label: '尼玛县',
                        children: [],
                    },
                    {
                        value: 2734,
                        label: '双湖县',
                        children: [],
                    },
                ],
            },
            {
                value: 292,
                label: '阿里地区',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2735,
                        label: '普兰县',
                        children: [],
                    },
                    {
                        value: 2736,
                        label: '札达县',
                        children: [],
                    },
                    {
                        value: 2737,
                        label: '噶尔县',
                        children: [],
                    },
                    {
                        value: 2738,
                        label: '日土县',
                        children: [],
                    },
                    {
                        value: 2739,
                        label: '革吉县',
                        children: [],
                    },
                    {
                        value: 2740,
                        label: '改则县',
                        children: [],
                    },
                    {
                        value: 2741,
                        label: '措勤县',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 27,
        label: '陕西省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 293,
                label: '西安市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2743,
                        label: '新城区',
                        children: [],
                    },
                    {
                        value: 2744,
                        label: '碑林区',
                        children: [],
                    },
                    {
                        value: 2745,
                        label: '莲湖区',
                        children: [],
                    },
                    {
                        value: 2746,
                        label: '灞桥区',
                        children: [],
                    },
                    {
                        value: 2747,
                        label: '未央区',
                        children: [],
                    },
                    {
                        value: 2748,
                        label: '雁塔区',
                        children: [],
                    },
                    {
                        value: 2749,
                        label: '阎良区',
                        children: [],
                    },
                    {
                        value: 2750,
                        label: '临潼区',
                        children: [],
                    },
                    {
                        value: 2751,
                        label: '长安区',
                        children: [],
                    },
                    {
                        value: 2752,
                        label: '高陵区',
                        children: [],
                    },
                    {
                        value: 2753,
                        label: '蓝田县',
                        children: [],
                    },
                    {
                        value: 2754,
                        label: '周至县',
                        children: [],
                    },
                    {
                        value: 2755,
                        label: '户县',
                        children: [],
                    },
                ],
            },
            {
                value: 294,
                label: '铜川市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2757,
                        label: '王益区',
                        children: [],
                    },
                    {
                        value: 2758,
                        label: '印台区',
                        children: [],
                    },
                    {
                        value: 2759,
                        label: '耀州区',
                        children: [],
                    },
                    {
                        value: 2760,
                        label: '宜君县',
                        children: [],
                    },
                ],
            },
            {
                value: 295,
                label: '宝鸡市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2762,
                        label: '渭滨区',
                        children: [],
                    },
                    {
                        value: 2763,
                        label: '金台区',
                        children: [],
                    },
                    {
                        value: 2764,
                        label: '陈仓区',
                        children: [],
                    },
                    {
                        value: 2765,
                        label: '凤翔县',
                        children: [],
                    },
                    {
                        value: 2766,
                        label: '岐山县',
                        children: [],
                    },
                    {
                        value: 2767,
                        label: '扶风县',
                        children: [],
                    },
                    {
                        value: 2768,
                        label: '眉县',
                        children: [],
                    },
                    {
                        value: 2769,
                        label: '陇县',
                        children: [],
                    },
                    {
                        value: 2770,
                        label: '千阳县',
                        children: [],
                    },
                    {
                        value: 2771,
                        label: '麟游县',
                        children: [],
                    },
                    {
                        value: 2772,
                        label: '凤县',
                        children: [],
                    },
                    {
                        value: 2773,
                        label: '太白县',
                        children: [],
                    },
                ],
            },
            {
                value: 296,
                label: '咸阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2775,
                        label: '秦都区',
                        children: [],
                    },
                    {
                        value: 2776,
                        label: '杨陵区',
                        children: [],
                    },
                    {
                        value: 2777,
                        label: '渭城区',
                        children: [],
                    },
                    {
                        value: 2778,
                        label: '三原县',
                        children: [],
                    },
                    {
                        value: 2779,
                        label: '泾阳县',
                        children: [],
                    },
                    {
                        value: 2780,
                        label: '乾县',
                        children: [],
                    },
                    {
                        value: 2781,
                        label: '礼泉县',
                        children: [],
                    },
                    {
                        value: 2782,
                        label: '永寿县',
                        children: [],
                    },
                    {
                        value: 2783,
                        label: '彬县',
                        children: [],
                    },
                    {
                        value: 2784,
                        label: '长武县',
                        children: [],
                    },
                    {
                        value: 2785,
                        label: '旬邑县',
                        children: [],
                    },
                    {
                        value: 2786,
                        label: '淳化县',
                        children: [],
                    },
                    {
                        value: 2787,
                        label: '武功县',
                        children: [],
                    },
                    {
                        value: 2788,
                        label: '兴平市',
                        children: [],
                    },
                ],
            },
            {
                value: 297,
                label: '渭南市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2790,
                        label: '临渭区',
                        children: [],
                    },
                    {
                        value: 2791,
                        label: '华州区',
                        children: [],
                    },
                    {
                        value: 2792,
                        label: '潼关县',
                        children: [],
                    },
                    {
                        value: 2793,
                        label: '大荔县',
                        children: [],
                    },
                    {
                        value: 2794,
                        label: '合阳县',
                        children: [],
                    },
                    {
                        value: 2795,
                        label: '澄城县',
                        children: [],
                    },
                    {
                        value: 2796,
                        label: '蒲城县',
                        children: [],
                    },
                    {
                        value: 2797,
                        label: '白水县',
                        children: [],
                    },
                    {
                        value: 2798,
                        label: '富平县',
                        children: [],
                    },
                    {
                        value: 2799,
                        label: '韩城市',
                        children: [],
                    },
                    {
                        value: 2800,
                        label: '华阴市',
                        children: [],
                    },
                ],
            },
            {
                value: 298,
                label: '延安市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2802,
                        label: '宝塔区',
                        children: [],
                    },
                    {
                        value: 2803,
                        label: '安塞区',
                        children: [],
                    },
                    {
                        value: 2804,
                        label: '延长县',
                        children: [],
                    },
                    {
                        value: 2805,
                        label: '延川县',
                        children: [],
                    },
                    {
                        value: 2806,
                        label: '子长县',
                        children: [],
                    },
                    {
                        value: 2807,
                        label: '志丹县',
                        children: [],
                    },
                    {
                        value: 2808,
                        label: '吴起县',
                        children: [],
                    },
                    {
                        value: 2809,
                        label: '甘泉县',
                        children: [],
                    },
                    {
                        value: 2810,
                        label: '富县',
                        children: [],
                    },
                    {
                        value: 2811,
                        label: '洛川县',
                        children: [],
                    },
                    {
                        value: 2812,
                        label: '宜川县',
                        children: [],
                    },
                    {
                        value: 2813,
                        label: '黄龙县',
                        children: [],
                    },
                    {
                        value: 2814,
                        label: '黄陵县',
                        children: [],
                    },
                ],
            },
            {
                value: 299,
                label: '汉中市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2816,
                        label: '汉台区',
                        children: [],
                    },
                    {
                        value: 2817,
                        label: '南郑县',
                        children: [],
                    },
                    {
                        value: 2818,
                        label: '城固县',
                        children: [],
                    },
                    {
                        value: 2819,
                        label: '洋县',
                        children: [],
                    },
                    {
                        value: 2820,
                        label: '西乡县',
                        children: [],
                    },
                    {
                        value: 2821,
                        label: '勉县',
                        children: [],
                    },
                    {
                        value: 2822,
                        label: '宁强县',
                        children: [],
                    },
                    {
                        value: 2823,
                        label: '略阳县',
                        children: [],
                    },
                    {
                        value: 2824,
                        label: '镇巴县',
                        children: [],
                    },
                    {
                        value: 2825,
                        label: '留坝县',
                        children: [],
                    },
                    {
                        value: 2826,
                        label: '佛坪县',
                        children: [],
                    },
                ],
            },
            {
                value: 300,
                label: '榆林市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2828,
                        label: '榆阳区',
                        children: [],
                    },
                    {
                        value: 2829,
                        label: '横山区',
                        children: [],
                    },
                    {
                        value: 2830,
                        label: '神木县',
                        children: [],
                    },
                    {
                        value: 2831,
                        label: '府谷县',
                        children: [],
                    },
                    {
                        value: 2832,
                        label: '靖边县',
                        children: [],
                    },
                    {
                        value: 2833,
                        label: '定边县',
                        children: [],
                    },
                    {
                        value: 2834,
                        label: '绥德县',
                        children: [],
                    },
                    {
                        value: 2835,
                        label: '米脂县',
                        children: [],
                    },
                    {
                        value: 2836,
                        label: '佳县',
                        children: [],
                    },
                    {
                        value: 2837,
                        label: '吴堡县',
                        children: [],
                    },
                    {
                        value: 2838,
                        label: '清涧县',
                        children: [],
                    },
                    {
                        value: 2839,
                        label: '子洲县',
                        children: [],
                    },
                ],
            },
            {
                value: 301,
                label: '安康市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2841,
                        label: '汉滨区',
                        children: [],
                    },
                    {
                        value: 2842,
                        label: '汉阴县',
                        children: [],
                    },
                    {
                        value: 2843,
                        label: '石泉县',
                        children: [],
                    },
                    {
                        value: 2844,
                        label: '宁陕县',
                        children: [],
                    },
                    {
                        value: 2845,
                        label: '紫阳县',
                        children: [],
                    },
                    {
                        value: 2846,
                        label: '岚皋县',
                        children: [],
                    },
                    {
                        value: 2847,
                        label: '平利县',
                        children: [],
                    },
                    {
                        value: 2848,
                        label: '镇坪县',
                        children: [],
                    },
                    {
                        value: 2849,
                        label: '旬阳县',
                        children: [],
                    },
                    {
                        value: 2850,
                        label: '白河县',
                        children: [],
                    },
                ],
            },
            {
                value: 302,
                label: '商洛市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2852,
                        label: '商州区',
                        children: [],
                    },
                    {
                        value: 2853,
                        label: '洛南县',
                        children: [],
                    },
                    {
                        value: 2854,
                        label: '丹凤县',
                        children: [],
                    },
                    {
                        value: 2855,
                        label: '商南县',
                        children: [],
                    },
                    {
                        value: 2856,
                        label: '山阳县',
                        children: [],
                    },
                    {
                        value: 2857,
                        label: '镇安县',
                        children: [],
                    },
                    {
                        value: 2858,
                        label: '柞水县',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 28,
        label: '甘肃省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 303,
                label: '兰州市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2860,
                        label: '城关区',
                        children: [],
                    },
                    {
                        value: 2861,
                        label: '七里河区',
                        children: [],
                    },
                    {
                        value: 2862,
                        label: '西固区',
                        children: [],
                    },
                    {
                        value: 2863,
                        label: '安宁区',
                        children: [],
                    },
                    {
                        value: 2864,
                        label: '红古区',
                        children: [],
                    },
                    {
                        value: 2865,
                        label: '永登县',
                        children: [],
                    },
                    {
                        value: 2866,
                        label: '皋兰县',
                        children: [],
                    },
                    {
                        value: 2867,
                        label: '榆中县',
                        children: [],
                    },
                ],
            },
            {
                value: 304,
                label: '嘉峪关市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2868,
                        label: '市辖区',
                        children: [],
                    },
                ],
            },
            {
                value: 305,
                label: '金昌市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2870,
                        label: '金川区',
                        children: [],
                    },
                    {
                        value: 2871,
                        label: '永昌县',
                        children: [],
                    },
                ],
            },
            {
                value: 306,
                label: '白银市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2873,
                        label: '白银区',
                        children: [],
                    },
                    {
                        value: 2874,
                        label: '平川区',
                        children: [],
                    },
                    {
                        value: 2875,
                        label: '靖远县',
                        children: [],
                    },
                    {
                        value: 2876,
                        label: '会宁县',
                        children: [],
                    },
                    {
                        value: 2877,
                        label: '景泰县',
                        children: [],
                    },
                ],
            },
            {
                value: 307,
                label: '天水市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2879,
                        label: '秦州区',
                        children: [],
                    },
                    {
                        value: 2880,
                        label: '麦积区',
                        children: [],
                    },
                    {
                        value: 2881,
                        label: '清水县',
                        children: [],
                    },
                    {
                        value: 2882,
                        label: '秦安县',
                        children: [],
                    },
                    {
                        value: 2883,
                        label: '甘谷县',
                        children: [],
                    },
                    {
                        value: 2884,
                        label: '武山县',
                        children: [],
                    },
                    {
                        value: 2885,
                        label: '张家川回族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 308,
                label: '武威市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2887,
                        label: '凉州区',
                        children: [],
                    },
                    {
                        value: 2888,
                        label: '民勤县',
                        children: [],
                    },
                    {
                        value: 2889,
                        label: '古浪县',
                        children: [],
                    },
                    {
                        value: 2890,
                        label: '天祝藏族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 309,
                label: '张掖市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2892,
                        label: '甘州区',
                        children: [],
                    },
                    {
                        value: 2893,
                        label: '肃南裕固族自治县',
                        children: [],
                    },
                    {
                        value: 2894,
                        label: '民乐县',
                        children: [],
                    },
                    {
                        value: 2895,
                        label: '临泽县',
                        children: [],
                    },
                    {
                        value: 2896,
                        label: '高台县',
                        children: [],
                    },
                    {
                        value: 2897,
                        label: '山丹县',
                        children: [],
                    },
                ],
            },
            {
                value: 310,
                label: '平凉市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2899,
                        label: '崆峒区',
                        children: [],
                    },
                    {
                        value: 2900,
                        label: '泾川县',
                        children: [],
                    },
                    {
                        value: 2901,
                        label: '灵台县',
                        children: [],
                    },
                    {
                        value: 2902,
                        label: '崇信县',
                        children: [],
                    },
                    {
                        value: 2903,
                        label: '华亭县',
                        children: [],
                    },
                    {
                        value: 2904,
                        label: '庄浪县',
                        children: [],
                    },
                    {
                        value: 2905,
                        label: '静宁县',
                        children: [],
                    },
                ],
            },
            {
                value: 311,
                label: '酒泉市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2907,
                        label: '肃州区',
                        children: [],
                    },
                    {
                        value: 2908,
                        label: '金塔县',
                        children: [],
                    },
                    {
                        value: 2909,
                        label: '瓜州县',
                        children: [],
                    },
                    {
                        value: 2910,
                        label: '肃北蒙古族自治县',
                        children: [],
                    },
                    {
                        value: 2911,
                        label: '阿克塞哈萨克族自治县',
                        children: [],
                    },
                    {
                        value: 2912,
                        label: '玉门市',
                        children: [],
                    },
                    {
                        value: 2913,
                        label: '敦煌市',
                        children: [],
                    },
                ],
            },
            {
                value: 312,
                label: '庆阳市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2915,
                        label: '西峰区',
                        children: [],
                    },
                    {
                        value: 2916,
                        label: '庆城县',
                        children: [],
                    },
                    {
                        value: 2917,
                        label: '环县',
                        children: [],
                    },
                    {
                        value: 2918,
                        label: '华池县',
                        children: [],
                    },
                    {
                        value: 2919,
                        label: '合水县',
                        children: [],
                    },
                    {
                        value: 2920,
                        label: '正宁县',
                        children: [],
                    },
                    {
                        value: 2921,
                        label: '宁县',
                        children: [],
                    },
                    {
                        value: 2922,
                        label: '镇原县',
                        children: [],
                    },
                ],
            },
            {
                value: 313,
                label: '定西市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2924,
                        label: '安定区',
                        children: [],
                    },
                    {
                        value: 2925,
                        label: '通渭县',
                        children: [],
                    },
                    {
                        value: 2926,
                        label: '陇西县',
                        children: [],
                    },
                    {
                        value: 2927,
                        label: '渭源县',
                        children: [],
                    },
                    {
                        value: 2928,
                        label: '临洮县',
                        children: [],
                    },
                    {
                        value: 2929,
                        label: '漳县',
                        children: [],
                    },
                    {
                        value: 2930,
                        label: '岷县',
                        children: [],
                    },
                ],
            },
            {
                value: 314,
                label: '陇南市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2932,
                        label: '武都区',
                        children: [],
                    },
                    {
                        value: 2933,
                        label: '成县',
                        children: [],
                    },
                    {
                        value: 2934,
                        label: '文县',
                        children: [],
                    },
                    {
                        value: 2935,
                        label: '宕昌县',
                        children: [],
                    },
                    {
                        value: 2936,
                        label: '康县',
                        children: [],
                    },
                    {
                        value: 2937,
                        label: '西和县',
                        children: [],
                    },
                    {
                        value: 2938,
                        label: '礼县',
                        children: [],
                    },
                    {
                        value: 2939,
                        label: '徽县',
                        children: [],
                    },
                    {
                        value: 2940,
                        label: '两当县',
                        children: [],
                    },
                ],
            },
            {
                value: 315,
                label: '临夏回族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2941,
                        label: '临夏市',
                        children: [],
                    },
                    {
                        value: 2942,
                        label: '临夏县',
                        children: [],
                    },
                    {
                        value: 2943,
                        label: '康乐县',
                        children: [],
                    },
                    {
                        value: 2944,
                        label: '永靖县',
                        children: [],
                    },
                    {
                        value: 2945,
                        label: '广河县',
                        children: [],
                    },
                    {
                        value: 2946,
                        label: '和政县',
                        children: [],
                    },
                    {
                        value: 2947,
                        label: '东乡族自治县',
                        children: [],
                    },
                    {
                        value: 2948,
                        label: '积石山保安族东乡族撒拉族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 316,
                label: '甘南藏族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2949,
                        label: '合作市',
                        children: [],
                    },
                    {
                        value: 2950,
                        label: '临潭县',
                        children: [],
                    },
                    {
                        value: 2951,
                        label: '卓尼县',
                        children: [],
                    },
                    {
                        value: 2952,
                        label: '舟曲县',
                        children: [],
                    },
                    {
                        value: 2953,
                        label: '迭部县',
                        children: [],
                    },
                    {
                        value: 2954,
                        label: '玛曲县',
                        children: [],
                    },
                    {
                        value: 2955,
                        label: '碌曲县',
                        children: [],
                    },
                    {
                        value: 2956,
                        label: '夏河县',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 29,
        label: '青海省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 317,
                label: '西宁市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2958,
                        label: '城东区',
                        children: [],
                    },
                    {
                        value: 2959,
                        label: '城中区',
                        children: [],
                    },
                    {
                        value: 2960,
                        label: '城西区',
                        children: [],
                    },
                    {
                        value: 2961,
                        label: '城北区',
                        children: [],
                    },
                    {
                        value: 2962,
                        label: '大通回族土族自治县',
                        children: [],
                    },
                    {
                        value: 2963,
                        label: '湟中县',
                        children: [],
                    },
                    {
                        value: 2964,
                        label: '湟源县',
                        children: [],
                    },
                ],
            },
            {
                value: 318,
                label: '海东市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2965,
                        label: '乐都区',
                        children: [],
                    },
                    {
                        value: 2966,
                        label: '平安区',
                        children: [],
                    },
                    {
                        value: 2967,
                        label: '民和回族土族自治县',
                        children: [],
                    },
                    {
                        value: 2968,
                        label: '互助土族自治县',
                        children: [],
                    },
                    {
                        value: 2969,
                        label: '化隆回族自治县',
                        children: [],
                    },
                    {
                        value: 2970,
                        label: '循化撒拉族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 319,
                label: '海北藏族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2971,
                        label: '门源回族自治县',
                        children: [],
                    },
                    {
                        value: 2972,
                        label: '祁连县',
                        children: [],
                    },
                    {
                        value: 2973,
                        label: '海晏县',
                        children: [],
                    },
                    {
                        value: 2974,
                        label: '刚察县',
                        children: [],
                    },
                ],
            },
            {
                value: 320,
                label: '黄南藏族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2975,
                        label: '同仁县',
                        children: [],
                    },
                    {
                        value: 2976,
                        label: '尖扎县',
                        children: [],
                    },
                    {
                        value: 2977,
                        label: '泽库县',
                        children: [],
                    },
                    {
                        value: 2978,
                        label: '河南蒙古族自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 321,
                label: '海南藏族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2979,
                        label: '共和县',
                        children: [],
                    },
                    {
                        value: 2980,
                        label: '同德县',
                        children: [],
                    },
                    {
                        value: 2981,
                        label: '贵德县',
                        children: [],
                    },
                    {
                        value: 2982,
                        label: '兴海县',
                        children: [],
                    },
                    {
                        value: 2983,
                        label: '贵南县',
                        children: [],
                    },
                ],
            },
            {
                value: 322,
                label: '果洛藏族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2984,
                        label: '玛沁县',
                        children: [],
                    },
                    {
                        value: 2985,
                        label: '班玛县',
                        children: [],
                    },
                    {
                        value: 2986,
                        label: '甘德县',
                        children: [],
                    },
                    {
                        value: 2987,
                        label: '达日县',
                        children: [],
                    },
                    {
                        value: 2988,
                        label: '久治县',
                        children: [],
                    },
                    {
                        value: 2989,
                        label: '玛多县',
                        children: [],
                    },
                ],
            },
            {
                value: 323,
                label: '玉树藏族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2990,
                        label: '玉树市',
                        children: [],
                    },
                    {
                        value: 2991,
                        label: '杂多县',
                        children: [],
                    },
                    {
                        value: 2992,
                        label: '称多县',
                        children: [],
                    },
                    {
                        value: 2993,
                        label: '治多县',
                        children: [],
                    },
                    {
                        value: 2994,
                        label: '囊谦县',
                        children: [],
                    },
                    {
                        value: 2995,
                        label: '曲麻莱县',
                        children: [],
                    },
                ],
            },
            {
                value: 324,
                label: '海西蒙古族藏族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 2996,
                        label: '格尔木市',
                        children: [],
                    },
                    {
                        value: 2997,
                        label: '德令哈市',
                        children: [],
                    },
                    {
                        value: 2998,
                        label: '乌兰县',
                        children: [],
                    },
                    {
                        value: 2999,
                        label: '都兰县',
                        children: [],
                    },
                    {
                        value: 3000,
                        label: '天峻县',
                        children: [],
                    },
                    {
                        value: 3134,
                        label: '茫崖市',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 30,
        label: '宁夏回族自治区',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 325,
                label: '银川市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3002,
                        label: '兴庆区',
                        children: [],
                    },
                    {
                        value: 3003,
                        label: '西夏区',
                        children: [],
                    },
                    {
                        value: 3004,
                        label: '金凤区',
                        children: [],
                    },
                    {
                        value: 3005,
                        label: '永宁县',
                        children: [],
                    },
                    {
                        value: 3006,
                        label: '贺兰县',
                        children: [],
                    },
                    {
                        value: 3007,
                        label: '灵武市',
                        children: [],
                    },
                ],
            },
            {
                value: 326,
                label: '石嘴山市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3009,
                        label: '大武口区',
                        children: [],
                    },
                    {
                        value: 3010,
                        label: '惠农区',
                        children: [],
                    },
                    {
                        value: 3011,
                        label: '平罗县',
                        children: [],
                    },
                ],
            },
            {
                value: 327,
                label: '吴忠市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3013,
                        label: '利通区',
                        children: [],
                    },
                    {
                        value: 3014,
                        label: '红寺堡区',
                        children: [],
                    },
                    {
                        value: 3015,
                        label: '盐池县',
                        children: [],
                    },
                    {
                        value: 3016,
                        label: '同心县',
                        children: [],
                    },
                    {
                        value: 3017,
                        label: '青铜峡市',
                        children: [],
                    },
                ],
            },
            {
                value: 328,
                label: '固原市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3019,
                        label: '原州区',
                        children: [],
                    },
                    {
                        value: 3020,
                        label: '西吉县',
                        children: [],
                    },
                    {
                        value: 3021,
                        label: '隆德县',
                        children: [],
                    },
                    {
                        value: 3022,
                        label: '泾源县',
                        children: [],
                    },
                    {
                        value: 3023,
                        label: '彭阳县',
                        children: [],
                    },
                ],
            },
            {
                value: 329,
                label: '中卫市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3025,
                        label: '沙坡头区',
                        children: [],
                    },
                    {
                        value: 3026,
                        label: '中宁县',
                        children: [],
                    },
                    {
                        value: 3027,
                        label: '海原县',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 31,
        label: '新疆维吾尔自治区',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 330,
                label: '乌鲁木齐市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3029,
                        label: '天山区',
                        children: [],
                    },
                    {
                        value: 3030,
                        label: '沙依巴克区',
                        children: [],
                    },
                    {
                        value: 3031,
                        label: '新市区',
                        children: [],
                    },
                    {
                        value: 3032,
                        label: '水磨沟区',
                        children: [],
                    },
                    {
                        value: 3033,
                        label: '头屯河区',
                        children: [],
                    },
                    {
                        value: 3034,
                        label: '达坂城区',
                        children: [],
                    },
                    {
                        value: 3035,
                        label: '米东区',
                        children: [],
                    },
                    {
                        value: 3036,
                        label: '乌鲁木齐县',
                        children: [],
                    },
                ],
            },
            {
                value: 331,
                label: '克拉玛依市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3038,
                        label: '独山子区',
                        children: [],
                    },
                    {
                        value: 3039,
                        label: '克拉玛依区',
                        children: [],
                    },
                    {
                        value: 3040,
                        label: '白碱滩区',
                        children: [],
                    },
                    {
                        value: 3041,
                        label: '乌尔禾区',
                        children: [],
                    },
                ],
            },
            {
                value: 332,
                label: '吐鲁番市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3042,
                        label: '高昌区',
                        children: [],
                    },
                    {
                        value: 3043,
                        label: '鄯善县',
                        children: [],
                    },
                    {
                        value: 3044,
                        label: '托克逊县',
                        children: [],
                    },
                ],
            },
            {
                value: 333,
                label: '哈密市',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3045,
                        label: '伊州区',
                        children: [],
                    },
                    {
                        value: 3046,
                        label: '巴里坤哈萨克自治县',
                        children: [],
                    },
                    {
                        value: 3047,
                        label: '伊吾县',
                        children: [],
                    },
                ],
            },
            {
                value: 334,
                label: '昌吉回族自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3048,
                        label: '昌吉市',
                        children: [],
                    },
                    {
                        value: 3049,
                        label: '阜康市',
                        children: [],
                    },
                    {
                        value: 3050,
                        label: '呼图壁县',
                        children: [],
                    },
                    {
                        value: 3051,
                        label: '玛纳斯县',
                        children: [],
                    },
                    {
                        value: 3052,
                        label: '奇台县',
                        children: [],
                    },
                    {
                        value: 3053,
                        label: '吉木萨尔县',
                        children: [],
                    },
                    {
                        value: 3054,
                        label: '木垒哈萨克自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 335,
                label: '博尔塔拉蒙古自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3055,
                        label: '博乐市',
                        children: [],
                    },
                    {
                        value: 3056,
                        label: '阿拉山口市',
                        children: [],
                    },
                    {
                        value: 3057,
                        label: '精河县',
                        children: [],
                    },
                    {
                        value: 3058,
                        label: '温泉县',
                        children: [],
                    },
                ],
            },
            {
                value: 336,
                label: '巴音郭楞蒙古自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3059,
                        label: '库尔勒市',
                        children: [],
                    },
                    {
                        value: 3060,
                        label: '轮台县',
                        children: [],
                    },
                    {
                        value: 3061,
                        label: '尉犁县',
                        children: [],
                    },
                    {
                        value: 3062,
                        label: '若羌县',
                        children: [],
                    },
                    {
                        value: 3063,
                        label: '且末县',
                        children: [],
                    },
                    {
                        value: 3064,
                        label: '焉耆回族自治县',
                        children: [],
                    },
                    {
                        value: 3065,
                        label: '和静县',
                        children: [],
                    },
                    {
                        value: 3066,
                        label: '和硕县',
                        children: [],
                    },
                    {
                        value: 3067,
                        label: '博湖县',
                        children: [],
                    },
                ],
            },
            {
                value: 337,
                label: '阿克苏地区',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3068,
                        label: '阿克苏市',
                        children: [],
                    },
                    {
                        value: 3069,
                        label: '温宿县',
                        children: [],
                    },
                    {
                        value: 3070,
                        label: '库车县',
                        children: [],
                    },
                    {
                        value: 3071,
                        label: '沙雅县',
                        children: [],
                    },
                    {
                        value: 3072,
                        label: '新和县',
                        children: [],
                    },
                    {
                        value: 3073,
                        label: '拜城县',
                        children: [],
                    },
                    {
                        value: 3074,
                        label: '乌什县',
                        children: [],
                    },
                    {
                        value: 3075,
                        label: '阿瓦提县',
                        children: [],
                    },
                    {
                        value: 3076,
                        label: '柯坪县',
                        children: [],
                    },
                ],
            },
            {
                value: 338,
                label: '克孜勒苏柯尔克孜自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3077,
                        label: '阿图什市',
                        children: [],
                    },
                    {
                        value: 3078,
                        label: '阿克陶县',
                        children: [],
                    },
                    {
                        value: 3079,
                        label: '阿合奇县',
                        children: [],
                    },
                    {
                        value: 3080,
                        label: '乌恰县',
                        children: [],
                    },
                ],
            },
            {
                value: 339,
                label: '喀什地区',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3081,
                        label: '喀什市',
                        children: [],
                    },
                    {
                        value: 3082,
                        label: '疏附县',
                        children: [],
                    },
                    {
                        value: 3083,
                        label: '疏勒县',
                        children: [],
                    },
                    {
                        value: 3084,
                        label: '英吉沙县',
                        children: [],
                    },
                    {
                        value: 3085,
                        label: '泽普县',
                        children: [],
                    },
                    {
                        value: 3086,
                        label: '莎车县',
                        children: [],
                    },
                    {
                        value: 3087,
                        label: '叶城县',
                        children: [],
                    },
                    {
                        value: 3088,
                        label: '麦盖提县',
                        children: [],
                    },
                    {
                        value: 3089,
                        label: '岳普湖县',
                        children: [],
                    },
                    {
                        value: 3090,
                        label: '伽师县',
                        children: [],
                    },
                    {
                        value: 3091,
                        label: '巴楚县',
                        children: [],
                    },
                    {
                        value: 3092,
                        label: '塔什库尔干塔吉克自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 340,
                label: '和田地区',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3093,
                        label: '和田市',
                        children: [],
                    },
                    {
                        value: 3094,
                        label: '和田县',
                        children: [],
                    },
                    {
                        value: 3095,
                        label: '墨玉县',
                        children: [],
                    },
                    {
                        value: 3096,
                        label: '皮山县',
                        children: [],
                    },
                    {
                        value: 3097,
                        label: '洛浦县',
                        children: [],
                    },
                    {
                        value: 3098,
                        label: '策勒县',
                        children: [],
                    },
                    {
                        value: 3099,
                        label: '于田县',
                        children: [],
                    },
                    {
                        value: 3100,
                        label: '民丰县',
                        children: [],
                    },
                ],
            },
            {
                value: 341,
                label: '伊犁哈萨克自治州',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3101,
                        label: '伊宁市',
                        children: [],
                    },
                    {
                        value: 3102,
                        label: '奎屯市',
                        children: [],
                    },
                    {
                        value: 3103,
                        label: '霍尔果斯市',
                        children: [],
                    },
                    {
                        value: 3104,
                        label: '伊宁县',
                        children: [],
                    },
                    {
                        value: 3105,
                        label: '察布查尔锡伯自治县',
                        children: [],
                    },
                    {
                        value: 3106,
                        label: '霍城县',
                        children: [],
                    },
                    {
                        value: 3107,
                        label: '巩留县',
                        children: [],
                    },
                    {
                        value: 3108,
                        label: '新源县',
                        children: [],
                    },
                    {
                        value: 3109,
                        label: '昭苏县',
                        children: [],
                    },
                    {
                        value: 3110,
                        label: '特克斯县',
                        children: [],
                    },
                    {
                        value: 3111,
                        label: '尼勒克县',
                        children: [],
                    },
                ],
            },
            {
                value: 342,
                label: '塔城地区',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3112,
                        label: '塔城市',
                        children: [],
                    },
                    {
                        value: 3113,
                        label: '乌苏市',
                        children: [],
                    },
                    {
                        value: 3114,
                        label: '额敏县',
                        children: [],
                    },
                    {
                        value: 3115,
                        label: '沙湾县',
                        children: [],
                    },
                    {
                        value: 3116,
                        label: '托里县',
                        children: [],
                    },
                    {
                        value: 3117,
                        label: '裕民县',
                        children: [],
                    },
                    {
                        value: 3118,
                        label: '和布克赛尔蒙古自治县',
                        children: [],
                    },
                ],
            },
            {
                value: 343,
                label: '阿勒泰地区',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3119,
                        label: '阿勒泰市',
                        children: [],
                    },
                    {
                        value: 3120,
                        label: '布尔津县',
                        children: [],
                    },
                    {
                        value: 3121,
                        label: '富蕴县',
                        children: [],
                    },
                    {
                        value: 3122,
                        label: '福海县',
                        children: [],
                    },
                    {
                        value: 3123,
                        label: '哈巴河县',
                        children: [],
                    },
                    {
                        value: 3124,
                        label: '青河县',
                        children: [],
                    },
                    {
                        value: 3125,
                        label: '吉木乃县',
                        children: [],
                    },
                ],
            },
            {
                value: 344,
                label: '自治区直辖县级行政单位',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3126,
                        label: '石河子市',
                        children: [],
                    },
                    {
                        value: 3127,
                        label: '阿拉尔市',
                        children: [],
                    },
                    {
                        value: 3128,
                        label: '图木舒克市',
                        children: [],
                    },
                    {
                        value: 3129,
                        label: '五家渠市',
                        children: [],
                    },
                    {
                        value: 3130,
                        label: '铁门关市',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 32,
        label: '台湾省',
        children: [
            {
                value: -1,
                label: '全省',
                children: [],
            },
            {
                value: 345,
                label: '台湾',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3131,
                        label: '台湾',
                        children: [],
                    },
                ],
            },
            {
                value: 350,
                label: '钓鱼岛',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3173,
                        label: '钓鱼台',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 33,
        label: '香港特别行政区',
        children: [
            {
                value: 346,
                label: '香港',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3132,
                        label: '香港',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        value: 34,
        label: '澳门特别行政区',
        children: [
            {
                value: 347,
                label: '澳门',
                children: [
                    {
                        value: -1,
                        label: '全市',
                        children: [],
                    },
                    {
                        value: 3133,
                        label: '澳门',
                        children: [],
                    },
                ],
            },
        ],
    },
]
