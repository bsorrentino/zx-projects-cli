#!/usr/bin/env node
import 'zx/globals'


const ytdl = require('ytdl-core');
//const getBasicInfo = require('ytdl-core');

// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

let url = argv.url
if( !url ) {
    url = await question( 'youtube url: ')
}

/*
itag container quality codecs                 bitrate  audio bitrate
18   mp4       360p    avc1.42001E, mp4a.40.2 696.66KB 96KB
137  mp4       1080p   avc1.640028            4.53MB
248  webm      1080p   vp9                    2.52MB
136  mp4       720p    avc1.4d4016            2.2MB
247  webm      720p    vp9                    1.44MB
135  mp4       480p    avc1.4d4014            1.1MB
134  mp4       360p    avc1.4d401e            593.26KB
140  mp4               mp4a.40.2              128KB
*/
const info  = await ytdl.getInfo( url ) 

// let format = ytdl.chooseFormat(info.formats, { quality: '136' });
// console.log('Format found!', format);

const title = info.videoDetails.title ?? path.basename(url)

ytdl.downloadFromInfo(info).pipe(fs.createWriteStream(`${title}.mp4`));
