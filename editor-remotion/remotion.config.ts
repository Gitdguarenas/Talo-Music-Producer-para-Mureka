import { Config } from 'remotion';

Config.setCodec('h264');
Config.setFrameRange([0, 899]);
Config.setPixelFormat('yuv420p');
Config.setCrf(18);
Config.setNumberOfSharedAudioTags(0);
Config.setOutputCodecLevel('4.1');
Config.setImageSequenceFramePadding(5);
Config.setMultiprocessOnLinux(true);
Config.setProResProfile('4444');
Config.setBitrate('8M');
