// 整理自 [带你了解高清电影的奥秘](https://www.quchao.net/Movie.html)

export const list = [
  // 关于版本
  {
    name: '完美版',
    keys: ['PROPER'],
    regexp: /(^|(?<=\.))(PROPER)((?=(\.|-))|$)/i,
  },
  {
    name: '重新制作版',
    keys: ['REPACK'],
    regexp: /(^|(?<=\.))(REPACK)((?=(\.|-))|$)/i,
  },
  {
    name: '限制级版',
    detail: '指在美国有限上映的片子，在少于 500 家电影院放映',
    keys: ['LIMITED'],
    regexp: /(^|(?<=\.))(LIMITED)((?=(\.|-))|$)/i,
  },
  {
    name: '重复版',
    detail: '与别的组织 Release 有重复',
    keys: ['DUPE'],
    regexp: /(^|(?<=\.))(DUPE)((?=(\.|-))|$)/i,
  },
  {
    name: '巨幕版',
    detail: '标准的 IMAX 银幕为 22 米宽、16 米高',
    keys: ['IMAX'],
    regexp: /(^|(?<=\.))(IMAX)((?=(\.|-))|$)/i,
  },
  {
    name: '有删节版',
    keys: ['R-RATE'],
    regexp: /(^|(?<=\.))(R-RATE)((?=(\.|-))|$)/i,
  },
  {
    name: 'DVD 特别版',
    keys: ['SE'],
    regexp: /(^|(?<=\.))(SE)((?=(\.|-))|$)/i,
  },
  {
    name: '导演剪辑版',
    keys: ['DC', "DIRECTOR'S CUT", "DIRECTOR'S.CUT", 'DIRECTORS.CUT'],
    regexp: /(^|(?<=\.))(DC|DIRECTOR'S CUT|DIRECTOR'S.CUT|DIRECTORS.CUT)((?=(\.|-))|$)/i,
  },
  {
    name: '带花絮版',
    keys: ['WITH EXTRAS'],
    regexp: /(^|(?<=\.))(WITH EXTRAS)((?=(\.|-))|$)/i,
  },
  {
    name: '重置版',
    keys: ['RERIP'],
    regexp: /(^|(?<=\.))(RERIP)((?=(\.|-))|$)/i,
  },
  {
    name: '有硬字幕（非内嵌）版',
    keys: ['SUBBED'],
    regexp: /(^|(?<=\.))(SUBBED)((?=(\.|-))|$)/i,
  },
  {
    name: '未分级版/剧场版',
    keys: [
      'UNRATE',
      'UNRATED',
      'UNRATED.CUT',
      'THEATRICAL',
      'THEATRICAL.CUT',
      'UNRATED/THEATRICAL.CUT',
    ],
    regexp: /(^|(?<=\.))(UNRATE|UNRATED|UNRATED.CUT|THEATRICAL|THEATRICAL.CUT|UNRATED\/THEATRICAL.CUT)((?=(\.|-))|$)/i,
  },
  {
    name: '加长版',
    keys: ['EXTENDED'],
    regexp: /(^|(?<=\.))(EXTENDED)((?=(\.|-))|$)/i,
  },
  {
    name: '周年纪念版',
    keys: ['ANNIVERSARY.EDITION'],
    regexp: /(^|(?<=\.))(ANNIVERSARY.EDITION)((?=(\.|-))|$)/i,
  },
  {
    name: '欧版',
    keys: ['CEE'],
    regexp: /(^|(?<=\.))(CEE)((?=(\.|-))|$)/i,
  },
  {
    name: '欧版',
    keys: ['EUR'],
    regexp: /(^|(?<=\.))(EUR)((?=(\.|-))|$)/i,
  },
  {
    name: '重新灌录版',
    keys: ['REMASTERED', 'MASTERED'],
    regexp: /(^|(?<=\.))(REMASTERED|MASTERED)((?=(\.|-))|$)/i,
  },
  {
    name: '满屏版',
    keys: ['OPEN.MATTE'],
    regexp: /(^|(?<=\.))(OPEN.MATTE)((?=(\.|-))|$)/i,
  },

  // 关于分辨率
  {
    name: '标清(480P-720x480分辨率)',
    keys: ['SD'],
    regexp: /(^|(?<=\.))(SD)((?=(\.|-))|$)/i,
  },
  {
    name: '高清(720P—1280×720分辨率)',
    keys: ['HD'],
    regexp: /(^|(?<=\.))(HD)((?=(\.|-))|$)/i,
  },
  {
    name: '1280×720分辨率',
    keys: ['720P', 'HD720P'],
    detail: '视频有 720 行像素',
    regexp: /(^|(?<=\.))(720P|HD720P)((?=(\.|-))|$)/i,
  },
  {
    name: '全高清(1080P—1920x1080分辨率)',
    keys: ['FHD'],
    regexp: /(^|(?<=\.))(FHD)((?=(\.|-))|$)/i,
  },
  {
    name: '1920×1080分辨率',
    keys: ['1080P', 'HD1080P'],
    detail: '视频有 1080 行的像素数',
    regexp: /(^|(?<=\.))(1080P|HD1080P)((?=(\.|-))|$)/i,
  },
  {
    name: '2K(2048×1080分辨率)',
    keys: ['2K'],
    detail: '视频有 2000 列的像素数',
    regexp: /(^|(?<=\.))(2K)((?=(\.|-))|$)/i,
  },
  {
    name: '4K(4096×2160 或 3840 X 2160 分辨率)',
    keys: ['4K'],
    detail: '视频有 4000 列的像素数',
    regexp: /(^|(?<=\.))(4K)((?=(\.|-))|$)/i,
  },
  {
    name: '超清(3840×2160或4096×2160分辨率)',
    keys: ['UHD'],
    regexp: /(^|(?<=\.))(UHD)((?=(\.|-))|$)/i,
  },
  {
    name: '超高精细影像(7680x4320分辨率)',
    keys: ['SHV'],
    regexp: /(^|(?<=\.))(SHV)((?=(\.|-))|$)/i,
  },
  {
    name: '像素总数',
    keys: ['MP'],
    detail: '像素的行数（P）与列数(K)相乘后的一个结果（百万像素',
    regexp: /(^|(?<=\.))(MP)((?=(\.|-))|$)/i,
  },

  // 关于视频编码
  {
    name: '视频编码, 不支持硬件加速',
    keys: ['X264', 'X.264'],
    detail: '使用 CPU 软解码的一种视频格式, 粹靠 CPU 来解压播放，兼容性极佳',
    regexp: /(^|(?<=\.))(BluRay\.)?(X264|X.264)((?=(\.|-))|$)/i,
  },
  {
    name: '视频编码, 支持硬件加速',
    keys: ['H264', 'H.264'],
    detail:
      'H.264 隶属于 MPEG-4 编码，也是当前最流行的一种编码方式，H264 的优点是在目前影视文件中容量最小的 RAW，缺点是编码时需要大量运算时间，H264 支持硬件加速，H264 支持自变速满帧技术(15fps ～ 6000fps)，H264 编码的文件最大特征是后缀名为 .h264。BluRay 后面如果跟着 H.264 就是使用这种编码处理过的，清晰度基本一致，但是容量大幅减少（相对蓝光原盘）',
    regexp: /(^|(?<=\.))(BluRay\.)?(H264|H.264)((?=(\.|-))|$)/i,
  },
  {
    name: '视频编码, AVC视频压缩编码格式',
    keys: ['AVC', 'AVC1'],
    detail:
      'AVC1 其实也是 H.264 编码的一种，这不过是苹果特立独行的产物罢了，苹果开发的符合 H.264 / AVC 标准的编码就被叫做 AVC1。注意很多 WEB-DL 的电影文件名里都有 AVC 字样。',
    regexp: /(^|(?<=\.))(AVC|AVC1)((?=(\.|-))|$)/i,
  },
  {
    name: '视频编码, 隶属HEVC编码一种, 不支持硬件加速',
    keys: ['X265'],
    regexp: /(^|(?<=\.))(X265)((?=(\.|-))|$)/i,
  },
  {
    name: '视频编码, 隶属HEVC编码一种, 支持硬件加速',
    keys: ['H265', 'H.265', 'HEVC'],
    detail:
      'H.265 是未来之王，它很快就会取代 H.264 成为新一代的视频编码全面普及。简单说，它的压缩算法更加高效，H.265 在有限带宽下传输更高质量的网络视频，仅需原先的一半带宽即可播放相同质量的视频。举个例子，同样一个 1080P 高清电影，用 H.264 压缩后，容量可能是 10GB；而采用 H.265 编码压缩，视频效果一致的情况下，容量只有 5GB，不过，H.265 现在还没普及是因为支持这个编码硬解的方案还不够普及，电脑上六代酷睿以后的处理器才支持 H.265 编码；手机上需要晓龙 808 / helio X10 以后的处理器才能支持（同代中端也可以）；电视盒要 HI3796M / AmlogicS905 / RK3368 等等以上才可以支持。显然，这距离普及还有一点距离',
    regexp: /(^|(?<=\.))(H265|H.265|HEVC)((?=(\.|-))|$)/i,
  },

  // 关于片源
  {
    name: '枪版片源',
    detail:
      'CAM通常是用数码摄像机从电影院盗录。有时会使用小三角架，但大多数时候不可能使用，所以摄像机会抖动。因此我们看到画面通常偏暗、人物常常会失真，视频画面时常会出现倾斜、抖动。 由于声音是电影院现场录制，所以经常会录到观众的笑声等杂音。因为这些因素，图象、声音质量通常都很差。',
    keys: ['CAM'],
    regexp: /(^|(?<=\.))(CAM)((?=(\.|-))|$)/i,
  },
  {
    name: '准枪版片源',
    detail:
      'TS与CAM版的标准是相同的。 但它使用的是外置音源(一般是影院座椅上为听力不好的人设的耳机孔)，这个音源不能保证是好的音源，因为受到很多背景噪音的干扰。TS是在空的影院或是用专业摄像机在投影室录制，所以图象质量可能比CAM好。但画面的起伏很大。常出现的有一般TS版和经过修复清晰TS版。',
    keys: ['TS'],
    regexp: /(^|(?<=\.))(TS)((?=(\.|-))|$)/i,
  },
  {
    name: '胶片版片源',
    detail:
      'TC使用电视电影机从胶片直接数字拷贝。画面质量还不错,但亮度不足，有些昏暗。很多时候制作TC使用的音源来自TS，因此音质很差，但画面质量远好过TS。如果不是太讲究的话TC版还是不错的选择。现在还有一种资源，含有：HC。用的很乱，可作当作是把Cam、TC、或DVDScr片源的分辨率拉伸到720p，无实质意义，画质依旧差，噱头而已。',
    keys: ['TC', 'HC'],
    regexp: /(^|(?<=\.))(TC|HC)((?=(\.|-))|$)/i,
  },
  {
    name: '预售版片源',
    detail:
      '预览版的或者是测试版的DVD，非正式出版的版本。从预览版 DVD 中获取。比DVDRip早发布，但画质稍差。(经常有一些不在黑边里在屏幕下方滚动的消息，包含版权和反盗版电话号码 ，会影响观看。)。在欧美年末颁奖季时，给评委送审的片子可能就是这种片源（毕竟片子还没发售，防止泄露不可能给评委看高清版），也难为那些评委了。如果没有严格的划分它的画质应与TC版差不多。',
    keys: ['DVDSCR'],
    regexp: /(^|(?<=\.))(DVDSCR)((?=(\.|-))|$)/i,
  },
  {
    name: '美国、加拿大片源',
    detail: 'DVD联盟为保护知识产权，将全世界依地理区域分为1-6区，同 DVDRip',
    keys: ['R1'],
    regexp: /(^|(?<=\.))(R1)((?=(\.|-))|$)/i,
  },
  {
    name: '西欧、日本、南非片源',
    detail: 'DVD联盟为保护知识产权，将全世界依地理区域分为1-6区',
    keys: ['R2'],
    regexp: /(^|(?<=\.))(R2)((?=(\.|-))|$)/i,
  },
  {
    name: '东南亚、中国香港、中国澳门、中国台湾片源',
    detail: 'DVD联盟为保护知识产权，将全世界依地理区域分为1-6区',
    keys: ['R3'],
    regexp: /(^|(?<=\.))(R3)((?=(\.|-))|$)/i,
  },
  {
    name: '澳大利亚、西班牙语拉丁美洲片源',
    detail: 'DVD联盟为保护知识产权，将全世界依地理区域分为1-6区',
    keys: ['R4'],
    regexp: /(^|(?<=\.))(R4)((?=(\.|-))|$)/i,
  },
  {
    name: '俄罗斯5区片源',
    detail:
      'DVD联盟为保护知识产权，将全世界依地理区域分为1-6区，R5 版本就是一种合成版本（俄 5 区 DVD 视频＋通过其它渠道获得的英语音轨），R5 版本的画质一般都不错，音频部分由于音轨的来源不同，效果有好有差',
    keys: ['R5'],
    regexp: /(^|(?<=\.))(R5)((?=(\.|-))|$)/i,
  },
  {
    name: '中国大陆片源',
    detail: 'DVD联盟为保护知识产权，将全世界依地理区域分为1-6区',
    keys: ['R6'],
    regexp: /(^|(?<=\.))(R6)((?=(\.|-))|$)/i,
  },
  {
    name: '正式DVD版片源',
    detail:
      'DVDRip 是从最终版的 DVD 转制，质量应该是较好的。将 DVD 的视频、音频、字幕剥离出来，再经过压缩或者其他处理，然后重新合成成多媒体文件。一般来说，DVDrip 由影音文件(后缀为 avi)和字幕文件组成。',
    keys: ['DVDRIP'],
    regexp: /(^|(?<=\.))(DVDRIP)((?=(\.|-))|$)/i,
  },
  {
    name: '高清晰度电视转压版片源',
    detail:
      'High Definition Television, 画质次于BD，对于那些未发行蓝光的电影(比如很多老电影)，有 HDTV 版是很好的收藏选择，不过很多 HDTV源 都有台标',
    keys: ['HDTV', 'HDTVRIP'],
    regexp: /(^|(?<=\.))(HDTV|HDTVRIP)((?=(\.|-))|$)/i,
  },
  {
    name: 'TV转制片源',
    keys: ['TVRIP'],
    regexp: /(^|(?<=\.))(TVRIP)((?=(\.|-))|$)/i,
  },
  {
    name: '数字光储存格式的蓝色光束光碟产品片源',
    keys: ['HD-DVD'],
    regexp: /(^|(?<=\.))(HD-DVD)((?=(\.|-))|$)/i,
  },
  {
    name: '蓝光原盘版片源',
    keys: ['REMUX', 'BLURAY', 'BLU-RAY'],
    detail:
      '蓝光原盘未压缩，清晰度最高, 无损的提取出HD-DVD或BluRay里面的视频数据、音频数据, 不过后一种 BluRay 如果跟着 X.264 或者 H.264 就不是蓝光原盘的清晰度了',
    regexp: /(^|(?<=\.))(BluRay.REMUX|REMUX|BLURAY|BLU-RAY)((?=\.(?!.*264))|$)/i,
  },
  {
    name: '蓝光高清转制片源',
    keys: ['BDRIP', 'BD', 'BLURAY'],
    detail:
      '采用不同压缩算法转录的蓝光电影文件，清晰度次之，但是兼顾了容量和清晰度两个角度的需求，一般这种电影容量大概是在 10GB ～ 20GB 之间，电影收藏必备版本',
    regexp: /(^|(?<=\.))(BDRIP|BD|BLURAY)((?=(\.|-|\d+p\.))|$)/i,
  },
  {
    name: '二次蓝光高清转制片源',
    keys: ['BRRIP'],
    detail: '利用 BDrip 得到的 720P、1080P 资源转制的，而不是直接用蓝光原盘压制的',
    regexp: /(^|(?<=\.))(BRRIP)((?=(\.|-))|$)/i,
  },
  {
    name: '半高清片源',
    keys: ['HR-HDTV'],
    detail:
      '960x540分辨率, 采集自电视节目的转录，比如高清电视台的录播内容，最直观的表现是带有台标, 字幕是硬字幕，不利于收藏。优势是体积小',
    regexp: /(^|(?<=\.))(HR-HDTV)((?=(\.|-))|$)/i,
  },
  {
    name: '高清压缩片源, 过于通用',
    keys: ['HDRIP'],
    detail:
      '将 HDTV 的视频内容进一步压缩，视频编码多采用 H.264、音频部分用 ACC 来处理清晰度要比 WebRip 再差一点',
    regexp: /(^|(?<=\.))(HDRIP)((?=(\.|-))|$)/i,
  },
  {
    name: '数字商城/iTunes商店片源',
    keys: ['WEB-DL', 'WEBRIP'],
    detail:
      '无水印，无台标 LOGO，无插播广告, 清晰度还不错, 体积要小很多，大多数采用 H.264 格式压缩',
    regexp: /(^|(?<=\.))(WEB-DL|WEBRIP)((?=(\.|-))|$)/i,
  },

  // 关于音频格式
  {
    name: '音频格式, DVD 时代的音频标杆',
    keys: ['DTS'],
    detail:
      'DTS 属于 DVD 时代的音频标杆，有损音频压缩格式，分为 1.5Mbps 的全码 DTS 和半码 DTS, 是一种效率低下的编码格式（CBR），除非是兼容性考虑，不建议你收藏电影时使用 DTS 音轨。',
    regexp: /(^|(?<=\.))(DTS)((?=(\.|-))|$)/i,
  },
  {
    name: '音频格式, 蓝光音频标准之一',
    keys: ['DTS-HD MA', 'DTS-HD'],
    detail:
      'DTS-HD MA 属于蓝光音频标准之一，为音频无损压缩格式，码率在 3 ~ 4Mbps 不等，在 PC 上兼容性不是很好，如果不能识别 MA，那么只能解码 DTS core 部分，可以用 TSMUXER / eac3to 等工具提取 DTS core 核心, 是一种效率低下的编码格式（CBR），除非是兼容性考虑，不建议你收藏电影时使用 DTS 音轨。',
    regexp: /(^|(?<=\.))(DTS-HD MA|DTS-HD)((?=(\.|-))|$)/i,
  },
  {
    name: '音频格式, 有损编码音频格式',
    keys: ['AC3', 'TRUEHD'],
    detail:
      'AC3 为有损编码格式（CBR），常见于 DVD / BD，码率最高为 640k，5.1 声道通常有 640、448、384 这几种码率. TrueHD 属于蓝光音频标准之一，音频无损压缩格式，一般都可以从 TrueHD 中提取 AC3 核心。',
    regexp: /(^|(?<=\.))(AC3|TRUEHD)((?=(\.|-))|$)/i,
  },
  {
    name: '音频格式, 低于DTS',
    keys: ['DD5.1'],
    detail:
      '杜比公司早源期研发的。也是多声道百，但是每个声道的音频解析度比dts低了不少。大概300-400kps相当于高音质mp3音质',
    regexp: /(^|(?<=\.))(DDP?5.1)((?=(\.|-))|$)/i,
  },
  {
    name: '音频格式, 最高效的音频有损编码格式',
    keys: ['AAC', 'HE-AAC'],
    regexp: /(^|(?<=\.))(AAC|HE-AAC)((?=(\.|-))|$)/i,
  },
  {
    name: '音频格式, 无损格式，不做压缩',
    keys: ['PCM', 'LPCM'],
    regexp: /(^|(?<=\.))(PCM|LPCM)((?=(\.|-))|$)/i,
  },
  {
    name: '音频格式, 最好用的音频无损压缩格式',
    keys: ['FLAC'],
    regexp: /(^|(?<=\.))(FLAC)((?=(\.|-))|$)/i,
  },

  // 关于字幕
  {
    name: '复杂字幕',
    keys: ['ASS', 'SSA'],
    detail: '可以定义字体格式、字体颜色、字体大小等',
    regexp: /(^|(?<=\.))(ASS|SSA)((?=(\.|-))|$)/i,
  },
  {
    name: '简单字幕',
    keys: ['SRT'],
    detail:
      'SRT 字幕是目前最为流行字幕格式，因为其制作规范简单，一句时间代码加一句字幕，使得制作修改就相当容易',
    regexp: /(^|(?<=\.))(SRT)((?=(\.|-))|$)/i,
  },
  {
    name: '图形格式字幕',
    keys: ['IDX', 'SUB', 'IDX+SUB', 'IDX SUB'],
    detail:
      'SUB 是一种图形格式字幕，DVD 光盘里面使用的就是这种字幕文件。一般由 IDX 和 SUB 文件组成，有时也能看到 IFO 文件，不过这个现在已经不怎么用的上了。IDX 相当于索引文件，里面包括了字幕出现的时间码和字幕显示属性等。SUB 文件就是存放字幕本身了，注意是图片格式的，所以比较大，动辄 10M 以上了。IDX+SUB 可以存放很多语言的字幕，提供了在播放的时候的选择。',
    regexp: /(^|(?<=\.))(IDX|SUB|IDX+SUB|IDX SUB)((?=(\.|-))|$)/i,
  },

  // 语言和字幕语言
  {
    name: '普通话',
    keys: ['MANDARIN'],
    regexp: /(^|(?<=(\.|&)))(MANDARIN)((?=(\.|-|&?))|$)/i,
  },
  {
    name: '粤语',
    keys: ['Cantonese'],
    regexp: /(^|(?<=(\.|&)))(Cantonese)((?=(\.|-|&?))|$)/i,
  },
  {
    name: '简体中文',
    keys: ['CHS'],
    detail: 'Chinese Simplified',
    regexp: /(^|(?<=\.))(CHS)((?=(\.|-|\[))|$)/i,
  },
  {
    name: '繁体中文',
    keys: ['CHT'],
    detail: 'Chinese Traditional',
    regexp: /(^|(?<=\.))(CHT)((?=(\.|-|\[))|$)/i,
  },

  // 年,季,集
  {
    name: (matchArgs: string[]) => {
      return `${matchArgs[0]}年`;
    },
    keys: ['四位数字'],
    regexp: /(^|(?<=\.))(\d{4,4})((?=(\.|-))|$)/i,
  },

  {
    name: (matchArgs: string[]) => {
      return `第${matchArgs[3]}季到第${matchArgs[5]}季`;
    },
    keys: ['S'],
    regexp: /(^|(?<=\.))(S(\d+)-(S)?(\d+))((?=(\.|-|EP?\d+))|$)/i,
  },
  {
    name: (matchArgs: string[]) => {
      return `第${matchArgs[3]}季`;
    },
    keys: ['S'],
    regexp: /(^|(?<=\.))(S(\d+))((?=(\.|EP?\d+))|$)/i,
  },
  {
    name: (matchArgs: string[]) => {
      return `第${matchArgs[3]}集到第${matchArgs[5]}集`;
    },
    keys: ['EP'],
    regexp: /(^|(?<=\.))(EP?(\d+)-(EP?)?(\d+))((?=(\.|-))|$)/i,
  },
  {
    name: (matchArgs: string[]) => {
      return `第${matchArgs[3]}集`;
    },
    keys: ['EP'],
    regexp: /(^|(?<=\.))(EP?(\d+))((?=(\.))|$)/i,
  },

  // 其它
  {
    name: '8bit压制',
    keys: ['8BIT'],
    regexp: /(^|(?<=\.))(8BIT)((?=(\.|-))|$)/i,
  },
  {
    name: '10bit压制',
    keys: ['10BIT'],
    regexp: /(^|(?<=\.))(10BIT)((?=(\.|-))|$)/i,
  },
];
