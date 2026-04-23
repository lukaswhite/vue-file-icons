import { defineComponent, h } from 'vue';

export const icons = {
  '3g2': new URL('./icons/3g2.svg', import.meta.url).href,
  '3ga': new URL('./icons/3ga.svg', import.meta.url).href,
  '3gp': new URL('./icons/3gp.svg', import.meta.url).href,
  '7z': new URL('./icons/7z.svg', import.meta.url).href,
  'aa': new URL('./icons/aa.svg', import.meta.url).href,
  'aac': new URL('./icons/aac.svg', import.meta.url).href,
  'ac': new URL('./icons/ac.svg', import.meta.url).href,
  'accdb': new URL('./icons/accdb.svg', import.meta.url).href,
  'accdt': new URL('./icons/accdt.svg', import.meta.url).href,
  'ace': new URL('./icons/ace.svg', import.meta.url).href,
  'adn': new URL('./icons/adn.svg', import.meta.url).href,
  'ai': new URL('./icons/ai.svg', import.meta.url).href,
  'aif': new URL('./icons/aif.svg', import.meta.url).href,
  'aifc': new URL('./icons/aifc.svg', import.meta.url).href,
  'aiff': new URL('./icons/aiff.svg', import.meta.url).href,
  'ait': new URL('./icons/ait.svg', import.meta.url).href,
  'amr': new URL('./icons/amr.svg', import.meta.url).href,
  'ani': new URL('./icons/ani.svg', import.meta.url).href,
  'apk': new URL('./icons/apk.svg', import.meta.url).href,
  'app': new URL('./icons/app.svg', import.meta.url).href,
  'applescript': new URL('./icons/applescript.svg', import.meta.url).href,
  'asax': new URL('./icons/asax.svg', import.meta.url).href,
  'asc': new URL('./icons/asc.svg', import.meta.url).href,
  'ascx': new URL('./icons/ascx.svg', import.meta.url).href,
  'asf': new URL('./icons/asf.svg', import.meta.url).href,
  'ash': new URL('./icons/ash.svg', import.meta.url).href,
  'ashx': new URL('./icons/ashx.svg', import.meta.url).href,
  'asm': new URL('./icons/asm.svg', import.meta.url).href,
  'asmx': new URL('./icons/asmx.svg', import.meta.url).href,
  'asp': new URL('./icons/asp.svg', import.meta.url).href,
  'aspx': new URL('./icons/aspx.svg', import.meta.url).href,
  'asx': new URL('./icons/asx.svg', import.meta.url).href,
  'au': new URL('./icons/au.svg', import.meta.url).href,
  'aup': new URL('./icons/aup.svg', import.meta.url).href,
  'avi': new URL('./icons/avi.svg', import.meta.url).href,
  'axd': new URL('./icons/axd.svg', import.meta.url).href,
  'aze': new URL('./icons/aze.svg', import.meta.url).href,
  'bak': new URL('./icons/bak.svg', import.meta.url).href,
  'bash': new URL('./icons/bash.svg', import.meta.url).href,
  'bat': new URL('./icons/bat.svg', import.meta.url).href,
  'bin': new URL('./icons/bin.svg', import.meta.url).href,
  'blank': new URL('./icons/blank.svg', import.meta.url).href,
  'bmp': new URL('./icons/bmp.svg', import.meta.url).href,
  'bowerrc': new URL('./icons/bowerrc.svg', import.meta.url).href,
  'bpg': new URL('./icons/bpg.svg', import.meta.url).href,
  'browser': new URL('./icons/browser.svg', import.meta.url).href,
  'bz2': new URL('./icons/bz2.svg', import.meta.url).href,
  'bzempty': new URL('./icons/bzempty.svg', import.meta.url).href,
  'c': new URL('./icons/c.svg', import.meta.url).href,
  'cab': new URL('./icons/cab.svg', import.meta.url).href,
  'cad': new URL('./icons/cad.svg', import.meta.url).href,
  'caf': new URL('./icons/caf.svg', import.meta.url).href,
  'cal': new URL('./icons/cal.svg', import.meta.url).href,
  'cd': new URL('./icons/cd.svg', import.meta.url).href,
  'cdda': new URL('./icons/cdda.svg', import.meta.url).href,
  'cer': new URL('./icons/cer.svg', import.meta.url).href,
  'cfg': new URL('./icons/cfg.svg', import.meta.url).href,
  'cfm': new URL('./icons/cfm.svg', import.meta.url).href,
  'cfml': new URL('./icons/cfml.svg', import.meta.url).href,
  'cgi': new URL('./icons/cgi.svg', import.meta.url).href,
  'chm': new URL('./icons/chm.svg', import.meta.url).href,
  'class': new URL('./icons/class.svg', import.meta.url).href,
  'cmd': new URL('./icons/cmd.svg', import.meta.url).href,
  'code-workspace': new URL('./icons/code-workspace.svg', import.meta.url).href,
  'codekit': new URL('./icons/codekit.svg', import.meta.url).href,
  'coffee': new URL('./icons/coffee.svg', import.meta.url).href,
  'coffeelintignore': new URL('./icons/coffeelintignore.svg', import.meta.url).href,
  'com': new URL('./icons/com.svg', import.meta.url).href,
  'compile': new URL('./icons/compile.svg', import.meta.url).href,
  'conf': new URL('./icons/conf.svg', import.meta.url).href,
  'config': new URL('./icons/config.svg', import.meta.url).href,
  'cpp': new URL('./icons/cpp.svg', import.meta.url).href,
  'cptx': new URL('./icons/cptx.svg', import.meta.url).href,
  'cr2': new URL('./icons/cr2.svg', import.meta.url).href,
  'crdownload': new URL('./icons/crdownload.svg', import.meta.url).href,
  'crt': new URL('./icons/crt.svg', import.meta.url).href,
  'crypt': new URL('./icons/crypt.svg', import.meta.url).href,
  'cs': new URL('./icons/cs.svg', import.meta.url).href,
  'csh': new URL('./icons/csh.svg', import.meta.url).href,
  'cson': new URL('./icons/cson.svg', import.meta.url).href,
  'csproj': new URL('./icons/csproj.svg', import.meta.url).href,
  'css': new URL('./icons/css.svg', import.meta.url).href,
  'csv': new URL('./icons/csv.svg', import.meta.url).href,
  'cue': new URL('./icons/cue.svg', import.meta.url).href,
  'cur': new URL('./icons/cur.svg', import.meta.url).href,
  'dart': new URL('./icons/dart.svg', import.meta.url).href,
  'dat': new URL('./icons/dat.svg', import.meta.url).href,
  'data': new URL('./icons/data.svg', import.meta.url).href,
  'db': new URL('./icons/db.svg', import.meta.url).href,
  'dbf': new URL('./icons/dbf.svg', import.meta.url).href,
  'deb': new URL('./icons/deb.svg', import.meta.url).href,
  'default': new URL('./icons/default.svg', import.meta.url).href,
  'dgn': new URL('./icons/dgn.svg', import.meta.url).href,
  'dist': new URL('./icons/dist.svg', import.meta.url).href,
  'diz': new URL('./icons/diz.svg', import.meta.url).href,
  'dll': new URL('./icons/dll.svg', import.meta.url).href,
  'dmg': new URL('./icons/dmg.svg', import.meta.url).href,
  'dng': new URL('./icons/dng.svg', import.meta.url).href,
  'doc': new URL('./icons/doc.svg', import.meta.url).href,
  'docb': new URL('./icons/docb.svg', import.meta.url).href,
  'docm': new URL('./icons/docm.svg', import.meta.url).href,
  'docx': new URL('./icons/docx.svg', import.meta.url).href,
  'dot': new URL('./icons/dot.svg', import.meta.url).href,
  'dotm': new URL('./icons/dotm.svg', import.meta.url).href,
  'dotx': new URL('./icons/dotx.svg', import.meta.url).href,
  'download': new URL('./icons/download.svg', import.meta.url).href,
  'dpj': new URL('./icons/dpj.svg', import.meta.url).href,
  'ds_store': new URL('./icons/ds_store.svg', import.meta.url).href,
  'dsn': new URL('./icons/dsn.svg', import.meta.url).href,
  'dtd': new URL('./icons/dtd.svg', import.meta.url).href,
  'dwg': new URL('./icons/dwg.svg', import.meta.url).href,
  'dxf': new URL('./icons/dxf.svg', import.meta.url).href,
  'editorconfig': new URL('./icons/editorconfig.svg', import.meta.url).href,
  'el': new URL('./icons/el.svg', import.meta.url).href,
  'elf': new URL('./icons/elf.svg', import.meta.url).href,
  'eml': new URL('./icons/eml.svg', import.meta.url).href,
  'enc': new URL('./icons/enc.svg', import.meta.url).href,
  'eot': new URL('./icons/eot.svg', import.meta.url).href,
  'eps': new URL('./icons/eps.svg', import.meta.url).href,
  'epub': new URL('./icons/epub.svg', import.meta.url).href,
  'eslintignore': new URL('./icons/eslintignore.svg', import.meta.url).href,
  'exe': new URL('./icons/exe.svg', import.meta.url).href,
  'f4v': new URL('./icons/f4v.svg', import.meta.url).href,
  'fax': new URL('./icons/fax.svg', import.meta.url).href,
  'fb2': new URL('./icons/fb2.svg', import.meta.url).href,
  'fla': new URL('./icons/fla.svg', import.meta.url).href,
  'flac': new URL('./icons/flac.svg', import.meta.url).href,
  'flv': new URL('./icons/flv.svg', import.meta.url).href,
  'fnt': new URL('./icons/fnt.svg', import.meta.url).href,
  'folder': new URL('./icons/folder.svg', import.meta.url).href,
  'fon': new URL('./icons/fon.svg', import.meta.url).href,
  'gadget': new URL('./icons/gadget.svg', import.meta.url).href,
  'gdp': new URL('./icons/gdp.svg', import.meta.url).href,
  'gem': new URL('./icons/gem.svg', import.meta.url).href,
  'gif': new URL('./icons/gif.svg', import.meta.url).href,
  'gitattributes': new URL('./icons/gitattributes.svg', import.meta.url).href,
  'gitignore': new URL('./icons/gitignore.svg', import.meta.url).href,
  'go': new URL('./icons/go.svg', import.meta.url).href,
  'gpg': new URL('./icons/gpg.svg', import.meta.url).href,
  'gpl': new URL('./icons/gpl.svg', import.meta.url).href,
  'gradle': new URL('./icons/gradle.svg', import.meta.url).href,
  'gz': new URL('./icons/gz.svg', import.meta.url).href,
  'h': new URL('./icons/h.svg', import.meta.url).href,
  'handlebars': new URL('./icons/handlebars.svg', import.meta.url).href,
  'hbs': new URL('./icons/hbs.svg', import.meta.url).href,
  'heic': new URL('./icons/heic.svg', import.meta.url).href,
  'hlp': new URL('./icons/hlp.svg', import.meta.url).href,
  'hs': new URL('./icons/hs.svg', import.meta.url).href,
  'hsl': new URL('./icons/hsl.svg', import.meta.url).href,
  'htm': new URL('./icons/htm.svg', import.meta.url).href,
  'html': new URL('./icons/html.svg', import.meta.url).href,
  'ibooks': new URL('./icons/ibooks.svg', import.meta.url).href,
  'icns': new URL('./icons/icns.svg', import.meta.url).href,
  'ico': new URL('./icons/ico.svg', import.meta.url).href,
  'ics': new URL('./icons/ics.svg', import.meta.url).href,
  'idx': new URL('./icons/idx.svg', import.meta.url).href,
  'iff': new URL('./icons/iff.svg', import.meta.url).href,
  'ifo': new URL('./icons/ifo.svg', import.meta.url).href,
  'image': new URL('./icons/image.svg', import.meta.url).href,
  'img': new URL('./icons/img.svg', import.meta.url).href,
  'iml': new URL('./icons/iml.svg', import.meta.url).href,
  'in': new URL('./icons/in.svg', import.meta.url).href,
  'inc': new URL('./icons/inc.svg', import.meta.url).href,
  'indd': new URL('./icons/indd.svg', import.meta.url).href,
  'inf': new URL('./icons/inf.svg', import.meta.url).href,
  'info': new URL('./icons/info.svg', import.meta.url).href,
  'ini': new URL('./icons/ini.svg', import.meta.url).href,
  'inv': new URL('./icons/inv.svg', import.meta.url).href,
  'iso': new URL('./icons/iso.svg', import.meta.url).href,
  'j2': new URL('./icons/j2.svg', import.meta.url).href,
  'jar': new URL('./icons/jar.svg', import.meta.url).href,
  'java': new URL('./icons/java.svg', import.meta.url).href,
  'jpe': new URL('./icons/jpe.svg', import.meta.url).href,
  'jpeg': new URL('./icons/jpeg.svg', import.meta.url).href,
  'jpg': new URL('./icons/jpg.svg', import.meta.url).href,
  'js': new URL('./icons/js.svg', import.meta.url).href,
  'json': new URL('./icons/json.svg', import.meta.url).href,
  'jsp': new URL('./icons/jsp.svg', import.meta.url).href,
  'jsx': new URL('./icons/jsx.svg', import.meta.url).href,
  'key': new URL('./icons/key.svg', import.meta.url).href,
  'kf8': new URL('./icons/kf8.svg', import.meta.url).href,
  'kmk': new URL('./icons/kmk.svg', import.meta.url).href,
  'ksh': new URL('./icons/ksh.svg', import.meta.url).href,
  'kt': new URL('./icons/kt.svg', import.meta.url).href,
  'kts': new URL('./icons/kts.svg', import.meta.url).href,
  'kup': new URL('./icons/kup.svg', import.meta.url).href,
  'less': new URL('./icons/less.svg', import.meta.url).href,
  'lex': new URL('./icons/lex.svg', import.meta.url).href,
  'licx': new URL('./icons/licx.svg', import.meta.url).href,
  'lisp': new URL('./icons/lisp.svg', import.meta.url).href,
  'lit': new URL('./icons/lit.svg', import.meta.url).href,
  'lnk': new URL('./icons/lnk.svg', import.meta.url).href,
  'lock': new URL('./icons/lock.svg', import.meta.url).href,
  'log': new URL('./icons/log.svg', import.meta.url).href,
  'lua': new URL('./icons/lua.svg', import.meta.url).href,
  'm': new URL('./icons/m.svg', import.meta.url).href,
  'm2v': new URL('./icons/m2v.svg', import.meta.url).href,
  'm3u': new URL('./icons/m3u.svg', import.meta.url).href,
  'm3u8': new URL('./icons/m3u8.svg', import.meta.url).href,
  'm4': new URL('./icons/m4.svg', import.meta.url).href,
  'm4a': new URL('./icons/m4a.svg', import.meta.url).href,
  'm4r': new URL('./icons/m4r.svg', import.meta.url).href,
  'm4v': new URL('./icons/m4v.svg', import.meta.url).href,
  'map': new URL('./icons/map.svg', import.meta.url).href,
  'master': new URL('./icons/master.svg', import.meta.url).href,
  'mc': new URL('./icons/mc.svg', import.meta.url).href,
  'md': new URL('./icons/md.svg', import.meta.url).href,
  'mdb': new URL('./icons/mdb.svg', import.meta.url).href,
  'mdf': new URL('./icons/mdf.svg', import.meta.url).href,
  'me': new URL('./icons/me.svg', import.meta.url).href,
  'mi': new URL('./icons/mi.svg', import.meta.url).href,
  'mid': new URL('./icons/mid.svg', import.meta.url).href,
  'midi': new URL('./icons/midi.svg', import.meta.url).href,
  'mk': new URL('./icons/mk.svg', import.meta.url).href,
  'mkv': new URL('./icons/mkv.svg', import.meta.url).href,
  'mm': new URL('./icons/mm.svg', import.meta.url).href,
  'mng': new URL('./icons/mng.svg', import.meta.url).href,
  'mo': new URL('./icons/mo.svg', import.meta.url).href,
  'mobi': new URL('./icons/mobi.svg', import.meta.url).href,
  'mod': new URL('./icons/mod.svg', import.meta.url).href,
  'mov': new URL('./icons/mov.svg', import.meta.url).href,
  'mp2': new URL('./icons/mp2.svg', import.meta.url).href,
  'mp3': new URL('./icons/mp3.svg', import.meta.url).href,
  'mp4': new URL('./icons/mp4.svg', import.meta.url).href,
  'mpa': new URL('./icons/mpa.svg', import.meta.url).href,
  'mpd': new URL('./icons/mpd.svg', import.meta.url).href,
  'mpe': new URL('./icons/mpe.svg', import.meta.url).href,
  'mpeg': new URL('./icons/mpeg.svg', import.meta.url).href,
  'mpg': new URL('./icons/mpg.svg', import.meta.url).href,
  'mpga': new URL('./icons/mpga.svg', import.meta.url).href,
  'mpp': new URL('./icons/mpp.svg', import.meta.url).href,
  'mpt': new URL('./icons/mpt.svg', import.meta.url).href,
  'msg': new URL('./icons/msg.svg', import.meta.url).href,
  'msi': new URL('./icons/msi.svg', import.meta.url).href,
  'msu': new URL('./icons/msu.svg', import.meta.url).href,
  'nef': new URL('./icons/nef.svg', import.meta.url).href,
  'nes': new URL('./icons/nes.svg', import.meta.url).href,
  'nfo': new URL('./icons/nfo.svg', import.meta.url).href,
  'nix': new URL('./icons/nix.svg', import.meta.url).href,
  'npmignore': new URL('./icons/npmignore.svg', import.meta.url).href,
  'ocx': new URL('./icons/ocx.svg', import.meta.url).href,
  'odb': new URL('./icons/odb.svg', import.meta.url).href,
  'ods': new URL('./icons/ods.svg', import.meta.url).href,
  'odt': new URL('./icons/odt.svg', import.meta.url).href,
  'ogg': new URL('./icons/ogg.svg', import.meta.url).href,
  'ogv': new URL('./icons/ogv.svg', import.meta.url).href,
  'ost': new URL('./icons/ost.svg', import.meta.url).href,
  'otf': new URL('./icons/otf.svg', import.meta.url).href,
  'ott': new URL('./icons/ott.svg', import.meta.url).href,
  'ova': new URL('./icons/ova.svg', import.meta.url).href,
  'ovf': new URL('./icons/ovf.svg', import.meta.url).href,
  'p12': new URL('./icons/p12.svg', import.meta.url).href,
  'p7b': new URL('./icons/p7b.svg', import.meta.url).href,
  'pages': new URL('./icons/pages.svg', import.meta.url).href,
  'part': new URL('./icons/part.svg', import.meta.url).href,
  'partial': new URL('./icons/partial.svg', import.meta.url).href,
  'pcd': new URL('./icons/pcd.svg', import.meta.url).href,
  'pdb': new URL('./icons/pdb.svg', import.meta.url).href,
  'pdf': new URL('./icons/pdf.svg', import.meta.url).href,
  'pem': new URL('./icons/pem.svg', import.meta.url).href,
  'pfx': new URL('./icons/pfx.svg', import.meta.url).href,
  'pgp': new URL('./icons/pgp.svg', import.meta.url).href,
  'ph': new URL('./icons/ph.svg', import.meta.url).href,
  'phar': new URL('./icons/phar.svg', import.meta.url).href,
  'php': new URL('./icons/php.svg', import.meta.url).href,
  'pid': new URL('./icons/pid.svg', import.meta.url).href,
  'pkg': new URL('./icons/pkg.svg', import.meta.url).href,
  'pl': new URL('./icons/pl.svg', import.meta.url).href,
  'plist': new URL('./icons/plist.svg', import.meta.url).href,
  'pm': new URL('./icons/pm.svg', import.meta.url).href,
  'png': new URL('./icons/png.svg', import.meta.url).href,
  'po': new URL('./icons/po.svg', import.meta.url).href,
  'pom': new URL('./icons/pom.svg', import.meta.url).href,
  'pot': new URL('./icons/pot.svg', import.meta.url).href,
  'potx': new URL('./icons/potx.svg', import.meta.url).href,
  'pps': new URL('./icons/pps.svg', import.meta.url).href,
  'ppsx': new URL('./icons/ppsx.svg', import.meta.url).href,
  'ppt': new URL('./icons/ppt.svg', import.meta.url).href,
  'pptm': new URL('./icons/pptm.svg', import.meta.url).href,
  'pptx': new URL('./icons/pptx.svg', import.meta.url).href,
  'prop': new URL('./icons/prop.svg', import.meta.url).href,
  'ps': new URL('./icons/ps.svg', import.meta.url).href,
  'ps1': new URL('./icons/ps1.svg', import.meta.url).href,
  'psd': new URL('./icons/psd.svg', import.meta.url).href,
  'psp': new URL('./icons/psp.svg', import.meta.url).href,
  'pst': new URL('./icons/pst.svg', import.meta.url).href,
  'pub': new URL('./icons/pub.svg', import.meta.url).href,
  'py': new URL('./icons/py.svg', import.meta.url).href,
  'pyc': new URL('./icons/pyc.svg', import.meta.url).href,
  'qt': new URL('./icons/qt.svg', import.meta.url).href,
  'ra': new URL('./icons/ra.svg', import.meta.url).href,
  'ram': new URL('./icons/ram.svg', import.meta.url).href,
  'rar': new URL('./icons/rar.svg', import.meta.url).href,
  'raw': new URL('./icons/raw.svg', import.meta.url).href,
  'rb': new URL('./icons/rb.svg', import.meta.url).href,
  'rdf': new URL('./icons/rdf.svg', import.meta.url).href,
  'rdl': new URL('./icons/rdl.svg', import.meta.url).href,
  'reg': new URL('./icons/reg.svg', import.meta.url).href,
  'resx': new URL('./icons/resx.svg', import.meta.url).href,
  'retry': new URL('./icons/retry.svg', import.meta.url).href,
  'rm': new URL('./icons/rm.svg', import.meta.url).href,
  'rom': new URL('./icons/rom.svg', import.meta.url).href,
  'rpm': new URL('./icons/rpm.svg', import.meta.url).href,
  'rpt': new URL('./icons/rpt.svg', import.meta.url).href,
  'rsa': new URL('./icons/rsa.svg', import.meta.url).href,
  'rss': new URL('./icons/rss.svg', import.meta.url).href,
  'rst': new URL('./icons/rst.svg', import.meta.url).href,
  'rtf': new URL('./icons/rtf.svg', import.meta.url).href,
  'ru': new URL('./icons/ru.svg', import.meta.url).href,
  'rub': new URL('./icons/rub.svg', import.meta.url).href,
  'sass': new URL('./icons/sass.svg', import.meta.url).href,
  'scss': new URL('./icons/scss.svg', import.meta.url).href,
  'sdf': new URL('./icons/sdf.svg', import.meta.url).href,
  'sed': new URL('./icons/sed.svg', import.meta.url).href,
  'sh': new URL('./icons/sh.svg', import.meta.url).href,
  'sit': new URL('./icons/sit.svg', import.meta.url).href,
  'sitemap': new URL('./icons/sitemap.svg', import.meta.url).href,
  'skin': new URL('./icons/skin.svg', import.meta.url).href,
  'sldm': new URL('./icons/sldm.svg', import.meta.url).href,
  'sldx': new URL('./icons/sldx.svg', import.meta.url).href,
  'sln': new URL('./icons/sln.svg', import.meta.url).href,
  'sol': new URL('./icons/sol.svg', import.meta.url).href,
  'sphinx': new URL('./icons/sphinx.svg', import.meta.url).href,
  'sql': new URL('./icons/sql.svg', import.meta.url).href,
  'sqlite': new URL('./icons/sqlite.svg', import.meta.url).href,
  'step': new URL('./icons/step.svg', import.meta.url).href,
  'stl': new URL('./icons/stl.svg', import.meta.url).href,
  'svg': new URL('./icons/svg.svg', import.meta.url).href,
  'swd': new URL('./icons/swd.svg', import.meta.url).href,
  'swf': new URL('./icons/swf.svg', import.meta.url).href,
  'swift': new URL('./icons/swift.svg', import.meta.url).href,
  'swp': new URL('./icons/swp.svg', import.meta.url).href,
  'sys': new URL('./icons/sys.svg', import.meta.url).href,
  'tar': new URL('./icons/tar.svg', import.meta.url).href,
  'tax': new URL('./icons/tax.svg', import.meta.url).href,
  'tcsh': new URL('./icons/tcsh.svg', import.meta.url).href,
  'tex': new URL('./icons/tex.svg', import.meta.url).href,
  'tfignore': new URL('./icons/tfignore.svg', import.meta.url).href,
  'tga': new URL('./icons/tga.svg', import.meta.url).href,
  'tgz': new URL('./icons/tgz.svg', import.meta.url).href,
  'tif': new URL('./icons/tif.svg', import.meta.url).href,
  'tiff': new URL('./icons/tiff.svg', import.meta.url).href,
  'tmp': new URL('./icons/tmp.svg', import.meta.url).href,
  'tmx': new URL('./icons/tmx.svg', import.meta.url).href,
  'torrent': new URL('./icons/torrent.svg', import.meta.url).href,
  'tpl': new URL('./icons/tpl.svg', import.meta.url).href,
  'ts': new URL('./icons/ts.svg', import.meta.url).href,
  'tsv': new URL('./icons/tsv.svg', import.meta.url).href,
  'ttf': new URL('./icons/ttf.svg', import.meta.url).href,
  'twig': new URL('./icons/twig.svg', import.meta.url).href,
  'txt': new URL('./icons/txt.svg', import.meta.url).href,
  'udf': new URL('./icons/udf.svg', import.meta.url).href,
  'vb': new URL('./icons/vb.svg', import.meta.url).href,
  'vbproj': new URL('./icons/vbproj.svg', import.meta.url).href,
  'vbs': new URL('./icons/vbs.svg', import.meta.url).href,
  'vcd': new URL('./icons/vcd.svg', import.meta.url).href,
  'vcf': new URL('./icons/vcf.svg', import.meta.url).href,
  'vcs': new URL('./icons/vcs.svg', import.meta.url).href,
  'vdi': new URL('./icons/vdi.svg', import.meta.url).href,
  'vdx': new URL('./icons/vdx.svg', import.meta.url).href,
  'vmdk': new URL('./icons/vmdk.svg', import.meta.url).href,
  'vob': new URL('./icons/vob.svg', import.meta.url).href,
  'vox': new URL('./icons/vox.svg', import.meta.url).href,
  'vscodeignore': new URL('./icons/vscodeignore.svg', import.meta.url).href,
  'vsd': new URL('./icons/vsd.svg', import.meta.url).href,
  'vss': new URL('./icons/vss.svg', import.meta.url).href,
  'vst': new URL('./icons/vst.svg', import.meta.url).href,
  'vsx': new URL('./icons/vsx.svg', import.meta.url).href,
  'vtx': new URL('./icons/vtx.svg', import.meta.url).href,
  'war': new URL('./icons/war.svg', import.meta.url).href,
  'wav': new URL('./icons/wav.svg', import.meta.url).href,
  'wbk': new URL('./icons/wbk.svg', import.meta.url).href,
  'webinfo': new URL('./icons/webinfo.svg', import.meta.url).href,
  'webm': new URL('./icons/webm.svg', import.meta.url).href,
  'webp': new URL('./icons/webp.svg', import.meta.url).href,
  'wma': new URL('./icons/wma.svg', import.meta.url).href,
  'wmf': new URL('./icons/wmf.svg', import.meta.url).href,
  'wmv': new URL('./icons/wmv.svg', import.meta.url).href,
  'woff': new URL('./icons/woff.svg', import.meta.url).href,
  'woff2': new URL('./icons/woff2.svg', import.meta.url).href,
  'wps': new URL('./icons/wps.svg', import.meta.url).href,
  'wsf': new URL('./icons/wsf.svg', import.meta.url).href,
  'xaml': new URL('./icons/xaml.svg', import.meta.url).href,
  'xcf': new URL('./icons/xcf.svg', import.meta.url).href,
  'xfl': new URL('./icons/xfl.svg', import.meta.url).href,
  'xlm': new URL('./icons/xlm.svg', import.meta.url).href,
  'xls': new URL('./icons/xls.svg', import.meta.url).href,
  'xlsm': new URL('./icons/xlsm.svg', import.meta.url).href,
  'xlsx': new URL('./icons/xlsx.svg', import.meta.url).href,
  'xlt': new URL('./icons/xlt.svg', import.meta.url).href,
  'xltm': new URL('./icons/xltm.svg', import.meta.url).href,
  'xltx': new URL('./icons/xltx.svg', import.meta.url).href,
  'xml': new URL('./icons/xml.svg', import.meta.url).href,
  'xpi': new URL('./icons/xpi.svg', import.meta.url).href,
  'xps': new URL('./icons/xps.svg', import.meta.url).href,
  'xrb': new URL('./icons/xrb.svg', import.meta.url).href,
  'xsd': new URL('./icons/xsd.svg', import.meta.url).href,
  'xsl': new URL('./icons/xsl.svg', import.meta.url).href,
  'xspf': new URL('./icons/xspf.svg', import.meta.url).href,
  'xz': new URL('./icons/xz.svg', import.meta.url).href,
  'yaml': new URL('./icons/yaml.svg', import.meta.url).href,
  'yml': new URL('./icons/yml.svg', import.meta.url).href,
  'z': new URL('./icons/z.svg', import.meta.url).href,
  'zip': new URL('./icons/zip.svg', import.meta.url).href,
  'zsh': new URL('./icons/zsh.svg', import.meta.url).href,
};

const createIconComponent = (iconKey, componentName) =>
  defineComponent({
    name: componentName,
    props: {
      alt: {
        type: String,
        default: undefined,
      },
    },
    setup(props, { attrs }) {
      return () =>
        h('img', {
          ...attrs,
          src: icons[iconKey],
          alt: props.alt ?? `${iconKey} file icon`,
        });
    },
  });

export const getIconKeyFromFilename = (filename) => {
  if (typeof filename !== 'string') {
    return 'default';
  }

  const value = filename.trim().toLowerCase();
  if (!value) {
    return 'default';
  }

  const basename = value.split(/[/\\]/).pop() ?? value;
  if (icons[basename]) {
    return basename;
  }

  const parts = basename.split('.');
  if (parts.length > 1) {
    const lastExtension = parts[parts.length - 1];
    if (icons[lastExtension]) {
      return lastExtension;
    }

    for (let index = 1; index < parts.length; index += 1) {
      const extension = parts.slice(index).join('.');
      if (icons[extension]) {
        return extension;
      }
    }
  }

  return 'default';
};

export const FileIcon = defineComponent({
  name: 'FileIcon',
  props: {
    filename: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: undefined,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const iconKey = getIconKeyFromFilename(props.filename);
      return h('img', {
        ...attrs,
        src: icons[iconKey] ?? icons.default,
        alt: props.alt ?? `${iconKey} file icon`,
      });
    };
  },
});

export const File3g2Icon = createIconComponent('3g2', 'File3g2Icon');
export const File3gaIcon = createIconComponent('3ga', 'File3gaIcon');
export const File3gpIcon = createIconComponent('3gp', 'File3gpIcon');
export const File7zIcon = createIconComponent('7z', 'File7zIcon');
export const AaIcon = createIconComponent('aa', 'AaIcon');
export const AacIcon = createIconComponent('aac', 'AacIcon');
export const AcIcon = createIconComponent('ac', 'AcIcon');
export const AccdbIcon = createIconComponent('accdb', 'AccdbIcon');
export const AccdtIcon = createIconComponent('accdt', 'AccdtIcon');
export const AceIcon = createIconComponent('ace', 'AceIcon');
export const AdnIcon = createIconComponent('adn', 'AdnIcon');
export const AiIcon = createIconComponent('ai', 'AiIcon');
export const AifIcon = createIconComponent('aif', 'AifIcon');
export const AifcIcon = createIconComponent('aifc', 'AifcIcon');
export const AiffIcon = createIconComponent('aiff', 'AiffIcon');
export const AitIcon = createIconComponent('ait', 'AitIcon');
export const AmrIcon = createIconComponent('amr', 'AmrIcon');
export const AniIcon = createIconComponent('ani', 'AniIcon');
export const ApkIcon = createIconComponent('apk', 'ApkIcon');
export const AppIcon = createIconComponent('app', 'AppIcon');
export const ApplescriptIcon = createIconComponent('applescript', 'ApplescriptIcon');
export const AsaxIcon = createIconComponent('asax', 'AsaxIcon');
export const AscIcon = createIconComponent('asc', 'AscIcon');
export const AscxIcon = createIconComponent('ascx', 'AscxIcon');
export const AsfIcon = createIconComponent('asf', 'AsfIcon');
export const AshIcon = createIconComponent('ash', 'AshIcon');
export const AshxIcon = createIconComponent('ashx', 'AshxIcon');
export const AsmIcon = createIconComponent('asm', 'AsmIcon');
export const AsmxIcon = createIconComponent('asmx', 'AsmxIcon');
export const AspIcon = createIconComponent('asp', 'AspIcon');
export const AspxIcon = createIconComponent('aspx', 'AspxIcon');
export const AsxIcon = createIconComponent('asx', 'AsxIcon');
export const AuIcon = createIconComponent('au', 'AuIcon');
export const AupIcon = createIconComponent('aup', 'AupIcon');
export const AviIcon = createIconComponent('avi', 'AviIcon');
export const AxdIcon = createIconComponent('axd', 'AxdIcon');
export const AzeIcon = createIconComponent('aze', 'AzeIcon');
export const BakIcon = createIconComponent('bak', 'BakIcon');
export const BashIcon = createIconComponent('bash', 'BashIcon');
export const BatIcon = createIconComponent('bat', 'BatIcon');
export const BinIcon = createIconComponent('bin', 'BinIcon');
export const BlankIcon = createIconComponent('blank', 'BlankIcon');
export const BmpIcon = createIconComponent('bmp', 'BmpIcon');
export const BowerrcIcon = createIconComponent('bowerrc', 'BowerrcIcon');
export const BpgIcon = createIconComponent('bpg', 'BpgIcon');
export const BrowserIcon = createIconComponent('browser', 'BrowserIcon');
export const Bz2Icon = createIconComponent('bz2', 'Bz2Icon');
export const BzemptyIcon = createIconComponent('bzempty', 'BzemptyIcon');
export const CIcon = createIconComponent('c', 'CIcon');
export const CabIcon = createIconComponent('cab', 'CabIcon');
export const CadIcon = createIconComponent('cad', 'CadIcon');
export const CafIcon = createIconComponent('caf', 'CafIcon');
export const CalIcon = createIconComponent('cal', 'CalIcon');
export const CdIcon = createIconComponent('cd', 'CdIcon');
export const CddaIcon = createIconComponent('cdda', 'CddaIcon');
export const CerIcon = createIconComponent('cer', 'CerIcon');
export const CfgIcon = createIconComponent('cfg', 'CfgIcon');
export const CfmIcon = createIconComponent('cfm', 'CfmIcon');
export const CfmlIcon = createIconComponent('cfml', 'CfmlIcon');
export const CgiIcon = createIconComponent('cgi', 'CgiIcon');
export const ChmIcon = createIconComponent('chm', 'ChmIcon');
export const ClassIcon = createIconComponent('class', 'ClassIcon');
export const CmdIcon = createIconComponent('cmd', 'CmdIcon');
export const CodeWorkspaceIcon = createIconComponent('code-workspace', 'CodeWorkspaceIcon');
export const CodekitIcon = createIconComponent('codekit', 'CodekitIcon');
export const CoffeeIcon = createIconComponent('coffee', 'CoffeeIcon');
export const CoffeelintignoreIcon = createIconComponent('coffeelintignore', 'CoffeelintignoreIcon');
export const ComIcon = createIconComponent('com', 'ComIcon');
export const CompileIcon = createIconComponent('compile', 'CompileIcon');
export const ConfIcon = createIconComponent('conf', 'ConfIcon');
export const ConfigIcon = createIconComponent('config', 'ConfigIcon');
export const CppIcon = createIconComponent('cpp', 'CppIcon');
export const CptxIcon = createIconComponent('cptx', 'CptxIcon');
export const Cr2Icon = createIconComponent('cr2', 'Cr2Icon');
export const CrdownloadIcon = createIconComponent('crdownload', 'CrdownloadIcon');
export const CrtIcon = createIconComponent('crt', 'CrtIcon');
export const CryptIcon = createIconComponent('crypt', 'CryptIcon');
export const CsIcon = createIconComponent('cs', 'CsIcon');
export const CshIcon = createIconComponent('csh', 'CshIcon');
export const CsonIcon = createIconComponent('cson', 'CsonIcon');
export const CsprojIcon = createIconComponent('csproj', 'CsprojIcon');
export const CssIcon = createIconComponent('css', 'CssIcon');
export const CsvIcon = createIconComponent('csv', 'CsvIcon');
export const CueIcon = createIconComponent('cue', 'CueIcon');
export const CurIcon = createIconComponent('cur', 'CurIcon');
export const DartIcon = createIconComponent('dart', 'DartIcon');
export const DatIcon = createIconComponent('dat', 'DatIcon');
export const DataIcon = createIconComponent('data', 'DataIcon');
export const DbIcon = createIconComponent('db', 'DbIcon');
export const DbfIcon = createIconComponent('dbf', 'DbfIcon');
export const DebIcon = createIconComponent('deb', 'DebIcon');
export const DefaultIcon = createIconComponent('default', 'DefaultIcon');
export const DgnIcon = createIconComponent('dgn', 'DgnIcon');
export const DistIcon = createIconComponent('dist', 'DistIcon');
export const DizIcon = createIconComponent('diz', 'DizIcon');
export const DllIcon = createIconComponent('dll', 'DllIcon');
export const DmgIcon = createIconComponent('dmg', 'DmgIcon');
export const DngIcon = createIconComponent('dng', 'DngIcon');
export const DocIcon = createIconComponent('doc', 'DocIcon');
export const DocbIcon = createIconComponent('docb', 'DocbIcon');
export const DocmIcon = createIconComponent('docm', 'DocmIcon');
export const DocxIcon = createIconComponent('docx', 'DocxIcon');
export const DotIcon = createIconComponent('dot', 'DotIcon');
export const DotmIcon = createIconComponent('dotm', 'DotmIcon');
export const DotxIcon = createIconComponent('dotx', 'DotxIcon');
export const DownloadIcon = createIconComponent('download', 'DownloadIcon');
export const DpjIcon = createIconComponent('dpj', 'DpjIcon');
export const DsStoreIcon = createIconComponent('ds_store', 'DsStoreIcon');
export const DsnIcon = createIconComponent('dsn', 'DsnIcon');
export const DtdIcon = createIconComponent('dtd', 'DtdIcon');
export const DwgIcon = createIconComponent('dwg', 'DwgIcon');
export const DxfIcon = createIconComponent('dxf', 'DxfIcon');
export const EditorconfigIcon = createIconComponent('editorconfig', 'EditorconfigIcon');
export const ElIcon = createIconComponent('el', 'ElIcon');
export const ElfIcon = createIconComponent('elf', 'ElfIcon');
export const EmlIcon = createIconComponent('eml', 'EmlIcon');
export const EncIcon = createIconComponent('enc', 'EncIcon');
export const EotIcon = createIconComponent('eot', 'EotIcon');
export const EpsIcon = createIconComponent('eps', 'EpsIcon');
export const EpubIcon = createIconComponent('epub', 'EpubIcon');
export const EslintignoreIcon = createIconComponent('eslintignore', 'EslintignoreIcon');
export const ExeIcon = createIconComponent('exe', 'ExeIcon');
export const F4vIcon = createIconComponent('f4v', 'F4vIcon');
export const FaxIcon = createIconComponent('fax', 'FaxIcon');
export const Fb2Icon = createIconComponent('fb2', 'Fb2Icon');
export const FlaIcon = createIconComponent('fla', 'FlaIcon');
export const FlacIcon = createIconComponent('flac', 'FlacIcon');
export const FlvIcon = createIconComponent('flv', 'FlvIcon');
export const FntIcon = createIconComponent('fnt', 'FntIcon');
export const FolderIcon = createIconComponent('folder', 'FolderIcon');
export const FonIcon = createIconComponent('fon', 'FonIcon');
export const GadgetIcon = createIconComponent('gadget', 'GadgetIcon');
export const GdpIcon = createIconComponent('gdp', 'GdpIcon');
export const GemIcon = createIconComponent('gem', 'GemIcon');
export const GifIcon = createIconComponent('gif', 'GifIcon');
export const GitattributesIcon = createIconComponent('gitattributes', 'GitattributesIcon');
export const GitignoreIcon = createIconComponent('gitignore', 'GitignoreIcon');
export const GoIcon = createIconComponent('go', 'GoIcon');
export const GpgIcon = createIconComponent('gpg', 'GpgIcon');
export const GplIcon = createIconComponent('gpl', 'GplIcon');
export const GradleIcon = createIconComponent('gradle', 'GradleIcon');
export const GzIcon = createIconComponent('gz', 'GzIcon');
export const HIcon = createIconComponent('h', 'HIcon');
export const HandlebarsIcon = createIconComponent('handlebars', 'HandlebarsIcon');
export const HbsIcon = createIconComponent('hbs', 'HbsIcon');
export const HeicIcon = createIconComponent('heic', 'HeicIcon');
export const HlpIcon = createIconComponent('hlp', 'HlpIcon');
export const HsIcon = createIconComponent('hs', 'HsIcon');
export const HslIcon = createIconComponent('hsl', 'HslIcon');
export const HtmIcon = createIconComponent('htm', 'HtmIcon');
export const HtmlIcon = createIconComponent('html', 'HtmlIcon');
export const IbooksIcon = createIconComponent('ibooks', 'IbooksIcon');
export const IcnsIcon = createIconComponent('icns', 'IcnsIcon');
export const IcoIcon = createIconComponent('ico', 'IcoIcon');
export const IcsIcon = createIconComponent('ics', 'IcsIcon');
export const IdxIcon = createIconComponent('idx', 'IdxIcon');
export const IffIcon = createIconComponent('iff', 'IffIcon');
export const IfoIcon = createIconComponent('ifo', 'IfoIcon');
export const ImageIcon = createIconComponent('image', 'ImageIcon');
export const ImgIcon = createIconComponent('img', 'ImgIcon');
export const ImlIcon = createIconComponent('iml', 'ImlIcon');
export const InIcon = createIconComponent('in', 'InIcon');
export const IncIcon = createIconComponent('inc', 'IncIcon');
export const InddIcon = createIconComponent('indd', 'InddIcon');
export const InfIcon = createIconComponent('inf', 'InfIcon');
export const InfoIcon = createIconComponent('info', 'InfoIcon');
export const IniIcon = createIconComponent('ini', 'IniIcon');
export const InvIcon = createIconComponent('inv', 'InvIcon');
export const IsoIcon = createIconComponent('iso', 'IsoIcon');
export const J2Icon = createIconComponent('j2', 'J2Icon');
export const JarIcon = createIconComponent('jar', 'JarIcon');
export const JavaIcon = createIconComponent('java', 'JavaIcon');
export const JpeIcon = createIconComponent('jpe', 'JpeIcon');
export const JpegIcon = createIconComponent('jpeg', 'JpegIcon');
export const JpgIcon = createIconComponent('jpg', 'JpgIcon');
export const JsIcon = createIconComponent('js', 'JsIcon');
export const JsonIcon = createIconComponent('json', 'JsonIcon');
export const JspIcon = createIconComponent('jsp', 'JspIcon');
export const JsxIcon = createIconComponent('jsx', 'JsxIcon');
export const KeyIcon = createIconComponent('key', 'KeyIcon');
export const Kf8Icon = createIconComponent('kf8', 'Kf8Icon');
export const KmkIcon = createIconComponent('kmk', 'KmkIcon');
export const KshIcon = createIconComponent('ksh', 'KshIcon');
export const KtIcon = createIconComponent('kt', 'KtIcon');
export const KtsIcon = createIconComponent('kts', 'KtsIcon');
export const KupIcon = createIconComponent('kup', 'KupIcon');
export const LessIcon = createIconComponent('less', 'LessIcon');
export const LexIcon = createIconComponent('lex', 'LexIcon');
export const LicxIcon = createIconComponent('licx', 'LicxIcon');
export const LispIcon = createIconComponent('lisp', 'LispIcon');
export const LitIcon = createIconComponent('lit', 'LitIcon');
export const LnkIcon = createIconComponent('lnk', 'LnkIcon');
export const LockIcon = createIconComponent('lock', 'LockIcon');
export const LogIcon = createIconComponent('log', 'LogIcon');
export const LuaIcon = createIconComponent('lua', 'LuaIcon');
export const MIcon = createIconComponent('m', 'MIcon');
export const M2vIcon = createIconComponent('m2v', 'M2vIcon');
export const M3uIcon = createIconComponent('m3u', 'M3uIcon');
export const M3u8Icon = createIconComponent('m3u8', 'M3u8Icon');
export const M4Icon = createIconComponent('m4', 'M4Icon');
export const M4aIcon = createIconComponent('m4a', 'M4aIcon');
export const M4rIcon = createIconComponent('m4r', 'M4rIcon');
export const M4vIcon = createIconComponent('m4v', 'M4vIcon');
export const MapIcon = createIconComponent('map', 'MapIcon');
export const MasterIcon = createIconComponent('master', 'MasterIcon');
export const McIcon = createIconComponent('mc', 'McIcon');
export const MdIcon = createIconComponent('md', 'MdIcon');
export const MdbIcon = createIconComponent('mdb', 'MdbIcon');
export const MdfIcon = createIconComponent('mdf', 'MdfIcon');
export const MeIcon = createIconComponent('me', 'MeIcon');
export const MiIcon = createIconComponent('mi', 'MiIcon');
export const MidIcon = createIconComponent('mid', 'MidIcon');
export const MidiIcon = createIconComponent('midi', 'MidiIcon');
export const MkIcon = createIconComponent('mk', 'MkIcon');
export const MkvIcon = createIconComponent('mkv', 'MkvIcon');
export const MmIcon = createIconComponent('mm', 'MmIcon');
export const MngIcon = createIconComponent('mng', 'MngIcon');
export const MoIcon = createIconComponent('mo', 'MoIcon');
export const MobiIcon = createIconComponent('mobi', 'MobiIcon');
export const ModIcon = createIconComponent('mod', 'ModIcon');
export const MovIcon = createIconComponent('mov', 'MovIcon');
export const Mp2Icon = createIconComponent('mp2', 'Mp2Icon');
export const Mp3Icon = createIconComponent('mp3', 'Mp3Icon');
export const Mp4Icon = createIconComponent('mp4', 'Mp4Icon');
export const MpaIcon = createIconComponent('mpa', 'MpaIcon');
export const MpdIcon = createIconComponent('mpd', 'MpdIcon');
export const MpeIcon = createIconComponent('mpe', 'MpeIcon');
export const MpegIcon = createIconComponent('mpeg', 'MpegIcon');
export const MpgIcon = createIconComponent('mpg', 'MpgIcon');
export const MpgaIcon = createIconComponent('mpga', 'MpgaIcon');
export const MppIcon = createIconComponent('mpp', 'MppIcon');
export const MptIcon = createIconComponent('mpt', 'MptIcon');
export const MsgIcon = createIconComponent('msg', 'MsgIcon');
export const MsiIcon = createIconComponent('msi', 'MsiIcon');
export const MsuIcon = createIconComponent('msu', 'MsuIcon');
export const NefIcon = createIconComponent('nef', 'NefIcon');
export const NesIcon = createIconComponent('nes', 'NesIcon');
export const NfoIcon = createIconComponent('nfo', 'NfoIcon');
export const NixIcon = createIconComponent('nix', 'NixIcon');
export const NpmignoreIcon = createIconComponent('npmignore', 'NpmignoreIcon');
export const OcxIcon = createIconComponent('ocx', 'OcxIcon');
export const OdbIcon = createIconComponent('odb', 'OdbIcon');
export const OdsIcon = createIconComponent('ods', 'OdsIcon');
export const OdtIcon = createIconComponent('odt', 'OdtIcon');
export const OggIcon = createIconComponent('ogg', 'OggIcon');
export const OgvIcon = createIconComponent('ogv', 'OgvIcon');
export const OstIcon = createIconComponent('ost', 'OstIcon');
export const OtfIcon = createIconComponent('otf', 'OtfIcon');
export const OttIcon = createIconComponent('ott', 'OttIcon');
export const OvaIcon = createIconComponent('ova', 'OvaIcon');
export const OvfIcon = createIconComponent('ovf', 'OvfIcon');
export const P12Icon = createIconComponent('p12', 'P12Icon');
export const P7bIcon = createIconComponent('p7b', 'P7bIcon');
export const PagesIcon = createIconComponent('pages', 'PagesIcon');
export const PartIcon = createIconComponent('part', 'PartIcon');
export const PartialIcon = createIconComponent('partial', 'PartialIcon');
export const PcdIcon = createIconComponent('pcd', 'PcdIcon');
export const PdbIcon = createIconComponent('pdb', 'PdbIcon');
export const PdfIcon = createIconComponent('pdf', 'PdfIcon');
export const PemIcon = createIconComponent('pem', 'PemIcon');
export const PfxIcon = createIconComponent('pfx', 'PfxIcon');
export const PgpIcon = createIconComponent('pgp', 'PgpIcon');
export const PhIcon = createIconComponent('ph', 'PhIcon');
export const PharIcon = createIconComponent('phar', 'PharIcon');
export const PhpIcon = createIconComponent('php', 'PhpIcon');
export const PidIcon = createIconComponent('pid', 'PidIcon');
export const PkgIcon = createIconComponent('pkg', 'PkgIcon');
export const PlIcon = createIconComponent('pl', 'PlIcon');
export const PlistIcon = createIconComponent('plist', 'PlistIcon');
export const PmIcon = createIconComponent('pm', 'PmIcon');
export const PngIcon = createIconComponent('png', 'PngIcon');
export const PoIcon = createIconComponent('po', 'PoIcon');
export const PomIcon = createIconComponent('pom', 'PomIcon');
export const PotIcon = createIconComponent('pot', 'PotIcon');
export const PotxIcon = createIconComponent('potx', 'PotxIcon');
export const PpsIcon = createIconComponent('pps', 'PpsIcon');
export const PpsxIcon = createIconComponent('ppsx', 'PpsxIcon');
export const PptIcon = createIconComponent('ppt', 'PptIcon');
export const PptmIcon = createIconComponent('pptm', 'PptmIcon');
export const PptxIcon = createIconComponent('pptx', 'PptxIcon');
export const PropIcon = createIconComponent('prop', 'PropIcon');
export const PsIcon = createIconComponent('ps', 'PsIcon');
export const Ps1Icon = createIconComponent('ps1', 'Ps1Icon');
export const PsdIcon = createIconComponent('psd', 'PsdIcon');
export const PspIcon = createIconComponent('psp', 'PspIcon');
export const PstIcon = createIconComponent('pst', 'PstIcon');
export const PubIcon = createIconComponent('pub', 'PubIcon');
export const PyIcon = createIconComponent('py', 'PyIcon');
export const PycIcon = createIconComponent('pyc', 'PycIcon');
export const QtIcon = createIconComponent('qt', 'QtIcon');
export const RaIcon = createIconComponent('ra', 'RaIcon');
export const RamIcon = createIconComponent('ram', 'RamIcon');
export const RarIcon = createIconComponent('rar', 'RarIcon');
export const RawIcon = createIconComponent('raw', 'RawIcon');
export const RbIcon = createIconComponent('rb', 'RbIcon');
export const RdfIcon = createIconComponent('rdf', 'RdfIcon');
export const RdlIcon = createIconComponent('rdl', 'RdlIcon');
export const RegIcon = createIconComponent('reg', 'RegIcon');
export const ResxIcon = createIconComponent('resx', 'ResxIcon');
export const RetryIcon = createIconComponent('retry', 'RetryIcon');
export const RmIcon = createIconComponent('rm', 'RmIcon');
export const RomIcon = createIconComponent('rom', 'RomIcon');
export const RpmIcon = createIconComponent('rpm', 'RpmIcon');
export const RptIcon = createIconComponent('rpt', 'RptIcon');
export const RsaIcon = createIconComponent('rsa', 'RsaIcon');
export const RssIcon = createIconComponent('rss', 'RssIcon');
export const RstIcon = createIconComponent('rst', 'RstIcon');
export const RtfIcon = createIconComponent('rtf', 'RtfIcon');
export const RuIcon = createIconComponent('ru', 'RuIcon');
export const RubIcon = createIconComponent('rub', 'RubIcon');
export const SassIcon = createIconComponent('sass', 'SassIcon');
export const ScssIcon = createIconComponent('scss', 'ScssIcon');
export const SdfIcon = createIconComponent('sdf', 'SdfIcon');
export const SedIcon = createIconComponent('sed', 'SedIcon');
export const ShIcon = createIconComponent('sh', 'ShIcon');
export const SitIcon = createIconComponent('sit', 'SitIcon');
export const SitemapIcon = createIconComponent('sitemap', 'SitemapIcon');
export const SkinIcon = createIconComponent('skin', 'SkinIcon');
export const SldmIcon = createIconComponent('sldm', 'SldmIcon');
export const SldxIcon = createIconComponent('sldx', 'SldxIcon');
export const SlnIcon = createIconComponent('sln', 'SlnIcon');
export const SolIcon = createIconComponent('sol', 'SolIcon');
export const SphinxIcon = createIconComponent('sphinx', 'SphinxIcon');
export const SqlIcon = createIconComponent('sql', 'SqlIcon');
export const SqliteIcon = createIconComponent('sqlite', 'SqliteIcon');
export const StepIcon = createIconComponent('step', 'StepIcon');
export const StlIcon = createIconComponent('stl', 'StlIcon');
export const SvgIcon = createIconComponent('svg', 'SvgIcon');
export const SwdIcon = createIconComponent('swd', 'SwdIcon');
export const SwfIcon = createIconComponent('swf', 'SwfIcon');
export const SwiftIcon = createIconComponent('swift', 'SwiftIcon');
export const SwpIcon = createIconComponent('swp', 'SwpIcon');
export const SysIcon = createIconComponent('sys', 'SysIcon');
export const TarIcon = createIconComponent('tar', 'TarIcon');
export const TaxIcon = createIconComponent('tax', 'TaxIcon');
export const TcshIcon = createIconComponent('tcsh', 'TcshIcon');
export const TexIcon = createIconComponent('tex', 'TexIcon');
export const TfignoreIcon = createIconComponent('tfignore', 'TfignoreIcon');
export const TgaIcon = createIconComponent('tga', 'TgaIcon');
export const TgzIcon = createIconComponent('tgz', 'TgzIcon');
export const TifIcon = createIconComponent('tif', 'TifIcon');
export const TiffIcon = createIconComponent('tiff', 'TiffIcon');
export const TmpIcon = createIconComponent('tmp', 'TmpIcon');
export const TmxIcon = createIconComponent('tmx', 'TmxIcon');
export const TorrentIcon = createIconComponent('torrent', 'TorrentIcon');
export const TplIcon = createIconComponent('tpl', 'TplIcon');
export const TsIcon = createIconComponent('ts', 'TsIcon');
export const TsvIcon = createIconComponent('tsv', 'TsvIcon');
export const TtfIcon = createIconComponent('ttf', 'TtfIcon');
export const TwigIcon = createIconComponent('twig', 'TwigIcon');
export const TxtIcon = createIconComponent('txt', 'TxtIcon');
export const UdfIcon = createIconComponent('udf', 'UdfIcon');
export const VbIcon = createIconComponent('vb', 'VbIcon');
export const VbprojIcon = createIconComponent('vbproj', 'VbprojIcon');
export const VbsIcon = createIconComponent('vbs', 'VbsIcon');
export const VcdIcon = createIconComponent('vcd', 'VcdIcon');
export const VcfIcon = createIconComponent('vcf', 'VcfIcon');
export const VcsIcon = createIconComponent('vcs', 'VcsIcon');
export const VdiIcon = createIconComponent('vdi', 'VdiIcon');
export const VdxIcon = createIconComponent('vdx', 'VdxIcon');
export const VmdkIcon = createIconComponent('vmdk', 'VmdkIcon');
export const VobIcon = createIconComponent('vob', 'VobIcon');
export const VoxIcon = createIconComponent('vox', 'VoxIcon');
export const VscodeignoreIcon = createIconComponent('vscodeignore', 'VscodeignoreIcon');
export const VsdIcon = createIconComponent('vsd', 'VsdIcon');
export const VssIcon = createIconComponent('vss', 'VssIcon');
export const VstIcon = createIconComponent('vst', 'VstIcon');
export const VsxIcon = createIconComponent('vsx', 'VsxIcon');
export const VtxIcon = createIconComponent('vtx', 'VtxIcon');
export const WarIcon = createIconComponent('war', 'WarIcon');
export const WavIcon = createIconComponent('wav', 'WavIcon');
export const WbkIcon = createIconComponent('wbk', 'WbkIcon');
export const WebinfoIcon = createIconComponent('webinfo', 'WebinfoIcon');
export const WebmIcon = createIconComponent('webm', 'WebmIcon');
export const WebpIcon = createIconComponent('webp', 'WebpIcon');
export const WmaIcon = createIconComponent('wma', 'WmaIcon');
export const WmfIcon = createIconComponent('wmf', 'WmfIcon');
export const WmvIcon = createIconComponent('wmv', 'WmvIcon');
export const WoffIcon = createIconComponent('woff', 'WoffIcon');
export const Woff2Icon = createIconComponent('woff2', 'Woff2Icon');
export const WpsIcon = createIconComponent('wps', 'WpsIcon');
export const WsfIcon = createIconComponent('wsf', 'WsfIcon');
export const XamlIcon = createIconComponent('xaml', 'XamlIcon');
export const XcfIcon = createIconComponent('xcf', 'XcfIcon');
export const XflIcon = createIconComponent('xfl', 'XflIcon');
export const XlmIcon = createIconComponent('xlm', 'XlmIcon');
export const XlsIcon = createIconComponent('xls', 'XlsIcon');
export const XlsmIcon = createIconComponent('xlsm', 'XlsmIcon');
export const XlsxIcon = createIconComponent('xlsx', 'XlsxIcon');
export const XltIcon = createIconComponent('xlt', 'XltIcon');
export const XltmIcon = createIconComponent('xltm', 'XltmIcon');
export const XltxIcon = createIconComponent('xltx', 'XltxIcon');
export const XmlIcon = createIconComponent('xml', 'XmlIcon');
export const XpiIcon = createIconComponent('xpi', 'XpiIcon');
export const XpsIcon = createIconComponent('xps', 'XpsIcon');
export const XrbIcon = createIconComponent('xrb', 'XrbIcon');
export const XsdIcon = createIconComponent('xsd', 'XsdIcon');
export const XslIcon = createIconComponent('xsl', 'XslIcon');
export const XspfIcon = createIconComponent('xspf', 'XspfIcon');
export const XzIcon = createIconComponent('xz', 'XzIcon');
export const YamlIcon = createIconComponent('yaml', 'YamlIcon');
export const YmlIcon = createIconComponent('yml', 'YmlIcon');
export const ZIcon = createIconComponent('z', 'ZIcon');
export const ZipIcon = createIconComponent('zip', 'ZipIcon');
export const ZshIcon = createIconComponent('zsh', 'ZshIcon');

export default FileIcon;
