(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{582:function(t,e,a){"use strict";a.r(e);var o=a(10),r=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"macos-12-monterey"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos-12-monterey"}},[t._v("#")]),t._v(" macOS 12: Monterey")]),t._v(" "),e("p",[e("strong",[t._v("Reminder that Dortania and any tools mentioned in this guide are neither responsible for any corruption, data loss, or other ill effects that may arise from this guide, including ones caused by typos. You, the end user, must understand this is beta software on unsupported machines so do not pester developers for fixes. Dortania will not be accepting issues regarding this mini-guide except for typos and/or errors.")]),t._v(" "),e("strong",[t._v("This guide expects you to have a basic understanding of hackintoshing. If you are not familiar with it, we highly recommend you to wait until there is an easier and more straight-forward solution available.")])]),t._v(" "),e("h2",{attrs:{id:"table-of-contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#table-of-contents"}},[t._v("Table of Contents")])]),e("li",[e("a",{attrs:{href:"#prerequisites"}},[t._v("Prerequisites")]),e("ul",[e("li",[e("a",{attrs:{href:"#supported-smbios"}},[t._v("Supported SMBIOS")])]),e("li",[e("a",{attrs:{href:"#supported-hardware"}},[t._v("Supported hardware")])]),e("li",[e("a",{attrs:{href:"#amd-patches"}},[t._v("AMD Patches")])]),e("li",[e("a",{attrs:{href:"#bluetooth"}},[t._v("Bluetooth")])]),e("li",[e("a",{attrs:{href:"#ethernet"}},[t._v("Ethernet")])]),e("li",[e("a",{attrs:{href:"#ota-updates"}},[t._v("OTA Updates")])]),e("li",[e("a",{attrs:{href:"#troubleshooting"}},[t._v("Troubleshooting")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("h3",{attrs:{id:"supported-smbios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-smbios"}},[t._v("#")]),t._v(" Supported SMBIOS")]),t._v(" "),e("p",[t._v("SMBIOS dropped in Monterey:")]),t._v(" "),e("ul",[e("li",[t._v("iMac15,x and older")]),t._v(" "),e("li",[t._v("Macmini6,x and older")]),t._v(" "),e("li",[t._v("MacBook8,1 and older")]),t._v(" "),e("li",[t._v("MacBookAir6,x and older")]),t._v(" "),e("li",[t._v("MacBookPro11,3 and older\n"),e("ul",[e("li",[t._v("MacBookPro11,4 and 11,5 are still supported")])])])]),t._v(" "),e("p",[t._v("If your SMBIOS was supported in Big Sur and is not included above, you're good to go!")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Supported SMBIOS")]),t._v(" "),e("ul",[e("li",[t._v("iMac16,1 and newer")]),t._v(" "),e("li",[t._v("MacPro6,1 and newer")]),t._v(" "),e("li",[t._v("iMacPro1,1 and newer")]),t._v(" "),e("li",[t._v("Macmini7,1 and newer")]),t._v(" "),e("li",[t._v("MacBook9,1 and newer")]),t._v(" "),e("li",[t._v("MacBookAir7,1 and newer")]),t._v(" "),e("li",[t._v("MacBookPro11,4 and newer")])]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/extras/smbios-support.html"}},[t._v("Click here")]),t._v(" for a full list of supported SMBIOS.")],1)]),t._v(" "),e("p",[t._v("For those on Haswell or Ivy Bridge, here are some simple conversions:")]),t._v(" "),e("ul",[e("li",[t._v("Ivy Bridge desktops with dGPU should use MacPro6,1")]),t._v(" "),e("li",[t._v("Haswell desktops with dGPU should use iMac17,1")]),t._v(" "),e("li",[t._v("Haswell desktops with only an iGPU should use iMac16,2")]),t._v(" "),e("li",[t._v("Haswell laptops should use MacBookPro11,4 or MacBookPro11,5")])]),t._v(" "),e("h3",{attrs:{id:"supported-hardware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware"}},[t._v("#")]),t._v(" Supported hardware")]),t._v(" "),e("p",[t._v("Dropped GPU Hardware:")]),t._v(" "),e("ul",[e("li",[t._v("Ivy Bridge (HD 4000 and HD 2500)")]),t._v(" "),e("li",[t._v("NVIDIA Kepler (GTX 6xx/7xx Cards)")]),t._v(" "),e("li",[t._v("You can use "),e("a",{attrs:{href:"https://github.com/dortania/OpenCore-Legacy-Patcher/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenCore-Legacy-Patcher"),e("OutboundLink")],1),t._v(" to add back support\n"),e("ul",[e("li",[t._v("No support is provided for Hackintoshes using OCLP!")]),t._v(" "),e("li",[t._v("You will lose access to non-full updates (Small 1-3GB updates)")]),t._v(" "),e("li",[t._v("Requires SIP, Apple Secure Boot, and AMFI disabled.")])])])]),t._v(" "),e("p",[t._v("Haswell iGPUs are still supported in Monterey")]),t._v(" "),e("ul",[e("li",[t._v("Macmini7,1 uses these drivers")])]),t._v(" "),e("h3",{attrs:{id:"amd-patches"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amd-patches"}},[t._v("#")]),t._v(" AMD Patches")]),t._v(" "),e("p",[t._v("For those on AMD CPUs, make sure to update your "),e("a",{attrs:{href:"https://github.com/AMD-OSX/AMD_Vanilla",target:"_blank",rel:"noopener noreferrer"}},[t._v("kernel patches"),e("OutboundLink")],1),t._v(" for Monterey.\nDon't forget to update your patches as well with the core count of your CPU.\nThe patches which need to be edited are all named "),e("code",[t._v("algrey - Force cpuid_cores_per_package")]),t._v(", and you only need to change the "),e("code",[t._v("Replace")]),t._v(" value. You should change:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("B8000000 0000")]),t._v(" => "),e("code",[t._v("B8 <core count> 0000 0000")])]),t._v(" "),e("li",[e("code",[t._v("BA000000 0000")]),t._v(" => "),e("code",[t._v("BA <core count> 0000 0000")])]),t._v(" "),e("li",[e("code",[t._v("BA000000 0090")]),t._v(" => "),e("code",[t._v("BA <core count> 0000 0090")])])]),t._v(" "),e("p",[t._v("Where "),e("code",[t._v("<core count>")]),t._v(" is replaced with the physical core count of your CPU in hexadecimal. For example, an 8-Core 5800X would have the new Replace value be:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("B8 08 0000 0000")])]),t._v(" "),e("li",[e("code",[t._v("BA 08 0000 0000")])]),t._v(" "),e("li",[e("code",[t._v("BA 08 0000 0090")])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Core Count => Hexadecimal Table")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Core Count")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Hexadecimal")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("4 Core")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("04")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("6 Core")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("06")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("8 Core")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("08")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("12 Core")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("0C")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("16 Core")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("10")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("24 Core")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("18")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("32 Core")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("20")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("64 Core")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("40")])])])])])]),t._v(" "),e("h3",{attrs:{id:"bluetooth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bluetooth"}},[t._v("#")]),t._v(" Bluetooth")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Note that all cards have not been fixed yet, and that bluetooth support is being worked on still.")]),t._v(" "),e("p",[t._v("Do not be surprised if your card does not work, and please be patient!")])]),t._v(" "),e("p",[t._v("With Monterey, Apple has completely rewritten the bluetooth stack. As of writing, many bluetooth devices do not work (legacy Broadcom and Intel). With the rewrite, injector kexts break bluetooth support in Monterey, though firmware uploader kexts are still needed. Make sure that you:")]),t._v(" "),e("ul",[e("li",[t._v("Disable injector kexts\n"),e("ul",[e("li",[t._v("IntelBluetoothInjector.kext for Intel cards")]),t._v(" "),e("li",[t._v("BrcmBluetoothInjector.kext for Broadcom cards")]),t._v(" "),e("li",[t._v("If you still boot Big Sur or older, you can instead set the "),e("code",[t._v("MaxKernel")]),t._v(" field to "),e("code",[t._v("20.99.9")]),t._v(" for your injector kext in your config.plist.")])])]),t._v(" "),e("li",[t._v("Keep Firmware uploader kexts\n"),e("ul",[e("li",[t._v("IntelBluetoothFirmware.kext for Intel")]),t._v(" "),e("li",[t._v("BrcmPatchRAM2/3.kext + BrcmFirmwareData.kext for Broadcom")])])]),t._v(" "),e("li",[t._v("Add "),e("a",{attrs:{href:"https://github.com/acidanthera/BrcmPatchRAM/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("BlueToolFixup"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("Needed for all non-native Bluetooth devices (Including Intel)")]),t._v(" "),e("li",[t._v("If you still boot Big Sur or older, you can set the "),e("code",[t._v("MinKernel")]),t._v(" field to "),e("code",[t._v("21.00.0")]),t._v(" to prevent BlueToolFixup loading on older OSes.")])])])]),t._v(" "),e("p",[t._v("See the below issues for more details:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/acidanthera/BrcmPatchRAM/pull/12",target:"_blank",rel:"noopener noreferrer"}},[t._v("BlueToolFixup PR"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/acidanthera/bugtracker/issues/1821",target:"_blank",rel:"noopener noreferrer"}},[t._v("Monterey Beta 5+ issues"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"ethernet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ethernet"}},[t._v("#")]),t._v(" Ethernet")]),t._v(" "),e("p",[t._v("Intel I211 chipset (typical for some AMD boards i.e. B450) no longer works with SmallTreeIntel82576 kext (network remains in "),e("code",[t._v("Cable Unplugged")]),t._v(" status).")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/donatengit/AppleIGB/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("AppleIGB"),e("OutboundLink")],1),t._v(" confirmed working on I211 @ B450, but NICs on other boards might experience issues (please "),e("a",{attrs:{href:"https://github.com/donatengit/AppleIGB/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("report"),e("OutboundLink")],1),t._v(" if any)")]),t._v(" "),e("p",[t._v("See the below issues for more details:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/khronokernel/SmallTree-I211-AT-patch/issues/3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kext no longer working with MacOS 12.0"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("The boot-arg for enabling Intel I225-V ethernet controller has changed since macOS Monterey 12.3. Use "),e("code",[t._v("e1000=0")]),t._v(" instead of "),e("code",[t._v("dk.e1000=0")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"ota-updates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ota-updates"}},[t._v("#")]),t._v(" OTA Updates")]),t._v(" "),e("p",[t._v("Starting with Monterey, updates are not delivered to T2 Macs which don't have Secure Boot enabled, and updates do not install properly if your SecureBootModel does not match your machine (ie. non-T2 SMBIOS using j137 or iMacPro1,1 using j160). Hackintoshes which use a T2 SMBIOS "),e("strong",[t._v("MUST")]),t._v(" have OpenCore 0.7.4+ with SecureBootModel set to "),e("code",[t._v("Default")]),t._v(". If your SMBIOS does not have a T2 chip, then either "),e("code",[t._v("Default")]),t._v(" or "),e("code",[t._v("Disabled")]),t._v(" is ok. More information is available on the "),e("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/security/applesecureboot.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apple Secure Boot page"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("T2 SMBIOS List")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("SMBIOS")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Minimum macOS Version")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("iMacPro1,1 (December 2017)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.13.2 (17C2111)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro15,1 (July 2018)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.13.6 (17G2112)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro15,2 (July 2018)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.13.6 (17G2112)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Macmini8,1 (October 2018)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.14 (18A2063)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookAir8,1 (October 2018)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.14.1 (18B2084)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro15,3 (May 2019)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.14.5 (18F132)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro15,4 (July 2019)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.14.5 (18F2058)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookAir8,2 (July 2019)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.14.5 (18F2058)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro16,1 (November 2019)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.1 (19B2093)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacPro7,1 (December 2019)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.1 (19B88)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookAir9,1 (March 2020)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.3 (19D2064)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro16,2 (May 2020)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.4 (19E2269)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro16,3 (May 2020)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.4 (19E2265)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro16,4 (June 2020)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.5 (19F96)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("iMac20,1 (August 2020)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.6 (19G2005)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("iMac20,2 (August 2020)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.6 (19G2005)")])])])])]),t._v(" "),e("p",[t._v("Note: You do not need the "),e("code",[t._v("-revsbvmm")]),t._v(" boot argument from RestrictEvents. Use OpenCore 0.7.4 or later.")]),t._v(" "),e("h3",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),e("h4",{attrs:{id:"no-updates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#no-updates"}},[t._v("#")]),t._v(" No Updates")]),t._v(" "),e("p",[t._v("Make sure that SIP is enabled. Two bits in SIP specifically cause issues:")]),t._v(" "),e("ul",[e("li",[t._v("CSR_ALLOW_APPLE_INTERNAL (Bit 4 = 0x10)\n"),e("ul",[e("li",[t._v("Prevents updates appearing at all")])])]),t._v(" "),e("li",[t._v("CSR_ALLOW_UNAUTHENTICATED_ROOT (Bit 11 = 0x800)\n"),e("ul",[e("li",[t._v("Prevents incremental OTA updates")])])])]),t._v(" "),e("p",[t._v("If you want to still have SIP disabled, use either:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("csrutil disable --no-internal")]),t._v(" in Recovery")]),t._v(" "),e("li",[t._v("A SIP value which does not include the two flags above")])]),t._v(" "),e("p",[t._v("To enable SIP:")]),t._v(" "),e("ul",[e("li",[t._v("Set "),e("code",[t._v("csr-active-config")]),t._v(" to "),e("code",[t._v("<00 00 00 00>")]),t._v(" in your config.plist")]),t._v(" "),e("li",[t._v("Use "),e("code",[t._v("csrutil clear")]),t._v(" in Recovery\n"),e("ul",[e("li",[t._v("Can instead add "),e("code",[t._v("csr-active-config")]),t._v(" to NVRAM->Delete or reset NVRAM")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);