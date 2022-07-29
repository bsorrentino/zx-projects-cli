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

const info  = await ytdl.getInfo( url ) 

const title = info.videoDetails.title ?? path.basename(url)

ytdl.downloadFromInfo(info)
  .pipe(fs.createWriteStream(`${title}.mp4`));
