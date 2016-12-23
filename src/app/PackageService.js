"use strict";
var PackageService = (function () {
    function PackageService() {
        this.softwarePackages = [
            {
                name: "Web Browsers",
                software: [
                    {
                        name: "Chrome",
                        command: "googlechrome",
                        favicon: "https://chocolatey.org/content/packageimages/GoogleChrome.55.0.2883.87.svg",
                        selected: false
                    },
                    {
                        name: "Firefox",
                        command: "firefox",
                        favicon: "https://chocolatey.org/content/packageimages/Firefox.50.1.0.png",
                        selected: false
                    },
                    {
                        name: "Opera",
                        command: "opera",
                        favicon: "https://chocolatey.org/content/packageimages/Opera.42.0.2393.94.svg",
                        selected: false
                    }
                ]
            },
            {
                name: "Imaging",
                software: [
                    {
                        name: "Paint.NET",
                        command: "paint.net",
                        favicon: "https://chocolatey.org/content/packageimages/paint.net.4.0.6.png",
                        selected: false
                    },
                    {
                        name: "GIMP",
                        command: "gimp",
                        favicon: "https://chocolatey.org/content/packageimages/gimp.2.8.18.20161026.svg",
                        selected: false
                    },
                    {
                        name: "IrfanView",
                        command: "irfanview",
                        favicon: "https://chocolatey.org/content/packageimages/IrfanView.4.42.0.20161201.png",
                        selected: false
                    },
                    {
                        name: "Inkscape",
                        command: "inkscape",
                        favicon: "https://chocolatey.org/content/packageimages/InkScape.0.91.0.20161126.svg",
                        selected: false
                    },
                    {
                        name: "Greenshot",
                        command: "greenshot",
                        favicon: "https://chocolatey.org/content/packageimages/greenshot.1.2.9.104.png",
                        selected: false
                    },
                    {
                        name: "Blender",
                        command: "blender",
                        favicon: "https://chocolatey.org/content/packageimages/blender.2.78.svg",
                        selected: false
                    }
                ]
            },
            {
                name: "Communication",
                software: [
                    {
                        name: "Pidgin",
                        command: "pidgin",
                        favicon: "https://chocolatey.org/content/packageimages/pidgin.2.11.0.1.png",
                        selected: false
                    },
                    {
                        name: "Skype",
                        command: "skype",
                        favicon: "https://chocolatey.org/content/packageimages/skype.7.29.0.102.png",
                        selected: false
                    },
                    {
                        name: "Trillian",
                        command: "trillian",
                        favicon: "https://chocolatey.org/content/packageimages/trillian.5.6.0.5.png",
                        selected: false
                    },
                    {
                        name: "Mumble",
                        command: "mumble",
                        favicon: "https://chocolatey.org/content/packageimages/mumble.1.2.18.svg",
                        selected: false
                    },
                    {
                        name: "Discord",
                        command: "discord",
                        favicon: "https://chocolatey.org/content/packageimages/discord.0.0.283.png",
                        selected: false
                    },
                    {
                        name: "Thunderbird",
                        command: "thunderbird",
                        favicon: "https://chocolatey.org/content/packageimages/thunderbird.45.5.1.png",
                        selected: false
                    }
                ]
            },
            {
                name: "Media",
                software: [
                    {
                        name: "VLC",
                        command: "vlc",
                        favicon: "https://chocolatey.org/content/packageimages/vlc.2.2.4.20161210.png",
                        selected: false
                    },
                    {
                        name: "foobar2000",
                        command: "foobar2000",
                        favicon: "https://chocolatey.org/content/packageimages/foobar2000.1.3.13.png",
                        selected: false
                    },
                    {
                        name: "Spotify",
                        command: "spotify",
                        favicon: "https://chocolatey.org/content/packageimages/spotify.1.0.33.106.png",
                        selected: false
                    },
                    {
                        name: "iTunes",
                        command: "itunes",
                        favicon: "https://chocolatey.org/content/packageimages/iTunes.12.5.2.png",
                        selected: false
                    },
                    {
                        name: "Audacity",
                        command: "audacity",
                        favicon: "https://chocolatey.org/content/packageimages/audacity.2.1.2.20161210.svg",
                        selected: false
                    },
                    {
                        name: "MPC-HC",
                        command: "mpc-hc",
                        favicon: "https://chocolatey.org/content/packageimages/mpc-hc.1.7.10.20161107.png",
                        selected: false
                    },
                    {
                        name: "K-Lite Codecs",
                        command: "k-litecodecpackfull",
                        "favicon": "https://chocolatey.org/content/packageimages/k-litecodecpackfull.12.7.0.png",
                        selected: false
                    },
                    {
                        name: "Kodi",
                        command: "kodi",
                        favicon: "https://chocolatey.org/content/packageimages/kodi.16.1.svg",
                        selected: false
                    }
                ]
            },
            {
                name: "Games",
                software: [
                    {
                        name: "Steam",
                        command: "steam",
                        favicon: "http://steampowered.com/favicon.ico",
                        selected: false
                    },
                    {
                        name: "Origin",
                        command: "origin",
                        favicon: "https://www.origin.com/favicon.ico",
                        selected: false
                    },
                    {
                        name: "GOG Galaxy",
                        command: "goggalaxy",
                        favicon: "https://chocolatey.org/content/packageimages/goggalaxy.1.1.9.56.png",
                        selected: false
                    }
                ]
            },
            {
                name: "Technical",
                software: [
                    {
                        name: "LastPass",
                        command: "lastpass",
                        favicon: "https://chocolatey.org/content/packageimages/lastpass.4.1.2.20161219.png",
                        selected: false
                    },
                    {
                        name: "1Password",
                        command: "1password",
                        favicon: "https://chocolatey.org/content/packageimages/1password.4.6.1.617.png",
                        selected: false
                    },
                    {
                        name: "VirtualBox",
                        command: "virtualbox",
                        favicon: "https://chocolatey.org/content/packageimages/virtualbox.5.1.12.png",
                        selected: false
                    },
                    {
                        name: "Everything",
                        command: "everything",
                        favicon: "https://chocolatey.org/content/packageimages/Everything.1.4.1809.png",
                        selected: false
                    }
                ]
            },
            {
                name: "Compression",
                software: [
                    {
                        name: "7-Zip",
                        command: "7zip",
                        favicon: "https://chocolatey.org/content/packageimages/7zip.16.02.0.20160811.svg",
                        selected: false
                    },
                    {
                        name: "PeaZip",
                        command: "peazip",
                        favicon: "https://chocolatey.org/content/packageimages/peazip.6.0.3.svg",
                        selected: false
                    },
                    {
                        name: "WinRAR",
                        command: "winrar",
                        favicon: "https://chocolatey.org/content/packageimages/winrar.5.40.0.20161221.png",
                        selected: false
                    }
                ]
            },
            {
                name: "Development",
                software: [
                    {
                        name: "Java jre8",
                        command: "jre8",
                        favicon: "https://chocolatey.org/content/packageimages/jre8.8.0.111.svg",
                        selected: false
                    },
                    {
                        name: "Java jdk8",
                        command: "jdk8",
                        favicon: "https://chocolatey.org/content/packageimages/jre8.8.0.111.svg",
                        selected: false
                    },
                    {
                        name: "Node.Js 7.3.0",
                        command: "nodejs.install",
                        favicon: "https://chocolatey.org/content/packageimages/nodejs.install.7.3.0.png",
                        selected: false
                    },
                    {
                        name: "Python",
                        command: "python",
                        favicon: "https://chocolatey.org/content/packageimages/python.3.5.2.20161029.svg",
                        selected: false
                    },
                    {
                        name: "Python2",
                        command: "python2",
                        favicon: "https://chocolatey.org/content/packageimages/python.3.5.2.20161029.svg",
                        selected: false
                    },
                    {
                        name: "PuTTY",
                        command: "putty",
                        favicon: "https://chocolatey.org/content/packageimages/putty.0.67.png",
                        selected: false
                    },
                    {
                        name: "WinSCP",
                        command: "winscp",
                        favicon: "https://chocolatey.org/content/packageimages/winscp.5.9.3.png",
                        selected: false
                    },
                    {
                        name: "Git",
                        command: "git.install",
                        favicon: "https://chocolatey.org/content/packageimages/git.install.2.11.0.svg",
                        selected: false
                    }
                ]
            },
            {
                name: "Editors",
                software: [
                    {
                        name: "Vim",
                        command: "vim",
                        favicon: "https://chocolatey.org/content/packageimages/vim.8.0.118.svg",
                        selected: false
                    },
                    {
                        name: "Eclipse",
                        command: "eclipse",
                        favicon: "https://chocolatey.org/content/packageimages/eclipse.4.5.1.png",
                        selected: false
                    },
                    {
                        name: "VS Code",
                        command: "visualstudiocode",
                        favicon: "https://chocolatey.org/content/packageimages/VisualStudioCode.1.8.1.png",
                        selected: false
                    },
                    {
                        name: "Sublime 3",
                        command: "sublimetext3",
                        favicon: "https://chocolatey.org/content/packageimages/SublimeText3.3.0.0.3126.png",
                        selected: false
                    }
                ]
            },
            {
                name: "Security",
                software: [
                    {
                        name: "Malwarebytes",
                        command: "malwarebytes",
                        favicon: "https://chocolatey.org/content/packageimages/malwarebytes.3.0.5.1299.png",
                        selected: false
                    },
                    {
                        name: "Spybot",
                        command: "spybot",
                        favicon: "https://chocolatey.org/content/packageimages/spybot.2.4.40.20160327.png",
                        selected: false
                    },
                    {
                        name: "Kaspersky VRT",
                        command: "kvrt",
                        favicon: "https://chocolatey.org/content/packageimages/kvrt.2016.11.17.0831.png",
                        selected: false
                    },
                    {
                        name: "ClamWin",
                        command: "clamwin",
                        favicon: "https://chocolatey.org/content/packageimages/clamwin.0.99.1.png",
                        selected: false
                    }
                ]
            },
            {
                name: "Cloud",
                software: [
                    {
                        name: "Google Drive",
                        command: "googledrive",
                        favicon: "https://chocolatey.org/content/packageimages/googledrive.1.32.4066.7445.svg",
                        selected: false
                    },
                    {
                        name: "Dropbox",
                        command: "dropbox",
                        favicon: "https://chocolatey.org/content/packageimages/dropbox.16.4.30.svg",
                        selected: false
                    },
                    {
                        name: "OwnCloud",
                        command: "owncloud-client",
                        favicon: "https://chocolatey.org/content/packageimages/owncloud-client.2.2.4.6408.png",
                        selected: false
                    }
                ]
            },
            {
                name: "Productivity",
                software: [
                    {
                        name: "Sumatra PDF",
                        command: "sumatrapdf",
                        favicon: "https://chocolatey.org/content/packageimages/sumatrapdf.3.1.2.png",
                        selected: false
                    },
                    {
                        name: "OpenOffice",
                        command: "openoffice",
                        favicon: "https://chocolatey.org/content/packageimages/OpenOffice.4.1.3.svg",
                        selected: false
                    },
                    {
                        name: "LibreOffice",
                        command: "libreoffice",
                        favicon: "https://chocolatey.org/content/packageimages/libreoffice.5.2.4.svg",
                        selected: false
                    },
                ]
            }
        ];
    }
    PackageService.prototype.getSoftwareList = function () {
        return this.softwarePackages;
    };
    return PackageService;
}());
exports.PackageService = PackageService;
//# sourceMappingURL=PackageService.js.map