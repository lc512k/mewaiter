$(function() {
  console.log('lipsum load')
  var $chars, $words, $paras, $titles, $bullets, i, loremStr, capitalizeFirstLetter, Util;

  loremStr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin arcu nisl, rutrum sed lacus sit amet, lacinia lobortis leo. Quisque nunc justo, malesuada quis luctus ut, imperdiet sed turpis. Proin purus nisi, eleifend at erat nec, pharetra cursus lacus. Aenean quis neque non nibh convallis volutpat. Aliquam sollicitudin, ligula eu hendrerit vulputate, urna erat eleifend libero, at sagittis urna turpis sit amet ligula. Vestibulum vel sapien nec ipsum dapibus egestas. Nam et arcu ut leo faucibus congue. Fusce fermentum neque facilisis, malesuada turpis ac, eleifend eros.\r Proin tempus turpis nec nisi convallis aliquet. Nulla justo dolor, venenatis ac tortor in, consequat porttitor urna. Phasellus tincidunt felis vitae ante egestas cursus. Morbi tempus sit amet metus id tincidunt. Fusce mauris dolor, fringilla ac congue ut, ornare quis mauris. Phasellus ipsum nunc, hendrerit id aliquet vel, ullamcorper non dolor. Suspendisse fringilla congue malesuada. Fusce quis nulla dui. Nam nec orci at libero faucibus suscipit. Praesent mollis arcu et nisl pulvinar, auctor ornare purus lacinia. In luctus lectus at nunc pulvinar, nec molestie mauris egestas. Aenean ultricies mauris id eros cursus, tincidunt aliquam sem blandit. Aliquam auctor enim at fringilla rhoncus. Fusce venenatis eros condimentum lacus viverra rhoncus. Sed sed mollis sem.\r In tellus nunc, malesuada nec laoreet vitae, condimentum eget nulla. Donec purus orci, pellentesque at neque eu, tincidunt faucibus lectus. Etiam nulla dui, semper pellentesque leo vel, tristique porttitor massa. Nullam nec porttitor enim. Nam ullamcorper imperdiet massa, at porta quam commodo non. Curabitur orci leo, tempor at risus ac, blandit laoreet lacus. Integer vestibulum, nibh malesuada laoreet feugiat, erat nulla eleifend ipsum, vel fringilla mauris quam eu sem. Sed commodo arcu vel condimentum dapibus. Cras blandit et neque a fringilla. Vivamus porta dui purus, eget ornare magna molestie at. Curabitur consectetur felis libero, ut volutpat quam sodales eget. Nullam nunc nibh, dictum vitae quam vitae, blandit sodales enim. Donec faucibus diam non blandit viverra. Praesent fringilla in dolor sed scelerisque. Nullam id nisl sed ipsum lobortis rutrum. Aenean a luctus tortor, dignissim porta dui.\r Quisque vitae felis fermentum, elementum massa scelerisque, facilisis nibh. Proin sollicitudin, lacus non tincidunt hendrerit, metus nibh elementum mauris, id porta est ipsum in felis. Maecenas malesuada, est eget ullamcorper porta, nunc dolor pretium felis, nec tempus leo urna ullamcorper metus. Integer sem augue, semper vel metus ac, condimentum semper ligula. Duis aliquet dictum augue, non consequat turpis luctus ac. Nunc consectetur mi eget ligula laoreet lobortis ut a lectus. Suspendisse ac fermentum eros, vel gravida lorem. Donec et leo eu urna porta dictum. Aliquam tincidunt vitae orci at egestas. Aenean vitae tortor blandit, dapibus lacus eget, sagittis purus. Nunc non tellus quis libero pretium scelerisque quis et mi.\r Morbi convallis tempor volutpat. Duis porttitor dolor odio, id condimentum elit tempus et. Aenean venenatis tincidunt ante vel posuere. Integer adipiscing ac lectus accumsan consequat. Morbi nisi massa, sollicitudin ut mollis sed, vestibulum quis libero. Donec vulputate condimentum nibh ut volutpat. Aliquam laoreet dui eget quam ultricies varius. Vestibulum interdum ultrices magna, vel mattis odio luctus id. Morbi ac gravida mauris, ac mollis turpis. Morbi dapibus arcu vel laoreet fringilla. Pellentesque et tortor rutrum, convallis metus quis, iaculis orci. Integer eu turpis pellentesque, ullamcorper ipsum ut, faucibus ante.\r Pellentesque eget nulla tempus, aliquam elit eget, posuere erat. Morbi vestibulum id nulla in ultrices. Curabitur accumsan vitae justo a facilisis. Nulla feugiat mauris turpis, ut gravida tellus pretium sit amet. Quisque vestibulum eros lacinia dolor lobortis, eu egestas sapien viverra. Aliquam erat volutpat. Cras quis velit eget turpis blandit feugiat faucibus eget quam. In eu leo dolor. Nam vestibulum nisl et elit sagittis molestie. Quisque egestas mi eget augue ullamcorper cursus. Pellentesque libero nibh, vestibulum sit amet aliquet sagittis, pretium nec tellus. Suspendisse potenti. Ut interdum velit diam, sed suscipit mauris commodo at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\r Vivamus molestie et nunc at convallis. In in odio volutpat, molestie nisl in, gravida felis. Duis placerat elementum odio at aliquet. Proin nec sollicitudin nulla. Aliquam non iaculis turpis, sed consequat felis. In semper nulla a justo commodo posuere. Cras non neque rhoncus, mollis libero non, venenatis metus. Praesent dictum, sem ac facilisis porttitor, nibh eros varius justo, vitae faucibus eros odio sit amet est. Morbi dictum augue ac dolor euismod porta.\r Aenean faucibus nunc ut dolor fringilla pellentesque. Etiam posuere purus vitae tortor feugiat, a consequat est malesuada. Fusce sit amet tincidunt massa, vitae volutpat odio. Fusce mi erat, convallis non placerat non, tempor at nulla. Donec eu elit felis. Donec quis arcu ipsum. Sed pellentesque enim nec erat iaculis, a ullamcorper ligula commodo. Nulla blandit a mauris eget scelerisque. Mauris aliquam neque in enim pellentesque volutpat. Pellentesque ut venenatis arcu. Etiam sed lorem vel neque mollis aliquet eu quis sem. Duis at ligula elit. Donec auctor tellus eget urna rhoncus convallis. Fusce vulputate nibh quam, sit amet convallis mi venenatis in. In non est vel nulla porttitor convallis sit amet vel mauris. Suspendisse potenti.\r Fusce bibendum lectus eu libero volutpat, sed consequat sem suscipit. Sed sapien diam, vestibulum non ante vel, lacinia placerat mauris. Curabitur consectetur convallis massa, a bibendum mi consequat eu. Suspendisse vitae egestas mauris. Morbi pulvinar, lorem eu elementum aliquet, sem nibh egestas lorem, in tincidunt erat sapien quis urna. Aliquam in varius elit. Phasellus et nibh eu felis lobortis vehicula eu hendrerit libero. Quisque sapien massa, elementum at auctor ac, sodales eu enim. Integer non interdum leo, sed laoreet arcu.\r Quisque egestas consequat cursus. Sed at lacus arcu. Mauris interdum sodales commodo. Suspendisse congue faucibus rhoncus. Vivamus rhoncus ullamcorper blandit. Aliquam erat volutpat. Cras pellentesque, odio non aliquam mattis, lectus quam fringilla diam, et placerat eros eros quis turpis. Cras sodales dapibus erat at sagittis. Morbi est elit, elementum condimentum dui eget, malesuada venenatis enim.\r Praesent congue erat a ligula tempus, et consectetur neque tempus. Fusce suscipit orci ac lectus rutrum, nec porta libero egestas. Morbi mollis, sem non euismod blandit, ante neque luctus ante, a fermentum risus metus vel lectus. Quisque sem ligula, aliquam ac tempor et, feugiat vel arcu. Quisque sit amet nibh vel ante adipiscing pellentesque ut varius arcu. Mauris ut elementum tortor. Cras a dolor orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sagittis tempus risus in aliquam. Donec rutrum tempor elit at dapibus. In et est mauris. In vulputate turpis non erat aliquam, a iaculis magna tristique. Etiam tempor ante vel dignissim lacinia. Aenean eu ligula a sapien luctus fringilla id eu nisl. Phasellus vestibulum porta enim, eget eleifend mauris eleifend nec.\r Integer vel ornare nibh. Suspendisse posuere ligula eget neque mattis, at commodo lacus accumsan. Maecenas pellentesque iaculis est sit amet luctus. In ut volutpat tellus. Phasellus volutpat, libero eget suscipit tempor, augue lorem pulvinar dolor, tristique volutpat erat odio sit amet sem. Nulla ut elementum sem, a faucibus massa. Morbi neque odio, semper non quam vel, viverra placerat est.\r Mauris at ipsum quis enim ornare tincidunt in ac nisi. Mauris eu tortor augue. Nunc ut enim sem. Morbi ac interdum lectus. Vivamus rhoncus odio non neque vulputate, quis tristique mauris consequat. Duis consequat ligula in pharetra interdum. Maecenas vitae augue elit. Donec mattis interdum ultricies. Sed ac consequat justo. Aliquam condimentum ligula vitae augue semper venenatis. Vivamus a suscipit mi. Vestibulum placerat purus suscipit diam semper, a sagittis orci fermentum. Suspendisse nec mattis ipsum, non vehicula magna. Proin augue odio, tempor ac nisi et, bibendum sodales velit. Aenean vitae volutpat enim. Praesent non odio ut risus cursus vulputate.\r Vestibulum egestas lacinia lectus ac vehicula. Morbi auctor bibendum ultricies. Mauris lorem mauris, volutpat quis laoreet porttitor, aliquet nec arcu. Proin sed purus mauris. Nullam mattis orci et orci hendrerit convallis. Integer in luctus sem, sit amet tempus lacus. Sed sollicitudin, odio sed scelerisque aliquam, purus orci viverra odio, non facilisis nisi elit sed felis.\r Proin nulla urna, volutpat sit amet neque ut, ornare varius nisl. Ut fermentum sodales dolor, ac rutrum urna gravida in. Sed dapibus lectus in turpis volutpat venenatis. In vitae augue rutrum, condimentum lectus tincidunt, feugiat lorem. Nunc scelerisque sodales tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam eleifend tortor eget sollicitudin viverra. Quisque varius purus at posuere consequat. Suspendisse mattis, nibh fermentum commodo rhoncus, justo nibh tristique libero, nec laoreet ipsum turpis eget risus. Quisque lacinia porta dolor luctus imperdiet. Aliquam tempus porttitor dignissim. Phasellus at est at tortor consectetur malesuada eget quis purus.\r Sed sodales feugiat pretium. Praesent dapibus facilisis nisi at pulvinar. In ut facilisis dolor. Morbi id semper neque. Donec nec pretium mi. Morbi at condimentum mauris. Ut aliquet massa neque, eu ornare quam molestie sit amet. Phasellus congue tincidunt purus, sit amet ullamcorper turpis bibendum eu. Ut quis volutpat sem. Morbi sit amet orci et sem condimentum pharetra. Donec porttitor, felis quis ullamcorper hendrerit, nisi magna dignissim nisl, et pulvinar ligula lacus a dui. Nunc at sapien malesuada, pellentesque elit in, rutrum erat. Praesent pharetra ante id sapien condimentum lacinia. Sed id dui rhoncus, mattis risus non, pharetra orci. Praesent ac felis sem. Donec id suscipit tellus.\r Maecenas gravida a leo et sodales. Aenean fermentum pulvinar lobortis. Duis suscipit at massa a dapibus. Fusce tempor dignissim suscipit. Quisque in est a lectus euismod laoreet in in magna. Donec commodo, dolor eget cursus lacinia, turpis mi pellentesque diam, facilisis posuere sapien lectus sed diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a interdum velit.\r Nullam et imperdiet magna, imperdiet lacinia lacus. Curabitur egestas sollicitudin neque vitae porttitor. Phasellus scelerisque mattis nulla, ac iaculis nunc ullamcorper a. Ut fermentum lobortis massa et rutrum. Pellentesque dictum neque sit amet est sagittis sagittis. Aliquam erat volutpat. Etiam tincidunt velit ut velit elementum pretium. Quisque tincidunt metus nisl, eget mollis mi tristique sit amet. Aenean ac fringilla lacus, eu porta felis.\r Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie faucibus aliquet. Ut libero massa, malesuada a elementum feugiat, tempus sit amet urna. Vestibulum eu hendrerit sem. Sed ac faucibus risus. Maecenas ut tortor quis nunc laoreet ultrices. Aenean volutpat nulla dui, sit amet rutrum augue commodo in. Aliquam eu ante aliquam, commodo purus quis, vehicula lectus. Duis nec leo id nunc adipiscing suscipit. Proin malesuada metus ut dolor pulvinar rhoncus.\r Duis at congue mi, vel congue mi. Vivamus id gravida lectus, sit amet malesuada tellus. Phasellus ac massa imperdiet, lacinia est id, convallis mi. Sed sed eleifend lectus, congue fringilla felis. Donec mollis tristique justo quis pulvinar. Fusce et sagittis ante. Duis nec sapien eget nunc commodo aliquam. Quisque fringilla purus eu sem aliquet, in bibendum nisl mattis. Sed non urna id enim condimentum tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut lectus viverra, iaculis erat vel, venenatis neque. Suspendisse viverra viverra sapien, eu scelerisque orci fermentum pharetra. Nulla dignissim placerat laoreet. Sed volutpat orci ante, quis vestibulum sem elementum sit amet. Mauris porttitor venenatis suscipit.';
  //loremStr = '123456789'
  $loremDivs = $('[class*="lorem-"]'); //don't use class, use a propietary attr

  Util = {
    capitalizeFirstLetter: function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    makeRandomInt: function(from, to, shift) {
      shift = shift ? shift : 0;
      return shift + Math.floor(Math.random() * (to - from + 1) + from);
    },
    splitSliceJoin: function(segments, start, splitStr, joinStr, maxSegmentLength) {
      start = start ? start : 0;
      splitStr = splitStr ? splitStr : ' ';
      joinStr = joinStr ? joinStr : ' ';
      var splits = loremStr.split(splitStr);
      if (maxSegmentLength) {
        for (var k = 0; k < splits.length; k++) {
          splits[k] = splits[k].substring(0, maxSegmentLength);
        }
      }
      return splits.slice(start, segments).join(joinStr);
    },
    htmlWrap: function(string, startTag, endTag) {
      return startTag + string + endTag;
    }
  };
  for (i = 0; i < $loremDivs.length; i++) {
    var div, classes, loremClasses, type, size, n, part, result, start, trail, j, randomStart, randomLength;
    div = $($loremDivs[i]);
    classes = div.prop('class').split(' ');
    loremClasses = classes; //classes.find('lorem');
    part = classes[0].split('-');


    type = part[1];
    n = part[2];
    size = part[3];

    result = '';
    start = 0; //o random if random class is present
    trail = true; //param to remove trailin gperiod
    //fuzzy. aprox num of chars. end on whole words
    //title case, lower case, upper case...

    console.log('n, type, size', n, type, size)
    n = parseInt(n, 10);
    if (n > 0) {
      switch (type) {
        case 'chars':
          result = loremStr.substring(start, n + start);
          if (trail) {
            result += '.'; //only if last char is a [a-z][A-Z], otherwise, new case
          }
          break;
        case 'words':
          var numberOfWords = start + n;
          result = Util.splitSliceJoin(numberOfWords, start); //loremStr.split(' ').slice(start, n + start).join(' ');
          break;
        case 'paras':
          //allow for smaller paragraphs
          //result = Util.htmlWrap(Util.splitSliceJoin(n, start, '\r', '</p><p>'), '<p>', '</p>');
          var numberOfParagraphs, originalParagraph;
          numberOfParagraphs = n;

          switch (size) {
            case 'xs':
              result = '<p>' + Util.splitSliceJoin(numberOfParagraphs, start, '\r', '</p><p>', 100) + '</p>';
              break;
            case 's':
              result = '<p>' + Util.splitSliceJoin(numberOfParagraphs, start, '\r', '</p><p>', 200) + '</p>';
              break;
            case 'l':
              result = '<p>' + Util.splitSliceJoin(numberOfParagraphs, start, '\r', '</p><p>', 350) + '</p>';
              break;
            case 'xl':
              result = '<p>' + Util.splitSliceJoin(numberOfParagraphs, start, '\r', '</p><p>') + '</p>';
              break;
            default:
              result = '<p>' + Util.splitSliceJoin(numberOfParagraphs, start, '\r', '</p><p>', 350) + '</p>';
              break;
          }
          break;
        case 'bullets':
          switch (size) {
            case 'xs':
              for (j = 0; j < n; j++) {
                randomStart = Util.makeRandomInt(0, 200);
                var max, min, itemText;
                min = 2;
                max = 3;
                randomLength = Util.makeRandomInt(min, max, randomStart);
                console.log('bullets small', randomLength, randomStart)
                itemText = Util.splitSliceJoin(randomLength, randomStart);
                result += Util.htmlWrap(Util.capitalizeFirstLetter(itemText), '<li>', '</li>');
              }
              result = Util.htmlWrap(result, '<ul>', '</ul>');
              break;
            default:
              for (j = 0; j < n; j++) {
                randomStart = Util.makeRandomInt(0, 200);
                var max, min, itemText;
                min = 10;
                max = 15;
                randomLength = Util.makeRandomInt(min, max, randomStart);
                itemText = Util.splitSliceJoin(randomLength, randomStart);
                result += Util.htmlWrap(Util.capitalizeFirstLetter(itemText), '<li>', '</li>');
              }
              result = Util.htmlWrap(result, '<ul>', '</ul>');
              break;
          }
          break;
        default:
          result = 'DEFAULT';
      }
    } else {
      result = '';
      console.warn('DEBUG: invalid class', loremClasses, n);
    }
    div.html(result);
  }
});

//add to .fn too to allow for $('div').lorem('chars', 500)
