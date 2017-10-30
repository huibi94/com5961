// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "2017",
      text: {
        headline: "Xuancheng",
        text: "<p> Xuancheng, a city in the southeast of Anhui province. Founded in 109 BCE, Xuancheng has over 2,000 years of history.And it is known for its production of high quality Xuan paper (宣紙), Xuan writing brushes (宣笔), and Xuan ink stones (宣砚), all of which are used in traditional Chinese calligraphy and painting.</p>"
      },
      media: {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508924138093&di=249b2e39978fe740dc290809ec42ed08&imgtype=0&src=http%3A%2F%2Flxfm-s.malmam.com%2Fuploads%2Fimage%2F150210%2F2779170_1155223_dbd4ec7b8c_o.jpg",
        credit: "XUANCHENG in Anhui Province",
        caption: "My Hometown"
      }
    }, 

    {
      date: "1906",
      text: {
        headline: "Xuancheng High School",
        text: "<p> The Xuancheng High School of Anhui Province (Chinese: 安徽省宣城中学), commonly referred to as Xuancheng High School or Xuanzhong (Chinese: 宣中), is a public high school located in Xuancheng, Anhui Province, China. It was established in 1906 as Secondary School of Ningguo Prefecture (Chinese: 宁国府中学堂).</p>"
      },
      location: {
        name: "Xuancheng High School",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 30.9416,
        lon: 118.7632,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508929064949&di=b01d68d323d5ecb0a7a52d760f100bc5&imgtype=0&src=http%3A%2F%2Fimg1.ph.126.net%2F4XmOhvlhDb-xJJwe5G-cFg%3D%3D%2F1013872866129263431.jpg",
        type: 		"image",
        credit: "XUANCHENG HIGH SCHOOL",
        caption: "In 2009, I went to high school."
      }
    },

     {
      date: "1928",
      text: {
        headline: "Anhui University",
        text: "<p>Anhui University，is located in Hefei, the capital city of Anhui Province, China. Founded in 1928 in Anqing, named 'National Anhui University' in 1946 and moved to Hefei in 1958.Its motto is 'honest, resolute, erudite, discreet'. Anhui University has provided higher education in fundamental knowledge, professional skills, social responsibility and innovative concepts for over 170,000 students in the past 80 years.</p> "
      },
      location: {
        name: "Anhui University",
        lat: 31.7687,
        lon: 117.1769,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508926688396&di=12da095df5a97fe10f6612182131756b&imgtype=0&src=http%3A%2F%2Fwww.sdmingde.cn%2Fuploads%2FImage%2Fahdx.jpg",
        credit: "AHU",
        caption: "In 2012, I went to the college of journalism and communication in AHU."
      }
       },

       {
        date: "1963",
      text: {
        headline: "Chinese University of Hong Kong",
        text: "<p>Founded in 1963, The Chinese University of Hong Kong (CUHK) is a forward-looking comprehensive research university with a global vision and a mission to combine tradition with modernity, and to bring together China and the West. CUHK teachers and students hail from all around the world. CUHK graduates are connected worldwide through an extensive alumni network.</p> "
      },
      location: {
        name: "Chinese University of Hong Kong",
        lat: 22.4210,
        lon: 114.2090,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://img.mp.itc.cn/upload/20161031/b1b52985725e4371ac0700e02b9ed80a_th.jpg",
        credit: "CUHK",
        caption: "In 2017, I come to CUHK to pursue a master's degree."
      }
    }]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}