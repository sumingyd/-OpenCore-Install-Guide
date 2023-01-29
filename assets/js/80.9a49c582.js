(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{601:function(t,r,_){"use strict";_.r(r);var v=_(10),o=Object(v.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"opencore入门"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#opencore入门"}},[t._v("#")]),t._v(" OpenCore入门")]),t._v(" "),r("p",[t._v("在我们可以一头扎进制作一个基于OpenCore的系统之前，我们需要确认一些事。")]),t._v(" "),r("h2",{attrs:{id:"前提条件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),r("ol",[r("li",[r("span",{staticStyle:{color:"red"}},[r("em",[r("strong",[t._v("[关键]")])])]),t._v(" 时间和耐心。\n"),r("ul",[r("li",[t._v("如果你有需要限期结束的重要的工作，请不要开始黑苹果，黑苹果不是你的首要工作。。")])])]),t._v(" "),r("li",[r("span",{staticStyle:{color:"red"}},[r("em",[r("strong",[t._v("[关键]")])])]),t._v(" "),r("strong",[t._v("了解你的硬件")]),t._v(" "),r("ul",[r("li",[t._v("你的CPU型号和代数")]),t._v(" "),r("li",[t._v("你的GPU")]),t._v(" "),r("li",[t._v("你的存储设备（硬盘/固态硬盘、NVME/AHCI/RAID/IDE配置，PS：这里是指的南桥上的硬盘的工作模式）")]),t._v(" "),r("li",[t._v("你的笔记本/台式机的OEM型号(如果来自OEM)")]),t._v(" "),r("li",[t._v("你的 "),r("strong",[t._v("有线网卡芯片组")])]),t._v(" "),r("li",[t._v("你的无线/蓝牙芯片组")])])]),t._v(" "),r("li",[r("span",{staticStyle:{color:"red"}},[r("em",[r("strong",[t._v("[关键]")])])]),t._v(" "),r("strong",[t._v("命令行的基本知识以及如何使用终端/命令提示符")]),t._v(" "),r("ul",[r("li",[t._v("这不仅仅是[关键]，也是整个指南的基础。如果你不知道如何' cd '到一个目录或删除一个文件，我们无法给予你任何帮助。")])])]),t._v(" "),r("li",[r("span",{staticStyle:{color:"red"}},[r("em",[r("strong",[t._v("[关键]")])])]),t._v(" 在_"),r("strong",[t._v("兼容性")]),t._v("部分中可以看到一台兼容的机器。\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/macos-limits.html"}},[t._v("硬件限制页面")])],1)])]),t._v(" "),r("li",[r("span",{staticStyle:{color:"red"}},[r("em",[r("strong",[t._v("[关键]")])])]),t._v(" 最低要求:\n"),r("ul",[r("li",[t._v("16GB的U盘，如果你打算使用macOS制作引导优盘")]),t._v(" "),r("li",[t._v("4GB的U盘，如果你打算使用windows或linux来制作引导优盘")])])]),t._v(" "),r("li",[r("span",{staticStyle:{color:"red"}},[r("em",[r("strong",[t._v("[关键]")])])]),t._v(" "),r("strong",[t._v("有线网络连接")]),t._v(" (没有WiFi发射器，USB的有线网卡是否能工作取决于macOS的支持) ，并且你必须知道你的网卡的型号。\n"),r("ul",[r("li",[t._v("你必须有物理网卡端口或者兼容macOS的有线网卡/无线网卡。如果你有 "),r("a",{attrs:{href:"https://dortania.github.io/Wireless-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("兼容的无线网卡"),r("OutboundLink")],1),t._v(", 你也可以使用它。\n"),r("ul",[r("li",[t._v("请注意，macOS不支持大多数无线网卡")])])]),t._v(" "),r("li",[t._v("对于不能使用网络但有Android手机的人来说，你可以将你的Android手机连接到WiFi，然后使用 "),r("a",{attrs:{href:"https://joshuawise.com/horndis#available_versions",target:"_blank",rel:"noopener noreferrer"}},[t._v("HoRNDIS"),r("OutboundLink")],1),t._v("功能共享它。")])])]),t._v(" "),r("li",[r("span",{staticStyle:{color:"red"}},[r("em",[r("strong",[t._v("[关键]")])])]),t._v(" "),r("strong",[t._v("正确的操作系统安装方式:")]),t._v(" "),r("ul",[r("li",[t._v("是:\n"),r("ul",[r("li",[t._v("macOS(较新的版本会更好)")]),t._v(" "),r("li",[t._v("Windows (Windows 10、1703或更新版本)")]),t._v(" "),r("li",[t._v("Linux(纯净且功能正常，使用Python 2.7或更高版本)")])])]),t._v(" "),r("li",[t._v("对于Windows或Linux用户，你正在使用的驱动器上应至少有"),r("strong",[t._v("15GB")]),t._v("的可用空间。在Windows上，你的系统盘(C:)必须至少有"),r("strong",[t._v("15GB")]),t._v("的可用空间。")]),t._v(" "),r("li",[t._v("对于macOS用户来说，系统驱动器上至少有"),r("strong",[t._v("30GB")]),t._v("的可用空间。")]),t._v(" "),r("li",[t._v("本指南手册中使用的大多数工具还需要 "),r("a",{attrs:{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装Python"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[r("span",{staticStyle:{color:"red"}},[r("em",[r("strong",[t._v("[关键]")])])]),t._v(" "),r("strong",[t._v("安装了最新版本的BIOS")]),t._v(" "),r("ul",[r("li",[t._v("在大多数情况下，更新你的BIOS将为macOS提供最好的支持")]),t._v(" "),r("li",[t._v("MSI 500系列AMD主板是个例外，更多信息请访问 "),r("RouterLink",{attrs:{to:"/macos-limits.html#motherboard-support"}},[t._v("主板支持")]),t._v("。")],1)])])])])}),[],!1,null,null,null);r.default=o.exports}}]);