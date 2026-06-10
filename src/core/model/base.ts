import { Long } from '../Long';
import {
  popByteBuffer, pushByteBuffer, wrapByteBuffer, toUint8Array,
  writeVarint32, writeVarint64, writeString, writeBytes, writeByteBuffer, writeByte,
  readVarint32, readVarint64, readString, readBytes, readByte, readFloat, readDouble,
  writeFloat, writeDouble, longToString, stringToLong, intToLong,
  pushTemporaryLength, skipUnknownField, isAtEnd,
} from './shared';
import type { ByteBuffer } from './shared';

export interface Common {
  method?: string;
  msgId?: string;
  roomId?: string;
  createTime?: string;
  monitor?: number;
  isShowMsg?: boolean;
  describe?: string;
  displayText?: Text;
  foldType?: string;
  anchorFoldType?: string;
  priorityScore?: string;
  logId?: string;
  msgProcessFilterK?: string;
  msgProcessFilterV?: string;
  user?: User;
  room?: Room;
  anchorFoldTypeV2?: string;
  processAtSeiTimeMs?: string;
  randomDispatchMs?: string;
  isDispatch?: boolean;
  channelId?: string;
  diffSei2absSecond?: string;
  anchorFoldDuration?: string;
  appId?: string;
}

export function encodeCommon(message: Common): Uint8Array {
  let bb = popByteBuffer();
  _encodeCommon(message, bb);
  return toUint8Array(bb);
}

export function _encodeCommon(message: Common, bb: ByteBuffer): void {
  // optional string method = 1;
  let $method = message.method;
  if ($method !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $method);
  }

  // optional int64 msgId = 2;
  let $msgId = message.msgId;
  if ($msgId !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $msgId);
  }

  // optional int64 roomId = 3;
  let $roomId = message.roomId;
  if ($roomId !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $roomId);
  }

  // optional int64 createTime = 4;
  let $createTime = message.createTime;
  if ($createTime !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $createTime);
  }

  // optional int32 monitor = 5;
  let $monitor = message.monitor;
  if ($monitor !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($monitor));
  }

  // optional bool isShowMsg = 6;
  let $isShowMsg = message.isShowMsg;
  if ($isShowMsg !== undefined) {
    writeVarint32(bb, 48);
    writeByte(bb, $isShowMsg ? 1 : 0);
  }

  // optional string describe = 7;
  let $describe = message.describe;
  if ($describe !== undefined) {
    writeVarint32(bb, 58);
    writeString(bb, $describe);
  }

  // optional Text displayText = 8;
  let $displayText = message.displayText;
  if ($displayText !== undefined) {
    writeVarint32(bb, 66);
    let nested = popByteBuffer();
    _encodeText($displayText, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 foldType = 9;
  let $foldType = message.foldType;
  if ($foldType !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, $foldType);
  }

  // optional int64 anchorFoldType = 10;
  let $anchorFoldType = message.anchorFoldType;
  if ($anchorFoldType !== undefined) {
    writeVarint32(bb, 80);
    writeVarint64(bb, $anchorFoldType);
  }

  // optional int64 priorityScore = 11;
  let $priorityScore = message.priorityScore;
  if ($priorityScore !== undefined) {
    writeVarint32(bb, 88);
    writeVarint64(bb, $priorityScore);
  }

  // optional string logId = 12;
  let $logId = message.logId;
  if ($logId !== undefined) {
    writeVarint32(bb, 98);
    writeString(bb, $logId);
  }

  // optional string msgProcessFilterK = 13;
  let $msgProcessFilterK = message.msgProcessFilterK;
  if ($msgProcessFilterK !== undefined) {
    writeVarint32(bb, 106);
    writeString(bb, $msgProcessFilterK);
  }

  // optional string msgProcessFilterV = 14;
  let $msgProcessFilterV = message.msgProcessFilterV;
  if ($msgProcessFilterV !== undefined) {
    writeVarint32(bb, 114);
    writeString(bb, $msgProcessFilterV);
  }

  // optional User user = 15;
  let $user = message.user;
  if ($user !== undefined) {
    writeVarint32(bb, 122);
    let nested = popByteBuffer();
    _encodeUser($user, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Room room = 16;
  let $room = message.room;
  if ($room !== undefined) {
    writeVarint32(bb, 130);
    let nested = popByteBuffer();
    _encodeRoom($room, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 anchorFoldTypeV2 = 17;
  let $anchorFoldTypeV2 = message.anchorFoldTypeV2;
  if ($anchorFoldTypeV2 !== undefined) {
    writeVarint32(bb, 136);
    writeVarint64(bb, $anchorFoldTypeV2);
  }

  // optional int64 processAtSeiTimeMs = 18;
  let $processAtSeiTimeMs = message.processAtSeiTimeMs;
  if ($processAtSeiTimeMs !== undefined) {
    writeVarint32(bb, 144);
    writeVarint64(bb, $processAtSeiTimeMs);
  }

  // optional int64 randomDispatchMs = 19;
  let $randomDispatchMs = message.randomDispatchMs;
  if ($randomDispatchMs !== undefined) {
    writeVarint32(bb, 152);
    writeVarint64(bb, $randomDispatchMs);
  }

  // optional bool isDispatch = 20;
  let $isDispatch = message.isDispatch;
  if ($isDispatch !== undefined) {
    writeVarint32(bb, 160);
    writeByte(bb, $isDispatch ? 1 : 0);
  }

  // optional int64 channelId = 21;
  let $channelId = message.channelId;
  if ($channelId !== undefined) {
    writeVarint32(bb, 168);
    writeVarint64(bb, $channelId);
  }

  // optional int64 diffSei2absSecond = 22;
  let $diffSei2absSecond = message.diffSei2absSecond;
  if ($diffSei2absSecond !== undefined) {
    writeVarint32(bb, 176);
    writeVarint64(bb, $diffSei2absSecond);
  }

  // optional int64 anchorFoldDuration = 23;
  let $anchorFoldDuration = message.anchorFoldDuration;
  if ($anchorFoldDuration !== undefined) {
    writeVarint32(bb, 184);
    writeVarint64(bb, $anchorFoldDuration);
  }

  // optional int64 appId = 24;
  let $appId = message.appId;
  if ($appId !== undefined) {
    writeVarint32(bb, 192);
    writeVarint64(bb, $appId);
  }
}

export function decodeCommon(binary: Uint8Array): Common {
  return _decodeCommon(wrapByteBuffer(binary));
}

export function _decodeCommon(bb: ByteBuffer): Common {
  let message: Common = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string method = 1;
      case 1: {
        message.method = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 msgId = 2;
      case 2: {
        message.msgId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 roomId = 3;
      case 3: {
        message.roomId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 createTime = 4;
      case 4: {
        message.createTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 monitor = 5;
      case 5: {
        message.monitor = readVarint32(bb);
        break;
      }

      // optional bool isShowMsg = 6;
      case 6: {
        message.isShowMsg = !!readByte(bb);
        break;
      }

      // optional string describe = 7;
      case 7: {
        message.describe = readString(bb, readVarint32(bb));
        break;
      }

      // optional Text displayText = 8;
      case 8: {
        let limit = pushTemporaryLength(bb);
        message.displayText = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 foldType = 9;
      case 9: {
        message.foldType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 anchorFoldType = 10;
      case 10: {
        message.anchorFoldType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 priorityScore = 11;
      case 11: {
        message.priorityScore = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string logId = 12;
      case 12: {
        message.logId = readString(bb, readVarint32(bb));
        break;
      }

      // optional string msgProcessFilterK = 13;
      case 13: {
        message.msgProcessFilterK = readString(bb, readVarint32(bb));
        break;
      }

      // optional string msgProcessFilterV = 14;
      case 14: {
        message.msgProcessFilterV = readString(bb, readVarint32(bb));
        break;
      }

      // optional User user = 15;
      case 15: {
        let limit = pushTemporaryLength(bb);
        message.user = _decodeUser(bb);
        bb.limit = limit;
        break;
      }

      // optional Room room = 16;
      case 16: {
        let limit = pushTemporaryLength(bb);
        message.room = _decodeRoom(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 anchorFoldTypeV2 = 17;
      case 17: {
        message.anchorFoldTypeV2 = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 processAtSeiTimeMs = 18;
      case 18: {
        message.processAtSeiTimeMs = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 randomDispatchMs = 19;
      case 19: {
        message.randomDispatchMs = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional bool isDispatch = 20;
      case 20: {
        message.isDispatch = !!readByte(bb);
        break;
      }

      // optional int64 channelId = 21;
      case 21: {
        message.channelId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 diffSei2absSecond = 22;
      case 22: {
        message.diffSei2absSecond = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 anchorFoldDuration = 23;
      case 23: {
        message.anchorFoldDuration = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 appId = 24;
      case 24: {
        message.appId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DoubleLikeDetail {
  doubleFlag?: boolean;
  seqId?: number;
  renewalsNum?: number;
  triggersNum?: number;
}

export function encodeDoubleLikeDetail(message: DoubleLikeDetail): Uint8Array {
  let bb = popByteBuffer();
  _encodeDoubleLikeDetail(message, bb);
  return toUint8Array(bb);
}

export function _encodeDoubleLikeDetail(message: DoubleLikeDetail, bb: ByteBuffer): void {
  // optional bool doubleFlag = 1;
  let $doubleFlag = message.doubleFlag;
  if ($doubleFlag !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $doubleFlag ? 1 : 0);
  }

  // optional int32 seqId = 2;
  let $seqId = message.seqId;
  if ($seqId !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($seqId));
  }

  // optional int32 renewalsNum = 3;
  let $renewalsNum = message.renewalsNum;
  if ($renewalsNum !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($renewalsNum));
  }

  // optional int32 triggersNum = 4;
  let $triggersNum = message.triggersNum;
  if ($triggersNum !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($triggersNum));
  }
}

export function decodeDoubleLikeDetail(binary: Uint8Array): DoubleLikeDetail {
  return _decodeDoubleLikeDetail(wrapByteBuffer(binary));
}

export function _decodeDoubleLikeDetail(bb: ByteBuffer): DoubleLikeDetail {
  let message: DoubleLikeDetail = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bool doubleFlag = 1;
      case 1: {
        message.doubleFlag = !!readByte(bb);
        break;
      }

      // optional int32 seqId = 2;
      case 2: {
        message.seqId = readVarint32(bb);
        break;
      }

      // optional int32 renewalsNum = 3;
      case 3: {
        message.renewalsNum = readVarint32(bb);
        break;
      }

      // optional int32 triggersNum = 4;
      case 4: {
        message.triggersNum = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DisplayControlInfo {
  showText?: boolean;
  showIcons?: boolean;
}

export function encodeDisplayControlInfo(message: DisplayControlInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeDisplayControlInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeDisplayControlInfo(message: DisplayControlInfo, bb: ByteBuffer): void {
  // optional bool showText = 1;
  let $showText = message.showText;
  if ($showText !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $showText ? 1 : 0);
  }

  // optional bool showIcons = 2;
  let $showIcons = message.showIcons;
  if ($showIcons !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $showIcons ? 1 : 0);
  }
}

export function decodeDisplayControlInfo(binary: Uint8Array): DisplayControlInfo {
  return _decodeDisplayControlInfo(wrapByteBuffer(binary));
}

export function _decodeDisplayControlInfo(bb: ByteBuffer): DisplayControlInfo {
  let message: DisplayControlInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bool showText = 1;
      case 1: {
        message.showText = !!readByte(bb);
        break;
      }

      // optional bool showIcons = 2;
      case 2: {
        message.showIcons = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface LandscapeAreaCommon {
  showHead?: boolean;
  showNickname?: boolean;
  showFontColor?: boolean;
  colorValue?: string;
  commentTypeTags?: number;
}

export function encodeLandscapeAreaCommon(message: LandscapeAreaCommon): Uint8Array {
  let bb = popByteBuffer();
  _encodeLandscapeAreaCommon(message, bb);
  return toUint8Array(bb);
}

export function _encodeLandscapeAreaCommon(message: LandscapeAreaCommon, bb: ByteBuffer): void {
  // optional bool showHead = 1;
  let $showHead = message.showHead;
  if ($showHead !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $showHead ? 1 : 0);
  }

  // optional bool showNickname = 2;
  let $showNickname = message.showNickname;
  if ($showNickname !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $showNickname ? 1 : 0);
  }

  // optional bool showFontColor = 3;
  let $showFontColor = message.showFontColor;
  if ($showFontColor !== undefined) {
    writeVarint32(bb, 24);
    writeByte(bb, $showFontColor ? 1 : 0);
  }

  // optional string colorValue = 4;
  let $colorValue = message.colorValue;
  if ($colorValue !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $colorValue);
  }

  // optional int32 commentTypeTags = 5;
  let $commentTypeTags = message.commentTypeTags;
  if ($commentTypeTags !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($commentTypeTags));
  }
}

export function decodeLandscapeAreaCommon(binary: Uint8Array): LandscapeAreaCommon {
  return _decodeLandscapeAreaCommon(wrapByteBuffer(binary));
}

export function _decodeLandscapeAreaCommon(bb: ByteBuffer): LandscapeAreaCommon {
  let message: LandscapeAreaCommon = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bool showHead = 1;
      case 1: {
        message.showHead = !!readByte(bb);
        break;
      }

      // optional bool showNickname = 2;
      case 2: {
        message.showNickname = !!readByte(bb);
        break;
      }

      // optional bool showFontColor = 3;
      case 3: {
        message.showFontColor = !!readByte(bb);
        break;
      }

      // optional string colorValue = 4;
      case 4: {
        message.colorValue = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 commentTypeTags = 5;
      case 5: {
        message.commentTypeTags = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface PicoDisplayInfo {
  comboSumCount?: string;
  emoji?: string;
  emojiIcon?: Image;
  emojiText?: string;
}

export function encodePicoDisplayInfo(message: PicoDisplayInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodePicoDisplayInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodePicoDisplayInfo(message: PicoDisplayInfo, bb: ByteBuffer): void {
  // optional int64 comboSumCount = 1;
  let $comboSumCount = message.comboSumCount;
  if ($comboSumCount !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $comboSumCount);
  }

  // optional string emoji = 2;
  let $emoji = message.emoji;
  if ($emoji !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $emoji);
  }

  // optional Image emojiIcon = 3;
  let $emojiIcon = message.emojiIcon;
  if ($emojiIcon !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeImage($emojiIcon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string emojiText = 4;
  let $emojiText = message.emojiText;
  if ($emojiText !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $emojiText);
  }
}

export function decodePicoDisplayInfo(binary: Uint8Array): PicoDisplayInfo {
  return _decodePicoDisplayInfo(wrapByteBuffer(binary));
}

export function _decodePicoDisplayInfo(bb: ByteBuffer): PicoDisplayInfo {
  let message: PicoDisplayInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 comboSumCount = 1;
      case 1: {
        message.comboSumCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string emoji = 2;
      case 2: {
        message.emoji = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image emojiIcon = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.emojiIcon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string emojiText = 4;
      case 4: {
        message.emojiText = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RoomHotInfo {
  localHotStrategy?: number;
  publicAreaLevel?: number;
  giftLevel?: number;
}

export function encodeRoomHotInfo(message: RoomHotInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomHotInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeRoomHotInfo(message: RoomHotInfo, bb: ByteBuffer): void {
  // optional int32 localHotStrategy = 1;
  let $localHotStrategy = message.localHotStrategy;
  if ($localHotStrategy !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($localHotStrategy));
  }

  // optional int32 publicAreaLevel = 2;
  let $publicAreaLevel = message.publicAreaLevel;
  if ($publicAreaLevel !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($publicAreaLevel));
  }

  // optional int32 giftLevel = 3;
  let $giftLevel = message.giftLevel;
  if ($giftLevel !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($giftLevel));
  }
}

export function decodeRoomHotInfo(binary: Uint8Array): RoomHotInfo {
  return _decodeRoomHotInfo(wrapByteBuffer(binary));
}

export function _decodeRoomHotInfo(bb: ByteBuffer): RoomHotInfo {
  let message: RoomHotInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 localHotStrategy = 1;
      case 1: {
        message.localHotStrategy = readVarint32(bb);
        break;
      }

      // optional int32 publicAreaLevel = 2;
      case 2: {
        message.publicAreaLevel = readVarint32(bb);
        break;
      }

      // optional int32 giftLevel = 3;
      case 3: {
        message.giftLevel = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RoomMsgExtra {
  giftExtra?: RoomMsgGiftExtra;
}

export function encodeRoomMsgExtra(message: RoomMsgExtra): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomMsgExtra(message, bb);
  return toUint8Array(bb);
}

export function _encodeRoomMsgExtra(message: RoomMsgExtra, bb: ByteBuffer): void {
  // optional RoomMsgGiftExtra giftExtra = 1;
  let $giftExtra = message.giftExtra;
  if ($giftExtra !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeRoomMsgGiftExtra($giftExtra, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeRoomMsgExtra(binary: Uint8Array): RoomMsgExtra {
  return _decodeRoomMsgExtra(wrapByteBuffer(binary));
}

export function _decodeRoomMsgExtra(bb: ByteBuffer): RoomMsgExtra {
  let message: RoomMsgExtra = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional RoomMsgGiftExtra giftExtra = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.giftExtra = _decodeRoomMsgGiftExtra(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RoomMsgGiftExtra {
  giftId?: string;
  giftName?: string;
  giftCount?: string;
  image?: Image;
  webpImage?: Image;
  groupId?: string;
  clientGiftSource?: number;
  describe?: string;
  diamondCount?: string;
}

export function encodeRoomMsgGiftExtra(message: RoomMsgGiftExtra): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomMsgGiftExtra(message, bb);
  return toUint8Array(bb);
}

export function _encodeRoomMsgGiftExtra(message: RoomMsgGiftExtra, bb: ByteBuffer): void {
  // optional int64 giftId = 1;
  let $giftId = message.giftId;
  if ($giftId !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $giftId);
  }

  // optional string giftName = 2;
  let $giftName = message.giftName;
  if ($giftName !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $giftName);
  }

  // optional int64 giftCount = 3;
  let $giftCount = message.giftCount;
  if ($giftCount !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $giftCount);
  }

  // optional Image image = 4;
  let $image = message.image;
  if ($image !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeImage($image, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image webpImage = 5;
  let $webpImage = message.webpImage;
  if ($webpImage !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeImage($webpImage, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 groupId = 6;
  let $groupId = message.groupId;
  if ($groupId !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $groupId);
  }

  // optional int32 clientGiftSource = 7;
  let $clientGiftSource = message.clientGiftSource;
  if ($clientGiftSource !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, intToLong($clientGiftSource));
  }

  // optional string describe = 8;
  let $describe = message.describe;
  if ($describe !== undefined) {
    writeVarint32(bb, 66);
    writeString(bb, $describe);
  }

  // optional int64 diamondCount = 9;
  let $diamondCount = message.diamondCount;
  if ($diamondCount !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, $diamondCount);
  }
}

export function decodeRoomMsgGiftExtra(binary: Uint8Array): RoomMsgGiftExtra {
  return _decodeRoomMsgGiftExtra(wrapByteBuffer(binary));
}

export function _decodeRoomMsgGiftExtra(bb: ByteBuffer): RoomMsgGiftExtra {
  let message: RoomMsgGiftExtra = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 giftId = 1;
      case 1: {
        message.giftId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string giftName = 2;
      case 2: {
        message.giftName = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 giftCount = 3;
      case 3: {
        message.giftCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Image image = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.image = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image webpImage = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.webpImage = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 groupId = 6;
      case 6: {
        message.groupId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 clientGiftSource = 7;
      case 7: {
        message.clientGiftSource = readVarint32(bb);
        break;
      }

      // optional string describe = 8;
      case 8: {
        message.describe = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 diamondCount = 9;
      case 9: {
        message.diamondCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface EffectImageInfo {
  placeholderKey?: string;
  mixImage?: Image;
}

export function encodeEffectImageInfo(message: EffectImageInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeEffectImageInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeEffectImageInfo(message: EffectImageInfo, bb: ByteBuffer): void {
  // optional string placeholderKey = 1;
  let $placeholderKey = message.placeholderKey;
  if ($placeholderKey !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $placeholderKey);
  }

  // optional Image mixImage = 2;
  let $mixImage = message.mixImage;
  if ($mixImage !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeImage($mixImage, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeEffectImageInfo(binary: Uint8Array): EffectImageInfo {
  return _decodeEffectImageInfo(wrapByteBuffer(binary));
}

export function _decodeEffectImageInfo(bb: ByteBuffer): EffectImageInfo {
  let message: EffectImageInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string placeholderKey = 1;
      case 1: {
        message.placeholderKey = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image mixImage = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.mixImage = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface EffectTextInfo {
  placeholderKey?: string;
  content?: string;
  fontSize?: string;
  fontColor?: string;
}

export function encodeEffectTextInfo(message: EffectTextInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeEffectTextInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeEffectTextInfo(message: EffectTextInfo, bb: ByteBuffer): void {
  // optional string placeholderKey = 1;
  let $placeholderKey = message.placeholderKey;
  if ($placeholderKey !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $placeholderKey);
  }

  // optional string content = 2;
  let $content = message.content;
  if ($content !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $content);
  }

  // optional int64 fontSize = 3;
  let $fontSize = message.fontSize;
  if ($fontSize !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $fontSize);
  }

  // optional string fontColor = 4;
  let $fontColor = message.fontColor;
  if ($fontColor !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $fontColor);
  }
}

export function decodeEffectTextInfo(binary: Uint8Array): EffectTextInfo {
  return _decodeEffectTextInfo(wrapByteBuffer(binary));
}

export function _decodeEffectTextInfo(bb: ByteBuffer): EffectTextInfo {
  let message: EffectTextInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string placeholderKey = 1;
      case 1: {
        message.placeholderKey = readString(bb, readVarint32(bb));
        break;
      }

      // optional string content = 2;
      case 2: {
        message.content = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 fontSize = 3;
      case 3: {
        message.fontSize = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string fontColor = 4;
      case 4: {
        message.fontColor = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SandwichBorder {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export function encodeSandwichBorder(message: SandwichBorder): Uint8Array {
  let bb = popByteBuffer();
  _encodeSandwichBorder(message, bb);
  return toUint8Array(bb);
}

export function _encodeSandwichBorder(message: SandwichBorder, bb: ByteBuffer): void {
  // optional double top = 1;
  let $top = message.top;
  if ($top !== undefined) {
    writeVarint32(bb, 9);
    writeDouble(bb, $top);
  }

  // optional double bottom = 2;
  let $bottom = message.bottom;
  if ($bottom !== undefined) {
    writeVarint32(bb, 17);
    writeDouble(bb, $bottom);
  }

  // optional double left = 3;
  let $left = message.left;
  if ($left !== undefined) {
    writeVarint32(bb, 25);
    writeDouble(bb, $left);
  }

  // optional double right = 4;
  let $right = message.right;
  if ($right !== undefined) {
    writeVarint32(bb, 33);
    writeDouble(bb, $right);
  }
}

export function decodeSandwichBorder(binary: Uint8Array): SandwichBorder {
  return _decodeSandwichBorder(wrapByteBuffer(binary));
}

export function _decodeSandwichBorder(bb: ByteBuffer): SandwichBorder {
  let message: SandwichBorder = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional double top = 1;
      case 1: {
        message.top = readDouble(bb);
        break;
      }

      // optional double bottom = 2;
      case 2: {
        message.bottom = readDouble(bb);
        break;
      }

      // optional double left = 3;
      case 3: {
        message.left = readDouble(bb);
        break;
      }

      // optional double right = 4;
      case 4: {
        message.right = readDouble(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Text {
  key?: string;
  defaultPattern?: string;
  defaultFormat?: TextFormat;
  pieces?: TextPiece[];
}

export function encodeText(message: Text): Uint8Array {
  let bb = popByteBuffer();
  _encodeText(message, bb);
  return toUint8Array(bb);
}

export function _encodeText(message: Text, bb: ByteBuffer): void {
  // optional string key = 1;
  let $key = message.key;
  if ($key !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $key);
  }

  // optional string defaultPattern = 2;
  let $defaultPattern = message.defaultPattern;
  if ($defaultPattern !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $defaultPattern);
  }

  // optional TextFormat defaultFormat = 3;
  let $defaultFormat = message.defaultFormat;
  if ($defaultFormat !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeTextFormat($defaultFormat, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // repeated TextPiece pieces = 4;
  let array$pieces = message.pieces;
  if (array$pieces !== undefined) {
    for (let value of array$pieces) {
      writeVarint32(bb, 34);
      let nested = popByteBuffer();
      _encodeTextPiece(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeText(binary: Uint8Array): Text {
  return _decodeText(wrapByteBuffer(binary));
}

export function _decodeText(bb: ByteBuffer): Text {
  let message: Text = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string key = 1;
      case 1: {
        message.key = readString(bb, readVarint32(bb));
        break;
      }

      // optional string defaultPattern = 2;
      case 2: {
        message.defaultPattern = readString(bb, readVarint32(bb));
        break;
      }

      // optional TextFormat defaultFormat = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.defaultFormat = _decodeTextFormat(bb);
        bb.limit = limit;
        break;
      }

      // repeated TextPiece pieces = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        let values = message.pieces || (message.pieces = []);
        values.push(_decodeTextPiece(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Room {
  id?: string;
  idStr?: string;
  status?: string;
  ownerUserId?: string;
  title?: string;
  userCount?: string;
  createTime?: string;
  linkmicLayout?: string;
  finishTime?: string;
  extra?: RoomExtra;
  dynamicCoverUri?: string;
  dynamicCoverDict?: { [key: string]: string };
  lastPingTime?: string;
  liveId?: string;
  streamProvider?: string;
  osType?: string;
  clientVersion?: string;
  withLinkmic?: boolean;
  enableRoomPerspective?: boolean;
  cover?: Image;
  dynamicCover?: Image;
  dynamicCoverLow?: Image;
  shareUrl?: string;
  anchorShareText?: string;
  userShareText?: string;
  streamId?: string;
  streamIdStr?: string;
  streamUrl?: StreamUrl;
  mosaicStatus?: string;
  mosaicTip?: string;
  cellStyle?: string;
  linkMic?: LinkMic;
  luckymoneyNum?: string;
  decoList?: Decoration[];
  topFans?: TopFan[];
  stats?: RoomStats;
  sunDailyIconContent?: string;
  distance?: string;
  distanceCity?: string;
  location?: string;
  realDistance?: string;
  feedRoomLabel?: Image;
  commonLabelList?: string;
  livingRoomAttrs?: RoomUserAttr;
  adminUserIds?: string[];
  owner?: User;
  privateInfo?: string;
}

export function encodeRoom(message: Room): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoom(message, bb);
  return toUint8Array(bb);
}

export function _encodeRoom(message: Room, bb: ByteBuffer): void {
  // optional int64 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $id);
  }

  // optional string idStr = 2;
  let $idStr = message.idStr;
  if ($idStr !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $idStr);
  }

  // optional int64 status = 3;
  let $status = message.status;
  if ($status !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $status);
  }

  // optional int64 ownerUserId = 4;
  let $ownerUserId = message.ownerUserId;
  if ($ownerUserId !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $ownerUserId);
  }

  // optional string title = 5;
  let $title = message.title;
  if ($title !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $title);
  }

  // optional int64 userCount = 6;
  let $userCount = message.userCount;
  if ($userCount !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $userCount);
  }

  // optional int64 createTime = 7;
  let $createTime = message.createTime;
  if ($createTime !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $createTime);
  }

  // optional int64 linkmicLayout = 8;
  let $linkmicLayout = message.linkmicLayout;
  if ($linkmicLayout !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, $linkmicLayout);
  }

  // optional int64 finishTime = 9;
  let $finishTime = message.finishTime;
  if ($finishTime !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, $finishTime);
  }

  // optional RoomExtra extra = 10;
  let $extra = message.extra;
  if ($extra !== undefined) {
    writeVarint32(bb, 82);
    let nested = popByteBuffer();
    _encodeRoomExtra($extra, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string dynamicCoverUri = 11;
  let $dynamicCoverUri = message.dynamicCoverUri;
  if ($dynamicCoverUri !== undefined) {
    writeVarint32(bb, 90);
    writeString(bb, $dynamicCoverUri);
  }

  // optional map<int64, string> dynamicCoverDict = 12;
  let map$dynamicCoverDict = message.dynamicCoverDict;
  if (map$dynamicCoverDict !== undefined) {
    for (let key in map$dynamicCoverDict) {
      let nested = popByteBuffer();
      let value = map$dynamicCoverDict[key];
      writeVarint32(nested, 8);
      writeVarint64(nested, stringToLong(key));
      writeVarint32(nested, 18);
      writeString(nested, value);
      writeVarint32(bb, 98);
      writeVarint32(bb, nested.offset);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional int64 lastPingTime = 13;
  let $lastPingTime = message.lastPingTime;
  if ($lastPingTime !== undefined) {
    writeVarint32(bb, 104);
    writeVarint64(bb, $lastPingTime);
  }

  // optional int64 liveId = 14;
  let $liveId = message.liveId;
  if ($liveId !== undefined) {
    writeVarint32(bb, 112);
    writeVarint64(bb, $liveId);
  }

  // optional int64 streamProvider = 15;
  let $streamProvider = message.streamProvider;
  if ($streamProvider !== undefined) {
    writeVarint32(bb, 120);
    writeVarint64(bb, $streamProvider);
  }

  // optional int64 osType = 16;
  let $osType = message.osType;
  if ($osType !== undefined) {
    writeVarint32(bb, 128);
    writeVarint64(bb, $osType);
  }

  // optional int64 clientVersion = 17;
  let $clientVersion = message.clientVersion;
  if ($clientVersion !== undefined) {
    writeVarint32(bb, 136);
    writeVarint64(bb, $clientVersion);
  }

  // optional bool withLinkmic = 18;
  let $withLinkmic = message.withLinkmic;
  if ($withLinkmic !== undefined) {
    writeVarint32(bb, 144);
    writeByte(bb, $withLinkmic ? 1 : 0);
  }

  // optional bool enableRoomPerspective = 19;
  let $enableRoomPerspective = message.enableRoomPerspective;
  if ($enableRoomPerspective !== undefined) {
    writeVarint32(bb, 152);
    writeByte(bb, $enableRoomPerspective ? 1 : 0);
  }

  // optional Image cover = 20;
  let $cover = message.cover;
  if ($cover !== undefined) {
    writeVarint32(bb, 162);
    let nested = popByteBuffer();
    _encodeImage($cover, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image dynamicCover = 21;
  let $dynamicCover = message.dynamicCover;
  if ($dynamicCover !== undefined) {
    writeVarint32(bb, 170);
    let nested = popByteBuffer();
    _encodeImage($dynamicCover, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image dynamicCoverLow = 22;
  let $dynamicCoverLow = message.dynamicCoverLow;
  if ($dynamicCoverLow !== undefined) {
    writeVarint32(bb, 178);
    let nested = popByteBuffer();
    _encodeImage($dynamicCoverLow, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string shareUrl = 23;
  let $shareUrl = message.shareUrl;
  if ($shareUrl !== undefined) {
    writeVarint32(bb, 186);
    writeString(bb, $shareUrl);
  }

  // optional string anchorShareText = 24;
  let $anchorShareText = message.anchorShareText;
  if ($anchorShareText !== undefined) {
    writeVarint32(bb, 194);
    writeString(bb, $anchorShareText);
  }

  // optional string userShareText = 25;
  let $userShareText = message.userShareText;
  if ($userShareText !== undefined) {
    writeVarint32(bb, 202);
    writeString(bb, $userShareText);
  }

  // optional int64 streamId = 26;
  let $streamId = message.streamId;
  if ($streamId !== undefined) {
    writeVarint32(bb, 208);
    writeVarint64(bb, $streamId);
  }

  // optional string streamIdStr = 27;
  let $streamIdStr = message.streamIdStr;
  if ($streamIdStr !== undefined) {
    writeVarint32(bb, 218);
    writeString(bb, $streamIdStr);
  }

  // optional StreamUrl streamUrl = 28;
  let $streamUrl = message.streamUrl;
  if ($streamUrl !== undefined) {
    writeVarint32(bb, 226);
    let nested = popByteBuffer();
    _encodeStreamUrl($streamUrl, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 mosaicStatus = 29;
  let $mosaicStatus = message.mosaicStatus;
  if ($mosaicStatus !== undefined) {
    writeVarint32(bb, 232);
    writeVarint64(bb, $mosaicStatus);
  }

  // optional string mosaicTip = 30;
  let $mosaicTip = message.mosaicTip;
  if ($mosaicTip !== undefined) {
    writeVarint32(bb, 242);
    writeString(bb, $mosaicTip);
  }

  // optional int64 cellStyle = 31;
  let $cellStyle = message.cellStyle;
  if ($cellStyle !== undefined) {
    writeVarint32(bb, 248);
    writeVarint64(bb, $cellStyle);
  }

  // optional LinkMic linkMic = 32;
  let $linkMic = message.linkMic;
  if ($linkMic !== undefined) {
    writeVarint32(bb, 258);
    let nested = popByteBuffer();
    _encodeLinkMic($linkMic, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 luckymoneyNum = 33;
  let $luckymoneyNum = message.luckymoneyNum;
  if ($luckymoneyNum !== undefined) {
    writeVarint32(bb, 264);
    writeVarint64(bb, $luckymoneyNum);
  }

  // repeated Decoration decoList = 34;
  let array$decoList = message.decoList;
  if (array$decoList !== undefined) {
    for (let value of array$decoList) {
      writeVarint32(bb, 274);
      let nested = popByteBuffer();
      _encodeDecoration(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // repeated TopFan topFans = 35;
  let array$topFans = message.topFans;
  if (array$topFans !== undefined) {
    for (let value of array$topFans) {
      writeVarint32(bb, 282);
      let nested = popByteBuffer();
      _encodeTopFan(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional RoomStats stats = 36;
  let $stats = message.stats;
  if ($stats !== undefined) {
    writeVarint32(bb, 290);
    let nested = popByteBuffer();
    _encodeRoomStats($stats, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string sunDailyIconContent = 37;
  let $sunDailyIconContent = message.sunDailyIconContent;
  if ($sunDailyIconContent !== undefined) {
    writeVarint32(bb, 298);
    writeString(bb, $sunDailyIconContent);
  }

  // optional string distance = 38;
  let $distance = message.distance;
  if ($distance !== undefined) {
    writeVarint32(bb, 306);
    writeString(bb, $distance);
  }

  // optional string distanceCity = 39;
  let $distanceCity = message.distanceCity;
  if ($distanceCity !== undefined) {
    writeVarint32(bb, 314);
    writeString(bb, $distanceCity);
  }

  // optional string location = 40;
  let $location = message.location;
  if ($location !== undefined) {
    writeVarint32(bb, 322);
    writeString(bb, $location);
  }

  // optional string realDistance = 41;
  let $realDistance = message.realDistance;
  if ($realDistance !== undefined) {
    writeVarint32(bb, 330);
    writeString(bb, $realDistance);
  }

  // optional Image feedRoomLabel = 42;
  let $feedRoomLabel = message.feedRoomLabel;
  if ($feedRoomLabel !== undefined) {
    writeVarint32(bb, 338);
    let nested = popByteBuffer();
    _encodeImage($feedRoomLabel, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string commonLabelList = 43;
  let $commonLabelList = message.commonLabelList;
  if ($commonLabelList !== undefined) {
    writeVarint32(bb, 346);
    writeString(bb, $commonLabelList);
  }

  // optional RoomUserAttr livingRoomAttrs = 44;
  let $livingRoomAttrs = message.livingRoomAttrs;
  if ($livingRoomAttrs !== undefined) {
    writeVarint32(bb, 354);
    let nested = popByteBuffer();
    _encodeRoomUserAttr($livingRoomAttrs, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // repeated int64 adminUserIds = 45;
  let array$adminUserIds = message.adminUserIds;
  if (array$adminUserIds !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$adminUserIds) {
      writeVarint64(packed, value);
    }
    writeVarint32(bb, 362);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // optional User owner = 46;
  let $owner = message.owner;
  if ($owner !== undefined) {
    writeVarint32(bb, 370);
    let nested = popByteBuffer();
    _encodeUser($owner, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string privateInfo = 47;
  let $privateInfo = message.privateInfo;
  if ($privateInfo !== undefined) {
    writeVarint32(bb, 378);
    writeString(bb, $privateInfo);
  }
}

export function decodeRoom(binary: Uint8Array): Room {
  return _decodeRoom(wrapByteBuffer(binary));
}

export function _decodeRoom(bb: ByteBuffer): Room {
  let message: Room = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 id = 1;
      case 1: {
        message.id = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string idStr = 2;
      case 2: {
        message.idStr = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 status = 3;
      case 3: {
        message.status = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 ownerUserId = 4;
      case 4: {
        message.ownerUserId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string title = 5;
      case 5: {
        message.title = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 userCount = 6;
      case 6: {
        message.userCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 createTime = 7;
      case 7: {
        message.createTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 linkmicLayout = 8;
      case 8: {
        message.linkmicLayout = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 finishTime = 9;
      case 9: {
        message.finishTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional RoomExtra extra = 10;
      case 10: {
        let limit = pushTemporaryLength(bb);
        message.extra = _decodeRoomExtra(bb);
        bb.limit = limit;
        break;
      }

      // optional string dynamicCoverUri = 11;
      case 11: {
        message.dynamicCoverUri = readString(bb, readVarint32(bb));
        break;
      }

      // optional map<int64, string> dynamicCoverDict = 12;
      case 12: {
        let values = message.dynamicCoverDict || (message.dynamicCoverDict = {});
        let outerLimit = pushTemporaryLength(bb);
        let key: string | undefined;
        let value: string | undefined;
        end_of_entry: while (!isAtEnd(bb)) {
          let tag = readVarint32(bb);
          switch (tag >>> 3) {
            case 0:
              break end_of_entry;
            case 1: {
              key = readVarint64(bb, /* unsigned */ false);
              break;
            }
            case 2: {
              value = readString(bb, readVarint32(bb));
              break;
            }
            default:
              skipUnknownField(bb, tag & 7);
          }
        }
        if (key === undefined || value === undefined) throw new Error('Invalid data for map: dynamicCoverDict');
        values[key] = value;
        bb.limit = outerLimit;
        break;
      }

      // optional int64 lastPingTime = 13;
      case 13: {
        message.lastPingTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 liveId = 14;
      case 14: {
        message.liveId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 streamProvider = 15;
      case 15: {
        message.streamProvider = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 osType = 16;
      case 16: {
        message.osType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 clientVersion = 17;
      case 17: {
        message.clientVersion = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional bool withLinkmic = 18;
      case 18: {
        message.withLinkmic = !!readByte(bb);
        break;
      }

      // optional bool enableRoomPerspective = 19;
      case 19: {
        message.enableRoomPerspective = !!readByte(bb);
        break;
      }

      // optional Image cover = 20;
      case 20: {
        let limit = pushTemporaryLength(bb);
        message.cover = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image dynamicCover = 21;
      case 21: {
        let limit = pushTemporaryLength(bb);
        message.dynamicCover = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image dynamicCoverLow = 22;
      case 22: {
        let limit = pushTemporaryLength(bb);
        message.dynamicCoverLow = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string shareUrl = 23;
      case 23: {
        message.shareUrl = readString(bb, readVarint32(bb));
        break;
      }

      // optional string anchorShareText = 24;
      case 24: {
        message.anchorShareText = readString(bb, readVarint32(bb));
        break;
      }

      // optional string userShareText = 25;
      case 25: {
        message.userShareText = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 streamId = 26;
      case 26: {
        message.streamId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string streamIdStr = 27;
      case 27: {
        message.streamIdStr = readString(bb, readVarint32(bb));
        break;
      }

      // optional StreamUrl streamUrl = 28;
      case 28: {
        let limit = pushTemporaryLength(bb);
        message.streamUrl = _decodeStreamUrl(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 mosaicStatus = 29;
      case 29: {
        message.mosaicStatus = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string mosaicTip = 30;
      case 30: {
        message.mosaicTip = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 cellStyle = 31;
      case 31: {
        message.cellStyle = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional LinkMic linkMic = 32;
      case 32: {
        let limit = pushTemporaryLength(bb);
        message.linkMic = _decodeLinkMic(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 luckymoneyNum = 33;
      case 33: {
        message.luckymoneyNum = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // repeated Decoration decoList = 34;
      case 34: {
        let limit = pushTemporaryLength(bb);
        let values = message.decoList || (message.decoList = []);
        values.push(_decodeDecoration(bb));
        bb.limit = limit;
        break;
      }

      // repeated TopFan topFans = 35;
      case 35: {
        let limit = pushTemporaryLength(bb);
        let values = message.topFans || (message.topFans = []);
        values.push(_decodeTopFan(bb));
        bb.limit = limit;
        break;
      }

      // optional RoomStats stats = 36;
      case 36: {
        let limit = pushTemporaryLength(bb);
        message.stats = _decodeRoomStats(bb);
        bb.limit = limit;
        break;
      }

      // optional string sunDailyIconContent = 37;
      case 37: {
        message.sunDailyIconContent = readString(bb, readVarint32(bb));
        break;
      }

      // optional string distance = 38;
      case 38: {
        message.distance = readString(bb, readVarint32(bb));
        break;
      }

      // optional string distanceCity = 39;
      case 39: {
        message.distanceCity = readString(bb, readVarint32(bb));
        break;
      }

      // optional string location = 40;
      case 40: {
        message.location = readString(bb, readVarint32(bb));
        break;
      }

      // optional string realDistance = 41;
      case 41: {
        message.realDistance = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image feedRoomLabel = 42;
      case 42: {
        let limit = pushTemporaryLength(bb);
        message.feedRoomLabel = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string commonLabelList = 43;
      case 43: {
        message.commonLabelList = readString(bb, readVarint32(bb));
        break;
      }

      // optional RoomUserAttr livingRoomAttrs = 44;
      case 44: {
        let limit = pushTemporaryLength(bb);
        message.livingRoomAttrs = _decodeRoomUserAttr(bb);
        bb.limit = limit;
        break;
      }

      // repeated int64 adminUserIds = 45;
      case 45: {
        let values = message.adminUserIds || (message.adminUserIds = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint64(bb, /* unsigned */ false));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint64(bb, /* unsigned */ false));
        }
        break;
      }

      // optional User owner = 46;
      case 46: {
        let limit = pushTemporaryLength(bb);
        message.owner = _decodeUser(bb);
        bb.limit = limit;
        break;
      }

      // optional string privateInfo = 47;
      case 47: {
        message.privateInfo = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RoomExtra {}

export function encodeRoomExtra(message: RoomExtra): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomExtra(message, bb);
  return toUint8Array(bb);
}

export function _encodeRoomExtra(message: RoomExtra, bb: ByteBuffer): void {}

export function decodeRoomExtra(binary: Uint8Array): RoomExtra {
  return _decodeRoomExtra(wrapByteBuffer(binary));
}

export function _decodeRoomExtra(bb: ByteBuffer): RoomExtra {
  let message: RoomExtra = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RoomStats {
  id?: string;
  idStr?: string;
  fanTicket?: string;
  money?: string;
  totalUser?: string;
  giftUvCount?: string;
  followCount?: string;
  userCountComposition?: RoomStats_UserCountComposition;
  watermelon?: string;
  diggCount?: string;
  enterCount?: string;
  douPlusPromotion?: string;
  totalUserDesp?: string;
  likeCount?: string;
  totalUserStr?: string;
  userCountStr?: string;
  commentCount?: string;
  welfareDonationAmount?: string;
  upRightStatsStr?: string;
  upRightStatsStrComplete?: string;
}

export function encodeRoomStats(message: RoomStats): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomStats(message, bb);
  return toUint8Array(bb);
}

export function _encodeRoomStats(message: RoomStats, bb: ByteBuffer): void {
  // optional int64 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $id);
  }

  // optional string idStr = 2;
  let $idStr = message.idStr;
  if ($idStr !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $idStr);
  }

  // optional int64 fanTicket = 3;
  let $fanTicket = message.fanTicket;
  if ($fanTicket !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $fanTicket);
  }

  // optional int64 money = 4;
  let $money = message.money;
  if ($money !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $money);
  }

  // optional int64 totalUser = 5;
  let $totalUser = message.totalUser;
  if ($totalUser !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $totalUser);
  }

  // optional int64 giftUvCount = 6;
  let $giftUvCount = message.giftUvCount;
  if ($giftUvCount !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $giftUvCount);
  }

  // optional int64 followCount = 7;
  let $followCount = message.followCount;
  if ($followCount !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $followCount);
  }

  // optional RoomStats_UserCountComposition userCountComposition = 8;
  let $userCountComposition = message.userCountComposition;
  if ($userCountComposition !== undefined) {
    writeVarint32(bb, 66);
    let nested = popByteBuffer();
    _encodeRoomStats_UserCountComposition($userCountComposition, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 watermelon = 9;
  let $watermelon = message.watermelon;
  if ($watermelon !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, $watermelon);
  }

  // optional int64 diggCount = 10;
  let $diggCount = message.diggCount;
  if ($diggCount !== undefined) {
    writeVarint32(bb, 80);
    writeVarint64(bb, $diggCount);
  }

  // optional int64 enterCount = 11;
  let $enterCount = message.enterCount;
  if ($enterCount !== undefined) {
    writeVarint32(bb, 88);
    writeVarint64(bb, $enterCount);
  }

  // optional string douPlusPromotion = 12;
  let $douPlusPromotion = message.douPlusPromotion;
  if ($douPlusPromotion !== undefined) {
    writeVarint32(bb, 98);
    writeString(bb, $douPlusPromotion);
  }

  // optional string totalUserDesp = 13;
  let $totalUserDesp = message.totalUserDesp;
  if ($totalUserDesp !== undefined) {
    writeVarint32(bb, 106);
    writeString(bb, $totalUserDesp);
  }

  // optional int64 likeCount = 14;
  let $likeCount = message.likeCount;
  if ($likeCount !== undefined) {
    writeVarint32(bb, 112);
    writeVarint64(bb, $likeCount);
  }

  // optional string totalUserStr = 15;
  let $totalUserStr = message.totalUserStr;
  if ($totalUserStr !== undefined) {
    writeVarint32(bb, 122);
    writeString(bb, $totalUserStr);
  }

  // optional string userCountStr = 16;
  let $userCountStr = message.userCountStr;
  if ($userCountStr !== undefined) {
    writeVarint32(bb, 130);
    writeString(bb, $userCountStr);
  }

  // optional int64 commentCount = 17;
  let $commentCount = message.commentCount;
  if ($commentCount !== undefined) {
    writeVarint32(bb, 136);
    writeVarint64(bb, $commentCount);
  }

  // optional int64 welfareDonationAmount = 18;
  let $welfareDonationAmount = message.welfareDonationAmount;
  if ($welfareDonationAmount !== undefined) {
    writeVarint32(bb, 144);
    writeVarint64(bb, $welfareDonationAmount);
  }

  // optional string upRightStatsStr = 19;
  let $upRightStatsStr = message.upRightStatsStr;
  if ($upRightStatsStr !== undefined) {
    writeVarint32(bb, 154);
    writeString(bb, $upRightStatsStr);
  }

  // optional string upRightStatsStrComplete = 20;
  let $upRightStatsStrComplete = message.upRightStatsStrComplete;
  if ($upRightStatsStrComplete !== undefined) {
    writeVarint32(bb, 162);
    writeString(bb, $upRightStatsStrComplete);
  }
}

export function decodeRoomStats(binary: Uint8Array): RoomStats {
  return _decodeRoomStats(wrapByteBuffer(binary));
}

export function _decodeRoomStats(bb: ByteBuffer): RoomStats {
  let message: RoomStats = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 id = 1;
      case 1: {
        message.id = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string idStr = 2;
      case 2: {
        message.idStr = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 fanTicket = 3;
      case 3: {
        message.fanTicket = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 money = 4;
      case 4: {
        message.money = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 totalUser = 5;
      case 5: {
        message.totalUser = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 giftUvCount = 6;
      case 6: {
        message.giftUvCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 followCount = 7;
      case 7: {
        message.followCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional RoomStats_UserCountComposition userCountComposition = 8;
      case 8: {
        let limit = pushTemporaryLength(bb);
        message.userCountComposition = _decodeRoomStats_UserCountComposition(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 watermelon = 9;
      case 9: {
        message.watermelon = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 diggCount = 10;
      case 10: {
        message.diggCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 enterCount = 11;
      case 11: {
        message.enterCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string douPlusPromotion = 12;
      case 12: {
        message.douPlusPromotion = readString(bb, readVarint32(bb));
        break;
      }

      // optional string totalUserDesp = 13;
      case 13: {
        message.totalUserDesp = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 likeCount = 14;
      case 14: {
        message.likeCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string totalUserStr = 15;
      case 15: {
        message.totalUserStr = readString(bb, readVarint32(bb));
        break;
      }

      // optional string userCountStr = 16;
      case 16: {
        message.userCountStr = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 commentCount = 17;
      case 17: {
        message.commentCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 welfareDonationAmount = 18;
      case 18: {
        message.welfareDonationAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string upRightStatsStr = 19;
      case 19: {
        message.upRightStatsStr = readString(bb, readVarint32(bb));
        break;
      }

      // optional string upRightStatsStrComplete = 20;
      case 20: {
        message.upRightStatsStrComplete = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RoomStats_UserCountComposition {}

export function encodeRoomStats_UserCountComposition(message: RoomStats_UserCountComposition): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomStats_UserCountComposition(message, bb);
  return toUint8Array(bb);
}

export function _encodeRoomStats_UserCountComposition(message: RoomStats_UserCountComposition, bb: ByteBuffer): void {}

export function decodeRoomStats_UserCountComposition(binary: Uint8Array): RoomStats_UserCountComposition {
  return _decodeRoomStats_UserCountComposition(wrapByteBuffer(binary));
}

export function _decodeRoomStats_UserCountComposition(bb: ByteBuffer): RoomStats_UserCountComposition {
  let message: RoomStats_UserCountComposition = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RoomUserAttr {}

export function encodeRoomUserAttr(message: RoomUserAttr): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomUserAttr(message, bb);
  return toUint8Array(bb);
}

export function _encodeRoomUserAttr(message: RoomUserAttr, bb: ByteBuffer): void {}

export function decodeRoomUserAttr(binary: Uint8Array): RoomUserAttr {
  return _decodeRoomUserAttr(wrapByteBuffer(binary));
}

export function _decodeRoomUserAttr(bb: ByteBuffer): RoomUserAttr {
  let message: RoomUserAttr = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RanklistHourEntrance {
  globalInfos?: RanklistHourEntrance_Info[];
  defaultGlobalInfos?: RanklistHourEntrance_Info[];
  verticalInfos?: RanklistHourEntrance_Info[];
  defaultVerticalInfos?: RanklistHourEntrance_Info[];
}

export function encodeRanklistHourEntrance(message: RanklistHourEntrance): Uint8Array {
  let bb = popByteBuffer();
  _encodeRanklistHourEntrance(message, bb);
  return toUint8Array(bb);
}

export function _encodeRanklistHourEntrance(message: RanklistHourEntrance, bb: ByteBuffer): void {
  // repeated RanklistHourEntrance_Info globalInfos = 1;
  let array$globalInfos = message.globalInfos;
  if (array$globalInfos !== undefined) {
    for (let value of array$globalInfos) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeRanklistHourEntrance_Info(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // repeated RanklistHourEntrance_Info defaultGlobalInfos = 2;
  let array$defaultGlobalInfos = message.defaultGlobalInfos;
  if (array$defaultGlobalInfos !== undefined) {
    for (let value of array$defaultGlobalInfos) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeRanklistHourEntrance_Info(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // repeated RanklistHourEntrance_Info verticalInfos = 3;
  let array$verticalInfos = message.verticalInfos;
  if (array$verticalInfos !== undefined) {
    for (let value of array$verticalInfos) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodeRanklistHourEntrance_Info(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // repeated RanklistHourEntrance_Info defaultVerticalInfos = 4;
  let array$defaultVerticalInfos = message.defaultVerticalInfos;
  if (array$defaultVerticalInfos !== undefined) {
    for (let value of array$defaultVerticalInfos) {
      writeVarint32(bb, 34);
      let nested = popByteBuffer();
      _encodeRanklistHourEntrance_Info(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeRanklistHourEntrance(binary: Uint8Array): RanklistHourEntrance {
  return _decodeRanklistHourEntrance(wrapByteBuffer(binary));
}

export function _decodeRanklistHourEntrance(bb: ByteBuffer): RanklistHourEntrance {
  let message: RanklistHourEntrance = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated RanklistHourEntrance_Info globalInfos = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.globalInfos || (message.globalInfos = []);
        values.push(_decodeRanklistHourEntrance_Info(bb));
        bb.limit = limit;
        break;
      }

      // repeated RanklistHourEntrance_Info defaultGlobalInfos = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.defaultGlobalInfos || (message.defaultGlobalInfos = []);
        values.push(_decodeRanklistHourEntrance_Info(bb));
        bb.limit = limit;
        break;
      }

      // repeated RanklistHourEntrance_Info verticalInfos = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.verticalInfos || (message.verticalInfos = []);
        values.push(_decodeRanklistHourEntrance_Info(bb));
        bb.limit = limit;
        break;
      }

      // repeated RanklistHourEntrance_Info defaultVerticalInfos = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        let values = message.defaultVerticalInfos || (message.defaultVerticalInfos = []);
        values.push(_decodeRanklistHourEntrance_Info(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RanklistHourEntrance_Info {
  details?: RanklistHourEntrance_Detail[];
}

export function encodeRanklistHourEntrance_Info(message: RanklistHourEntrance_Info): Uint8Array {
  let bb = popByteBuffer();
  _encodeRanklistHourEntrance_Info(message, bb);
  return toUint8Array(bb);
}

export function _encodeRanklistHourEntrance_Info(message: RanklistHourEntrance_Info, bb: ByteBuffer): void {
  // repeated RanklistHourEntrance_Detail details = 1;
  let array$details = message.details;
  if (array$details !== undefined) {
    for (let value of array$details) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeRanklistHourEntrance_Detail(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeRanklistHourEntrance_Info(binary: Uint8Array): RanklistHourEntrance_Info {
  return _decodeRanklistHourEntrance_Info(wrapByteBuffer(binary));
}

export function _decodeRanklistHourEntrance_Info(bb: ByteBuffer): RanklistHourEntrance_Info {
  let message: RanklistHourEntrance_Info = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated RanklistHourEntrance_Detail details = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.details || (message.details = []);
        values.push(_decodeRanklistHourEntrance_Detail(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RanklistHourEntrance_Detail {
  pages?: RanklistHourEntrance_Page[];
  ranklistType?: number;
  title?: string;
  ranklistExtra?: string;
  entranceExtra?: string;
  schema?: string;
}

export function encodeRanklistHourEntrance_Detail(message: RanklistHourEntrance_Detail): Uint8Array {
  let bb = popByteBuffer();
  _encodeRanklistHourEntrance_Detail(message, bb);
  return toUint8Array(bb);
}

export function _encodeRanklistHourEntrance_Detail(message: RanklistHourEntrance_Detail, bb: ByteBuffer): void {
  // repeated RanklistHourEntrance_Page pages = 1;
  let array$pages = message.pages;
  if (array$pages !== undefined) {
    for (let value of array$pages) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeRanklistHourEntrance_Page(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional int32 ranklistType = 2;
  let $ranklistType = message.ranklistType;
  if ($ranklistType !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($ranklistType));
  }

  // optional string title = 3;
  let $title = message.title;
  if ($title !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $title);
  }

  // optional string ranklistExtra = 4;
  let $ranklistExtra = message.ranklistExtra;
  if ($ranklistExtra !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $ranklistExtra);
  }

  // optional string entranceExtra = 5;
  let $entranceExtra = message.entranceExtra;
  if ($entranceExtra !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $entranceExtra);
  }

  // optional string schema = 6;
  let $schema = message.schema;
  if ($schema !== undefined) {
    writeVarint32(bb, 50);
    writeString(bb, $schema);
  }
}

export function decodeRanklistHourEntrance_Detail(binary: Uint8Array): RanklistHourEntrance_Detail {
  return _decodeRanklistHourEntrance_Detail(wrapByteBuffer(binary));
}

export function _decodeRanklistHourEntrance_Detail(bb: ByteBuffer): RanklistHourEntrance_Detail {
  let message: RanklistHourEntrance_Detail = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated RanklistHourEntrance_Page pages = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.pages || (message.pages = []);
        values.push(_decodeRanklistHourEntrance_Page(bb));
        bb.limit = limit;
        break;
      }

      // optional int32 ranklistType = 2;
      case 2: {
        message.ranklistType = readVarint32(bb);
        break;
      }

      // optional string title = 3;
      case 3: {
        message.title = readString(bb, readVarint32(bb));
        break;
      }

      // optional string ranklistExtra = 4;
      case 4: {
        message.ranklistExtra = readString(bb, readVarint32(bb));
        break;
      }

      // optional string entranceExtra = 5;
      case 5: {
        message.entranceExtra = readString(bb, readVarint32(bb));
        break;
      }

      // optional string schema = 6;
      case 6: {
        message.schema = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RanklistHourEntrance_Page {
  content?: string;
  backgroundColor?: string;
  showTimes?: string;
  contentType?: number;
}

export function encodeRanklistHourEntrance_Page(message: RanklistHourEntrance_Page): Uint8Array {
  let bb = popByteBuffer();
  _encodeRanklistHourEntrance_Page(message, bb);
  return toUint8Array(bb);
}

export function _encodeRanklistHourEntrance_Page(message: RanklistHourEntrance_Page, bb: ByteBuffer): void {
  // optional string content = 1;
  let $content = message.content;
  if ($content !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $content);
  }

  // optional string backgroundColor = 2;
  let $backgroundColor = message.backgroundColor;
  if ($backgroundColor !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $backgroundColor);
  }

  // optional int64 showTimes = 3;
  let $showTimes = message.showTimes;
  if ($showTimes !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $showTimes);
  }

  // optional int32 contentType = 4;
  let $contentType = message.contentType;
  if ($contentType !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($contentType));
  }
}

export function decodeRanklistHourEntrance_Page(binary: Uint8Array): RanklistHourEntrance_Page {
  return _decodeRanklistHourEntrance_Page(wrapByteBuffer(binary));
}

export function _decodeRanklistHourEntrance_Page(bb: ByteBuffer): RanklistHourEntrance_Page {
  let message: RanklistHourEntrance_Page = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string content = 1;
      case 1: {
        message.content = readString(bb, readVarint32(bb));
        break;
      }

      // optional string backgroundColor = 2;
      case 2: {
        message.backgroundColor = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 showTimes = 3;
      case 3: {
        message.showTimes = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 contentType = 4;
      case 4: {
        message.contentType = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface StreamUrl {}

export function encodeStreamUrl(message: StreamUrl): Uint8Array {
  let bb = popByteBuffer();
  _encodeStreamUrl(message, bb);
  return toUint8Array(bb);
}

export function _encodeStreamUrl(message: StreamUrl, bb: ByteBuffer): void {}

export function decodeStreamUrl(binary: Uint8Array): StreamUrl {
  return _decodeStreamUrl(wrapByteBuffer(binary));
}

export function _decodeStreamUrl(bb: ByteBuffer): StreamUrl {
  let message: StreamUrl = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface LinkMic {}

export function encodeLinkMic(message: LinkMic): Uint8Array {
  let bb = popByteBuffer();
  _encodeLinkMic(message, bb);
  return toUint8Array(bb);
}

export function _encodeLinkMic(message: LinkMic, bb: ByteBuffer): void {}

export function decodeLinkMic(binary: Uint8Array): LinkMic {
  return _decodeLinkMic(wrapByteBuffer(binary));
}

export function _decodeLinkMic(bb: ByteBuffer): LinkMic {
  let message: LinkMic = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Decoration {}

export function encodeDecoration(message: Decoration): Uint8Array {
  let bb = popByteBuffer();
  _encodeDecoration(message, bb);
  return toUint8Array(bb);
}

export function _encodeDecoration(message: Decoration, bb: ByteBuffer): void {}

export function decodeDecoration(binary: Uint8Array): Decoration {
  return _decodeDecoration(wrapByteBuffer(binary));
}

export function _decodeDecoration(bb: ByteBuffer): Decoration {
  let message: Decoration = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface TopFan {}

export function encodeTopFan(message: TopFan): Uint8Array {
  let bb = popByteBuffer();
  _encodeTopFan(message, bb);
  return toUint8Array(bb);
}

export function _encodeTopFan(message: TopFan, bb: ByteBuffer): void {}

export function decodeTopFan(binary: Uint8Array): TopFan {
  return _decodeTopFan(wrapByteBuffer(binary));
}

export function _decodeTopFan(bb: ByteBuffer): TopFan {
  let message: TopFan = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User {
  id?: string;
  shortId?: string;
  nickname?: string;
  gender?: number;
  signature?: string;
  level?: number;
  birthday?: string;
  telephone?: string;
  avatarThumb?: Image;
  avatarMedium?: Image;
  avatarLarge?: Image;
  verified?: boolean;
  experience?: number;
  city?: string;
  status?: number;
  createTime?: string;
  modifyTime?: string;
  secret?: number;
  shareQrcodeUri?: string;
  incomeSharePercent?: number;
  badgeImageList?: Image;
  followInfo?: User_FollowInfo;
  payGrade?: User_PayGrade;
  fansClub?: User_FansClub;
  border?: User_Border;
  specialId?: string;
  avatarBorder?: Image;
  medal?: Image;
  realTimeIcons?: Image[];
  newRealTimeIcons?: Image[];
  topVipNo?: string;
  userAttr?: User_UserAttr;
  ownRoom?: User_OwnRoom;
  payScore?: string;
  ticketCount?: string;
  anchorInfo?: User_AnchorInfo;
  linkMicStats?: number;
  displayId?: string;
  withCommercePermission?: boolean;
  withFusionShopEntry?: boolean;
  totalRechargeDiamondCount?: string;
  webcastAnchorLevel?: User_AnchorLevel;
  verifiedContent?: string;
  authorStats?: User_AuthorStats;
  topFans?: User;
  secUid?: string;
  userRole?: number;
  xiguaInfo?: User_XiguaParams;
  activityReward?: User_ActivityInfo;
  nobleInfo?: User_NobleLevelInfo;
  brotherhoodInfo?: User_BrotherhoodInfo;
  personalCard?: Image;
  authenticationInfo?: User_AuthenticationInfo;
  authorizationInfo?: number;
  adversaryAuthorizationInfo?: number;
  poiInfo?: User_PoiInfo;
  mediaBadgeImageList?: Image;
  adversaryUserStatus?: number;
  userVipInfo?: UserVIPInfo;
  commerceWebcastConfigIds?: string;
  badgeImageListV2?: Image;
  industryCertification?: IndustryCertification;
  locationCity?: string;
  fansGroupInfo?: User_FansGroupInfo;
  remarkName?: string;
  mysteryMan?: number;
  webRid?: string;
  desensitizedNickname?: string;
  jAccreditInfo?: User_JAccreditInfo;
  subscribe?: User_Subscribe;
  isAnonymous?: boolean;
  consumeDiamondLevel?: number;
  webcastUid?: string;
  profileStyleParams?: User_ProfileStyleParams;
  userDressInfo?: User_UserDressInfo;
  bizRelation?: User_BizRelation;
  memberEntranceInfo?: MemberEntranceInfo;
  publicAreaBadgeInfo?: User_PublicAreaBadgeInfo;
  extraInfo?: User_ExtraInfo;
  userSettingInfo?: User_UserSettingInfo;
  publicAreaOperFreq?: string;
  userPermissionGrantInfo?: User_UserPermissionGrant;
  userCanceled?: boolean;
}

export function encodeUser(message: User): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser(message: User, bb: ByteBuffer): void {
  // optional int64 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $id);
  }

  // optional int64 shortId = 2;
  let $shortId = message.shortId;
  if ($shortId !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $shortId);
  }

  // optional string nickname = 3;
  let $nickname = message.nickname;
  if ($nickname !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $nickname);
  }

  // optional int32 gender = 4;
  let $gender = message.gender;
  if ($gender !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($gender));
  }

  // optional string signature = 5;
  let $signature = message.signature;
  if ($signature !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $signature);
  }

  // optional int32 level = 6;
  let $level = message.level;
  if ($level !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, intToLong($level));
  }

  // optional int64 birthday = 7;
  let $birthday = message.birthday;
  if ($birthday !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $birthday);
  }

  // optional string telephone = 8;
  let $telephone = message.telephone;
  if ($telephone !== undefined) {
    writeVarint32(bb, 66);
    writeString(bb, $telephone);
  }

  // optional Image avatarThumb = 9;
  let $avatarThumb = message.avatarThumb;
  if ($avatarThumb !== undefined) {
    writeVarint32(bb, 74);
    let nested = popByteBuffer();
    _encodeImage($avatarThumb, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image avatarMedium = 10;
  let $avatarMedium = message.avatarMedium;
  if ($avatarMedium !== undefined) {
    writeVarint32(bb, 82);
    let nested = popByteBuffer();
    _encodeImage($avatarMedium, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image avatarLarge = 11;
  let $avatarLarge = message.avatarLarge;
  if ($avatarLarge !== undefined) {
    writeVarint32(bb, 90);
    let nested = popByteBuffer();
    _encodeImage($avatarLarge, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool verified = 12;
  let $verified = message.verified;
  if ($verified !== undefined) {
    writeVarint32(bb, 96);
    writeByte(bb, $verified ? 1 : 0);
  }

  // optional int32 experience = 13;
  let $experience = message.experience;
  if ($experience !== undefined) {
    writeVarint32(bb, 104);
    writeVarint64(bb, intToLong($experience));
  }

  // optional string city = 14;
  let $city = message.city;
  if ($city !== undefined) {
    writeVarint32(bb, 114);
    writeString(bb, $city);
  }

  // optional int32 status = 15;
  let $status = message.status;
  if ($status !== undefined) {
    writeVarint32(bb, 120);
    writeVarint64(bb, intToLong($status));
  }

  // optional int64 createTime = 16;
  let $createTime = message.createTime;
  if ($createTime !== undefined) {
    writeVarint32(bb, 128);
    writeVarint64(bb, $createTime);
  }

  // optional int64 modifyTime = 17;
  let $modifyTime = message.modifyTime;
  if ($modifyTime !== undefined) {
    writeVarint32(bb, 136);
    writeVarint64(bb, $modifyTime);
  }

  // optional int32 secret = 18;
  let $secret = message.secret;
  if ($secret !== undefined) {
    writeVarint32(bb, 144);
    writeVarint64(bb, intToLong($secret));
  }

  // optional string shareQrcodeUri = 19;
  let $shareQrcodeUri = message.shareQrcodeUri;
  if ($shareQrcodeUri !== undefined) {
    writeVarint32(bb, 154);
    writeString(bb, $shareQrcodeUri);
  }

  // optional int32 incomeSharePercent = 20;
  let $incomeSharePercent = message.incomeSharePercent;
  if ($incomeSharePercent !== undefined) {
    writeVarint32(bb, 160);
    writeVarint64(bb, intToLong($incomeSharePercent));
  }

  // optional Image badgeImageList = 21;
  let $badgeImageList = message.badgeImageList;
  if ($badgeImageList !== undefined) {
    writeVarint32(bb, 170);
    let nested = popByteBuffer();
    _encodeImage($badgeImageList, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional User_FollowInfo followInfo = 22;
  let $followInfo = message.followInfo;
  if ($followInfo !== undefined) {
    writeVarint32(bb, 178);
    let nested = popByteBuffer();
    _encodeUser_FollowInfo($followInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional User_PayGrade payGrade = 23;
  let $payGrade = message.payGrade;
  if ($payGrade !== undefined) {
    writeVarint32(bb, 186);
    let nested = popByteBuffer();
    _encodeUser_PayGrade($payGrade, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional User_FansClub fansClub = 24;
  let $fansClub = message.fansClub;
  if ($fansClub !== undefined) {
    writeVarint32(bb, 194);
    let nested = popByteBuffer();
    _encodeUser_FansClub($fansClub, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional User_Border border = 25;
  let $border = message.border;
  if ($border !== undefined) {
    writeVarint32(bb, 202);
    let nested = popByteBuffer();
    _encodeUser_Border($border, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string specialId = 26;
  let $specialId = message.specialId;
  if ($specialId !== undefined) {
    writeVarint32(bb, 210);
    writeString(bb, $specialId);
  }

  // optional Image avatarBorder = 27;
  let $avatarBorder = message.avatarBorder;
  if ($avatarBorder !== undefined) {
    writeVarint32(bb, 218);
    let nested = popByteBuffer();
    _encodeImage($avatarBorder, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image medal = 28;
  let $medal = message.medal;
  if ($medal !== undefined) {
    writeVarint32(bb, 226);
    let nested = popByteBuffer();
    _encodeImage($medal, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // repeated Image realTimeIcons = 29;
  let array$realTimeIcons = message.realTimeIcons;
  if (array$realTimeIcons !== undefined) {
    for (let value of array$realTimeIcons) {
      writeVarint32(bb, 234);
      let nested = popByteBuffer();
      _encodeImage(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // repeated Image newRealTimeIcons = 30;
  let array$newRealTimeIcons = message.newRealTimeIcons;
  if (array$newRealTimeIcons !== undefined) {
    for (let value of array$newRealTimeIcons) {
      writeVarint32(bb, 242);
      let nested = popByteBuffer();
      _encodeImage(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional int64 topVipNo = 31;
  let $topVipNo = message.topVipNo;
  if ($topVipNo !== undefined) {
    writeVarint32(bb, 248);
    writeVarint64(bb, $topVipNo);
  }

  // optional User_UserAttr userAttr = 32;
  let $userAttr = message.userAttr;
  if ($userAttr !== undefined) {
    writeVarint32(bb, 258);
    let nested = popByteBuffer();
    _encodeUser_UserAttr($userAttr, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional User_OwnRoom ownRoom = 33;
  let $ownRoom = message.ownRoom;
  if ($ownRoom !== undefined) {
    writeVarint32(bb, 266);
    let nested = popByteBuffer();
    _encodeUser_OwnRoom($ownRoom, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 payScore = 34;
  let $payScore = message.payScore;
  if ($payScore !== undefined) {
    writeVarint32(bb, 272);
    writeVarint64(bb, $payScore);
  }

  // optional int64 ticketCount = 35;
  let $ticketCount = message.ticketCount;
  if ($ticketCount !== undefined) {
    writeVarint32(bb, 280);
    writeVarint64(bb, $ticketCount);
  }

  // optional User_AnchorInfo anchorInfo = 36;
  let $anchorInfo = message.anchorInfo;
  if ($anchorInfo !== undefined) {
    writeVarint32(bb, 290);
    let nested = popByteBuffer();
    _encodeUser_AnchorInfo($anchorInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 linkMicStats = 37;
  let $linkMicStats = message.linkMicStats;
  if ($linkMicStats !== undefined) {
    writeVarint32(bb, 296);
    writeVarint64(bb, intToLong($linkMicStats));
  }

  // optional string displayId = 38;
  let $displayId = message.displayId;
  if ($displayId !== undefined) {
    writeVarint32(bb, 306);
    writeString(bb, $displayId);
  }

  // optional bool withCommercePermission = 39;
  let $withCommercePermission = message.withCommercePermission;
  if ($withCommercePermission !== undefined) {
    writeVarint32(bb, 312);
    writeByte(bb, $withCommercePermission ? 1 : 0);
  }

  // optional bool withFusionShopEntry = 40;
  let $withFusionShopEntry = message.withFusionShopEntry;
  if ($withFusionShopEntry !== undefined) {
    writeVarint32(bb, 320);
    writeByte(bb, $withFusionShopEntry ? 1 : 0);
  }

  // optional int64 totalRechargeDiamondCount = 41;
  let $totalRechargeDiamondCount = message.totalRechargeDiamondCount;
  if ($totalRechargeDiamondCount !== undefined) {
    writeVarint32(bb, 328);
    writeVarint64(bb, $totalRechargeDiamondCount);
  }

  // optional User_AnchorLevel webcastAnchorLevel = 42;
  let $webcastAnchorLevel = message.webcastAnchorLevel;
  if ($webcastAnchorLevel !== undefined) {
    writeVarint32(bb, 338);
    let nested = popByteBuffer();
    _encodeUser_AnchorLevel($webcastAnchorLevel, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string verifiedContent = 43;
  let $verifiedContent = message.verifiedContent;
  if ($verifiedContent !== undefined) {
    writeVarint32(bb, 346);
    writeString(bb, $verifiedContent);
  }

  // optional User_AuthorStats authorStats = 44;
  let $authorStats = message.authorStats;
  if ($authorStats !== undefined) {
    writeVarint32(bb, 354);
    let nested = popByteBuffer();
    _encodeUser_AuthorStats($authorStats, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional User topFans = 45;
  let $topFans = message.topFans;
  if ($topFans !== undefined) {
    writeVarint32(bb, 362);
    let nested = popByteBuffer();
    _encodeUser($topFans, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string secUid = 46;
  let $secUid = message.secUid;
  if ($secUid !== undefined) {
    writeVarint32(bb, 370);
    writeString(bb, $secUid);
  }

  // optional int32 userRole = 47;
  let $userRole = message.userRole;
  if ($userRole !== undefined) {
    writeVarint32(bb, 376);
    writeVarint64(bb, intToLong($userRole));
  }

  // optional User_XiguaParams xiguaInfo = 48;
  let $xiguaInfo = message.xiguaInfo;
  if ($xiguaInfo !== undefined) {
    writeVarint32(bb, 386);
    let nested = popByteBuffer();
    _encodeUser_XiguaParams($xiguaInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional User_ActivityInfo activityReward = 49;
  let $activityReward = message.activityReward;
  if ($activityReward !== undefined) {
    writeVarint32(bb, 394);
    let nested = popByteBuffer();
    _encodeUser_ActivityInfo($activityReward, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional User_NobleLevelInfo nobleInfo = 50;
  let $nobleInfo = message.nobleInfo;
  if ($nobleInfo !== undefined) {
    writeVarint32(bb, 402);
    let nested = popByteBuffer();
    _encodeUser_NobleLevelInfo($nobleInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional User_BrotherhoodInfo brotherhoodInfo = 51;
  let $brotherhoodInfo = message.brotherhoodInfo;
  if ($brotherhoodInfo !== undefined) {
    writeVarint32(bb, 410);
    let nested = popByteBuffer();
    _encodeUser_BrotherhoodInfo($brotherhoodInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image personalCard = 52;
  let $personalCard = message.personalCard;
  if ($personalCard !== undefined) {
    writeVarint32(bb, 418);
    let nested = popByteBuffer();
    _encodeImage($personalCard, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional User_AuthenticationInfo authenticationInfo = 53;
  let $authenticationInfo = message.authenticationInfo;
  if ($authenticationInfo !== undefined) {
    writeVarint32(bb, 426);
    let nested = popByteBuffer();
    _encodeUser_AuthenticationInfo($authenticationInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 authorizationInfo = 54;
  let $authorizationInfo = message.authorizationInfo;
  if ($authorizationInfo !== undefined) {
    writeVarint32(bb, 432);
    writeVarint64(bb, intToLong($authorizationInfo));
  }

  // optional int32 adversaryAuthorizationInfo = 55;
  let $adversaryAuthorizationInfo = message.adversaryAuthorizationInfo;
  if ($adversaryAuthorizationInfo !== undefined) {
    writeVarint32(bb, 440);
    writeVarint64(bb, intToLong($adversaryAuthorizationInfo));
  }

  // optional User_PoiInfo poiInfo = 56;
  let $poiInfo = message.poiInfo;
  if ($poiInfo !== undefined) {
    writeVarint32(bb, 450);
    let nested = popByteBuffer();
    _encodeUser_PoiInfo($poiInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image mediaBadgeImageList = 57;
  let $mediaBadgeImageList = message.mediaBadgeImageList;
  if ($mediaBadgeImageList !== undefined) {
    writeVarint32(bb, 458);
    let nested = popByteBuffer();
    _encodeImage($mediaBadgeImageList, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 adversaryUserStatus = 58;
  let $adversaryUserStatus = message.adversaryUserStatus;
  if ($adversaryUserStatus !== undefined) {
    writeVarint32(bb, 464);
    writeVarint64(bb, intToLong($adversaryUserStatus));
  }

  // optional UserVIPInfo userVipInfo = 59;
  let $userVipInfo = message.userVipInfo;
  if ($userVipInfo !== undefined) {
    writeVarint32(bb, 474);
    let nested = popByteBuffer();
    _encodeUserVIPInfo($userVipInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 commerceWebcastConfigIds = 60;
  let $commerceWebcastConfigIds = message.commerceWebcastConfigIds;
  if ($commerceWebcastConfigIds !== undefined) {
    writeVarint32(bb, 480);
    writeVarint64(bb, $commerceWebcastConfigIds);
  }

  // optional Image badgeImageListV2 = 61;
  let $badgeImageListV2 = message.badgeImageListV2;
  if ($badgeImageListV2 !== undefined) {
    writeVarint32(bb, 490);
    let nested = popByteBuffer();
    _encodeImage($badgeImageListV2, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional IndustryCertification industryCertification = 62;
  let $industryCertification = message.industryCertification;
  if ($industryCertification !== undefined) {
    writeVarint32(bb, 498);
    let nested = popByteBuffer();
    _encodeIndustryCertification($industryCertification, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string locationCity = 63;
  let $locationCity = message.locationCity;
  if ($locationCity !== undefined) {
    writeVarint32(bb, 506);
    writeString(bb, $locationCity);
  }

  // optional User_FansGroupInfo fansGroupInfo = 64;
  let $fansGroupInfo = message.fansGroupInfo;
  if ($fansGroupInfo !== undefined) {
    writeVarint32(bb, 514);
    let nested = popByteBuffer();
    _encodeUser_FansGroupInfo($fansGroupInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string remarkName = 65;
  let $remarkName = message.remarkName;
  if ($remarkName !== undefined) {
    writeVarint32(bb, 522);
    writeString(bb, $remarkName);
  }

  // optional int32 mysteryMan = 66;
  let $mysteryMan = message.mysteryMan;
  if ($mysteryMan !== undefined) {
    writeVarint32(bb, 528);
    writeVarint64(bb, intToLong($mysteryMan));
  }

  // optional string webRid = 67;
  let $webRid = message.webRid;
  if ($webRid !== undefined) {
    writeVarint32(bb, 538);
    writeString(bb, $webRid);
  }

  // optional string desensitizedNickname = 68;
  let $desensitizedNickname = message.desensitizedNickname;
  if ($desensitizedNickname !== undefined) {
    writeVarint32(bb, 546);
    writeString(bb, $desensitizedNickname);
  }

  // optional User_JAccreditInfo jAccreditInfo = 69;
  let $jAccreditInfo = message.jAccreditInfo;
  if ($jAccreditInfo !== undefined) {
    writeVarint32(bb, 554);
    let nested = popByteBuffer();
    _encodeUser_JAccreditInfo($jAccreditInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional User_Subscribe subscribe = 70;
  let $subscribe = message.subscribe;
  if ($subscribe !== undefined) {
    writeVarint32(bb, 562);
    let nested = popByteBuffer();
    _encodeUser_Subscribe($subscribe, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool isAnonymous = 71;
  let $isAnonymous = message.isAnonymous;
  if ($isAnonymous !== undefined) {
    writeVarint32(bb, 568);
    writeByte(bb, $isAnonymous ? 1 : 0);
  }

  // optional int32 consumeDiamondLevel = 72;
  let $consumeDiamondLevel = message.consumeDiamondLevel;
  if ($consumeDiamondLevel !== undefined) {
    writeVarint32(bb, 576);
    writeVarint64(bb, intToLong($consumeDiamondLevel));
  }

  // optional string webcastUid = 73;
  let $webcastUid = message.webcastUid;
  if ($webcastUid !== undefined) {
    writeVarint32(bb, 586);
    writeString(bb, $webcastUid);
  }

  // optional User_ProfileStyleParams profileStyleParams = 74;
  let $profileStyleParams = message.profileStyleParams;
  if ($profileStyleParams !== undefined) {
    writeVarint32(bb, 594);
    let nested = popByteBuffer();
    _encodeUser_ProfileStyleParams($profileStyleParams, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional User_UserDressInfo userDressInfo = 75;
  let $userDressInfo = message.userDressInfo;
  if ($userDressInfo !== undefined) {
    writeVarint32(bb, 602);
    let nested = popByteBuffer();
    _encodeUser_UserDressInfo($userDressInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional User_BizRelation bizRelation = 76;
  let $bizRelation = message.bizRelation;
  if ($bizRelation !== undefined) {
    writeVarint32(bb, 610);
    let nested = popByteBuffer();
    _encodeUser_BizRelation($bizRelation, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional MemberEntranceInfo memberEntranceInfo = 77;
  let $memberEntranceInfo = message.memberEntranceInfo;
  if ($memberEntranceInfo !== undefined) {
    writeVarint32(bb, 618);
    let nested = popByteBuffer();
    _encodeMemberEntranceInfo($memberEntranceInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional User_PublicAreaBadgeInfo publicAreaBadgeInfo = 78;
  let $publicAreaBadgeInfo = message.publicAreaBadgeInfo;
  if ($publicAreaBadgeInfo !== undefined) {
    writeVarint32(bb, 626);
    let nested = popByteBuffer();
    _encodeUser_PublicAreaBadgeInfo($publicAreaBadgeInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional User_ExtraInfo extraInfo = 79;
  let $extraInfo = message.extraInfo;
  if ($extraInfo !== undefined) {
    writeVarint32(bb, 634);
    let nested = popByteBuffer();
    _encodeUser_ExtraInfo($extraInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional User_UserSettingInfo userSettingInfo = 80;
  let $userSettingInfo = message.userSettingInfo;
  if ($userSettingInfo !== undefined) {
    writeVarint32(bb, 642);
    let nested = popByteBuffer();
    _encodeUser_UserSettingInfo($userSettingInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 publicAreaOperFreq = 81;
  let $publicAreaOperFreq = message.publicAreaOperFreq;
  if ($publicAreaOperFreq !== undefined) {
    writeVarint32(bb, 648);
    writeVarint64(bb, $publicAreaOperFreq);
  }

  // optional User_UserPermissionGrant userPermissionGrantInfo = 82;
  let $userPermissionGrantInfo = message.userPermissionGrantInfo;
  if ($userPermissionGrantInfo !== undefined) {
    writeVarint32(bb, 658);
    let nested = popByteBuffer();
    _encodeUser_UserPermissionGrant($userPermissionGrantInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool userCanceled = 83;
  let $userCanceled = message.userCanceled;
  if ($userCanceled !== undefined) {
    writeVarint32(bb, 664);
    writeByte(bb, $userCanceled ? 1 : 0);
  }
}

export function decodeUser(binary: Uint8Array): User {
  return _decodeUser(wrapByteBuffer(binary));
}

export function _decodeUser(bb: ByteBuffer): User {
  let message: User = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 id = 1;
      case 1: {
        message.id = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 shortId = 2;
      case 2: {
        message.shortId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string nickname = 3;
      case 3: {
        message.nickname = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 gender = 4;
      case 4: {
        message.gender = readVarint32(bb);
        break;
      }

      // optional string signature = 5;
      case 5: {
        message.signature = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 level = 6;
      case 6: {
        message.level = readVarint32(bb);
        break;
      }

      // optional int64 birthday = 7;
      case 7: {
        message.birthday = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string telephone = 8;
      case 8: {
        message.telephone = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image avatarThumb = 9;
      case 9: {
        let limit = pushTemporaryLength(bb);
        message.avatarThumb = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image avatarMedium = 10;
      case 10: {
        let limit = pushTemporaryLength(bb);
        message.avatarMedium = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image avatarLarge = 11;
      case 11: {
        let limit = pushTemporaryLength(bb);
        message.avatarLarge = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional bool verified = 12;
      case 12: {
        message.verified = !!readByte(bb);
        break;
      }

      // optional int32 experience = 13;
      case 13: {
        message.experience = readVarint32(bb);
        break;
      }

      // optional string city = 14;
      case 14: {
        message.city = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 status = 15;
      case 15: {
        message.status = readVarint32(bb);
        break;
      }

      // optional int64 createTime = 16;
      case 16: {
        message.createTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 modifyTime = 17;
      case 17: {
        message.modifyTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 secret = 18;
      case 18: {
        message.secret = readVarint32(bb);
        break;
      }

      // optional string shareQrcodeUri = 19;
      case 19: {
        message.shareQrcodeUri = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 incomeSharePercent = 20;
      case 20: {
        message.incomeSharePercent = readVarint32(bb);
        break;
      }

      // optional Image badgeImageList = 21;
      case 21: {
        let limit = pushTemporaryLength(bb);
        message.badgeImageList = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional User_FollowInfo followInfo = 22;
      case 22: {
        let limit = pushTemporaryLength(bb);
        message.followInfo = _decodeUser_FollowInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional User_PayGrade payGrade = 23;
      case 23: {
        let limit = pushTemporaryLength(bb);
        message.payGrade = _decodeUser_PayGrade(bb);
        bb.limit = limit;
        break;
      }

      // optional User_FansClub fansClub = 24;
      case 24: {
        let limit = pushTemporaryLength(bb);
        message.fansClub = _decodeUser_FansClub(bb);
        bb.limit = limit;
        break;
      }

      // optional User_Border border = 25;
      case 25: {
        let limit = pushTemporaryLength(bb);
        message.border = _decodeUser_Border(bb);
        bb.limit = limit;
        break;
      }

      // optional string specialId = 26;
      case 26: {
        message.specialId = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image avatarBorder = 27;
      case 27: {
        let limit = pushTemporaryLength(bb);
        message.avatarBorder = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image medal = 28;
      case 28: {
        let limit = pushTemporaryLength(bb);
        message.medal = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // repeated Image realTimeIcons = 29;
      case 29: {
        let limit = pushTemporaryLength(bb);
        let values = message.realTimeIcons || (message.realTimeIcons = []);
        values.push(_decodeImage(bb));
        bb.limit = limit;
        break;
      }

      // repeated Image newRealTimeIcons = 30;
      case 30: {
        let limit = pushTemporaryLength(bb);
        let values = message.newRealTimeIcons || (message.newRealTimeIcons = []);
        values.push(_decodeImage(bb));
        bb.limit = limit;
        break;
      }

      // optional int64 topVipNo = 31;
      case 31: {
        message.topVipNo = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional User_UserAttr userAttr = 32;
      case 32: {
        let limit = pushTemporaryLength(bb);
        message.userAttr = _decodeUser_UserAttr(bb);
        bb.limit = limit;
        break;
      }

      // optional User_OwnRoom ownRoom = 33;
      case 33: {
        let limit = pushTemporaryLength(bb);
        message.ownRoom = _decodeUser_OwnRoom(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 payScore = 34;
      case 34: {
        message.payScore = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 ticketCount = 35;
      case 35: {
        message.ticketCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional User_AnchorInfo anchorInfo = 36;
      case 36: {
        let limit = pushTemporaryLength(bb);
        message.anchorInfo = _decodeUser_AnchorInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 linkMicStats = 37;
      case 37: {
        message.linkMicStats = readVarint32(bb);
        break;
      }

      // optional string displayId = 38;
      case 38: {
        message.displayId = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool withCommercePermission = 39;
      case 39: {
        message.withCommercePermission = !!readByte(bb);
        break;
      }

      // optional bool withFusionShopEntry = 40;
      case 40: {
        message.withFusionShopEntry = !!readByte(bb);
        break;
      }

      // optional int64 totalRechargeDiamondCount = 41;
      case 41: {
        message.totalRechargeDiamondCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional User_AnchorLevel webcastAnchorLevel = 42;
      case 42: {
        let limit = pushTemporaryLength(bb);
        message.webcastAnchorLevel = _decodeUser_AnchorLevel(bb);
        bb.limit = limit;
        break;
      }

      // optional string verifiedContent = 43;
      case 43: {
        message.verifiedContent = readString(bb, readVarint32(bb));
        break;
      }

      // optional User_AuthorStats authorStats = 44;
      case 44: {
        let limit = pushTemporaryLength(bb);
        message.authorStats = _decodeUser_AuthorStats(bb);
        bb.limit = limit;
        break;
      }

      // optional User topFans = 45;
      case 45: {
        let limit = pushTemporaryLength(bb);
        message.topFans = _decodeUser(bb);
        bb.limit = limit;
        break;
      }

      // optional string secUid = 46;
      case 46: {
        message.secUid = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 userRole = 47;
      case 47: {
        message.userRole = readVarint32(bb);
        break;
      }

      // optional User_XiguaParams xiguaInfo = 48;
      case 48: {
        let limit = pushTemporaryLength(bb);
        message.xiguaInfo = _decodeUser_XiguaParams(bb);
        bb.limit = limit;
        break;
      }

      // optional User_ActivityInfo activityReward = 49;
      case 49: {
        let limit = pushTemporaryLength(bb);
        message.activityReward = _decodeUser_ActivityInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional User_NobleLevelInfo nobleInfo = 50;
      case 50: {
        let limit = pushTemporaryLength(bb);
        message.nobleInfo = _decodeUser_NobleLevelInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional User_BrotherhoodInfo brotherhoodInfo = 51;
      case 51: {
        let limit = pushTemporaryLength(bb);
        message.brotherhoodInfo = _decodeUser_BrotherhoodInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional Image personalCard = 52;
      case 52: {
        let limit = pushTemporaryLength(bb);
        message.personalCard = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional User_AuthenticationInfo authenticationInfo = 53;
      case 53: {
        let limit = pushTemporaryLength(bb);
        message.authenticationInfo = _decodeUser_AuthenticationInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 authorizationInfo = 54;
      case 54: {
        message.authorizationInfo = readVarint32(bb);
        break;
      }

      // optional int32 adversaryAuthorizationInfo = 55;
      case 55: {
        message.adversaryAuthorizationInfo = readVarint32(bb);
        break;
      }

      // optional User_PoiInfo poiInfo = 56;
      case 56: {
        let limit = pushTemporaryLength(bb);
        message.poiInfo = _decodeUser_PoiInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional Image mediaBadgeImageList = 57;
      case 57: {
        let limit = pushTemporaryLength(bb);
        message.mediaBadgeImageList = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 adversaryUserStatus = 58;
      case 58: {
        message.adversaryUserStatus = readVarint32(bb);
        break;
      }

      // optional UserVIPInfo userVipInfo = 59;
      case 59: {
        let limit = pushTemporaryLength(bb);
        message.userVipInfo = _decodeUserVIPInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 commerceWebcastConfigIds = 60;
      case 60: {
        message.commerceWebcastConfigIds = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Image badgeImageListV2 = 61;
      case 61: {
        let limit = pushTemporaryLength(bb);
        message.badgeImageListV2 = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional IndustryCertification industryCertification = 62;
      case 62: {
        let limit = pushTemporaryLength(bb);
        message.industryCertification = _decodeIndustryCertification(bb);
        bb.limit = limit;
        break;
      }

      // optional string locationCity = 63;
      case 63: {
        message.locationCity = readString(bb, readVarint32(bb));
        break;
      }

      // optional User_FansGroupInfo fansGroupInfo = 64;
      case 64: {
        let limit = pushTemporaryLength(bb);
        message.fansGroupInfo = _decodeUser_FansGroupInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional string remarkName = 65;
      case 65: {
        message.remarkName = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 mysteryMan = 66;
      case 66: {
        message.mysteryMan = readVarint32(bb);
        break;
      }

      // optional string webRid = 67;
      case 67: {
        message.webRid = readString(bb, readVarint32(bb));
        break;
      }

      // optional string desensitizedNickname = 68;
      case 68: {
        message.desensitizedNickname = readString(bb, readVarint32(bb));
        break;
      }

      // optional User_JAccreditInfo jAccreditInfo = 69;
      case 69: {
        let limit = pushTemporaryLength(bb);
        message.jAccreditInfo = _decodeUser_JAccreditInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional User_Subscribe subscribe = 70;
      case 70: {
        let limit = pushTemporaryLength(bb);
        message.subscribe = _decodeUser_Subscribe(bb);
        bb.limit = limit;
        break;
      }

      // optional bool isAnonymous = 71;
      case 71: {
        message.isAnonymous = !!readByte(bb);
        break;
      }

      // optional int32 consumeDiamondLevel = 72;
      case 72: {
        message.consumeDiamondLevel = readVarint32(bb);
        break;
      }

      // optional string webcastUid = 73;
      case 73: {
        message.webcastUid = readString(bb, readVarint32(bb));
        break;
      }

      // optional User_ProfileStyleParams profileStyleParams = 74;
      case 74: {
        let limit = pushTemporaryLength(bb);
        message.profileStyleParams = _decodeUser_ProfileStyleParams(bb);
        bb.limit = limit;
        break;
      }

      // optional User_UserDressInfo userDressInfo = 75;
      case 75: {
        let limit = pushTemporaryLength(bb);
        message.userDressInfo = _decodeUser_UserDressInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional User_BizRelation bizRelation = 76;
      case 76: {
        let limit = pushTemporaryLength(bb);
        message.bizRelation = _decodeUser_BizRelation(bb);
        bb.limit = limit;
        break;
      }

      // optional MemberEntranceInfo memberEntranceInfo = 77;
      case 77: {
        let limit = pushTemporaryLength(bb);
        message.memberEntranceInfo = _decodeMemberEntranceInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional User_PublicAreaBadgeInfo publicAreaBadgeInfo = 78;
      case 78: {
        let limit = pushTemporaryLength(bb);
        message.publicAreaBadgeInfo = _decodeUser_PublicAreaBadgeInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional User_ExtraInfo extraInfo = 79;
      case 79: {
        let limit = pushTemporaryLength(bb);
        message.extraInfo = _decodeUser_ExtraInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional User_UserSettingInfo userSettingInfo = 80;
      case 80: {
        let limit = pushTemporaryLength(bb);
        message.userSettingInfo = _decodeUser_UserSettingInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 publicAreaOperFreq = 81;
      case 81: {
        message.publicAreaOperFreq = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional User_UserPermissionGrant userPermissionGrantInfo = 82;
      case 82: {
        let limit = pushTemporaryLength(bb);
        message.userPermissionGrantInfo = _decodeUser_UserPermissionGrant(bb);
        bb.limit = limit;
        break;
      }

      // optional bool userCanceled = 83;
      case 83: {
        message.userCanceled = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_UserAttr {
  isMuted?: boolean;
  isAdmin?: boolean;
  isSuperAdmin?: boolean;
  adminPrivileges?: number[];
}

export function encodeUser_UserAttr(message: User_UserAttr): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_UserAttr(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_UserAttr(message: User_UserAttr, bb: ByteBuffer): void {
  // optional bool isMuted = 1;
  let $isMuted = message.isMuted;
  if ($isMuted !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $isMuted ? 1 : 0);
  }

  // optional bool isAdmin = 2;
  let $isAdmin = message.isAdmin;
  if ($isAdmin !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $isAdmin ? 1 : 0);
  }

  // optional bool isSuperAdmin = 3;
  let $isSuperAdmin = message.isSuperAdmin;
  if ($isSuperAdmin !== undefined) {
    writeVarint32(bb, 24);
    writeByte(bb, $isSuperAdmin ? 1 : 0);
  }

  // repeated int32 adminPrivileges = 4;
  let array$adminPrivileges = message.adminPrivileges;
  if (array$adminPrivileges !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$adminPrivileges) {
      writeVarint64(packed, intToLong(value));
    }
    writeVarint32(bb, 34);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }
}

export function decodeUser_UserAttr(binary: Uint8Array): User_UserAttr {
  return _decodeUser_UserAttr(wrapByteBuffer(binary));
}

export function _decodeUser_UserAttr(bb: ByteBuffer): User_UserAttr {
  let message: User_UserAttr = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bool isMuted = 1;
      case 1: {
        message.isMuted = !!readByte(bb);
        break;
      }

      // optional bool isAdmin = 2;
      case 2: {
        message.isAdmin = !!readByte(bb);
        break;
      }

      // optional bool isSuperAdmin = 3;
      case 3: {
        message.isSuperAdmin = !!readByte(bb);
        break;
      }

      // repeated int32 adminPrivileges = 4;
      case 4: {
        let values = message.adminPrivileges || (message.adminPrivileges = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint32(bb));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint32(bb));
        }
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_OwnRoom {
  roomIds?: string[];
  roomIdsStr?: string[];
  roomIdsDisplay?: number[];
}

export function encodeUser_OwnRoom(message: User_OwnRoom): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_OwnRoom(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_OwnRoom(message: User_OwnRoom, bb: ByteBuffer): void {
  // repeated int64 roomIds = 1;
  let array$roomIds = message.roomIds;
  if (array$roomIds !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$roomIds) {
      writeVarint64(packed, value);
    }
    writeVarint32(bb, 10);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // repeated string roomIdsStr = 2;
  let array$roomIdsStr = message.roomIdsStr;
  if (array$roomIdsStr !== undefined) {
    for (let value of array$roomIdsStr) {
      writeVarint32(bb, 18);
      writeString(bb, value);
    }
  }

  // repeated int32 roomIdsDisplay = 3;
  let array$roomIdsDisplay = message.roomIdsDisplay;
  if (array$roomIdsDisplay !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$roomIdsDisplay) {
      writeVarint64(packed, intToLong(value));
    }
    writeVarint32(bb, 26);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }
}

export function decodeUser_OwnRoom(binary: Uint8Array): User_OwnRoom {
  return _decodeUser_OwnRoom(wrapByteBuffer(binary));
}

export function _decodeUser_OwnRoom(bb: ByteBuffer): User_OwnRoom {
  let message: User_OwnRoom = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated int64 roomIds = 1;
      case 1: {
        let values = message.roomIds || (message.roomIds = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint64(bb, /* unsigned */ false));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint64(bb, /* unsigned */ false));
        }
        break;
      }

      // repeated string roomIdsStr = 2;
      case 2: {
        let values = message.roomIdsStr || (message.roomIdsStr = []);
        values.push(readString(bb, readVarint32(bb)));
        break;
      }

      // repeated int32 roomIdsDisplay = 3;
      case 3: {
        let values = message.roomIdsDisplay || (message.roomIdsDisplay = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint32(bb));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint32(bb));
        }
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_AnchorInfo {
  level?: string;
}

export function encodeUser_AnchorInfo(message: User_AnchorInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_AnchorInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_AnchorInfo(message: User_AnchorInfo, bb: ByteBuffer): void {
  // optional int64 level = 1;
  let $level = message.level;
  if ($level !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $level);
  }
}

export function decodeUser_AnchorInfo(binary: Uint8Array): User_AnchorInfo {
  return _decodeUser_AnchorInfo(wrapByteBuffer(binary));
}

export function _decodeUser_AnchorInfo(bb: ByteBuffer): User_AnchorInfo {
  let message: User_AnchorInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 level = 1;
      case 1: {
        message.level = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_FollowInfo {
  followingCount?: string;
  followerCount?: string;
  followStatus?: string;
  pushStatus?: string;
  remarkName?: string;
}

export function encodeUser_FollowInfo(message: User_FollowInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_FollowInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_FollowInfo(message: User_FollowInfo, bb: ByteBuffer): void {
  // optional int64 followingCount = 1;
  let $followingCount = message.followingCount;
  if ($followingCount !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $followingCount);
  }

  // optional int64 followerCount = 2;
  let $followerCount = message.followerCount;
  if ($followerCount !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $followerCount);
  }

  // optional int64 followStatus = 3;
  let $followStatus = message.followStatus;
  if ($followStatus !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $followStatus);
  }

  // optional int64 pushStatus = 4;
  let $pushStatus = message.pushStatus;
  if ($pushStatus !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $pushStatus);
  }

  // optional string remarkName = 5;
  let $remarkName = message.remarkName;
  if ($remarkName !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $remarkName);
  }
}

export function decodeUser_FollowInfo(binary: Uint8Array): User_FollowInfo {
  return _decodeUser_FollowInfo(wrapByteBuffer(binary));
}

export function _decodeUser_FollowInfo(bb: ByteBuffer): User_FollowInfo {
  let message: User_FollowInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 followingCount = 1;
      case 1: {
        message.followingCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 followerCount = 2;
      case 2: {
        message.followerCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 followStatus = 3;
      case 3: {
        message.followStatus = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 pushStatus = 4;
      case 4: {
        message.pushStatus = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string remarkName = 5;
      case 5: {
        message.remarkName = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_FansClub {
  data?: User_FansClub_FansClubData;
  preferData?: { [key: number]: User_FansClub_FansClubData };
}

export function encodeUser_FansClub(message: User_FansClub): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_FansClub(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_FansClub(message: User_FansClub, bb: ByteBuffer): void {
  // optional User_FansClub_FansClubData data = 1;
  let $data = message.data;
  if ($data !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeUser_FansClub_FansClubData($data, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional map<int32, User_FansClub_FansClubData> preferData = 2;
  let map$preferData = message.preferData;
  if (map$preferData !== undefined) {
    for (let key in map$preferData) {
      let nested = popByteBuffer();
      let value = map$preferData[key];
      writeVarint32(nested, 8);
      writeVarint64(nested, intToLong(+key));
      writeVarint32(nested, 18);
      let nestedValue = popByteBuffer();
      _encodeUser_FansClub_FansClubData(value, nestedValue);
      writeVarint32(nested, nestedValue.limit);
      writeByteBuffer(nested, nestedValue);
      pushByteBuffer(nestedValue);
      writeVarint32(bb, 18);
      writeVarint32(bb, nested.offset);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeUser_FansClub(binary: Uint8Array): User_FansClub {
  return _decodeUser_FansClub(wrapByteBuffer(binary));
}

export function _decodeUser_FansClub(bb: ByteBuffer): User_FansClub {
  let message: User_FansClub = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional User_FansClub_FansClubData data = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.data = _decodeUser_FansClub_FansClubData(bb);
        bb.limit = limit;
        break;
      }

      // optional map<int32, User_FansClub_FansClubData> preferData = 2;
      case 2: {
        let values = message.preferData || (message.preferData = {});
        let outerLimit = pushTemporaryLength(bb);
        let key: number | undefined;
        let value: User_FansClub_FansClubData | undefined;
        end_of_entry: while (!isAtEnd(bb)) {
          let tag = readVarint32(bb);
          switch (tag >>> 3) {
            case 0:
              break end_of_entry;
            case 1: {
              key = readVarint32(bb);
              break;
            }
            case 2: {
              let valueLimit = pushTemporaryLength(bb);
              value = _decodeUser_FansClub_FansClubData(bb);
              bb.limit = valueLimit;
              break;
            }
            default:
              skipUnknownField(bb, tag & 7);
          }
        }
        if (key === undefined || value === undefined) throw new Error('Invalid data for map: preferData');
        values[key] = value;
        bb.limit = outerLimit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_FansClub_FansClubData {
  clubName?: string;
  level?: number;
  userFansClubStatus?: number;
  badge?: User_FansClub_FansClubData_UserBadge;
  availableGiftIds?: string[];
  anchorId?: string;
}

export function encodeUser_FansClub_FansClubData(message: User_FansClub_FansClubData): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_FansClub_FansClubData(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_FansClub_FansClubData(message: User_FansClub_FansClubData, bb: ByteBuffer): void {
  // optional string clubName = 1;
  let $clubName = message.clubName;
  if ($clubName !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $clubName);
  }

  // optional int32 level = 2;
  let $level = message.level;
  if ($level !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($level));
  }

  // optional int32 userFansClubStatus = 3;
  let $userFansClubStatus = message.userFansClubStatus;
  if ($userFansClubStatus !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($userFansClubStatus));
  }

  // optional User_FansClub_FansClubData_UserBadge badge = 4;
  let $badge = message.badge;
  if ($badge !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeUser_FansClub_FansClubData_UserBadge($badge, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // repeated int64 availableGiftIds = 5;
  let array$availableGiftIds = message.availableGiftIds;
  if (array$availableGiftIds !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$availableGiftIds) {
      writeVarint64(packed, value);
    }
    writeVarint32(bb, 42);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // optional int64 anchorId = 6;
  let $anchorId = message.anchorId;
  if ($anchorId !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $anchorId);
  }
}

export function decodeUser_FansClub_FansClubData(binary: Uint8Array): User_FansClub_FansClubData {
  return _decodeUser_FansClub_FansClubData(wrapByteBuffer(binary));
}

export function _decodeUser_FansClub_FansClubData(bb: ByteBuffer): User_FansClub_FansClubData {
  let message: User_FansClub_FansClubData = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string clubName = 1;
      case 1: {
        message.clubName = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 level = 2;
      case 2: {
        message.level = readVarint32(bb);
        break;
      }

      // optional int32 userFansClubStatus = 3;
      case 3: {
        message.userFansClubStatus = readVarint32(bb);
        break;
      }

      // optional User_FansClub_FansClubData_UserBadge badge = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.badge = _decodeUser_FansClub_FansClubData_UserBadge(bb);
        bb.limit = limit;
        break;
      }

      // repeated int64 availableGiftIds = 5;
      case 5: {
        let values = message.availableGiftIds || (message.availableGiftIds = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint64(bb, /* unsigned */ false));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint64(bb, /* unsigned */ false));
        }
        break;
      }

      // optional int64 anchorId = 6;
      case 6: {
        message.anchorId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_FansClub_FansClubData_UserBadge {
  icons?: { [key: number]: Image };
  title?: string;
}

export function encodeUser_FansClub_FansClubData_UserBadge(message: User_FansClub_FansClubData_UserBadge): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_FansClub_FansClubData_UserBadge(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_FansClub_FansClubData_UserBadge(
  message: User_FansClub_FansClubData_UserBadge,
  bb: ByteBuffer
): void {
  // optional map<int32, Image> icons = 1;
  let map$icons = message.icons;
  if (map$icons !== undefined) {
    for (let key in map$icons) {
      let nested = popByteBuffer();
      let value = map$icons[key];
      writeVarint32(nested, 8);
      writeVarint64(nested, intToLong(+key));
      writeVarint32(nested, 18);
      let nestedValue = popByteBuffer();
      _encodeImage(value, nestedValue);
      writeVarint32(nested, nestedValue.limit);
      writeByteBuffer(nested, nestedValue);
      pushByteBuffer(nestedValue);
      writeVarint32(bb, 10);
      writeVarint32(bb, nested.offset);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional string title = 2;
  let $title = message.title;
  if ($title !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $title);
  }
}

export function decodeUser_FansClub_FansClubData_UserBadge(binary: Uint8Array): User_FansClub_FansClubData_UserBadge {
  return _decodeUser_FansClub_FansClubData_UserBadge(wrapByteBuffer(binary));
}

export function _decodeUser_FansClub_FansClubData_UserBadge(bb: ByteBuffer): User_FansClub_FansClubData_UserBadge {
  let message: User_FansClub_FansClubData_UserBadge = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional map<int32, Image> icons = 1;
      case 1: {
        let values = message.icons || (message.icons = {});
        let outerLimit = pushTemporaryLength(bb);
        let key: number | undefined;
        let value: Image | undefined;
        end_of_entry: while (!isAtEnd(bb)) {
          let tag = readVarint32(bb);
          switch (tag >>> 3) {
            case 0:
              break end_of_entry;
            case 1: {
              key = readVarint32(bb);
              break;
            }
            case 2: {
              let valueLimit = pushTemporaryLength(bb);
              value = _decodeImage(bb);
              bb.limit = valueLimit;
              break;
            }
            default:
              skipUnknownField(bb, tag & 7);
          }
        }
        if (key === undefined || value === undefined) throw new Error('Invalid data for map: icons');
        values[key] = value;
        bb.limit = outerLimit;
        break;
      }

      // optional string title = 2;
      case 2: {
        message.title = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_Border {
  icon?: Image;
  level?: string;
  thumbIcon?: Image;
  dressId?: string;
}

export function encodeUser_Border(message: User_Border): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_Border(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_Border(message: User_Border, bb: ByteBuffer): void {
  // optional Image icon = 1;
  let $icon = message.icon;
  if ($icon !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeImage($icon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 level = 2;
  let $level = message.level;
  if ($level !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $level);
  }

  // optional Image thumbIcon = 3;
  let $thumbIcon = message.thumbIcon;
  if ($thumbIcon !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeImage($thumbIcon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string dressId = 4;
  let $dressId = message.dressId;
  if ($dressId !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $dressId);
  }
}

export function decodeUser_Border(binary: Uint8Array): User_Border {
  return _decodeUser_Border(wrapByteBuffer(binary));
}

export function _decodeUser_Border(bb: ByteBuffer): User_Border {
  let message: User_Border = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Image icon = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.icon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 level = 2;
      case 2: {
        message.level = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Image thumbIcon = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.thumbIcon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string dressId = 4;
      case 4: {
        message.dressId = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_GradeBuffInfo {
  buffLevel?: string;
  status?: number;
  endTime?: string;
  statsInfo?: { [key: string]: string };
  buffBadge?: Image;
}

export function encodeUser_GradeBuffInfo(message: User_GradeBuffInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_GradeBuffInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_GradeBuffInfo(message: User_GradeBuffInfo, bb: ByteBuffer): void {
  // optional int64 buffLevel = 1;
  let $buffLevel = message.buffLevel;
  if ($buffLevel !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $buffLevel);
  }

  // optional int32 status = 2;
  let $status = message.status;
  if ($status !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($status));
  }

  // optional int64 endTime = 3;
  let $endTime = message.endTime;
  if ($endTime !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $endTime);
  }

  // optional map<int64, int64> statsInfo = 4;
  let map$statsInfo = message.statsInfo;
  if (map$statsInfo !== undefined) {
    for (let key in map$statsInfo) {
      let nested = popByteBuffer();
      let value = map$statsInfo[key];
      writeVarint32(nested, 8);
      writeVarint64(nested, stringToLong(key));
      writeVarint32(nested, 16);
      writeVarint64(nested, value);
      writeVarint32(bb, 34);
      writeVarint32(bb, nested.offset);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional Image buffBadge = 5;
  let $buffBadge = message.buffBadge;
  if ($buffBadge !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeImage($buffBadge, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeUser_GradeBuffInfo(binary: Uint8Array): User_GradeBuffInfo {
  return _decodeUser_GradeBuffInfo(wrapByteBuffer(binary));
}

export function _decodeUser_GradeBuffInfo(bb: ByteBuffer): User_GradeBuffInfo {
  let message: User_GradeBuffInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 buffLevel = 1;
      case 1: {
        message.buffLevel = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 status = 2;
      case 2: {
        message.status = readVarint32(bb);
        break;
      }

      // optional int64 endTime = 3;
      case 3: {
        message.endTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional map<int64, int64> statsInfo = 4;
      case 4: {
        let values = message.statsInfo || (message.statsInfo = {});
        let outerLimit = pushTemporaryLength(bb);
        let key: string | undefined;
        let value: string | undefined;
        end_of_entry: while (!isAtEnd(bb)) {
          let tag = readVarint32(bb);
          switch (tag >>> 3) {
            case 0:
              break end_of_entry;
            case 1: {
              key = readVarint64(bb, /* unsigned */ false);
              break;
            }
            case 2: {
              value = readVarint64(bb, /* unsigned */ false);
              break;
            }
            default:
              skipUnknownField(bb, tag & 7);
          }
        }
        if (key === undefined || value === undefined) throw new Error('Invalid data for map: statsInfo');
        values[key] = value;
        bb.limit = outerLimit;
        break;
      }

      // optional Image buffBadge = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.buffBadge = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_PayGrade {
  totalDiamondCount?: string;
  diamondIcon?: Image;
  name?: string;
  icon?: Image;
  nextName?: string;
  level?: string;
  nextIcon?: Image;
  nextDiamond?: string;
  nowDiamond?: string;
  thisGradeMinDiamond?: string;
  thisGradeMaxDiamond?: string;
  payDiamondBak?: string;
  gradeDescribe?: string;
  gradeIconList?: User_PayGrade_GradeIcon[];
  screenChatType?: string;
  imIcon?: Image;
  imIconWithLevel?: Image;
  liveIcon?: Image;
  newImIconWithLevel?: Image;
  newLiveIcon?: Image;
  upgradeNeedConsume?: string;
  nextPrivileges?: string;
  background?: Image;
  backgroundBack?: Image;
  score?: string;
  buffInfo?: User_GradeBuffInfo;
  gradeBanner?: string;
  profileDialogBg?: Image;
  profileDialogBgBack?: Image;
}

export function encodeUser_PayGrade(message: User_PayGrade): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_PayGrade(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_PayGrade(message: User_PayGrade, bb: ByteBuffer): void {
  // optional int64 totalDiamondCount = 1;
  let $totalDiamondCount = message.totalDiamondCount;
  if ($totalDiamondCount !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $totalDiamondCount);
  }

  // optional Image diamondIcon = 2;
  let $diamondIcon = message.diamondIcon;
  if ($diamondIcon !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeImage($diamondIcon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string name = 3;
  let $name = message.name;
  if ($name !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $name);
  }

  // optional Image icon = 4;
  let $icon = message.icon;
  if ($icon !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeImage($icon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string nextName = 5;
  let $nextName = message.nextName;
  if ($nextName !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $nextName);
  }

  // optional int64 level = 6;
  let $level = message.level;
  if ($level !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $level);
  }

  // optional Image nextIcon = 7;
  let $nextIcon = message.nextIcon;
  if ($nextIcon !== undefined) {
    writeVarint32(bb, 58);
    let nested = popByteBuffer();
    _encodeImage($nextIcon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 nextDiamond = 8;
  let $nextDiamond = message.nextDiamond;
  if ($nextDiamond !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, $nextDiamond);
  }

  // optional int64 nowDiamond = 9;
  let $nowDiamond = message.nowDiamond;
  if ($nowDiamond !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, $nowDiamond);
  }

  // optional int64 thisGradeMinDiamond = 10;
  let $thisGradeMinDiamond = message.thisGradeMinDiamond;
  if ($thisGradeMinDiamond !== undefined) {
    writeVarint32(bb, 80);
    writeVarint64(bb, $thisGradeMinDiamond);
  }

  // optional int64 thisGradeMaxDiamond = 11;
  let $thisGradeMaxDiamond = message.thisGradeMaxDiamond;
  if ($thisGradeMaxDiamond !== undefined) {
    writeVarint32(bb, 88);
    writeVarint64(bb, $thisGradeMaxDiamond);
  }

  // optional int64 payDiamondBak = 12;
  let $payDiamondBak = message.payDiamondBak;
  if ($payDiamondBak !== undefined) {
    writeVarint32(bb, 96);
    writeVarint64(bb, $payDiamondBak);
  }

  // optional string gradeDescribe = 13;
  let $gradeDescribe = message.gradeDescribe;
  if ($gradeDescribe !== undefined) {
    writeVarint32(bb, 106);
    writeString(bb, $gradeDescribe);
  }

  // repeated User_PayGrade_GradeIcon gradeIconList = 14;
  let array$gradeIconList = message.gradeIconList;
  if (array$gradeIconList !== undefined) {
    for (let value of array$gradeIconList) {
      writeVarint32(bb, 114);
      let nested = popByteBuffer();
      _encodeUser_PayGrade_GradeIcon(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional int64 screenChatType = 15;
  let $screenChatType = message.screenChatType;
  if ($screenChatType !== undefined) {
    writeVarint32(bb, 120);
    writeVarint64(bb, $screenChatType);
  }

  // optional Image imIcon = 16;
  let $imIcon = message.imIcon;
  if ($imIcon !== undefined) {
    writeVarint32(bb, 130);
    let nested = popByteBuffer();
    _encodeImage($imIcon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image imIconWithLevel = 17;
  let $imIconWithLevel = message.imIconWithLevel;
  if ($imIconWithLevel !== undefined) {
    writeVarint32(bb, 138);
    let nested = popByteBuffer();
    _encodeImage($imIconWithLevel, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image liveIcon = 18;
  let $liveIcon = message.liveIcon;
  if ($liveIcon !== undefined) {
    writeVarint32(bb, 146);
    let nested = popByteBuffer();
    _encodeImage($liveIcon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image newImIconWithLevel = 19;
  let $newImIconWithLevel = message.newImIconWithLevel;
  if ($newImIconWithLevel !== undefined) {
    writeVarint32(bb, 154);
    let nested = popByteBuffer();
    _encodeImage($newImIconWithLevel, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image newLiveIcon = 20;
  let $newLiveIcon = message.newLiveIcon;
  if ($newLiveIcon !== undefined) {
    writeVarint32(bb, 162);
    let nested = popByteBuffer();
    _encodeImage($newLiveIcon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 upgradeNeedConsume = 21;
  let $upgradeNeedConsume = message.upgradeNeedConsume;
  if ($upgradeNeedConsume !== undefined) {
    writeVarint32(bb, 168);
    writeVarint64(bb, $upgradeNeedConsume);
  }

  // optional string nextPrivileges = 22;
  let $nextPrivileges = message.nextPrivileges;
  if ($nextPrivileges !== undefined) {
    writeVarint32(bb, 178);
    writeString(bb, $nextPrivileges);
  }

  // optional Image background = 23;
  let $background = message.background;
  if ($background !== undefined) {
    writeVarint32(bb, 186);
    let nested = popByteBuffer();
    _encodeImage($background, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image backgroundBack = 24;
  let $backgroundBack = message.backgroundBack;
  if ($backgroundBack !== undefined) {
    writeVarint32(bb, 194);
    let nested = popByteBuffer();
    _encodeImage($backgroundBack, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 score = 25;
  let $score = message.score;
  if ($score !== undefined) {
    writeVarint32(bb, 200);
    writeVarint64(bb, $score);
  }

  // optional User_GradeBuffInfo buffInfo = 26;
  let $buffInfo = message.buffInfo;
  if ($buffInfo !== undefined) {
    writeVarint32(bb, 210);
    let nested = popByteBuffer();
    _encodeUser_GradeBuffInfo($buffInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string gradeBanner = 1001;
  let $gradeBanner = message.gradeBanner;
  if ($gradeBanner !== undefined) {
    writeVarint32(bb, 8010);
    writeString(bb, $gradeBanner);
  }

  // optional Image profileDialogBg = 1002;
  let $profileDialogBg = message.profileDialogBg;
  if ($profileDialogBg !== undefined) {
    writeVarint32(bb, 8018);
    let nested = popByteBuffer();
    _encodeImage($profileDialogBg, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image profileDialogBgBack = 1003;
  let $profileDialogBgBack = message.profileDialogBgBack;
  if ($profileDialogBgBack !== undefined) {
    writeVarint32(bb, 8026);
    let nested = popByteBuffer();
    _encodeImage($profileDialogBgBack, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeUser_PayGrade(binary: Uint8Array): User_PayGrade {
  return _decodeUser_PayGrade(wrapByteBuffer(binary));
}

export function _decodeUser_PayGrade(bb: ByteBuffer): User_PayGrade {
  let message: User_PayGrade = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 totalDiamondCount = 1;
      case 1: {
        message.totalDiamondCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Image diamondIcon = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.diamondIcon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string name = 3;
      case 3: {
        message.name = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image icon = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.icon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string nextName = 5;
      case 5: {
        message.nextName = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 level = 6;
      case 6: {
        message.level = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Image nextIcon = 7;
      case 7: {
        let limit = pushTemporaryLength(bb);
        message.nextIcon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 nextDiamond = 8;
      case 8: {
        message.nextDiamond = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 nowDiamond = 9;
      case 9: {
        message.nowDiamond = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 thisGradeMinDiamond = 10;
      case 10: {
        message.thisGradeMinDiamond = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 thisGradeMaxDiamond = 11;
      case 11: {
        message.thisGradeMaxDiamond = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 payDiamondBak = 12;
      case 12: {
        message.payDiamondBak = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string gradeDescribe = 13;
      case 13: {
        message.gradeDescribe = readString(bb, readVarint32(bb));
        break;
      }

      // repeated User_PayGrade_GradeIcon gradeIconList = 14;
      case 14: {
        let limit = pushTemporaryLength(bb);
        let values = message.gradeIconList || (message.gradeIconList = []);
        values.push(_decodeUser_PayGrade_GradeIcon(bb));
        bb.limit = limit;
        break;
      }

      // optional int64 screenChatType = 15;
      case 15: {
        message.screenChatType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Image imIcon = 16;
      case 16: {
        let limit = pushTemporaryLength(bb);
        message.imIcon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image imIconWithLevel = 17;
      case 17: {
        let limit = pushTemporaryLength(bb);
        message.imIconWithLevel = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image liveIcon = 18;
      case 18: {
        let limit = pushTemporaryLength(bb);
        message.liveIcon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image newImIconWithLevel = 19;
      case 19: {
        let limit = pushTemporaryLength(bb);
        message.newImIconWithLevel = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image newLiveIcon = 20;
      case 20: {
        let limit = pushTemporaryLength(bb);
        message.newLiveIcon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 upgradeNeedConsume = 21;
      case 21: {
        message.upgradeNeedConsume = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string nextPrivileges = 22;
      case 22: {
        message.nextPrivileges = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image background = 23;
      case 23: {
        let limit = pushTemporaryLength(bb);
        message.background = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image backgroundBack = 24;
      case 24: {
        let limit = pushTemporaryLength(bb);
        message.backgroundBack = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 score = 25;
      case 25: {
        message.score = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional User_GradeBuffInfo buffInfo = 26;
      case 26: {
        let limit = pushTemporaryLength(bb);
        message.buffInfo = _decodeUser_GradeBuffInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional string gradeBanner = 1001;
      case 1001: {
        message.gradeBanner = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image profileDialogBg = 1002;
      case 1002: {
        let limit = pushTemporaryLength(bb);
        message.profileDialogBg = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image profileDialogBgBack = 1003;
      case 1003: {
        let limit = pushTemporaryLength(bb);
        message.profileDialogBgBack = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_PayGrade_GradeIcon {
  icon?: Image;
  iconDiamond?: string;
  level?: string;
  levelStr?: string;
}

export function encodeUser_PayGrade_GradeIcon(message: User_PayGrade_GradeIcon): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_PayGrade_GradeIcon(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_PayGrade_GradeIcon(message: User_PayGrade_GradeIcon, bb: ByteBuffer): void {
  // optional Image icon = 1;
  let $icon = message.icon;
  if ($icon !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeImage($icon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 iconDiamond = 2;
  let $iconDiamond = message.iconDiamond;
  if ($iconDiamond !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $iconDiamond);
  }

  // optional int64 level = 3;
  let $level = message.level;
  if ($level !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $level);
  }

  // optional string levelStr = 4;
  let $levelStr = message.levelStr;
  if ($levelStr !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $levelStr);
  }
}

export function decodeUser_PayGrade_GradeIcon(binary: Uint8Array): User_PayGrade_GradeIcon {
  return _decodeUser_PayGrade_GradeIcon(wrapByteBuffer(binary));
}

export function _decodeUser_PayGrade_GradeIcon(bb: ByteBuffer): User_PayGrade_GradeIcon {
  let message: User_PayGrade_GradeIcon = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Image icon = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.icon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 iconDiamond = 2;
      case 2: {
        message.iconDiamond = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 level = 3;
      case 3: {
        message.level = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string levelStr = 4;
      case 4: {
        message.levelStr = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_AnchorLevel {
  level?: string;
  experience?: string;
  lowestExperienceThisLevel?: string;
  highestExperienceThisLevel?: string;
  taskStartExperience?: string;
  taskStartTime?: string;
  taskDecreaseExperience?: string;
  taskTargetExperience?: string;
  taskEndTime?: string;
  profileDialogBg?: Image;
  profileDialogBgBack?: Image;
  stageLevel?: Image;
  smallIcon?: Image;
}

export function encodeUser_AnchorLevel(message: User_AnchorLevel): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_AnchorLevel(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_AnchorLevel(message: User_AnchorLevel, bb: ByteBuffer): void {
  // optional int64 level = 1;
  let $level = message.level;
  if ($level !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $level);
  }

  // optional int64 experience = 2;
  let $experience = message.experience;
  if ($experience !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $experience);
  }

  // optional int64 lowestExperienceThisLevel = 3;
  let $lowestExperienceThisLevel = message.lowestExperienceThisLevel;
  if ($lowestExperienceThisLevel !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $lowestExperienceThisLevel);
  }

  // optional int64 highestExperienceThisLevel = 4;
  let $highestExperienceThisLevel = message.highestExperienceThisLevel;
  if ($highestExperienceThisLevel !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $highestExperienceThisLevel);
  }

  // optional int64 taskStartExperience = 5;
  let $taskStartExperience = message.taskStartExperience;
  if ($taskStartExperience !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $taskStartExperience);
  }

  // optional int64 taskStartTime = 6;
  let $taskStartTime = message.taskStartTime;
  if ($taskStartTime !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $taskStartTime);
  }

  // optional int64 taskDecreaseExperience = 7;
  let $taskDecreaseExperience = message.taskDecreaseExperience;
  if ($taskDecreaseExperience !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $taskDecreaseExperience);
  }

  // optional int64 taskTargetExperience = 8;
  let $taskTargetExperience = message.taskTargetExperience;
  if ($taskTargetExperience !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, $taskTargetExperience);
  }

  // optional int64 taskEndTime = 9;
  let $taskEndTime = message.taskEndTime;
  if ($taskEndTime !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, $taskEndTime);
  }

  // optional Image profileDialogBg = 10;
  let $profileDialogBg = message.profileDialogBg;
  if ($profileDialogBg !== undefined) {
    writeVarint32(bb, 82);
    let nested = popByteBuffer();
    _encodeImage($profileDialogBg, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image profileDialogBgBack = 11;
  let $profileDialogBgBack = message.profileDialogBgBack;
  if ($profileDialogBgBack !== undefined) {
    writeVarint32(bb, 90);
    let nested = popByteBuffer();
    _encodeImage($profileDialogBgBack, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image stageLevel = 12;
  let $stageLevel = message.stageLevel;
  if ($stageLevel !== undefined) {
    writeVarint32(bb, 98);
    let nested = popByteBuffer();
    _encodeImage($stageLevel, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image smallIcon = 13;
  let $smallIcon = message.smallIcon;
  if ($smallIcon !== undefined) {
    writeVarint32(bb, 106);
    let nested = popByteBuffer();
    _encodeImage($smallIcon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeUser_AnchorLevel(binary: Uint8Array): User_AnchorLevel {
  return _decodeUser_AnchorLevel(wrapByteBuffer(binary));
}

export function _decodeUser_AnchorLevel(bb: ByteBuffer): User_AnchorLevel {
  let message: User_AnchorLevel = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 level = 1;
      case 1: {
        message.level = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 experience = 2;
      case 2: {
        message.experience = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 lowestExperienceThisLevel = 3;
      case 3: {
        message.lowestExperienceThisLevel = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 highestExperienceThisLevel = 4;
      case 4: {
        message.highestExperienceThisLevel = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 taskStartExperience = 5;
      case 5: {
        message.taskStartExperience = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 taskStartTime = 6;
      case 6: {
        message.taskStartTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 taskDecreaseExperience = 7;
      case 7: {
        message.taskDecreaseExperience = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 taskTargetExperience = 8;
      case 8: {
        message.taskTargetExperience = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 taskEndTime = 9;
      case 9: {
        message.taskEndTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Image profileDialogBg = 10;
      case 10: {
        let limit = pushTemporaryLength(bb);
        message.profileDialogBg = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image profileDialogBgBack = 11;
      case 11: {
        let limit = pushTemporaryLength(bb);
        message.profileDialogBgBack = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image stageLevel = 12;
      case 12: {
        let limit = pushTemporaryLength(bb);
        message.stageLevel = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image smallIcon = 13;
      case 13: {
        let limit = pushTemporaryLength(bb);
        message.smallIcon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_AuthorStats {
  videoTotalCount?: string;
  videoTotalPlayCount?: string;
  videoTotalShareCount?: string;
  videoTotalSeriesCount?: string;
  varietyShowPlayCount?: string;
  videoTotalFavoriteCount?: string;
}

export function encodeUser_AuthorStats(message: User_AuthorStats): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_AuthorStats(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_AuthorStats(message: User_AuthorStats, bb: ByteBuffer): void {
  // optional int64 videoTotalCount = 1;
  let $videoTotalCount = message.videoTotalCount;
  if ($videoTotalCount !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $videoTotalCount);
  }

  // optional int64 videoTotalPlayCount = 2;
  let $videoTotalPlayCount = message.videoTotalPlayCount;
  if ($videoTotalPlayCount !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $videoTotalPlayCount);
  }

  // optional int64 videoTotalShareCount = 3;
  let $videoTotalShareCount = message.videoTotalShareCount;
  if ($videoTotalShareCount !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $videoTotalShareCount);
  }

  // optional int64 videoTotalSeriesCount = 4;
  let $videoTotalSeriesCount = message.videoTotalSeriesCount;
  if ($videoTotalSeriesCount !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $videoTotalSeriesCount);
  }

  // optional int64 varietyShowPlayCount = 5;
  let $varietyShowPlayCount = message.varietyShowPlayCount;
  if ($varietyShowPlayCount !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $varietyShowPlayCount);
  }

  // optional int64 videoTotalFavoriteCount = 6;
  let $videoTotalFavoriteCount = message.videoTotalFavoriteCount;
  if ($videoTotalFavoriteCount !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $videoTotalFavoriteCount);
  }
}

export function decodeUser_AuthorStats(binary: Uint8Array): User_AuthorStats {
  return _decodeUser_AuthorStats(wrapByteBuffer(binary));
}

export function _decodeUser_AuthorStats(bb: ByteBuffer): User_AuthorStats {
  let message: User_AuthorStats = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 videoTotalCount = 1;
      case 1: {
        message.videoTotalCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 videoTotalPlayCount = 2;
      case 2: {
        message.videoTotalPlayCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 videoTotalShareCount = 3;
      case 3: {
        message.videoTotalShareCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 videoTotalSeriesCount = 4;
      case 4: {
        message.videoTotalSeriesCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 varietyShowPlayCount = 5;
      case 5: {
        message.varietyShowPlayCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 videoTotalFavoriteCount = 6;
      case 6: {
        message.videoTotalFavoriteCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_XiguaParams {}

export function encodeUser_XiguaParams(message: User_XiguaParams): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_XiguaParams(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_XiguaParams(message: User_XiguaParams, bb: ByteBuffer): void {}

export function decodeUser_XiguaParams(binary: Uint8Array): User_XiguaParams {
  return _decodeUser_XiguaParams(wrapByteBuffer(binary));
}

export function _decodeUser_XiguaParams(bb: ByteBuffer): User_XiguaParams {
  let message: User_XiguaParams = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_ActivityInfo {}

export function encodeUser_ActivityInfo(message: User_ActivityInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_ActivityInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_ActivityInfo(message: User_ActivityInfo, bb: ByteBuffer): void {}

export function decodeUser_ActivityInfo(binary: Uint8Array): User_ActivityInfo {
  return _decodeUser_ActivityInfo(wrapByteBuffer(binary));
}

export function _decodeUser_ActivityInfo(bb: ByteBuffer): User_ActivityInfo {
  let message: User_ActivityInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_NobleLevelInfo {
  nobleBackground?: Image;
  nobleLevel?: string;
  nobleIcon?: Image;
  nobleName?: string;
  expireTime?: string;
  nobleBigIcon?: Image;
  nobleIconWithBack?: Image;
  nobleBoarder?: Image;
  nobleBackgroundColor?: string;
}

export function encodeUser_NobleLevelInfo(message: User_NobleLevelInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_NobleLevelInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_NobleLevelInfo(message: User_NobleLevelInfo, bb: ByteBuffer): void {
  // optional Image nobleBackground = 1;
  let $nobleBackground = message.nobleBackground;
  if ($nobleBackground !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeImage($nobleBackground, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 nobleLevel = 2;
  let $nobleLevel = message.nobleLevel;
  if ($nobleLevel !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $nobleLevel);
  }

  // optional Image nobleIcon = 3;
  let $nobleIcon = message.nobleIcon;
  if ($nobleIcon !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeImage($nobleIcon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string nobleName = 4;
  let $nobleName = message.nobleName;
  if ($nobleName !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $nobleName);
  }

  // optional int64 expireTime = 5;
  let $expireTime = message.expireTime;
  if ($expireTime !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $expireTime);
  }

  // optional Image nobleBigIcon = 6;
  let $nobleBigIcon = message.nobleBigIcon;
  if ($nobleBigIcon !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeImage($nobleBigIcon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image nobleIconWithBack = 7;
  let $nobleIconWithBack = message.nobleIconWithBack;
  if ($nobleIconWithBack !== undefined) {
    writeVarint32(bb, 58);
    let nested = popByteBuffer();
    _encodeImage($nobleIconWithBack, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image nobleBoarder = 8;
  let $nobleBoarder = message.nobleBoarder;
  if ($nobleBoarder !== undefined) {
    writeVarint32(bb, 66);
    let nested = popByteBuffer();
    _encodeImage($nobleBoarder, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string nobleBackgroundColor = 9;
  let $nobleBackgroundColor = message.nobleBackgroundColor;
  if ($nobleBackgroundColor !== undefined) {
    writeVarint32(bb, 74);
    writeString(bb, $nobleBackgroundColor);
  }
}

export function decodeUser_NobleLevelInfo(binary: Uint8Array): User_NobleLevelInfo {
  return _decodeUser_NobleLevelInfo(wrapByteBuffer(binary));
}

export function _decodeUser_NobleLevelInfo(bb: ByteBuffer): User_NobleLevelInfo {
  let message: User_NobleLevelInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Image nobleBackground = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.nobleBackground = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 nobleLevel = 2;
      case 2: {
        message.nobleLevel = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Image nobleIcon = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.nobleIcon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string nobleName = 4;
      case 4: {
        message.nobleName = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 expireTime = 5;
      case 5: {
        message.expireTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Image nobleBigIcon = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.nobleBigIcon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image nobleIconWithBack = 7;
      case 7: {
        let limit = pushTemporaryLength(bb);
        message.nobleIconWithBack = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image nobleBoarder = 8;
      case 8: {
        let limit = pushTemporaryLength(bb);
        message.nobleBoarder = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string nobleBackgroundColor = 9;
      case 9: {
        message.nobleBackgroundColor = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_BrotherhoodInfo {}

export function encodeUser_BrotherhoodInfo(message: User_BrotherhoodInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_BrotherhoodInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_BrotherhoodInfo(message: User_BrotherhoodInfo, bb: ByteBuffer): void {}

export function decodeUser_BrotherhoodInfo(binary: Uint8Array): User_BrotherhoodInfo {
  return _decodeUser_BrotherhoodInfo(wrapByteBuffer(binary));
}

export function _decodeUser_BrotherhoodInfo(bb: ByteBuffer): User_BrotherhoodInfo {
  let message: User_BrotherhoodInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_AuthenticationInfo {}

export function encodeUser_AuthenticationInfo(message: User_AuthenticationInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_AuthenticationInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_AuthenticationInfo(message: User_AuthenticationInfo, bb: ByteBuffer): void {}

export function decodeUser_AuthenticationInfo(binary: Uint8Array): User_AuthenticationInfo {
  return _decodeUser_AuthenticationInfo(wrapByteBuffer(binary));
}

export function _decodeUser_AuthenticationInfo(bb: ByteBuffer): User_AuthenticationInfo {
  let message: User_AuthenticationInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_PoiInfo {}

export function encodeUser_PoiInfo(message: User_PoiInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_PoiInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_PoiInfo(message: User_PoiInfo, bb: ByteBuffer): void {}

export function decodeUser_PoiInfo(binary: Uint8Array): User_PoiInfo {
  return _decodeUser_PoiInfo(wrapByteBuffer(binary));
}

export function _decodeUser_PoiInfo(bb: ByteBuffer): User_PoiInfo {
  let message: User_PoiInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_FansGroupInfo {}

export function encodeUser_FansGroupInfo(message: User_FansGroupInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_FansGroupInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_FansGroupInfo(message: User_FansGroupInfo, bb: ByteBuffer): void {}

export function decodeUser_FansGroupInfo(binary: Uint8Array): User_FansGroupInfo {
  return _decodeUser_FansGroupInfo(wrapByteBuffer(binary));
}

export function _decodeUser_FansGroupInfo(bb: ByteBuffer): User_FansGroupInfo {
  let message: User_FansGroupInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_JAccreditInfo {}

export function encodeUser_JAccreditInfo(message: User_JAccreditInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_JAccreditInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_JAccreditInfo(message: User_JAccreditInfo, bb: ByteBuffer): void {}

export function decodeUser_JAccreditInfo(binary: Uint8Array): User_JAccreditInfo {
  return _decodeUser_JAccreditInfo(wrapByteBuffer(binary));
}

export function _decodeUser_JAccreditInfo(bb: ByteBuffer): User_JAccreditInfo {
  let message: User_JAccreditInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_Subscribe {}

export function encodeUser_Subscribe(message: User_Subscribe): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_Subscribe(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_Subscribe(message: User_Subscribe, bb: ByteBuffer): void {}

export function decodeUser_Subscribe(binary: Uint8Array): User_Subscribe {
  return _decodeUser_Subscribe(wrapByteBuffer(binary));
}

export function _decodeUser_Subscribe(bb: ByteBuffer): User_Subscribe {
  let message: User_Subscribe = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_ProfileStyleParams {}

export function encodeUser_ProfileStyleParams(message: User_ProfileStyleParams): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_ProfileStyleParams(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_ProfileStyleParams(message: User_ProfileStyleParams, bb: ByteBuffer): void {}

export function decodeUser_ProfileStyleParams(binary: Uint8Array): User_ProfileStyleParams {
  return _decodeUser_ProfileStyleParams(wrapByteBuffer(binary));
}

export function _decodeUser_ProfileStyleParams(bb: ByteBuffer): User_ProfileStyleParams {
  let message: User_ProfileStyleParams = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_UserDressInfo {}

export function encodeUser_UserDressInfo(message: User_UserDressInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_UserDressInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_UserDressInfo(message: User_UserDressInfo, bb: ByteBuffer): void {}

export function decodeUser_UserDressInfo(binary: Uint8Array): User_UserDressInfo {
  return _decodeUser_UserDressInfo(wrapByteBuffer(binary));
}

export function _decodeUser_UserDressInfo(bb: ByteBuffer): User_UserDressInfo {
  let message: User_UserDressInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_BizRelation {}

export function encodeUser_BizRelation(message: User_BizRelation): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_BizRelation(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_BizRelation(message: User_BizRelation, bb: ByteBuffer): void {}

export function decodeUser_BizRelation(binary: Uint8Array): User_BizRelation {
  return _decodeUser_BizRelation(wrapByteBuffer(binary));
}

export function _decodeUser_BizRelation(bb: ByteBuffer): User_BizRelation {
  let message: User_BizRelation = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_PublicAreaBadgeInfo {}

export function encodeUser_PublicAreaBadgeInfo(message: User_PublicAreaBadgeInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_PublicAreaBadgeInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_PublicAreaBadgeInfo(message: User_PublicAreaBadgeInfo, bb: ByteBuffer): void {}

export function decodeUser_PublicAreaBadgeInfo(binary: Uint8Array): User_PublicAreaBadgeInfo {
  return _decodeUser_PublicAreaBadgeInfo(wrapByteBuffer(binary));
}

export function _decodeUser_PublicAreaBadgeInfo(bb: ByteBuffer): User_PublicAreaBadgeInfo {
  let message: User_PublicAreaBadgeInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_ExtraInfo {}

export function encodeUser_ExtraInfo(message: User_ExtraInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_ExtraInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_ExtraInfo(message: User_ExtraInfo, bb: ByteBuffer): void {}

export function decodeUser_ExtraInfo(binary: Uint8Array): User_ExtraInfo {
  return _decodeUser_ExtraInfo(wrapByteBuffer(binary));
}

export function _decodeUser_ExtraInfo(bb: ByteBuffer): User_ExtraInfo {
  let message: User_ExtraInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_UserSettingInfo {}

export function encodeUser_UserSettingInfo(message: User_UserSettingInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_UserSettingInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_UserSettingInfo(message: User_UserSettingInfo, bb: ByteBuffer): void {}

export function decodeUser_UserSettingInfo(binary: Uint8Array): User_UserSettingInfo {
  return _decodeUser_UserSettingInfo(wrapByteBuffer(binary));
}

export function _decodeUser_UserSettingInfo(bb: ByteBuffer): User_UserSettingInfo {
  let message: User_UserSettingInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface User_UserPermissionGrant {}

export function encodeUser_UserPermissionGrant(message: User_UserPermissionGrant): Uint8Array {
  let bb = popByteBuffer();
  _encodeUser_UserPermissionGrant(message, bb);
  return toUint8Array(bb);
}

export function _encodeUser_UserPermissionGrant(message: User_UserPermissionGrant, bb: ByteBuffer): void {}

export function decodeUser_UserPermissionGrant(binary: Uint8Array): User_UserPermissionGrant {
  return _decodeUser_UserPermissionGrant(wrapByteBuffer(binary));
}

export function _decodeUser_UserPermissionGrant(bb: ByteBuffer): User_UserPermissionGrant {
  let message: User_UserPermissionGrant = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface TextFormat {
  color?: string;
  bold?: boolean;
  italic?: boolean;
  weight?: number;
  italicAngle?: number;
  fontSize?: number;
  userHeightLightColor?: boolean;
  useRemoteClor?: boolean;
}

export function encodeTextFormat(message: TextFormat): Uint8Array {
  let bb = popByteBuffer();
  _encodeTextFormat(message, bb);
  return toUint8Array(bb);
}

export function _encodeTextFormat(message: TextFormat, bb: ByteBuffer): void {
  // optional string color = 1;
  let $color = message.color;
  if ($color !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $color);
  }

  // optional bool bold = 2;
  let $bold = message.bold;
  if ($bold !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $bold ? 1 : 0);
  }

  // optional bool italic = 3;
  let $italic = message.italic;
  if ($italic !== undefined) {
    writeVarint32(bb, 24);
    writeByte(bb, $italic ? 1 : 0);
  }

  // optional int32 weight = 4;
  let $weight = message.weight;
  if ($weight !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($weight));
  }

  // optional int32 italicAngle = 5;
  let $italicAngle = message.italicAngle;
  if ($italicAngle !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($italicAngle));
  }

  // optional int32 fontSize = 6;
  let $fontSize = message.fontSize;
  if ($fontSize !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, intToLong($fontSize));
  }

  // optional bool userHeightLightColor = 7;
  let $userHeightLightColor = message.userHeightLightColor;
  if ($userHeightLightColor !== undefined) {
    writeVarint32(bb, 56);
    writeByte(bb, $userHeightLightColor ? 1 : 0);
  }

  // optional bool useRemoteClor = 8;
  let $useRemoteClor = message.useRemoteClor;
  if ($useRemoteClor !== undefined) {
    writeVarint32(bb, 64);
    writeByte(bb, $useRemoteClor ? 1 : 0);
  }
}

export function decodeTextFormat(binary: Uint8Array): TextFormat {
  return _decodeTextFormat(wrapByteBuffer(binary));
}

export function _decodeTextFormat(bb: ByteBuffer): TextFormat {
  let message: TextFormat = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string color = 1;
      case 1: {
        message.color = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool bold = 2;
      case 2: {
        message.bold = !!readByte(bb);
        break;
      }

      // optional bool italic = 3;
      case 3: {
        message.italic = !!readByte(bb);
        break;
      }

      // optional int32 weight = 4;
      case 4: {
        message.weight = readVarint32(bb);
        break;
      }

      // optional int32 italicAngle = 5;
      case 5: {
        message.italicAngle = readVarint32(bb);
        break;
      }

      // optional int32 fontSize = 6;
      case 6: {
        message.fontSize = readVarint32(bb);
        break;
      }

      // optional bool userHeightLightColor = 7;
      case 7: {
        message.userHeightLightColor = !!readByte(bb);
        break;
      }

      // optional bool useRemoteClor = 8;
      case 8: {
        message.useRemoteClor = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface TextPiece {
  type?: number;
  format?: TextFormat;
  valueRef?: string;
  stringValue?: string;
  userValue?: TextPieceUser;
  giftValue?: TextPieceGift;
  heartValue?: TextPieceHeart;
  patternRefValue?: TextPiecePatternRef;
  imageValue?: TextPieceImage;
  schemaKey?: string;
}

export function encodeTextPiece(message: TextPiece): Uint8Array {
  let bb = popByteBuffer();
  _encodeTextPiece(message, bb);
  return toUint8Array(bb);
}

export function _encodeTextPiece(message: TextPiece, bb: ByteBuffer): void {
  // optional int32 type = 1;
  let $type = message.type;
  if ($type !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($type));
  }

  // optional TextFormat format = 2;
  let $format = message.format;
  if ($format !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeTextFormat($format, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string valueRef = 3;
  let $valueRef = message.valueRef;
  if ($valueRef !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $valueRef);
  }

  // optional string stringValue = 11;
  let $stringValue = message.stringValue;
  if ($stringValue !== undefined) {
    writeVarint32(bb, 90);
    writeString(bb, $stringValue);
  }

  // optional TextPieceUser userValue = 21;
  let $userValue = message.userValue;
  if ($userValue !== undefined) {
    writeVarint32(bb, 170);
    let nested = popByteBuffer();
    _encodeTextPieceUser($userValue, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional TextPieceGift giftValue = 22;
  let $giftValue = message.giftValue;
  if ($giftValue !== undefined) {
    writeVarint32(bb, 178);
    let nested = popByteBuffer();
    _encodeTextPieceGift($giftValue, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional TextPieceHeart heartValue = 23;
  let $heartValue = message.heartValue;
  if ($heartValue !== undefined) {
    writeVarint32(bb, 186);
    let nested = popByteBuffer();
    _encodeTextPieceHeart($heartValue, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional TextPiecePatternRef patternRefValue = 24;
  let $patternRefValue = message.patternRefValue;
  if ($patternRefValue !== undefined) {
    writeVarint32(bb, 194);
    let nested = popByteBuffer();
    _encodeTextPiecePatternRef($patternRefValue, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional TextPieceImage imageValue = 25;
  let $imageValue = message.imageValue;
  if ($imageValue !== undefined) {
    writeVarint32(bb, 202);
    let nested = popByteBuffer();
    _encodeTextPieceImage($imageValue, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string schemaKey = 100;
  let $schemaKey = message.schemaKey;
  if ($schemaKey !== undefined) {
    writeVarint32(bb, 802);
    writeString(bb, $schemaKey);
  }
}

export function decodeTextPiece(binary: Uint8Array): TextPiece {
  return _decodeTextPiece(wrapByteBuffer(binary));
}

export function _decodeTextPiece(bb: ByteBuffer): TextPiece {
  let message: TextPiece = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 type = 1;
      case 1: {
        message.type = readVarint32(bb);
        break;
      }

      // optional TextFormat format = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.format = _decodeTextFormat(bb);
        bb.limit = limit;
        break;
      }

      // optional string valueRef = 3;
      case 3: {
        message.valueRef = readString(bb, readVarint32(bb));
        break;
      }

      // optional string stringValue = 11;
      case 11: {
        message.stringValue = readString(bb, readVarint32(bb));
        break;
      }

      // optional TextPieceUser userValue = 21;
      case 21: {
        let limit = pushTemporaryLength(bb);
        message.userValue = _decodeTextPieceUser(bb);
        bb.limit = limit;
        break;
      }

      // optional TextPieceGift giftValue = 22;
      case 22: {
        let limit = pushTemporaryLength(bb);
        message.giftValue = _decodeTextPieceGift(bb);
        bb.limit = limit;
        break;
      }

      // optional TextPieceHeart heartValue = 23;
      case 23: {
        let limit = pushTemporaryLength(bb);
        message.heartValue = _decodeTextPieceHeart(bb);
        bb.limit = limit;
        break;
      }

      // optional TextPiecePatternRef patternRefValue = 24;
      case 24: {
        let limit = pushTemporaryLength(bb);
        message.patternRefValue = _decodeTextPiecePatternRef(bb);
        bb.limit = limit;
        break;
      }

      // optional TextPieceImage imageValue = 25;
      case 25: {
        let limit = pushTemporaryLength(bb);
        message.imageValue = _decodeTextPieceImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string schemaKey = 100;
      case 100: {
        message.schemaKey = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface TextPieceGift {
  giftId?: string;
  nameRef?: PatternRef;
}

export function encodeTextPieceGift(message: TextPieceGift): Uint8Array {
  let bb = popByteBuffer();
  _encodeTextPieceGift(message, bb);
  return toUint8Array(bb);
}

export function _encodeTextPieceGift(message: TextPieceGift, bb: ByteBuffer): void {
  // optional int64 giftId = 1;
  let $giftId = message.giftId;
  if ($giftId !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $giftId);
  }

  // optional PatternRef nameRef = 2;
  let $nameRef = message.nameRef;
  if ($nameRef !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodePatternRef($nameRef, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeTextPieceGift(binary: Uint8Array): TextPieceGift {
  return _decodeTextPieceGift(wrapByteBuffer(binary));
}

export function _decodeTextPieceGift(bb: ByteBuffer): TextPieceGift {
  let message: TextPieceGift = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 giftId = 1;
      case 1: {
        message.giftId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional PatternRef nameRef = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.nameRef = _decodePatternRef(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface TextPieceHeart {
  color?: string;
}

export function encodeTextPieceHeart(message: TextPieceHeart): Uint8Array {
  let bb = popByteBuffer();
  _encodeTextPieceHeart(message, bb);
  return toUint8Array(bb);
}

export function _encodeTextPieceHeart(message: TextPieceHeart, bb: ByteBuffer): void {
  // optional string color = 1;
  let $color = message.color;
  if ($color !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $color);
  }
}

export function decodeTextPieceHeart(binary: Uint8Array): TextPieceHeart {
  return _decodeTextPieceHeart(wrapByteBuffer(binary));
}

export function _decodeTextPieceHeart(bb: ByteBuffer): TextPieceHeart {
  let message: TextPieceHeart = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string color = 1;
      case 1: {
        message.color = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface TextPiecePatternRef {
  key?: string;
  defaultPattern?: string;
}

export function encodeTextPiecePatternRef(message: TextPiecePatternRef): Uint8Array {
  let bb = popByteBuffer();
  _encodeTextPiecePatternRef(message, bb);
  return toUint8Array(bb);
}

export function _encodeTextPiecePatternRef(message: TextPiecePatternRef, bb: ByteBuffer): void {
  // optional string key = 1;
  let $key = message.key;
  if ($key !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $key);
  }

  // optional string defaultPattern = 2;
  let $defaultPattern = message.defaultPattern;
  if ($defaultPattern !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $defaultPattern);
  }
}

export function decodeTextPiecePatternRef(binary: Uint8Array): TextPiecePatternRef {
  return _decodeTextPiecePatternRef(wrapByteBuffer(binary));
}

export function _decodeTextPiecePatternRef(bb: ByteBuffer): TextPiecePatternRef {
  let message: TextPiecePatternRef = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string key = 1;
      case 1: {
        message.key = readString(bb, readVarint32(bb));
        break;
      }

      // optional string defaultPattern = 2;
      case 2: {
        message.defaultPattern = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface TextPieceImage {
  image?: Image;
  scalingRate?: number;
}

export function encodeTextPieceImage(message: TextPieceImage): Uint8Array {
  let bb = popByteBuffer();
  _encodeTextPieceImage(message, bb);
  return toUint8Array(bb);
}

export function _encodeTextPieceImage(message: TextPieceImage, bb: ByteBuffer): void {
  // optional Image image = 1;
  let $image = message.image;
  if ($image !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeImage($image, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional float scalingRate = 2;
  let $scalingRate = message.scalingRate;
  if ($scalingRate !== undefined) {
    writeVarint32(bb, 21);
    writeFloat(bb, $scalingRate);
  }
}

export function decodeTextPieceImage(binary: Uint8Array): TextPieceImage {
  return _decodeTextPieceImage(wrapByteBuffer(binary));
}

export function _decodeTextPieceImage(bb: ByteBuffer): TextPieceImage {
  let message: TextPieceImage = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Image image = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.image = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional float scalingRate = 2;
      case 2: {
        message.scalingRate = readFloat(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface PatternRef {
  key?: string;
  defaultPattern?: string;
}

export function encodePatternRef(message: PatternRef): Uint8Array {
  let bb = popByteBuffer();
  _encodePatternRef(message, bb);
  return toUint8Array(bb);
}

export function _encodePatternRef(message: PatternRef, bb: ByteBuffer): void {
  // optional string key = 1;
  let $key = message.key;
  if ($key !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $key);
  }

  // optional string defaultPattern = 2;
  let $defaultPattern = message.defaultPattern;
  if ($defaultPattern !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $defaultPattern);
  }
}

export function decodePatternRef(binary: Uint8Array): PatternRef {
  return _decodePatternRef(wrapByteBuffer(binary));
}

export function _decodePatternRef(bb: ByteBuffer): PatternRef {
  let message: PatternRef = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string key = 1;
      case 1: {
        message.key = readString(bb, readVarint32(bb));
        break;
      }

      // optional string defaultPattern = 2;
      case 2: {
        message.defaultPattern = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Image {
  urlList?: string[];
  uri?: string;
  height?: string;
  width?: string;
  avgColor?: string;
  imageType?: number;
  openWebUrl?: string;
  content?: Image_Content;
  isAnimated?: boolean;
}

export function encodeImage(message: Image): Uint8Array {
  let bb = popByteBuffer();
  _encodeImage(message, bb);
  return toUint8Array(bb);
}

export function _encodeImage(message: Image, bb: ByteBuffer): void {
  // repeated string urlList = 1;
  let array$urlList = message.urlList;
  if (array$urlList !== undefined) {
    for (let value of array$urlList) {
      writeVarint32(bb, 10);
      writeString(bb, value);
    }
  }

  // optional string uri = 2;
  let $uri = message.uri;
  if ($uri !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $uri);
  }

  // optional int64 height = 3;
  let $height = message.height;
  if ($height !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $height);
  }

  // optional int64 width = 4;
  let $width = message.width;
  if ($width !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $width);
  }

  // optional string avgColor = 5;
  let $avgColor = message.avgColor;
  if ($avgColor !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $avgColor);
  }

  // optional int32 imageType = 6;
  let $imageType = message.imageType;
  if ($imageType !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, intToLong($imageType));
  }

  // optional string openWebUrl = 7;
  let $openWebUrl = message.openWebUrl;
  if ($openWebUrl !== undefined) {
    writeVarint32(bb, 58);
    writeString(bb, $openWebUrl);
  }

  // optional Image_Content content = 8;
  let $content = message.content;
  if ($content !== undefined) {
    writeVarint32(bb, 66);
    let nested = popByteBuffer();
    _encodeImage_Content($content, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool isAnimated = 9;
  let $isAnimated = message.isAnimated;
  if ($isAnimated !== undefined) {
    writeVarint32(bb, 72);
    writeByte(bb, $isAnimated ? 1 : 0);
  }
}

export function decodeImage(binary: Uint8Array): Image {
  return _decodeImage(wrapByteBuffer(binary));
}

export function _decodeImage(bb: ByteBuffer): Image {
  let message: Image = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated string urlList = 1;
      case 1: {
        let values = message.urlList || (message.urlList = []);
        values.push(readString(bb, readVarint32(bb)));
        break;
      }

      // optional string uri = 2;
      case 2: {
        message.uri = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 height = 3;
      case 3: {
        message.height = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 width = 4;
      case 4: {
        message.width = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string avgColor = 5;
      case 5: {
        message.avgColor = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 imageType = 6;
      case 6: {
        message.imageType = readVarint32(bb);
        break;
      }

      // optional string openWebUrl = 7;
      case 7: {
        message.openWebUrl = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image_Content content = 8;
      case 8: {
        let limit = pushTemporaryLength(bb);
        message.content = _decodeImage_Content(bb);
        bb.limit = limit;
        break;
      }

      // optional bool isAnimated = 9;
      case 9: {
        message.isAnimated = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Image_Content {
  name?: string;
  fontColor?: string;
  level?: string;
  alternativeText?: string;
}

export function encodeImage_Content(message: Image_Content): Uint8Array {
  let bb = popByteBuffer();
  _encodeImage_Content(message, bb);
  return toUint8Array(bb);
}

export function _encodeImage_Content(message: Image_Content, bb: ByteBuffer): void {
  // optional string name = 1;
  let $name = message.name;
  if ($name !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $name);
  }

  // optional string fontColor = 2;
  let $fontColor = message.fontColor;
  if ($fontColor !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $fontColor);
  }

  // optional int64 level = 3;
  let $level = message.level;
  if ($level !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $level);
  }

  // optional string alternativeText = 4;
  let $alternativeText = message.alternativeText;
  if ($alternativeText !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $alternativeText);
  }
}

export function decodeImage_Content(binary: Uint8Array): Image_Content {
  return _decodeImage_Content(wrapByteBuffer(binary));
}

export function _decodeImage_Content(bb: ByteBuffer): Image_Content {
  let message: Image_Content = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string name = 1;
      case 1: {
        message.name = readString(bb, readVarint32(bb));
        break;
      }

      // optional string fontColor = 2;
      case 2: {
        message.fontColor = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 level = 3;
      case 3: {
        message.level = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string alternativeText = 4;
      case 4: {
        message.alternativeText = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface UserVIPInfo {}

export function encodeUserVIPInfo(message: UserVIPInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeUserVIPInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeUserVIPInfo(message: UserVIPInfo, bb: ByteBuffer): void {}

export function decodeUserVIPInfo(binary: Uint8Array): UserVIPInfo {
  return _decodeUserVIPInfo(wrapByteBuffer(binary));
}

export function _decodeUserVIPInfo(bb: ByteBuffer): UserVIPInfo {
  let message: UserVIPInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface IndustryCertification {}

export function encodeIndustryCertification(message: IndustryCertification): Uint8Array {
  let bb = popByteBuffer();
  _encodeIndustryCertification(message, bb);
  return toUint8Array(bb);
}

export function _encodeIndustryCertification(message: IndustryCertification, bb: ByteBuffer): void {}

export function decodeIndustryCertification(binary: Uint8Array): IndustryCertification {
  return _decodeIndustryCertification(wrapByteBuffer(binary));
}

export function _decodeIndustryCertification(bb: ByteBuffer): IndustryCertification {
  let message: IndustryCertification = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface MemberEntranceInfo {}

export function encodeMemberEntranceInfo(message: MemberEntranceInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeMemberEntranceInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeMemberEntranceInfo(message: MemberEntranceInfo, bb: ByteBuffer): void {}

export function decodeMemberEntranceInfo(binary: Uint8Array): MemberEntranceInfo {
  return _decodeMemberEntranceInfo(wrapByteBuffer(binary));
}

export function _decodeMemberEntranceInfo(bb: ByteBuffer): MemberEntranceInfo {
  let message: MemberEntranceInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface TextPieceUser {
  user?: User;
  withColon?: boolean;
}

export function encodeTextPieceUser(message: TextPieceUser): Uint8Array {
  let bb = popByteBuffer();
  _encodeTextPieceUser(message, bb);
  return toUint8Array(bb);
}

export function _encodeTextPieceUser(message: TextPieceUser, bb: ByteBuffer): void {
  // optional User user = 1;
  let $user = message.user;
  if ($user !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeUser($user, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool withColon = 2;
  let $withColon = message.withColon;
  if ($withColon !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $withColon ? 1 : 0);
  }
}

export function decodeTextPieceUser(binary: Uint8Array): TextPieceUser {
  return _decodeTextPieceUser(wrapByteBuffer(binary));
}

export function _decodeTextPieceUser(bb: ByteBuffer): TextPieceUser {
  let message: TextPieceUser = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional User user = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.user = _decodeUser(bb);
        bb.limit = limit;
        break;
      }

      // optional bool withColon = 2;
      case 2: {
        message.withColon = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface PublicAreaCommon {
  userLabel?: Image;
  userConsumeInRoom?: string;
  userSendGiftCntInRoom?: string;
  individualPriority?: string;
  supportPin?: string;
  suffixText?: SuffixText;
  imAction?: number;
  forbiddenProfile?: number;
  replyResp?: ChatReplyRespInfo;
  isFeatured?: string;
  needFilterDisplay?: boolean;
}

export function encodePublicAreaCommon(message: PublicAreaCommon): Uint8Array {
  let bb = popByteBuffer();
  _encodePublicAreaCommon(message, bb);
  return toUint8Array(bb);
}

export function _encodePublicAreaCommon(message: PublicAreaCommon, bb: ByteBuffer): void {
  // optional Image userLabel = 1;
  let $userLabel = message.userLabel;
  if ($userLabel !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeImage($userLabel, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 userConsumeInRoom = 2;
  let $userConsumeInRoom = message.userConsumeInRoom;
  if ($userConsumeInRoom !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $userConsumeInRoom);
  }

  // optional int64 userSendGiftCntInRoom = 3;
  let $userSendGiftCntInRoom = message.userSendGiftCntInRoom;
  if ($userSendGiftCntInRoom !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $userSendGiftCntInRoom);
  }

  // optional int64 individualPriority = 4;
  let $individualPriority = message.individualPriority;
  if ($individualPriority !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $individualPriority);
  }

  // optional int64 supportPin = 6;
  let $supportPin = message.supportPin;
  if ($supportPin !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $supportPin);
  }

  // optional SuffixText suffixText = 7;
  let $suffixText = message.suffixText;
  if ($suffixText !== undefined) {
    writeVarint32(bb, 58);
    let nested = popByteBuffer();
    _encodeSuffixText($suffixText, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 imAction = 8;
  let $imAction = message.imAction;
  if ($imAction !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, intToLong($imAction));
  }

  // optional int32 forbiddenProfile = 9;
  let $forbiddenProfile = message.forbiddenProfile;
  if ($forbiddenProfile !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, intToLong($forbiddenProfile));
  }

  // optional ChatReplyRespInfo replyResp = 10;
  let $replyResp = message.replyResp;
  if ($replyResp !== undefined) {
    writeVarint32(bb, 82);
    let nested = popByteBuffer();
    _encodeChatReplyRespInfo($replyResp, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 isFeatured = 12;
  let $isFeatured = message.isFeatured;
  if ($isFeatured !== undefined) {
    writeVarint32(bb, 96);
    writeVarint64(bb, $isFeatured);
  }

  // optional bool needFilterDisplay = 13;
  let $needFilterDisplay = message.needFilterDisplay;
  if ($needFilterDisplay !== undefined) {
    writeVarint32(bb, 104);
    writeByte(bb, $needFilterDisplay ? 1 : 0);
  }
}

export function decodePublicAreaCommon(binary: Uint8Array): PublicAreaCommon {
  return _decodePublicAreaCommon(wrapByteBuffer(binary));
}

export function _decodePublicAreaCommon(bb: ByteBuffer): PublicAreaCommon {
  let message: PublicAreaCommon = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Image userLabel = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.userLabel = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 userConsumeInRoom = 2;
      case 2: {
        message.userConsumeInRoom = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 userSendGiftCntInRoom = 3;
      case 3: {
        message.userSendGiftCntInRoom = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 individualPriority = 4;
      case 4: {
        message.individualPriority = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 supportPin = 6;
      case 6: {
        message.supportPin = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional SuffixText suffixText = 7;
      case 7: {
        let limit = pushTemporaryLength(bb);
        message.suffixText = _decodeSuffixText(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 imAction = 8;
      case 8: {
        message.imAction = readVarint32(bb);
        break;
      }

      // optional int32 forbiddenProfile = 9;
      case 9: {
        message.forbiddenProfile = readVarint32(bb);
        break;
      }

      // optional ChatReplyRespInfo replyResp = 10;
      case 10: {
        let limit = pushTemporaryLength(bb);
        message.replyResp = _decodeChatReplyRespInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 isFeatured = 12;
      case 12: {
        message.isFeatured = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional bool needFilterDisplay = 13;
      case 13: {
        message.needFilterDisplay = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface AnchorGiftData {
  anchorDiyOriginImg?: Image;
}

export function encodeAnchorGiftData(message: AnchorGiftData): Uint8Array {
  let bb = popByteBuffer();
  _encodeAnchorGiftData(message, bb);
  return toUint8Array(bb);
}

export function _encodeAnchorGiftData(message: AnchorGiftData, bb: ByteBuffer): void {
  // optional Image anchorDiyOriginImg = 1;
  let $anchorDiyOriginImg = message.anchorDiyOriginImg;
  if ($anchorDiyOriginImg !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeImage($anchorDiyOriginImg, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeAnchorGiftData(binary: Uint8Array): AnchorGiftData {
  return _decodeAnchorGiftData(wrapByteBuffer(binary));
}

export function _decodeAnchorGiftData(bb: ByteBuffer): AnchorGiftData {
  let message: AnchorGiftData = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Image anchorDiyOriginImg = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.anchorDiyOriginImg = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface ActivityEmojiGroup {
  id?: string;
  idStr?: string;
  name?: string;
  tagIcon?: Image;
  desc?: string;
  emojiList?: ActivityEmoji[];
  insertEmojiNum?: string;
}

export function encodeActivityEmojiGroup(message: ActivityEmojiGroup): Uint8Array {
  let bb = popByteBuffer();
  _encodeActivityEmojiGroup(message, bb);
  return toUint8Array(bb);
}

export function _encodeActivityEmojiGroup(message: ActivityEmojiGroup, bb: ByteBuffer): void {
  // optional int64 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $id);
  }

  // optional string idStr = 2;
  let $idStr = message.idStr;
  if ($idStr !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $idStr);
  }

  // optional string name = 3;
  let $name = message.name;
  if ($name !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $name);
  }

  // optional Image tagIcon = 4;
  let $tagIcon = message.tagIcon;
  if ($tagIcon !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeImage($tagIcon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string desc = 5;
  let $desc = message.desc;
  if ($desc !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $desc);
  }

  // repeated ActivityEmoji emojiList = 6;
  let array$emojiList = message.emojiList;
  if (array$emojiList !== undefined) {
    for (let value of array$emojiList) {
      writeVarint32(bb, 50);
      let nested = popByteBuffer();
      _encodeActivityEmoji(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional int64 insertEmojiNum = 7;
  let $insertEmojiNum = message.insertEmojiNum;
  if ($insertEmojiNum !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $insertEmojiNum);
  }
}

export function decodeActivityEmojiGroup(binary: Uint8Array): ActivityEmojiGroup {
  return _decodeActivityEmojiGroup(wrapByteBuffer(binary));
}

export function _decodeActivityEmojiGroup(bb: ByteBuffer): ActivityEmojiGroup {
  let message: ActivityEmojiGroup = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 id = 1;
      case 1: {
        message.id = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string idStr = 2;
      case 2: {
        message.idStr = readString(bb, readVarint32(bb));
        break;
      }

      // optional string name = 3;
      case 3: {
        message.name = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image tagIcon = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.tagIcon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string desc = 5;
      case 5: {
        message.desc = readString(bb, readVarint32(bb));
        break;
      }

      // repeated ActivityEmoji emojiList = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        let values = message.emojiList || (message.emojiList = []);
        values.push(_decodeActivityEmoji(bb));
        bb.limit = limit;
        break;
      }

      // optional int64 insertEmojiNum = 7;
      case 7: {
        message.insertEmojiNum = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface ActivityEmoji {
  id?: string;
  idStr?: string;
  name?: string;
  emoji?: Image;
}

export function encodeActivityEmoji(message: ActivityEmoji): Uint8Array {
  let bb = popByteBuffer();
  _encodeActivityEmoji(message, bb);
  return toUint8Array(bb);
}

export function _encodeActivityEmoji(message: ActivityEmoji, bb: ByteBuffer): void {
  // optional int64 id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $id);
  }

  // optional string idStr = 2;
  let $idStr = message.idStr;
  if ($idStr !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $idStr);
  }

  // optional string name = 3;
  let $name = message.name;
  if ($name !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $name);
  }

  // optional Image emoji = 4;
  let $emoji = message.emoji;
  if ($emoji !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeImage($emoji, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeActivityEmoji(binary: Uint8Array): ActivityEmoji {
  return _decodeActivityEmoji(wrapByteBuffer(binary));
}

export function _decodeActivityEmoji(bb: ByteBuffer): ActivityEmoji {
  let message: ActivityEmoji = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 id = 1;
      case 1: {
        message.id = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string idStr = 2;
      case 2: {
        message.idStr = readString(bb, readVarint32(bb));
        break;
      }

      // optional string name = 3;
      case 3: {
        message.name = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image emoji = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.emoji = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface AssetEffectMixInfo {}

export function encodeAssetEffectMixInfo(message: AssetEffectMixInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeAssetEffectMixInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeAssetEffectMixInfo(message: AssetEffectMixInfo, bb: ByteBuffer): void {}

export function decodeAssetEffectMixInfo(binary: Uint8Array): AssetEffectMixInfo {
  return _decodeAssetEffectMixInfo(wrapByteBuffer(binary));
}

export function _decodeAssetEffectMixInfo(bb: ByteBuffer): AssetEffectMixInfo {
  let message: AssetEffectMixInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface BuffLockInfo {
  locked?: boolean;
  toast?: string;
  schema?: string;
  cellText?: string;
}

export function encodeBuffLockInfo(message: BuffLockInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeBuffLockInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeBuffLockInfo(message: BuffLockInfo, bb: ByteBuffer): void {
  // optional bool locked = 1;
  let $locked = message.locked;
  if ($locked !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $locked ? 1 : 0);
  }

  // optional string toast = 2;
  let $toast = message.toast;
  if ($toast !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $toast);
  }

  // optional string schema = 3;
  let $schema = message.schema;
  if ($schema !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $schema);
  }

  // optional string cellText = 4;
  let $cellText = message.cellText;
  if ($cellText !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $cellText);
  }
}

export function decodeBuffLockInfo(binary: Uint8Array): BuffLockInfo {
  return _decodeBuffLockInfo(wrapByteBuffer(binary));
}

export function _decodeBuffLockInfo(bb: ByteBuffer): BuffLockInfo {
  let message: BuffLockInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bool locked = 1;
      case 1: {
        message.locked = !!readByte(bb);
        break;
      }

      // optional string toast = 2;
      case 2: {
        message.toast = readString(bb, readVarint32(bb));
        break;
      }

      // optional string schema = 3;
      case 3: {
        message.schema = readString(bb, readVarint32(bb));
        break;
      }

      // optional string cellText = 4;
      case 4: {
        message.cellText = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface ChatReplyRespInfo {
  replyMsgId?: string;
  replyId?: string;
  replyText?: Text;
  replyUid?: string;
  replyWebcastUid?: string;
}

export function encodeChatReplyRespInfo(message: ChatReplyRespInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeChatReplyRespInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeChatReplyRespInfo(message: ChatReplyRespInfo, bb: ByteBuffer): void {
  // optional int64 replyMsgId = 1;
  let $replyMsgId = message.replyMsgId;
  if ($replyMsgId !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $replyMsgId);
  }

  // optional int64 replyId = 2;
  let $replyId = message.replyId;
  if ($replyId !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $replyId);
  }

  // optional Text replyText = 3;
  let $replyText = message.replyText;
  if ($replyText !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeText($replyText, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 replyUid = 4;
  let $replyUid = message.replyUid;
  if ($replyUid !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $replyUid);
  }

  // optional string replyWebcastUid = 5;
  let $replyWebcastUid = message.replyWebcastUid;
  if ($replyWebcastUid !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $replyWebcastUid);
  }
}

export function decodeChatReplyRespInfo(binary: Uint8Array): ChatReplyRespInfo {
  return _decodeChatReplyRespInfo(wrapByteBuffer(binary));
}

export function _decodeChatReplyRespInfo(bb: ByteBuffer): ChatReplyRespInfo {
  let message: ChatReplyRespInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 replyMsgId = 1;
      case 1: {
        message.replyMsgId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 replyId = 2;
      case 2: {
        message.replyId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Text replyText = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.replyText = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 replyUid = 4;
      case 4: {
        message.replyUid = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string replyWebcastUid = 5;
      case 5: {
        message.replyWebcastUid = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface EffectiveActivityEmojiGroup {
  emojiGroup?: ActivityEmojiGroup;
  startTime?: string;
  endTime?: string;
}

export function encodeEffectiveActivityEmojiGroup(message: EffectiveActivityEmojiGroup): Uint8Array {
  let bb = popByteBuffer();
  _encodeEffectiveActivityEmojiGroup(message, bb);
  return toUint8Array(bb);
}

export function _encodeEffectiveActivityEmojiGroup(message: EffectiveActivityEmojiGroup, bb: ByteBuffer): void {
  // optional ActivityEmojiGroup emojiGroup = 1;
  let $emojiGroup = message.emojiGroup;
  if ($emojiGroup !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeActivityEmojiGroup($emojiGroup, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 startTime = 2;
  let $startTime = message.startTime;
  if ($startTime !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $startTime);
  }

  // optional int64 endTime = 3;
  let $endTime = message.endTime;
  if ($endTime !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $endTime);
  }
}

export function decodeEffectiveActivityEmojiGroup(binary: Uint8Array): EffectiveActivityEmojiGroup {
  return _decodeEffectiveActivityEmojiGroup(wrapByteBuffer(binary));
}

export function _decodeEffectiveActivityEmojiGroup(bb: ByteBuffer): EffectiveActivityEmojiGroup {
  let message: EffectiveActivityEmojiGroup = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional ActivityEmojiGroup emojiGroup = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.emojiGroup = _decodeActivityEmojiGroup(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 startTime = 2;
      case 2: {
        message.startTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 endTime = 3;
      case 3: {
        message.endTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface EffectMixImageInfo {
  imageKey?: string;
  mixImage?: Image;
}

export function encodeEffectMixImageInfo(message: EffectMixImageInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeEffectMixImageInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeEffectMixImageInfo(message: EffectMixImageInfo, bb: ByteBuffer): void {
  // optional string imageKey = 1;
  let $imageKey = message.imageKey;
  if ($imageKey !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $imageKey);
  }

  // optional Image mixImage = 2;
  let $mixImage = message.mixImage;
  if ($mixImage !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeImage($mixImage, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeEffectMixImageInfo(binary: Uint8Array): EffectMixImageInfo {
  return _decodeEffectMixImageInfo(wrapByteBuffer(binary));
}

export function _decodeEffectMixImageInfo(bb: ByteBuffer): EffectMixImageInfo {
  let message: EffectMixImageInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string imageKey = 1;
      case 1: {
        message.imageKey = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image mixImage = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.mixImage = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface ExtraEffect {
  assetId?: string;
  displayForm?: number;
}

export function encodeExtraEffect(message: ExtraEffect): Uint8Array {
  let bb = popByteBuffer();
  _encodeExtraEffect(message, bb);
  return toUint8Array(bb);
}

export function _encodeExtraEffect(message: ExtraEffect, bb: ByteBuffer): void {
  // optional int64 assetId = 1;
  let $assetId = message.assetId;
  if ($assetId !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $assetId);
  }

  // optional int32 displayForm = 2;
  let $displayForm = message.displayForm;
  if ($displayForm !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($displayForm));
  }
}

export function decodeExtraEffect(binary: Uint8Array): ExtraEffect {
  return _decodeExtraEffect(wrapByteBuffer(binary));
}

export function _decodeExtraEffect(bb: ByteBuffer): ExtraEffect {
  let message: ExtraEffect = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 assetId = 1;
      case 1: {
        message.assetId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 displayForm = 2;
      case 2: {
        message.displayForm = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface EmojiInteractResource {
  fromImage?: SendInteractEmojiConfig;
  passImage?: SendInteractEmojiConfig;
  toImage?: SendInteractEmojiConfig;
}

export function encodeEmojiInteractResource(message: EmojiInteractResource): Uint8Array {
  let bb = popByteBuffer();
  _encodeEmojiInteractResource(message, bb);
  return toUint8Array(bb);
}

export function _encodeEmojiInteractResource(message: EmojiInteractResource, bb: ByteBuffer): void {
  // optional SendInteractEmojiConfig fromImage = 1;
  let $fromImage = message.fromImage;
  if ($fromImage !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeSendInteractEmojiConfig($fromImage, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional SendInteractEmojiConfig passImage = 2;
  let $passImage = message.passImage;
  if ($passImage !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeSendInteractEmojiConfig($passImage, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional SendInteractEmojiConfig toImage = 3;
  let $toImage = message.toImage;
  if ($toImage !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeSendInteractEmojiConfig($toImage, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeEmojiInteractResource(binary: Uint8Array): EmojiInteractResource {
  return _decodeEmojiInteractResource(wrapByteBuffer(binary));
}

export function _decodeEmojiInteractResource(bb: ByteBuffer): EmojiInteractResource {
  let message: EmojiInteractResource = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional SendInteractEmojiConfig fromImage = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.fromImage = _decodeSendInteractEmojiConfig(bb);
        bb.limit = limit;
        break;
      }

      // optional SendInteractEmojiConfig passImage = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.passImage = _decodeSendInteractEmojiConfig(bb);
        bb.limit = limit;
        break;
      }

      // optional SendInteractEmojiConfig toImage = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.toImage = _decodeSendInteractEmojiConfig(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftIMPriority {
  queueSizes?: string[];
  selfQueuePriority?: string;
  priority?: string;
}

export function encodeGiftIMPriority(message: GiftIMPriority): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftIMPriority(message, bb);
  return toUint8Array(bb);
}

export function _encodeGiftIMPriority(message: GiftIMPriority, bb: ByteBuffer): void {
  // repeated int64 queueSizes = 1;
  let array$queueSizes = message.queueSizes;
  if (array$queueSizes !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$queueSizes) {
      writeVarint64(packed, value);
    }
    writeVarint32(bb, 10);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // optional int64 selfQueuePriority = 2;
  let $selfQueuePriority = message.selfQueuePriority;
  if ($selfQueuePriority !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $selfQueuePriority);
  }

  // optional int64 priority = 3;
  let $priority = message.priority;
  if ($priority !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $priority);
  }
}

export function decodeGiftIMPriority(binary: Uint8Array): GiftIMPriority {
  return _decodeGiftIMPriority(wrapByteBuffer(binary));
}

export function _decodeGiftIMPriority(bb: ByteBuffer): GiftIMPriority {
  let message: GiftIMPriority = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated int64 queueSizes = 1;
      case 1: {
        let values = message.queueSizes || (message.queueSizes = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint64(bb, /* unsigned */ false));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint64(bb, /* unsigned */ false));
        }
        break;
      }

      // optional int64 selfQueuePriority = 2;
      case 2: {
        message.selfQueuePriority = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 priority = 3;
      case 3: {
        message.priority = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftTrayInfo {
  trayDisplayText?: Text;
  trayBaseImg?: Image;
  trayHeadImg?: Image;
  trayRightImg?: Image;
  trayLevel?: string;
  trayDynamicImg?: Image;
}

export function encodeGiftTrayInfo(message: GiftTrayInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftTrayInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeGiftTrayInfo(message: GiftTrayInfo, bb: ByteBuffer): void {
  // optional Text trayDisplayText = 1;
  let $trayDisplayText = message.trayDisplayText;
  if ($trayDisplayText !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeText($trayDisplayText, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image trayBaseImg = 2;
  let $trayBaseImg = message.trayBaseImg;
  if ($trayBaseImg !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeImage($trayBaseImg, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image trayHeadImg = 3;
  let $trayHeadImg = message.trayHeadImg;
  if ($trayHeadImg !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeImage($trayHeadImg, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image trayRightImg = 4;
  let $trayRightImg = message.trayRightImg;
  if ($trayRightImg !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeImage($trayRightImg, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 trayLevel = 5;
  let $trayLevel = message.trayLevel;
  if ($trayLevel !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $trayLevel);
  }

  // optional Image trayDynamicImg = 6;
  let $trayDynamicImg = message.trayDynamicImg;
  if ($trayDynamicImg !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeImage($trayDynamicImg, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeGiftTrayInfo(binary: Uint8Array): GiftTrayInfo {
  return _decodeGiftTrayInfo(wrapByteBuffer(binary));
}

export function _decodeGiftTrayInfo(bb: ByteBuffer): GiftTrayInfo {
  let message: GiftTrayInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Text trayDisplayText = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.trayDisplayText = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional Image trayBaseImg = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.trayBaseImg = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image trayHeadImg = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.trayHeadImg = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image trayRightImg = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.trayRightImg = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 trayLevel = 5;
      case 5: {
        message.trayLevel = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Image trayDynamicImg = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.trayDynamicImg = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftStruct {
  image?: Image;
  describe?: string;
  notify?: boolean;
  duration?: string;
  id?: string;
  fansclubInfo?: GiftStruct_GiftStructFansClubInfo;
  forLinkmic?: boolean;
  doodle?: boolean;
  forFansclub?: boolean;
  combo?: boolean;
  type?: number;
  diamondCount?: number;
  isDisplayedOnPanel?: number;
  primaryEffectId?: string;
  giftLabelIcon?: Image;
  name?: string;
  region?: string;
  manual?: string;
  forCustom?: boolean;
  specialEffects?: { [key: string]: string };
  icon?: Image;
  actionType?: number;
  watermelonSeeds?: number;
  goldEffect?: string;
  subs?: LuckyMoneyGiftMeta[];
  goldenBeans?: string;
  honorLevel?: string;
  itemType?: number;
  schemeUrl?: string;
  giftOperation?: GiftPanelOperation;
  eventName?: string;
  nobleLevel?: string;
  guideUrl?: string;
  punishMedicine?: boolean;
  forPortal?: boolean;
  businessText?: string;
  cnyGift?: boolean;
  appId?: string;
  vipLevel?: string;
  isGray?: boolean;
  graySchemeUrl?: string;
  giftScene?: string;
  giftBanner?: GiftBanner;
  triggerWords?: string[];
  giftBuffInfos?: GiftBuffInfo[];
  forFirstRecharge?: boolean;
  dynamicImgForSelected?: Image;
  afterSendAction?: number;
  giftOfflineTime?: string;
  topBarText?: string;
  topRightAvatar?: Image;
  bannerSchemeUrl?: string;
  isLocked?: boolean;
  reqExtraType?: string;
  assetIds?: string[];
  giftPreviewInfo?: GiftPreviewInfo;
  giftTip?: GiftTip;
  needSweepLightCount?: number;
  groupInfo?: GiftGroupInfo[];
  bottomText?: Text;
  mysteryShopStatus?: number;
  optionalAssetIds?: string[];
  disableWishList?: boolean;
  giftMsgBoard?: GiftStruct_GiftMsgBoard;
  emojiInteractResource?: EmojiInteractResource;
  trayDynamicImgFlippable?: boolean;
  picoShowAction?: string;
  selectedDynamicEffect?: string;
  giftTouchLabel?: GiftTouchLabel;
  unselectedBottomInfo?: GiftUnselectedBottomInfo;
  giftConfirmInfo?: GiftConfirmInfo;
  bizType?: number;
  bizItem?: GoodsBizItem;
  webpImage?: Image;
  giftSource?: number;
  requiredAssets?: string[];
  selectedLabel?: Image;
  sortScore?: string;
  topicId?: string;
  sortExtra?: string;
}

export function encodeGiftStruct(message: GiftStruct): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftStruct(message, bb);
  return toUint8Array(bb);
}

export function _encodeGiftStruct(message: GiftStruct, bb: ByteBuffer): void {
  // optional Image image = 1;
  let $image = message.image;
  if ($image !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeImage($image, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string describe = 2;
  let $describe = message.describe;
  if ($describe !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $describe);
  }

  // optional bool notify = 3;
  let $notify = message.notify;
  if ($notify !== undefined) {
    writeVarint32(bb, 24);
    writeByte(bb, $notify ? 1 : 0);
  }

  // optional int64 duration = 4;
  let $duration = message.duration;
  if ($duration !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $duration);
  }

  // optional int64 id = 5;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $id);
  }

  // optional GiftStruct_GiftStructFansClubInfo fansclubInfo = 6;
  let $fansclubInfo = message.fansclubInfo;
  if ($fansclubInfo !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeGiftStruct_GiftStructFansClubInfo($fansclubInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool forLinkmic = 7;
  let $forLinkmic = message.forLinkmic;
  if ($forLinkmic !== undefined) {
    writeVarint32(bb, 56);
    writeByte(bb, $forLinkmic ? 1 : 0);
  }

  // optional bool doodle = 8;
  let $doodle = message.doodle;
  if ($doodle !== undefined) {
    writeVarint32(bb, 64);
    writeByte(bb, $doodle ? 1 : 0);
  }

  // optional bool forFansclub = 9;
  let $forFansclub = message.forFansclub;
  if ($forFansclub !== undefined) {
    writeVarint32(bb, 72);
    writeByte(bb, $forFansclub ? 1 : 0);
  }

  // optional bool combo = 10;
  let $combo = message.combo;
  if ($combo !== undefined) {
    writeVarint32(bb, 80);
    writeByte(bb, $combo ? 1 : 0);
  }

  // optional int32 type = 11;
  let $type = message.type;
  if ($type !== undefined) {
    writeVarint32(bb, 88);
    writeVarint64(bb, intToLong($type));
  }

  // optional int32 diamondCount = 12;
  let $diamondCount = message.diamondCount;
  if ($diamondCount !== undefined) {
    writeVarint32(bb, 96);
    writeVarint64(bb, intToLong($diamondCount));
  }

  // optional int32 isDisplayedOnPanel = 13;
  let $isDisplayedOnPanel = message.isDisplayedOnPanel;
  if ($isDisplayedOnPanel !== undefined) {
    writeVarint32(bb, 104);
    writeVarint64(bb, intToLong($isDisplayedOnPanel));
  }

  // optional int64 primaryEffectId = 14;
  let $primaryEffectId = message.primaryEffectId;
  if ($primaryEffectId !== undefined) {
    writeVarint32(bb, 112);
    writeVarint64(bb, $primaryEffectId);
  }

  // optional Image giftLabelIcon = 15;
  let $giftLabelIcon = message.giftLabelIcon;
  if ($giftLabelIcon !== undefined) {
    writeVarint32(bb, 122);
    let nested = popByteBuffer();
    _encodeImage($giftLabelIcon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string name = 16;
  let $name = message.name;
  if ($name !== undefined) {
    writeVarint32(bb, 130);
    writeString(bb, $name);
  }

  // optional string region = 17;
  let $region = message.region;
  if ($region !== undefined) {
    writeVarint32(bb, 138);
    writeString(bb, $region);
  }

  // optional string manual = 18;
  let $manual = message.manual;
  if ($manual !== undefined) {
    writeVarint32(bb, 146);
    writeString(bb, $manual);
  }

  // optional bool forCustom = 19;
  let $forCustom = message.forCustom;
  if ($forCustom !== undefined) {
    writeVarint32(bb, 152);
    writeByte(bb, $forCustom ? 1 : 0);
  }

  // optional map<string, int64> specialEffects = 20;
  let map$specialEffects = message.specialEffects;
  if (map$specialEffects !== undefined) {
    for (let key in map$specialEffects) {
      let nested = popByteBuffer();
      let value = map$specialEffects[key];
      writeVarint32(nested, 10);
      writeString(nested, key);
      writeVarint32(nested, 16);
      writeVarint64(nested, value);
      writeVarint32(bb, 162);
      writeVarint32(bb, nested.offset);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional Image icon = 21;
  let $icon = message.icon;
  if ($icon !== undefined) {
    writeVarint32(bb, 170);
    let nested = popByteBuffer();
    _encodeImage($icon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 actionType = 22;
  let $actionType = message.actionType;
  if ($actionType !== undefined) {
    writeVarint32(bb, 176);
    writeVarint64(bb, intToLong($actionType));
  }

  // optional int32 watermelonSeeds = 23;
  let $watermelonSeeds = message.watermelonSeeds;
  if ($watermelonSeeds !== undefined) {
    writeVarint32(bb, 184);
    writeVarint64(bb, intToLong($watermelonSeeds));
  }

  // optional string goldEffect = 24;
  let $goldEffect = message.goldEffect;
  if ($goldEffect !== undefined) {
    writeVarint32(bb, 194);
    writeString(bb, $goldEffect);
  }

  // repeated LuckyMoneyGiftMeta subs = 25;
  let array$subs = message.subs;
  if (array$subs !== undefined) {
    for (let value of array$subs) {
      writeVarint32(bb, 202);
      let nested = popByteBuffer();
      _encodeLuckyMoneyGiftMeta(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional int64 goldenBeans = 26;
  let $goldenBeans = message.goldenBeans;
  if ($goldenBeans !== undefined) {
    writeVarint32(bb, 208);
    writeVarint64(bb, $goldenBeans);
  }

  // optional int64 honorLevel = 27;
  let $honorLevel = message.honorLevel;
  if ($honorLevel !== undefined) {
    writeVarint32(bb, 216);
    writeVarint64(bb, $honorLevel);
  }

  // optional int32 itemType = 28;
  let $itemType = message.itemType;
  if ($itemType !== undefined) {
    writeVarint32(bb, 224);
    writeVarint64(bb, intToLong($itemType));
  }

  // optional string schemeUrl = 29;
  let $schemeUrl = message.schemeUrl;
  if ($schemeUrl !== undefined) {
    writeVarint32(bb, 234);
    writeString(bb, $schemeUrl);
  }

  // optional GiftPanelOperation giftOperation = 30;
  let $giftOperation = message.giftOperation;
  if ($giftOperation !== undefined) {
    writeVarint32(bb, 242);
    let nested = popByteBuffer();
    _encodeGiftPanelOperation($giftOperation, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string eventName = 31;
  let $eventName = message.eventName;
  if ($eventName !== undefined) {
    writeVarint32(bb, 250);
    writeString(bb, $eventName);
  }

  // optional int64 nobleLevel = 32;
  let $nobleLevel = message.nobleLevel;
  if ($nobleLevel !== undefined) {
    writeVarint32(bb, 256);
    writeVarint64(bb, $nobleLevel);
  }

  // optional string guideUrl = 33;
  let $guideUrl = message.guideUrl;
  if ($guideUrl !== undefined) {
    writeVarint32(bb, 266);
    writeString(bb, $guideUrl);
  }

  // optional bool punishMedicine = 34;
  let $punishMedicine = message.punishMedicine;
  if ($punishMedicine !== undefined) {
    writeVarint32(bb, 272);
    writeByte(bb, $punishMedicine ? 1 : 0);
  }

  // optional bool forPortal = 35;
  let $forPortal = message.forPortal;
  if ($forPortal !== undefined) {
    writeVarint32(bb, 280);
    writeByte(bb, $forPortal ? 1 : 0);
  }

  // optional string businessText = 36;
  let $businessText = message.businessText;
  if ($businessText !== undefined) {
    writeVarint32(bb, 290);
    writeString(bb, $businessText);
  }

  // optional bool cnyGift = 37;
  let $cnyGift = message.cnyGift;
  if ($cnyGift !== undefined) {
    writeVarint32(bb, 296);
    writeByte(bb, $cnyGift ? 1 : 0);
  }

  // optional int64 appId = 38;
  let $appId = message.appId;
  if ($appId !== undefined) {
    writeVarint32(bb, 304);
    writeVarint64(bb, $appId);
  }

  // optional int64 vipLevel = 39;
  let $vipLevel = message.vipLevel;
  if ($vipLevel !== undefined) {
    writeVarint32(bb, 312);
    writeVarint64(bb, $vipLevel);
  }

  // optional bool isGray = 40;
  let $isGray = message.isGray;
  if ($isGray !== undefined) {
    writeVarint32(bb, 320);
    writeByte(bb, $isGray ? 1 : 0);
  }

  // optional string graySchemeUrl = 41;
  let $graySchemeUrl = message.graySchemeUrl;
  if ($graySchemeUrl !== undefined) {
    writeVarint32(bb, 330);
    writeString(bb, $graySchemeUrl);
  }

  // optional int64 giftScene = 42;
  let $giftScene = message.giftScene;
  if ($giftScene !== undefined) {
    writeVarint32(bb, 336);
    writeVarint64(bb, $giftScene);
  }

  // optional GiftBanner giftBanner = 43;
  let $giftBanner = message.giftBanner;
  if ($giftBanner !== undefined) {
    writeVarint32(bb, 346);
    let nested = popByteBuffer();
    _encodeGiftBanner($giftBanner, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // repeated string triggerWords = 44;
  let array$triggerWords = message.triggerWords;
  if (array$triggerWords !== undefined) {
    for (let value of array$triggerWords) {
      writeVarint32(bb, 354);
      writeString(bb, value);
    }
  }

  // repeated GiftBuffInfo giftBuffInfos = 45;
  let array$giftBuffInfos = message.giftBuffInfos;
  if (array$giftBuffInfos !== undefined) {
    for (let value of array$giftBuffInfos) {
      writeVarint32(bb, 362);
      let nested = popByteBuffer();
      _encodeGiftBuffInfo(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional bool forFirstRecharge = 46;
  let $forFirstRecharge = message.forFirstRecharge;
  if ($forFirstRecharge !== undefined) {
    writeVarint32(bb, 368);
    writeByte(bb, $forFirstRecharge ? 1 : 0);
  }

  // optional Image dynamicImgForSelected = 47;
  let $dynamicImgForSelected = message.dynamicImgForSelected;
  if ($dynamicImgForSelected !== undefined) {
    writeVarint32(bb, 378);
    let nested = popByteBuffer();
    _encodeImage($dynamicImgForSelected, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 afterSendAction = 48;
  let $afterSendAction = message.afterSendAction;
  if ($afterSendAction !== undefined) {
    writeVarint32(bb, 384);
    writeVarint64(bb, intToLong($afterSendAction));
  }

  // optional int64 giftOfflineTime = 49;
  let $giftOfflineTime = message.giftOfflineTime;
  if ($giftOfflineTime !== undefined) {
    writeVarint32(bb, 392);
    writeVarint64(bb, $giftOfflineTime);
  }

  // optional string topBarText = 50;
  let $topBarText = message.topBarText;
  if ($topBarText !== undefined) {
    writeVarint32(bb, 402);
    writeString(bb, $topBarText);
  }

  // optional Image topRightAvatar = 51;
  let $topRightAvatar = message.topRightAvatar;
  if ($topRightAvatar !== undefined) {
    writeVarint32(bb, 410);
    let nested = popByteBuffer();
    _encodeImage($topRightAvatar, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string bannerSchemeUrl = 52;
  let $bannerSchemeUrl = message.bannerSchemeUrl;
  if ($bannerSchemeUrl !== undefined) {
    writeVarint32(bb, 418);
    writeString(bb, $bannerSchemeUrl);
  }

  // optional bool isLocked = 53;
  let $isLocked = message.isLocked;
  if ($isLocked !== undefined) {
    writeVarint32(bb, 424);
    writeByte(bb, $isLocked ? 1 : 0);
  }

  // optional int64 reqExtraType = 54;
  let $reqExtraType = message.reqExtraType;
  if ($reqExtraType !== undefined) {
    writeVarint32(bb, 432);
    writeVarint64(bb, $reqExtraType);
  }

  // repeated int64 assetIds = 55;
  let array$assetIds = message.assetIds;
  if (array$assetIds !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$assetIds) {
      writeVarint64(packed, value);
    }
    writeVarint32(bb, 442);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // optional GiftPreviewInfo giftPreviewInfo = 56;
  let $giftPreviewInfo = message.giftPreviewInfo;
  if ($giftPreviewInfo !== undefined) {
    writeVarint32(bb, 450);
    let nested = popByteBuffer();
    _encodeGiftPreviewInfo($giftPreviewInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional GiftTip giftTip = 57;
  let $giftTip = message.giftTip;
  if ($giftTip !== undefined) {
    writeVarint32(bb, 458);
    let nested = popByteBuffer();
    _encodeGiftTip($giftTip, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 needSweepLightCount = 58;
  let $needSweepLightCount = message.needSweepLightCount;
  if ($needSweepLightCount !== undefined) {
    writeVarint32(bb, 464);
    writeVarint64(bb, intToLong($needSweepLightCount));
  }

  // repeated GiftGroupInfo groupInfo = 59;
  let array$groupInfo = message.groupInfo;
  if (array$groupInfo !== undefined) {
    for (let value of array$groupInfo) {
      writeVarint32(bb, 474);
      let nested = popByteBuffer();
      _encodeGiftGroupInfo(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional Text bottomText = 60;
  let $bottomText = message.bottomText;
  if ($bottomText !== undefined) {
    writeVarint32(bb, 482);
    let nested = popByteBuffer();
    _encodeText($bottomText, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 mysteryShopStatus = 61;
  let $mysteryShopStatus = message.mysteryShopStatus;
  if ($mysteryShopStatus !== undefined) {
    writeVarint32(bb, 488);
    writeVarint64(bb, intToLong($mysteryShopStatus));
  }

  // repeated int64 optionalAssetIds = 62;
  let array$optionalAssetIds = message.optionalAssetIds;
  if (array$optionalAssetIds !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$optionalAssetIds) {
      writeVarint64(packed, value);
    }
    writeVarint32(bb, 498);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // optional bool disableWishList = 63;
  let $disableWishList = message.disableWishList;
  if ($disableWishList !== undefined) {
    writeVarint32(bb, 504);
    writeByte(bb, $disableWishList ? 1 : 0);
  }

  // optional GiftStruct_GiftMsgBoard giftMsgBoard = 64;
  let $giftMsgBoard = message.giftMsgBoard;
  if ($giftMsgBoard !== undefined) {
    writeVarint32(bb, 514);
    let nested = popByteBuffer();
    _encodeGiftStruct_GiftMsgBoard($giftMsgBoard, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional EmojiInteractResource emojiInteractResource = 65;
  let $emojiInteractResource = message.emojiInteractResource;
  if ($emojiInteractResource !== undefined) {
    writeVarint32(bb, 522);
    let nested = popByteBuffer();
    _encodeEmojiInteractResource($emojiInteractResource, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool trayDynamicImgFlippable = 66;
  let $trayDynamicImgFlippable = message.trayDynamicImgFlippable;
  if ($trayDynamicImgFlippable !== undefined) {
    writeVarint32(bb, 528);
    writeByte(bb, $trayDynamicImgFlippable ? 1 : 0);
  }

  // optional int64 picoShowAction = 67;
  let $picoShowAction = message.picoShowAction;
  if ($picoShowAction !== undefined) {
    writeVarint32(bb, 536);
    writeVarint64(bb, $picoShowAction);
  }

  // optional int64 selectedDynamicEffect = 68;
  let $selectedDynamicEffect = message.selectedDynamicEffect;
  if ($selectedDynamicEffect !== undefined) {
    writeVarint32(bb, 544);
    writeVarint64(bb, $selectedDynamicEffect);
  }

  // optional GiftTouchLabel giftTouchLabel = 69;
  let $giftTouchLabel = message.giftTouchLabel;
  if ($giftTouchLabel !== undefined) {
    writeVarint32(bb, 554);
    let nested = popByteBuffer();
    _encodeGiftTouchLabel($giftTouchLabel, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional GiftUnselectedBottomInfo unselectedBottomInfo = 70;
  let $unselectedBottomInfo = message.unselectedBottomInfo;
  if ($unselectedBottomInfo !== undefined) {
    writeVarint32(bb, 562);
    let nested = popByteBuffer();
    _encodeGiftUnselectedBottomInfo($unselectedBottomInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional GiftConfirmInfo giftConfirmInfo = 71;
  let $giftConfirmInfo = message.giftConfirmInfo;
  if ($giftConfirmInfo !== undefined) {
    writeVarint32(bb, 570);
    let nested = popByteBuffer();
    _encodeGiftConfirmInfo($giftConfirmInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 bizType = 72;
  let $bizType = message.bizType;
  if ($bizType !== undefined) {
    writeVarint32(bb, 576);
    writeVarint64(bb, intToLong($bizType));
  }

  // optional GoodsBizItem bizItem = 73;
  let $bizItem = message.bizItem;
  if ($bizItem !== undefined) {
    writeVarint32(bb, 586);
    let nested = popByteBuffer();
    _encodeGoodsBizItem($bizItem, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image webpImage = 74;
  let $webpImage = message.webpImage;
  if ($webpImage !== undefined) {
    writeVarint32(bb, 594);
    let nested = popByteBuffer();
    _encodeImage($webpImage, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 giftSource = 75;
  let $giftSource = message.giftSource;
  if ($giftSource !== undefined) {
    writeVarint32(bb, 600);
    writeVarint64(bb, intToLong($giftSource));
  }

  // repeated int64 requiredAssets = 76;
  let array$requiredAssets = message.requiredAssets;
  if (array$requiredAssets !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$requiredAssets) {
      writeVarint64(packed, value);
    }
    writeVarint32(bb, 610);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // optional Image selectedLabel = 77;
  let $selectedLabel = message.selectedLabel;
  if ($selectedLabel !== undefined) {
    writeVarint32(bb, 618);
    let nested = popByteBuffer();
    _encodeImage($selectedLabel, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 sortScore = 78;
  let $sortScore = message.sortScore;
  if ($sortScore !== undefined) {
    writeVarint32(bb, 624);
    writeVarint64(bb, $sortScore);
  }

  // optional int64 topicId = 79;
  let $topicId = message.topicId;
  if ($topicId !== undefined) {
    writeVarint32(bb, 632);
    writeVarint64(bb, $topicId);
  }

  // optional string sortExtra = 80;
  let $sortExtra = message.sortExtra;
  if ($sortExtra !== undefined) {
    writeVarint32(bb, 642);
    writeString(bb, $sortExtra);
  }
}

export function decodeGiftStruct(binary: Uint8Array): GiftStruct {
  return _decodeGiftStruct(wrapByteBuffer(binary));
}

export function _decodeGiftStruct(bb: ByteBuffer): GiftStruct {
  let message: GiftStruct = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Image image = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.image = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string describe = 2;
      case 2: {
        message.describe = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool notify = 3;
      case 3: {
        message.notify = !!readByte(bb);
        break;
      }

      // optional int64 duration = 4;
      case 4: {
        message.duration = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 id = 5;
      case 5: {
        message.id = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional GiftStruct_GiftStructFansClubInfo fansclubInfo = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.fansclubInfo = _decodeGiftStruct_GiftStructFansClubInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional bool forLinkmic = 7;
      case 7: {
        message.forLinkmic = !!readByte(bb);
        break;
      }

      // optional bool doodle = 8;
      case 8: {
        message.doodle = !!readByte(bb);
        break;
      }

      // optional bool forFansclub = 9;
      case 9: {
        message.forFansclub = !!readByte(bb);
        break;
      }

      // optional bool combo = 10;
      case 10: {
        message.combo = !!readByte(bb);
        break;
      }

      // optional int32 type = 11;
      case 11: {
        message.type = readVarint32(bb);
        break;
      }

      // optional int32 diamondCount = 12;
      case 12: {
        message.diamondCount = readVarint32(bb);
        break;
      }

      // optional int32 isDisplayedOnPanel = 13;
      case 13: {
        message.isDisplayedOnPanel = readVarint32(bb);
        break;
      }

      // optional int64 primaryEffectId = 14;
      case 14: {
        message.primaryEffectId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Image giftLabelIcon = 15;
      case 15: {
        let limit = pushTemporaryLength(bb);
        message.giftLabelIcon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string name = 16;
      case 16: {
        message.name = readString(bb, readVarint32(bb));
        break;
      }

      // optional string region = 17;
      case 17: {
        message.region = readString(bb, readVarint32(bb));
        break;
      }

      // optional string manual = 18;
      case 18: {
        message.manual = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool forCustom = 19;
      case 19: {
        message.forCustom = !!readByte(bb);
        break;
      }

      // optional map<string, int64> specialEffects = 20;
      case 20: {
        let values = message.specialEffects || (message.specialEffects = {});
        let outerLimit = pushTemporaryLength(bb);
        let key: string | undefined;
        let value: string | undefined;
        end_of_entry: while (!isAtEnd(bb)) {
          let tag = readVarint32(bb);
          switch (tag >>> 3) {
            case 0:
              break end_of_entry;
            case 1: {
              key = readString(bb, readVarint32(bb));
              break;
            }
            case 2: {
              value = readVarint64(bb, /* unsigned */ false);
              break;
            }
            default:
              skipUnknownField(bb, tag & 7);
          }
        }
        if (key === undefined || value === undefined) throw new Error('Invalid data for map: specialEffects');
        values[key] = value;
        bb.limit = outerLimit;
        break;
      }

      // optional Image icon = 21;
      case 21: {
        let limit = pushTemporaryLength(bb);
        message.icon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 actionType = 22;
      case 22: {
        message.actionType = readVarint32(bb);
        break;
      }

      // optional int32 watermelonSeeds = 23;
      case 23: {
        message.watermelonSeeds = readVarint32(bb);
        break;
      }

      // optional string goldEffect = 24;
      case 24: {
        message.goldEffect = readString(bb, readVarint32(bb));
        break;
      }

      // repeated LuckyMoneyGiftMeta subs = 25;
      case 25: {
        let limit = pushTemporaryLength(bb);
        let values = message.subs || (message.subs = []);
        values.push(_decodeLuckyMoneyGiftMeta(bb));
        bb.limit = limit;
        break;
      }

      // optional int64 goldenBeans = 26;
      case 26: {
        message.goldenBeans = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 honorLevel = 27;
      case 27: {
        message.honorLevel = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 itemType = 28;
      case 28: {
        message.itemType = readVarint32(bb);
        break;
      }

      // optional string schemeUrl = 29;
      case 29: {
        message.schemeUrl = readString(bb, readVarint32(bb));
        break;
      }

      // optional GiftPanelOperation giftOperation = 30;
      case 30: {
        let limit = pushTemporaryLength(bb);
        message.giftOperation = _decodeGiftPanelOperation(bb);
        bb.limit = limit;
        break;
      }

      // optional string eventName = 31;
      case 31: {
        message.eventName = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 nobleLevel = 32;
      case 32: {
        message.nobleLevel = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string guideUrl = 33;
      case 33: {
        message.guideUrl = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool punishMedicine = 34;
      case 34: {
        message.punishMedicine = !!readByte(bb);
        break;
      }

      // optional bool forPortal = 35;
      case 35: {
        message.forPortal = !!readByte(bb);
        break;
      }

      // optional string businessText = 36;
      case 36: {
        message.businessText = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool cnyGift = 37;
      case 37: {
        message.cnyGift = !!readByte(bb);
        break;
      }

      // optional int64 appId = 38;
      case 38: {
        message.appId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 vipLevel = 39;
      case 39: {
        message.vipLevel = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional bool isGray = 40;
      case 40: {
        message.isGray = !!readByte(bb);
        break;
      }

      // optional string graySchemeUrl = 41;
      case 41: {
        message.graySchemeUrl = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 giftScene = 42;
      case 42: {
        message.giftScene = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional GiftBanner giftBanner = 43;
      case 43: {
        let limit = pushTemporaryLength(bb);
        message.giftBanner = _decodeGiftBanner(bb);
        bb.limit = limit;
        break;
      }

      // repeated string triggerWords = 44;
      case 44: {
        let values = message.triggerWords || (message.triggerWords = []);
        values.push(readString(bb, readVarint32(bb)));
        break;
      }

      // repeated GiftBuffInfo giftBuffInfos = 45;
      case 45: {
        let limit = pushTemporaryLength(bb);
        let values = message.giftBuffInfos || (message.giftBuffInfos = []);
        values.push(_decodeGiftBuffInfo(bb));
        bb.limit = limit;
        break;
      }

      // optional bool forFirstRecharge = 46;
      case 46: {
        message.forFirstRecharge = !!readByte(bb);
        break;
      }

      // optional Image dynamicImgForSelected = 47;
      case 47: {
        let limit = pushTemporaryLength(bb);
        message.dynamicImgForSelected = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 afterSendAction = 48;
      case 48: {
        message.afterSendAction = readVarint32(bb);
        break;
      }

      // optional int64 giftOfflineTime = 49;
      case 49: {
        message.giftOfflineTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string topBarText = 50;
      case 50: {
        message.topBarText = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image topRightAvatar = 51;
      case 51: {
        let limit = pushTemporaryLength(bb);
        message.topRightAvatar = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string bannerSchemeUrl = 52;
      case 52: {
        message.bannerSchemeUrl = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool isLocked = 53;
      case 53: {
        message.isLocked = !!readByte(bb);
        break;
      }

      // optional int64 reqExtraType = 54;
      case 54: {
        message.reqExtraType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // repeated int64 assetIds = 55;
      case 55: {
        let values = message.assetIds || (message.assetIds = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint64(bb, /* unsigned */ false));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint64(bb, /* unsigned */ false));
        }
        break;
      }

      // optional GiftPreviewInfo giftPreviewInfo = 56;
      case 56: {
        let limit = pushTemporaryLength(bb);
        message.giftPreviewInfo = _decodeGiftPreviewInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional GiftTip giftTip = 57;
      case 57: {
        let limit = pushTemporaryLength(bb);
        message.giftTip = _decodeGiftTip(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 needSweepLightCount = 58;
      case 58: {
        message.needSweepLightCount = readVarint32(bb);
        break;
      }

      // repeated GiftGroupInfo groupInfo = 59;
      case 59: {
        let limit = pushTemporaryLength(bb);
        let values = message.groupInfo || (message.groupInfo = []);
        values.push(_decodeGiftGroupInfo(bb));
        bb.limit = limit;
        break;
      }

      // optional Text bottomText = 60;
      case 60: {
        let limit = pushTemporaryLength(bb);
        message.bottomText = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 mysteryShopStatus = 61;
      case 61: {
        message.mysteryShopStatus = readVarint32(bb);
        break;
      }

      // repeated int64 optionalAssetIds = 62;
      case 62: {
        let values = message.optionalAssetIds || (message.optionalAssetIds = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint64(bb, /* unsigned */ false));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint64(bb, /* unsigned */ false));
        }
        break;
      }

      // optional bool disableWishList = 63;
      case 63: {
        message.disableWishList = !!readByte(bb);
        break;
      }

      // optional GiftStruct_GiftMsgBoard giftMsgBoard = 64;
      case 64: {
        let limit = pushTemporaryLength(bb);
        message.giftMsgBoard = _decodeGiftStruct_GiftMsgBoard(bb);
        bb.limit = limit;
        break;
      }

      // optional EmojiInteractResource emojiInteractResource = 65;
      case 65: {
        let limit = pushTemporaryLength(bb);
        message.emojiInteractResource = _decodeEmojiInteractResource(bb);
        bb.limit = limit;
        break;
      }

      // optional bool trayDynamicImgFlippable = 66;
      case 66: {
        message.trayDynamicImgFlippable = !!readByte(bb);
        break;
      }

      // optional int64 picoShowAction = 67;
      case 67: {
        message.picoShowAction = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 selectedDynamicEffect = 68;
      case 68: {
        message.selectedDynamicEffect = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional GiftTouchLabel giftTouchLabel = 69;
      case 69: {
        let limit = pushTemporaryLength(bb);
        message.giftTouchLabel = _decodeGiftTouchLabel(bb);
        bb.limit = limit;
        break;
      }

      // optional GiftUnselectedBottomInfo unselectedBottomInfo = 70;
      case 70: {
        let limit = pushTemporaryLength(bb);
        message.unselectedBottomInfo = _decodeGiftUnselectedBottomInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional GiftConfirmInfo giftConfirmInfo = 71;
      case 71: {
        let limit = pushTemporaryLength(bb);
        message.giftConfirmInfo = _decodeGiftConfirmInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 bizType = 72;
      case 72: {
        message.bizType = readVarint32(bb);
        break;
      }

      // optional GoodsBizItem bizItem = 73;
      case 73: {
        let limit = pushTemporaryLength(bb);
        message.bizItem = _decodeGoodsBizItem(bb);
        bb.limit = limit;
        break;
      }

      // optional Image webpImage = 74;
      case 74: {
        let limit = pushTemporaryLength(bb);
        message.webpImage = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 giftSource = 75;
      case 75: {
        message.giftSource = readVarint32(bb);
        break;
      }

      // repeated int64 requiredAssets = 76;
      case 76: {
        let values = message.requiredAssets || (message.requiredAssets = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint64(bb, /* unsigned */ false));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint64(bb, /* unsigned */ false));
        }
        break;
      }

      // optional Image selectedLabel = 77;
      case 77: {
        let limit = pushTemporaryLength(bb);
        message.selectedLabel = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 sortScore = 78;
      case 78: {
        message.sortScore = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 topicId = 79;
      case 79: {
        message.topicId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string sortExtra = 80;
      case 80: {
        message.sortExtra = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftStruct_GiftStructFansClubInfo {
  minLevel?: number;
  insertPos?: number;
}

export function encodeGiftStruct_GiftStructFansClubInfo(message: GiftStruct_GiftStructFansClubInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftStruct_GiftStructFansClubInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeGiftStruct_GiftStructFansClubInfo(message: GiftStruct_GiftStructFansClubInfo, bb: ByteBuffer): void {
  // optional int32 minLevel = 1;
  let $minLevel = message.minLevel;
  if ($minLevel !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($minLevel));
  }

  // optional int32 insertPos = 2;
  let $insertPos = message.insertPos;
  if ($insertPos !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($insertPos));
  }
}

export function decodeGiftStruct_GiftStructFansClubInfo(binary: Uint8Array): GiftStruct_GiftStructFansClubInfo {
  return _decodeGiftStruct_GiftStructFansClubInfo(wrapByteBuffer(binary));
}

export function _decodeGiftStruct_GiftStructFansClubInfo(bb: ByteBuffer): GiftStruct_GiftStructFansClubInfo {
  let message: GiftStruct_GiftStructFansClubInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 minLevel = 1;
      case 1: {
        message.minLevel = readVarint32(bb);
        break;
      }

      // optional int32 insertPos = 2;
      case 2: {
        message.insertPos = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftStruct_GiftMsgBoard {
  forMsgBoard?: boolean;
  promptText?: string;
}

export function encodeGiftStruct_GiftMsgBoard(message: GiftStruct_GiftMsgBoard): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftStruct_GiftMsgBoard(message, bb);
  return toUint8Array(bb);
}

export function _encodeGiftStruct_GiftMsgBoard(message: GiftStruct_GiftMsgBoard, bb: ByteBuffer): void {
  // optional bool forMsgBoard = 1;
  let $forMsgBoard = message.forMsgBoard;
  if ($forMsgBoard !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $forMsgBoard ? 1 : 0);
  }

  // optional string promptText = 2;
  let $promptText = message.promptText;
  if ($promptText !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $promptText);
  }
}

export function decodeGiftStruct_GiftMsgBoard(binary: Uint8Array): GiftStruct_GiftMsgBoard {
  return _decodeGiftStruct_GiftMsgBoard(wrapByteBuffer(binary));
}

export function _decodeGiftStruct_GiftMsgBoard(bb: ByteBuffer): GiftStruct_GiftMsgBoard {
  let message: GiftStruct_GiftMsgBoard = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bool forMsgBoard = 1;
      case 1: {
        message.forMsgBoard = !!readByte(bb);
        break;
      }

      // optional string promptText = 2;
      case 2: {
        message.promptText = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftTouchLabel {
  icon?: Image;
  uniqueKey?: string;
}

export function encodeGiftTouchLabel(message: GiftTouchLabel): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftTouchLabel(message, bb);
  return toUint8Array(bb);
}

export function _encodeGiftTouchLabel(message: GiftTouchLabel, bb: ByteBuffer): void {
  // optional Image icon = 1;
  let $icon = message.icon;
  if ($icon !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeImage($icon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string uniqueKey = 2;
  let $uniqueKey = message.uniqueKey;
  if ($uniqueKey !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $uniqueKey);
  }
}

export function decodeGiftTouchLabel(binary: Uint8Array): GiftTouchLabel {
  return _decodeGiftTouchLabel(wrapByteBuffer(binary));
}

export function _decodeGiftTouchLabel(bb: ByteBuffer): GiftTouchLabel {
  let message: GiftTouchLabel = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Image icon = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.icon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string uniqueKey = 2;
      case 2: {
        message.uniqueKey = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftUnselectedBottomInfo {
  text?: string;
}

export function encodeGiftUnselectedBottomInfo(message: GiftUnselectedBottomInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftUnselectedBottomInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeGiftUnselectedBottomInfo(message: GiftUnselectedBottomInfo, bb: ByteBuffer): void {
  // optional string text = 1;
  let $text = message.text;
  if ($text !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $text);
  }
}

export function decodeGiftUnselectedBottomInfo(binary: Uint8Array): GiftUnselectedBottomInfo {
  return _decodeGiftUnselectedBottomInfo(wrapByteBuffer(binary));
}

export function _decodeGiftUnselectedBottomInfo(bb: ByteBuffer): GiftUnselectedBottomInfo {
  let message: GiftUnselectedBottomInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string text = 1;
      case 1: {
        message.text = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftConfirmInfo {
  title?: string;
  text?: string;
  cancelButtonText?: string;
  confirmButtonText?: string;
  confirmType?: number;
}

export function encodeGiftConfirmInfo(message: GiftConfirmInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftConfirmInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeGiftConfirmInfo(message: GiftConfirmInfo, bb: ByteBuffer): void {
  // optional string title = 1;
  let $title = message.title;
  if ($title !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $title);
  }

  // optional string text = 2;
  let $text = message.text;
  if ($text !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $text);
  }

  // optional string cancelButtonText = 3;
  let $cancelButtonText = message.cancelButtonText;
  if ($cancelButtonText !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $cancelButtonText);
  }

  // optional string confirmButtonText = 4;
  let $confirmButtonText = message.confirmButtonText;
  if ($confirmButtonText !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $confirmButtonText);
  }

  // optional int32 confirmType = 5;
  let $confirmType = message.confirmType;
  if ($confirmType !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($confirmType));
  }
}

export function decodeGiftConfirmInfo(binary: Uint8Array): GiftConfirmInfo {
  return _decodeGiftConfirmInfo(wrapByteBuffer(binary));
}

export function _decodeGiftConfirmInfo(bb: ByteBuffer): GiftConfirmInfo {
  let message: GiftConfirmInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string title = 1;
      case 1: {
        message.title = readString(bb, readVarint32(bb));
        break;
      }

      // optional string text = 2;
      case 2: {
        message.text = readString(bb, readVarint32(bb));
        break;
      }

      // optional string cancelButtonText = 3;
      case 3: {
        message.cancelButtonText = readString(bb, readVarint32(bb));
        break;
      }

      // optional string confirmButtonText = 4;
      case 4: {
        message.confirmButtonText = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 confirmType = 5;
      case 5: {
        message.confirmType = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftPreviewInfo {
  lockStatus?: string;
  clientBlockUseSchemeUrl?: boolean;
  blockSchemeUrl?: string;
  clientCheckLeftDiamond?: boolean;
  blockToast?: string;
}

export function encodeGiftPreviewInfo(message: GiftPreviewInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftPreviewInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeGiftPreviewInfo(message: GiftPreviewInfo, bb: ByteBuffer): void {
  // optional int64 lockStatus = 1;
  let $lockStatus = message.lockStatus;
  if ($lockStatus !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $lockStatus);
  }

  // optional bool clientBlockUseSchemeUrl = 2;
  let $clientBlockUseSchemeUrl = message.clientBlockUseSchemeUrl;
  if ($clientBlockUseSchemeUrl !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $clientBlockUseSchemeUrl ? 1 : 0);
  }

  // optional string blockSchemeUrl = 3;
  let $blockSchemeUrl = message.blockSchemeUrl;
  if ($blockSchemeUrl !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $blockSchemeUrl);
  }

  // optional bool clientCheckLeftDiamond = 4;
  let $clientCheckLeftDiamond = message.clientCheckLeftDiamond;
  if ($clientCheckLeftDiamond !== undefined) {
    writeVarint32(bb, 32);
    writeByte(bb, $clientCheckLeftDiamond ? 1 : 0);
  }

  // optional string blockToast = 5;
  let $blockToast = message.blockToast;
  if ($blockToast !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $blockToast);
  }
}

export function decodeGiftPreviewInfo(binary: Uint8Array): GiftPreviewInfo {
  return _decodeGiftPreviewInfo(wrapByteBuffer(binary));
}

export function _decodeGiftPreviewInfo(bb: ByteBuffer): GiftPreviewInfo {
  let message: GiftPreviewInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 lockStatus = 1;
      case 1: {
        message.lockStatus = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional bool clientBlockUseSchemeUrl = 2;
      case 2: {
        message.clientBlockUseSchemeUrl = !!readByte(bb);
        break;
      }

      // optional string blockSchemeUrl = 3;
      case 3: {
        message.blockSchemeUrl = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool clientCheckLeftDiamond = 4;
      case 4: {
        message.clientCheckLeftDiamond = !!readByte(bb);
        break;
      }

      // optional string blockToast = 5;
      case 5: {
        message.blockToast = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftTip {
  displayText?: Text;
  backgroundColor?: string;
  prefixImage?: Image;
  remainingDuration?: string;
  remainingDurationSuffixText?: Text;
  countdownDeadlineTime?: string;
}

export function encodeGiftTip(message: GiftTip): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftTip(message, bb);
  return toUint8Array(bb);
}

export function _encodeGiftTip(message: GiftTip, bb: ByteBuffer): void {
  // optional Text displayText = 1;
  let $displayText = message.displayText;
  if ($displayText !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeText($displayText, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string backgroundColor = 2;
  let $backgroundColor = message.backgroundColor;
  if ($backgroundColor !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $backgroundColor);
  }

  // optional Image prefixImage = 3;
  let $prefixImage = message.prefixImage;
  if ($prefixImage !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeImage($prefixImage, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 remainingDuration = 4;
  let $remainingDuration = message.remainingDuration;
  if ($remainingDuration !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $remainingDuration);
  }

  // optional Text remainingDurationSuffixText = 5;
  let $remainingDurationSuffixText = message.remainingDurationSuffixText;
  if ($remainingDurationSuffixText !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeText($remainingDurationSuffixText, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 countdownDeadlineTime = 6;
  let $countdownDeadlineTime = message.countdownDeadlineTime;
  if ($countdownDeadlineTime !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $countdownDeadlineTime);
  }
}

export function decodeGiftTip(binary: Uint8Array): GiftTip {
  return _decodeGiftTip(wrapByteBuffer(binary));
}

export function _decodeGiftTip(bb: ByteBuffer): GiftTip {
  let message: GiftTip = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Text displayText = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.displayText = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional string backgroundColor = 2;
      case 2: {
        message.backgroundColor = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image prefixImage = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.prefixImage = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 remainingDuration = 4;
      case 4: {
        message.remainingDuration = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Text remainingDurationSuffixText = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.remainingDurationSuffixText = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 countdownDeadlineTime = 6;
      case 6: {
        message.countdownDeadlineTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftGroupInfo {
  groupCount?: number;
  groupText?: string;
}

export function encodeGiftGroupInfo(message: GiftGroupInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftGroupInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeGiftGroupInfo(message: GiftGroupInfo, bb: ByteBuffer): void {
  // optional int32 groupCount = 1;
  let $groupCount = message.groupCount;
  if ($groupCount !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($groupCount));
  }

  // optional string groupText = 2;
  let $groupText = message.groupText;
  if ($groupText !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $groupText);
  }
}

export function decodeGiftGroupInfo(binary: Uint8Array): GiftGroupInfo {
  return _decodeGiftGroupInfo(wrapByteBuffer(binary));
}

export function _decodeGiftGroupInfo(bb: ByteBuffer): GiftGroupInfo {
  let message: GiftGroupInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 groupCount = 1;
      case 1: {
        message.groupCount = readVarint32(bb);
        break;
      }

      // optional string groupText = 2;
      case 2: {
        message.groupText = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftSortStrategy {
  scene?: string;
  giftIds?: string;
  tagIds?: string;
  startTime?: string;
  endTime?: string;
  extra?: string;
  strategyType?: number;
  updateType?: number;
  effectedGiftIds?: string;
}

export function encodeGiftSortStrategy(message: GiftSortStrategy): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftSortStrategy(message, bb);
  return toUint8Array(bb);
}

export function _encodeGiftSortStrategy(message: GiftSortStrategy, bb: ByteBuffer): void {
  // optional string scene = 1;
  let $scene = message.scene;
  if ($scene !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $scene);
  }

  // optional int64 giftIds = 2;
  let $giftIds = message.giftIds;
  if ($giftIds !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $giftIds);
  }

  // optional int64 tagIds = 3;
  let $tagIds = message.tagIds;
  if ($tagIds !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $tagIds);
  }

  // optional int64 startTime = 4;
  let $startTime = message.startTime;
  if ($startTime !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $startTime);
  }

  // optional int64 endTime = 5;
  let $endTime = message.endTime;
  if ($endTime !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $endTime);
  }

  // optional string extra = 6;
  let $extra = message.extra;
  if ($extra !== undefined) {
    writeVarint32(bb, 50);
    writeString(bb, $extra);
  }

  // optional int32 strategyType = 7;
  let $strategyType = message.strategyType;
  if ($strategyType !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, intToLong($strategyType));
  }

  // optional int32 updateType = 8;
  let $updateType = message.updateType;
  if ($updateType !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, intToLong($updateType));
  }

  // optional int64 effectedGiftIds = 9;
  let $effectedGiftIds = message.effectedGiftIds;
  if ($effectedGiftIds !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, $effectedGiftIds);
  }
}

export function decodeGiftSortStrategy(binary: Uint8Array): GiftSortStrategy {
  return _decodeGiftSortStrategy(wrapByteBuffer(binary));
}

export function _decodeGiftSortStrategy(bb: ByteBuffer): GiftSortStrategy {
  let message: GiftSortStrategy = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string scene = 1;
      case 1: {
        message.scene = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 giftIds = 2;
      case 2: {
        message.giftIds = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 tagIds = 3;
      case 3: {
        message.tagIds = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 startTime = 4;
      case 4: {
        message.startTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 endTime = 5;
      case 5: {
        message.endTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string extra = 6;
      case 6: {
        message.extra = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 strategyType = 7;
      case 7: {
        message.strategyType = readVarint32(bb);
        break;
      }

      // optional int32 updateType = 8;
      case 8: {
        message.updateType = readVarint32(bb);
        break;
      }

      // optional int64 effectedGiftIds = 9;
      case 9: {
        message.effectedGiftIds = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftPanelOperation {}

export function encodeGiftPanelOperation(message: GiftPanelOperation): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftPanelOperation(message, bb);
  return toUint8Array(bb);
}

export function _encodeGiftPanelOperation(message: GiftPanelOperation, bb: ByteBuffer): void {}

export function decodeGiftPanelOperation(binary: Uint8Array): GiftPanelOperation {
  return _decodeGiftPanelOperation(wrapByteBuffer(binary));
}

export function _decodeGiftPanelOperation(bb: ByteBuffer): GiftPanelOperation {
  let message: GiftPanelOperation = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftBanner {
  displayText?: Text;
  displayTextBgColor?: string;
  boxImg?: Image;
  bgImg?: Image;
  schemeUrl?: string;
  animate?: boolean;
  boxId?: string;
  availableBoxCount?: string;
}

export function encodeGiftBanner(message: GiftBanner): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftBanner(message, bb);
  return toUint8Array(bb);
}

export function _encodeGiftBanner(message: GiftBanner, bb: ByteBuffer): void {
  // optional Text displayText = 1;
  let $displayText = message.displayText;
  if ($displayText !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeText($displayText, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string displayTextBgColor = 2;
  let $displayTextBgColor = message.displayTextBgColor;
  if ($displayTextBgColor !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $displayTextBgColor);
  }

  // optional Image boxImg = 3;
  let $boxImg = message.boxImg;
  if ($boxImg !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeImage($boxImg, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image bgImg = 4;
  let $bgImg = message.bgImg;
  if ($bgImg !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeImage($bgImg, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string schemeUrl = 5;
  let $schemeUrl = message.schemeUrl;
  if ($schemeUrl !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $schemeUrl);
  }

  // optional bool animate = 6;
  let $animate = message.animate;
  if ($animate !== undefined) {
    writeVarint32(bb, 48);
    writeByte(bb, $animate ? 1 : 0);
  }

  // optional int64 boxId = 7;
  let $boxId = message.boxId;
  if ($boxId !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $boxId);
  }

  // optional int64 availableBoxCount = 8;
  let $availableBoxCount = message.availableBoxCount;
  if ($availableBoxCount !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, $availableBoxCount);
  }
}

export function decodeGiftBanner(binary: Uint8Array): GiftBanner {
  return _decodeGiftBanner(wrapByteBuffer(binary));
}

export function _decodeGiftBanner(bb: ByteBuffer): GiftBanner {
  let message: GiftBanner = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Text displayText = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.displayText = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional string displayTextBgColor = 2;
      case 2: {
        message.displayTextBgColor = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image boxImg = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.boxImg = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image bgImg = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.bgImg = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string schemeUrl = 5;
      case 5: {
        message.schemeUrl = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool animate = 6;
      case 6: {
        message.animate = !!readByte(bb);
        break;
      }

      // optional int64 boxId = 7;
      case 7: {
        message.boxId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 availableBoxCount = 8;
      case 8: {
        message.availableBoxCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftBuffInfo {
  text?: string;
  textColor?: string;
  bgImg?: Image;
  sweepLightImg?: Image;
  buffGiftDescribeImg?: Image;
  buffGiftId?: string;
  buffLevel?: number;
  buffCanSend?: boolean;
  buffDiamondCount?: string;
  lockToast?: string;
  defaultChoseAction?: string;
  startTime?: string;
  buffLockInfo?: BuffLockInfo;
  bgImgV2?: Image;
}

export function encodeGiftBuffInfo(message: GiftBuffInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftBuffInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeGiftBuffInfo(message: GiftBuffInfo, bb: ByteBuffer): void {
  // optional string text = 1;
  let $text = message.text;
  if ($text !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $text);
  }

  // optional string textColor = 2;
  let $textColor = message.textColor;
  if ($textColor !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $textColor);
  }

  // optional Image bgImg = 3;
  let $bgImg = message.bgImg;
  if ($bgImg !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeImage($bgImg, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image sweepLightImg = 4;
  let $sweepLightImg = message.sweepLightImg;
  if ($sweepLightImg !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeImage($sweepLightImg, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image buffGiftDescribeImg = 5;
  let $buffGiftDescribeImg = message.buffGiftDescribeImg;
  if ($buffGiftDescribeImg !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeImage($buffGiftDescribeImg, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 buffGiftId = 6;
  let $buffGiftId = message.buffGiftId;
  if ($buffGiftId !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $buffGiftId);
  }

  // optional int32 buffLevel = 7;
  let $buffLevel = message.buffLevel;
  if ($buffLevel !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, intToLong($buffLevel));
  }

  // optional bool buffCanSend = 8;
  let $buffCanSend = message.buffCanSend;
  if ($buffCanSend !== undefined) {
    writeVarint32(bb, 64);
    writeByte(bb, $buffCanSend ? 1 : 0);
  }

  // optional int64 buffDiamondCount = 9;
  let $buffDiamondCount = message.buffDiamondCount;
  if ($buffDiamondCount !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, $buffDiamondCount);
  }

  // optional string lockToast = 10;
  let $lockToast = message.lockToast;
  if ($lockToast !== undefined) {
    writeVarint32(bb, 82);
    writeString(bb, $lockToast);
  }

  // optional int64 defaultChoseAction = 11;
  let $defaultChoseAction = message.defaultChoseAction;
  if ($defaultChoseAction !== undefined) {
    writeVarint32(bb, 88);
    writeVarint64(bb, $defaultChoseAction);
  }

  // optional int64 startTime = 12;
  let $startTime = message.startTime;
  if ($startTime !== undefined) {
    writeVarint32(bb, 96);
    writeVarint64(bb, $startTime);
  }

  // optional BuffLockInfo buffLockInfo = 13;
  let $buffLockInfo = message.buffLockInfo;
  if ($buffLockInfo !== undefined) {
    writeVarint32(bb, 106);
    let nested = popByteBuffer();
    _encodeBuffLockInfo($buffLockInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image bgImgV2 = 14;
  let $bgImgV2 = message.bgImgV2;
  if ($bgImgV2 !== undefined) {
    writeVarint32(bb, 114);
    let nested = popByteBuffer();
    _encodeImage($bgImgV2, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeGiftBuffInfo(binary: Uint8Array): GiftBuffInfo {
  return _decodeGiftBuffInfo(wrapByteBuffer(binary));
}

export function _decodeGiftBuffInfo(bb: ByteBuffer): GiftBuffInfo {
  let message: GiftBuffInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string text = 1;
      case 1: {
        message.text = readString(bb, readVarint32(bb));
        break;
      }

      // optional string textColor = 2;
      case 2: {
        message.textColor = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image bgImg = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.bgImg = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image sweepLightImg = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.sweepLightImg = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image buffGiftDescribeImg = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.buffGiftDescribeImg = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 buffGiftId = 6;
      case 6: {
        message.buffGiftId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 buffLevel = 7;
      case 7: {
        message.buffLevel = readVarint32(bb);
        break;
      }

      // optional bool buffCanSend = 8;
      case 8: {
        message.buffCanSend = !!readByte(bb);
        break;
      }

      // optional int64 buffDiamondCount = 9;
      case 9: {
        message.buffDiamondCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string lockToast = 10;
      case 10: {
        message.lockToast = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 defaultChoseAction = 11;
      case 11: {
        message.defaultChoseAction = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 startTime = 12;
      case 12: {
        message.startTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional BuffLockInfo buffLockInfo = 13;
      case 13: {
        let limit = pushTemporaryLength(bb);
        message.buffLockInfo = _decodeBuffLockInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional Image bgImgV2 = 14;
      case 14: {
        let limit = pushTemporaryLength(bb);
        message.bgImgV2 = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GoodsBizItem {}

export function encodeGoodsBizItem(message: GoodsBizItem): Uint8Array {
  let bb = popByteBuffer();
  _encodeGoodsBizItem(message, bb);
  return toUint8Array(bb);
}

export function _encodeGoodsBizItem(message: GoodsBizItem, bb: ByteBuffer): void {}

export function decodeGoodsBizItem(binary: Uint8Array): GoodsBizItem {
  return _decodeGoodsBizItem(wrapByteBuffer(binary));
}

export function _decodeGoodsBizItem(bb: ByteBuffer): GoodsBizItem {
  let message: GoodsBizItem = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface LuckyMoneyGiftMeta {
  image?: Image;
  describe?: string;
  id?: string;
  diamondCount?: number;
  icon?: Image;
}

export function encodeLuckyMoneyGiftMeta(message: LuckyMoneyGiftMeta): Uint8Array {
  let bb = popByteBuffer();
  _encodeLuckyMoneyGiftMeta(message, bb);
  return toUint8Array(bb);
}

export function _encodeLuckyMoneyGiftMeta(message: LuckyMoneyGiftMeta, bb: ByteBuffer): void {
  // optional Image image = 1;
  let $image = message.image;
  if ($image !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeImage($image, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string describe = 2;
  let $describe = message.describe;
  if ($describe !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $describe);
  }

  // optional int64 id = 3;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $id);
  }

  // optional int32 diamondCount = 4;
  let $diamondCount = message.diamondCount;
  if ($diamondCount !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($diamondCount));
  }

  // optional Image icon = 5;
  let $icon = message.icon;
  if ($icon !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeImage($icon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeLuckyMoneyGiftMeta(binary: Uint8Array): LuckyMoneyGiftMeta {
  return _decodeLuckyMoneyGiftMeta(wrapByteBuffer(binary));
}

export function _decodeLuckyMoneyGiftMeta(bb: ByteBuffer): LuckyMoneyGiftMeta {
  let message: LuckyMoneyGiftMeta = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Image image = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.image = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string describe = 2;
      case 2: {
        message.describe = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 id = 3;
      case 3: {
        message.id = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 diamondCount = 4;
      case 4: {
        message.diamondCount = readVarint32(bb);
        break;
      }

      // optional Image icon = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.icon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SendTogether {
  id?: string;
  startTime?: string;
  endTime?: string;
}

export function encodeSendTogether(message: SendTogether): Uint8Array {
  let bb = popByteBuffer();
  _encodeSendTogether(message, bb);
  return toUint8Array(bb);
}

export function _encodeSendTogether(message: SendTogether, bb: ByteBuffer): void {
  // optional string id = 1;
  let $id = message.id;
  if ($id !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $id);
  }

  // optional int64 startTime = 2;
  let $startTime = message.startTime;
  if ($startTime !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $startTime);
  }

  // optional int64 endTime = 3;
  let $endTime = message.endTime;
  if ($endTime !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $endTime);
  }
}

export function decodeSendTogether(binary: Uint8Array): SendTogether {
  return _decodeSendTogether(wrapByteBuffer(binary));
}

export function _decodeSendTogether(bb: ByteBuffer): SendTogether {
  let message: SendTogether = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string id = 1;
      case 1: {
        message.id = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 startTime = 2;
      case 2: {
        message.startTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 endTime = 3;
      case 3: {
        message.endTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SeriesPlayGift {
  giftStruct?: GiftStruct;
  seriesTrayInfo?: SeriesTrayInfo;
  sendTogether?: SendTogether;
  diyItemInfo?: string;
  anchorGift?: AnchorGiftData;
  assetEffectMixInfo?: AssetEffectMixInfo;
}

export function encodeSeriesPlayGift(message: SeriesPlayGift): Uint8Array {
  let bb = popByteBuffer();
  _encodeSeriesPlayGift(message, bb);
  return toUint8Array(bb);
}

export function _encodeSeriesPlayGift(message: SeriesPlayGift, bb: ByteBuffer): void {
  // optional GiftStruct giftStruct = 1;
  let $giftStruct = message.giftStruct;
  if ($giftStruct !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeGiftStruct($giftStruct, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional SeriesTrayInfo seriesTrayInfo = 2;
  let $seriesTrayInfo = message.seriesTrayInfo;
  if ($seriesTrayInfo !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeSeriesTrayInfo($seriesTrayInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional SendTogether sendTogether = 3;
  let $sendTogether = message.sendTogether;
  if ($sendTogether !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeSendTogether($sendTogether, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string diyItemInfo = 4;
  let $diyItemInfo = message.diyItemInfo;
  if ($diyItemInfo !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $diyItemInfo);
  }

  // optional AnchorGiftData anchorGift = 5;
  let $anchorGift = message.anchorGift;
  if ($anchorGift !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeAnchorGiftData($anchorGift, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional AssetEffectMixInfo assetEffectMixInfo = 6;
  let $assetEffectMixInfo = message.assetEffectMixInfo;
  if ($assetEffectMixInfo !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeAssetEffectMixInfo($assetEffectMixInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeSeriesPlayGift(binary: Uint8Array): SeriesPlayGift {
  return _decodeSeriesPlayGift(wrapByteBuffer(binary));
}

export function _decodeSeriesPlayGift(bb: ByteBuffer): SeriesPlayGift {
  let message: SeriesPlayGift = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional GiftStruct giftStruct = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.giftStruct = _decodeGiftStruct(bb);
        bb.limit = limit;
        break;
      }

      // optional SeriesTrayInfo seriesTrayInfo = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.seriesTrayInfo = _decodeSeriesTrayInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional SendTogether sendTogether = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.sendTogether = _decodeSendTogether(bb);
        bb.limit = limit;
        break;
      }

      // optional string diyItemInfo = 4;
      case 4: {
        message.diyItemInfo = readString(bb, readVarint32(bb));
        break;
      }

      // optional AnchorGiftData anchorGift = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.anchorGift = _decodeAnchorGiftData(bb);
        bb.limit = limit;
        break;
      }

      // optional AssetEffectMixInfo assetEffectMixInfo = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.assetEffectMixInfo = _decodeAssetEffectMixInfo(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SeriesTrayInfo {
  duration?: string;
  staticImg?: Image;
  dynamicImg?: Image;
}

export function encodeSeriesTrayInfo(message: SeriesTrayInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeSeriesTrayInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeSeriesTrayInfo(message: SeriesTrayInfo, bb: ByteBuffer): void {
  // optional int64 duration = 1;
  let $duration = message.duration;
  if ($duration !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $duration);
  }

  // optional Image staticImg = 2;
  let $staticImg = message.staticImg;
  if ($staticImg !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeImage($staticImg, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image dynamicImg = 3;
  let $dynamicImg = message.dynamicImg;
  if ($dynamicImg !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeImage($dynamicImg, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeSeriesTrayInfo(binary: Uint8Array): SeriesTrayInfo {
  return _decodeSeriesTrayInfo(wrapByteBuffer(binary));
}

export function _decodeSeriesTrayInfo(bb: ByteBuffer): SeriesTrayInfo {
  let message: SeriesTrayInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 duration = 1;
      case 1: {
        message.duration = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Image staticImg = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.staticImg = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image dynamicImg = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.dynamicImg = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SuffixText {
  bizType?: string;
  text?: Text;
}

export function encodeSuffixText(message: SuffixText): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuffixText(message, bb);
  return toUint8Array(bb);
}

export function _encodeSuffixText(message: SuffixText, bb: ByteBuffer): void {
  // optional int64 bizType = 1;
  let $bizType = message.bizType;
  if ($bizType !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $bizType);
  }

  // optional Text text = 2;
  let $text = message.text;
  if ($text !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeText($text, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeSuffixText(binary: Uint8Array): SuffixText {
  return _decodeSuffixText(wrapByteBuffer(binary));
}

export function _decodeSuffixText(bb: ByteBuffer): SuffixText {
  let message: SuffixText = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 bizType = 1;
      case 1: {
        message.bizType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Text text = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.text = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SendInteractEmojiConfig {
  interactEmoji?: Image;
  durationMs?: string;
  start?: string;
  ownEmoji?: Image;
  ownEmojiDurationMs?: string;
  offset?: string;
  scaleUp?: string;
  reshape?: boolean;
  soundUrl?: string;
  reshapeStart?: string;
}

export function encodeSendInteractEmojiConfig(message: SendInteractEmojiConfig): Uint8Array {
  let bb = popByteBuffer();
  _encodeSendInteractEmojiConfig(message, bb);
  return toUint8Array(bb);
}

export function _encodeSendInteractEmojiConfig(message: SendInteractEmojiConfig, bb: ByteBuffer): void {
  // optional Image interactEmoji = 1;
  let $interactEmoji = message.interactEmoji;
  if ($interactEmoji !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeImage($interactEmoji, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 durationMs = 2;
  let $durationMs = message.durationMs;
  if ($durationMs !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $durationMs);
  }

  // optional int64 start = 3;
  let $start = message.start;
  if ($start !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $start);
  }

  // optional Image ownEmoji = 4;
  let $ownEmoji = message.ownEmoji;
  if ($ownEmoji !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeImage($ownEmoji, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 ownEmojiDurationMs = 5;
  let $ownEmojiDurationMs = message.ownEmojiDurationMs;
  if ($ownEmojiDurationMs !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $ownEmojiDurationMs);
  }

  // optional int64 offset = 6;
  let $offset = message.offset;
  if ($offset !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $offset);
  }

  // optional int64 scaleUp = 7;
  let $scaleUp = message.scaleUp;
  if ($scaleUp !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $scaleUp);
  }

  // optional bool reshape = 8;
  let $reshape = message.reshape;
  if ($reshape !== undefined) {
    writeVarint32(bb, 64);
    writeByte(bb, $reshape ? 1 : 0);
  }

  // optional string soundUrl = 9;
  let $soundUrl = message.soundUrl;
  if ($soundUrl !== undefined) {
    writeVarint32(bb, 74);
    writeString(bb, $soundUrl);
  }

  // optional int64 reshapeStart = 10;
  let $reshapeStart = message.reshapeStart;
  if ($reshapeStart !== undefined) {
    writeVarint32(bb, 80);
    writeVarint64(bb, $reshapeStart);
  }
}

export function decodeSendInteractEmojiConfig(binary: Uint8Array): SendInteractEmojiConfig {
  return _decodeSendInteractEmojiConfig(wrapByteBuffer(binary));
}

export function _decodeSendInteractEmojiConfig(bb: ByteBuffer): SendInteractEmojiConfig {
  let message: SendInteractEmojiConfig = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Image interactEmoji = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.interactEmoji = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 durationMs = 2;
      case 2: {
        message.durationMs = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 start = 3;
      case 3: {
        message.start = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Image ownEmoji = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.ownEmoji = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 ownEmojiDurationMs = 5;
      case 5: {
        message.ownEmojiDurationMs = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 offset = 6;
      case 6: {
        message.offset = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 scaleUp = 7;
      case 7: {
        message.scaleUp = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional bool reshape = 8;
      case 8: {
        message.reshape = !!readByte(bb);
        break;
      }

      // optional string soundUrl = 9;
      case 9: {
        message.soundUrl = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 reshapeStart = 10;
      case 10: {
        message.reshapeStart = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RoomIntroLabel {
  labelTag?: number;
  labelName?: string;
  labelText?: string;
  labelIcon?: string;
  typeName?: string;
  showText?: string;
  selected?: boolean;
  showOrder?: string;
}

export function encodeRoomIntroLabel(message: RoomIntroLabel): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomIntroLabel(message, bb);
  return toUint8Array(bb);
}

export function _encodeRoomIntroLabel(message: RoomIntroLabel, bb: ByteBuffer): void {
  // optional int32 labelTag = 1;
  let $labelTag = message.labelTag;
  if ($labelTag !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($labelTag));
  }

  // optional string labelName = 2;
  let $labelName = message.labelName;
  if ($labelName !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $labelName);
  }

  // optional string labelText = 3;
  let $labelText = message.labelText;
  if ($labelText !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $labelText);
  }

  // optional string labelIcon = 4;
  let $labelIcon = message.labelIcon;
  if ($labelIcon !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $labelIcon);
  }

  // optional string typeName = 5;
  let $typeName = message.typeName;
  if ($typeName !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $typeName);
  }

  // optional string showText = 6;
  let $showText = message.showText;
  if ($showText !== undefined) {
    writeVarint32(bb, 50);
    writeString(bb, $showText);
  }

  // optional bool selected = 7;
  let $selected = message.selected;
  if ($selected !== undefined) {
    writeVarint32(bb, 56);
    writeByte(bb, $selected ? 1 : 0);
  }

  // optional int64 showOrder = 8;
  let $showOrder = message.showOrder;
  if ($showOrder !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, $showOrder);
  }
}

export function decodeRoomIntroLabel(binary: Uint8Array): RoomIntroLabel {
  return _decodeRoomIntroLabel(wrapByteBuffer(binary));
}

export function _decodeRoomIntroLabel(bb: ByteBuffer): RoomIntroLabel {
  let message: RoomIntroLabel = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 labelTag = 1;
      case 1: {
        message.labelTag = readVarint32(bb);
        break;
      }

      // optional string labelName = 2;
      case 2: {
        message.labelName = readString(bb, readVarint32(bb));
        break;
      }

      // optional string labelText = 3;
      case 3: {
        message.labelText = readString(bb, readVarint32(bb));
        break;
      }

      // optional string labelIcon = 4;
      case 4: {
        message.labelIcon = readString(bb, readVarint32(bb));
        break;
      }

      // optional string typeName = 5;
      case 5: {
        message.typeName = readString(bb, readVarint32(bb));
        break;
      }

      // optional string showText = 6;
      case 6: {
        message.showText = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool selected = 7;
      case 7: {
        message.selected = !!readByte(bb);
        break;
      }

      // optional int64 showOrder = 8;
      case 8: {
        message.showOrder = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RoomIntroAppointmentInfo {
  enabled?: boolean;
  appointmentId?: string;
  scheduledTimeText?: string;
  scheduledTime?: number;
  scheduledDate?: number;
  nextLiveStartTime?: string;
  scheduledWeekdays?: number[];
  content?: string;
}

export function encodeRoomIntroAppointmentInfo(message: RoomIntroAppointmentInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomIntroAppointmentInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeRoomIntroAppointmentInfo(message: RoomIntroAppointmentInfo, bb: ByteBuffer): void {
  // optional bool enabled = 1;
  let $enabled = message.enabled;
  if ($enabled !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $enabled ? 1 : 0);
  }

  // optional string appointmentId = 2;
  let $appointmentId = message.appointmentId;
  if ($appointmentId !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $appointmentId);
  }

  // optional string scheduledTimeText = 3;
  let $scheduledTimeText = message.scheduledTimeText;
  if ($scheduledTimeText !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $scheduledTimeText);
  }

  // optional int32 scheduledTime = 4;
  let $scheduledTime = message.scheduledTime;
  if ($scheduledTime !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($scheduledTime));
  }

  // optional int32 scheduledDate = 5;
  let $scheduledDate = message.scheduledDate;
  if ($scheduledDate !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($scheduledDate));
  }

  // optional int64 nextLiveStartTime = 6;
  let $nextLiveStartTime = message.nextLiveStartTime;
  if ($nextLiveStartTime !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $nextLiveStartTime);
  }

  // repeated int32 scheduledWeekdays = 7;
  let array$scheduledWeekdays = message.scheduledWeekdays;
  if (array$scheduledWeekdays !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$scheduledWeekdays) {
      writeVarint64(packed, intToLong(value));
    }
    writeVarint32(bb, 58);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // optional string content = 8;
  let $content = message.content;
  if ($content !== undefined) {
    writeVarint32(bb, 66);
    writeString(bb, $content);
  }
}

export function decodeRoomIntroAppointmentInfo(binary: Uint8Array): RoomIntroAppointmentInfo {
  return _decodeRoomIntroAppointmentInfo(wrapByteBuffer(binary));
}

export function _decodeRoomIntroAppointmentInfo(bb: ByteBuffer): RoomIntroAppointmentInfo {
  let message: RoomIntroAppointmentInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bool enabled = 1;
      case 1: {
        message.enabled = !!readByte(bb);
        break;
      }

      // optional string appointmentId = 2;
      case 2: {
        message.appointmentId = readString(bb, readVarint32(bb));
        break;
      }

      // optional string scheduledTimeText = 3;
      case 3: {
        message.scheduledTimeText = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 scheduledTime = 4;
      case 4: {
        message.scheduledTime = readVarint32(bb);
        break;
      }

      // optional int32 scheduledDate = 5;
      case 5: {
        message.scheduledDate = readVarint32(bb);
        break;
      }

      // optional int64 nextLiveStartTime = 6;
      case 6: {
        message.nextLiveStartTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // repeated int32 scheduledWeekdays = 7;
      case 7: {
        let values = message.scheduledWeekdays || (message.scheduledWeekdays = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint32(bb));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint32(bb));
        }
        break;
      }

      // optional string content = 8;
      case 8: {
        message.content = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface CombinedText {
  displayItems?: DisplayItem[];
  schemaInfo?: SchemaInfo;
  comboInfo?: ComboInfo;
}

export function encodeCombinedText(message: CombinedText): Uint8Array {
  let bb = popByteBuffer();
  _encodeCombinedText(message, bb);
  return toUint8Array(bb);
}

export function _encodeCombinedText(message: CombinedText, bb: ByteBuffer): void {
  // repeated DisplayItem displayItems = 1;
  let array$displayItems = message.displayItems;
  if (array$displayItems !== undefined) {
    for (let value of array$displayItems) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeDisplayItem(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional SchemaInfo schemaInfo = 10;
  let $schemaInfo = message.schemaInfo;
  if ($schemaInfo !== undefined) {
    writeVarint32(bb, 82);
    let nested = popByteBuffer();
    _encodeSchemaInfo($schemaInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional ComboInfo comboInfo = 11;
  let $comboInfo = message.comboInfo;
  if ($comboInfo !== undefined) {
    writeVarint32(bb, 90);
    let nested = popByteBuffer();
    _encodeComboInfo($comboInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeCombinedText(binary: Uint8Array): CombinedText {
  return _decodeCombinedText(wrapByteBuffer(binary));
}

export function _decodeCombinedText(bb: ByteBuffer): CombinedText {
  let message: CombinedText = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated DisplayItem displayItems = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.displayItems || (message.displayItems = []);
        values.push(_decodeDisplayItem(bb));
        bb.limit = limit;
        break;
      }

      // optional SchemaInfo schemaInfo = 10;
      case 10: {
        let limit = pushTemporaryLength(bb);
        message.schemaInfo = _decodeSchemaInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional ComboInfo comboInfo = 11;
      case 11: {
        let limit = pushTemporaryLength(bb);
        message.comboInfo = _decodeComboInfo(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SchemaInfo {
  schemaUrl?: string;
}

export function encodeSchemaInfo(message: SchemaInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeSchemaInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeSchemaInfo(message: SchemaInfo, bb: ByteBuffer): void {
  // optional string schemaUrl = 1;
  let $schemaUrl = message.schemaUrl;
  if ($schemaUrl !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $schemaUrl);
  }
}

export function decodeSchemaInfo(binary: Uint8Array): SchemaInfo {
  return _decodeSchemaInfo(wrapByteBuffer(binary));
}

export function _decodeSchemaInfo(bb: ByteBuffer): SchemaInfo {
  let message: SchemaInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string schemaUrl = 1;
      case 1: {
        message.schemaUrl = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface ComboInfo {
  comboSeq?: string;
  comboOrder?: string;
}

export function encodeComboInfo(message: ComboInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeComboInfo(message, bb);
  return toUint8Array(bb);
}

export function _encodeComboInfo(message: ComboInfo, bb: ByteBuffer): void {
  // optional int64 comboSeq = 1;
  let $comboSeq = message.comboSeq;
  if ($comboSeq !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $comboSeq);
  }

  // optional int64 comboOrder = 2;
  let $comboOrder = message.comboOrder;
  if ($comboOrder !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $comboOrder);
  }
}

export function decodeComboInfo(binary: Uint8Array): ComboInfo {
  return _decodeComboInfo(wrapByteBuffer(binary));
}

export function _decodeComboInfo(bb: ByteBuffer): ComboInfo {
  let message: ComboInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 comboSeq = 1;
      case 1: {
        message.comboSeq = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 comboOrder = 2;
      case 2: {
        message.comboOrder = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DisplayItem {
  displayItemType?: number;
  comboFresh?: boolean;
  schemaInfo?: SchemaInfo;
  imagesItem?: ImagesItem;
  textItem?: TextItem;
  format?: DisplayItemFormat;
}

export function encodeDisplayItem(message: DisplayItem): Uint8Array {
  let bb = popByteBuffer();
  _encodeDisplayItem(message, bb);
  return toUint8Array(bb);
}

export function _encodeDisplayItem(message: DisplayItem, bb: ByteBuffer): void {
  // optional int32 displayItemType = 1;
  let $displayItemType = message.displayItemType;
  if ($displayItemType !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($displayItemType));
  }

  // optional bool comboFresh = 20;
  let $comboFresh = message.comboFresh;
  if ($comboFresh !== undefined) {
    writeVarint32(bb, 160);
    writeByte(bb, $comboFresh ? 1 : 0);
  }

  // optional SchemaInfo schemaInfo = 21;
  let $schemaInfo = message.schemaInfo;
  if ($schemaInfo !== undefined) {
    writeVarint32(bb, 170);
    let nested = popByteBuffer();
    _encodeSchemaInfo($schemaInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional ImagesItem imagesItem = 50;
  let $imagesItem = message.imagesItem;
  if ($imagesItem !== undefined) {
    writeVarint32(bb, 402);
    let nested = popByteBuffer();
    _encodeImagesItem($imagesItem, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional TextItem textItem = 51;
  let $textItem = message.textItem;
  if ($textItem !== undefined) {
    writeVarint32(bb, 410);
    let nested = popByteBuffer();
    _encodeTextItem($textItem, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional DisplayItemFormat format = 100;
  let $format = message.format;
  if ($format !== undefined) {
    writeVarint32(bb, 802);
    let nested = popByteBuffer();
    _encodeDisplayItemFormat($format, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeDisplayItem(binary: Uint8Array): DisplayItem {
  return _decodeDisplayItem(wrapByteBuffer(binary));
}

export function _decodeDisplayItem(bb: ByteBuffer): DisplayItem {
  let message: DisplayItem = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 displayItemType = 1;
      case 1: {
        message.displayItemType = readVarint32(bb);
        break;
      }

      // optional bool comboFresh = 20;
      case 20: {
        message.comboFresh = !!readByte(bb);
        break;
      }

      // optional SchemaInfo schemaInfo = 21;
      case 21: {
        let limit = pushTemporaryLength(bb);
        message.schemaInfo = _decodeSchemaInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional ImagesItem imagesItem = 50;
      case 50: {
        let limit = pushTemporaryLength(bb);
        message.imagesItem = _decodeImagesItem(bb);
        bb.limit = limit;
        break;
      }

      // optional TextItem textItem = 51;
      case 51: {
        let limit = pushTemporaryLength(bb);
        message.textItem = _decodeTextItem(bb);
        bb.limit = limit;
        break;
      }

      // optional DisplayItemFormat format = 100;
      case 100: {
        let limit = pushTemporaryLength(bb);
        message.format = _decodeDisplayItemFormat(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface ImagesItem {
  images?: Image[];
  displayStyle?: number;
}

export function encodeImagesItem(message: ImagesItem): Uint8Array {
  let bb = popByteBuffer();
  _encodeImagesItem(message, bb);
  return toUint8Array(bb);
}

export function _encodeImagesItem(message: ImagesItem, bb: ByteBuffer): void {
  // repeated Image images = 1;
  let array$images = message.images;
  if (array$images !== undefined) {
    for (let value of array$images) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeImage(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional int32 displayStyle = 20;
  let $displayStyle = message.displayStyle;
  if ($displayStyle !== undefined) {
    writeVarint32(bb, 160);
    writeVarint64(bb, intToLong($displayStyle));
  }
}

export function decodeImagesItem(binary: Uint8Array): ImagesItem {
  return _decodeImagesItem(wrapByteBuffer(binary));
}

export function _decodeImagesItem(bb: ByteBuffer): ImagesItem {
  let message: ImagesItem = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated Image images = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.images || (message.images = []);
        values.push(_decodeImage(bb));
        bb.limit = limit;
        break;
      }

      // optional int32 displayStyle = 20;
      case 20: {
        message.displayStyle = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface TextItem {
  text?: Text;
}

export function encodeTextItem(message: TextItem): Uint8Array {
  let bb = popByteBuffer();
  _encodeTextItem(message, bb);
  return toUint8Array(bb);
}

export function _encodeTextItem(message: TextItem, bb: ByteBuffer): void {
  // optional Text text = 1;
  let $text = message.text;
  if ($text !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeText($text, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeTextItem(binary: Uint8Array): TextItem {
  return _decodeTextItem(wrapByteBuffer(binary));
}

export function _decodeTextItem(bb: ByteBuffer): TextItem {
  let message: TextItem = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Text text = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.text = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DisplayItemFormat {
  enableLeftSpace?: boolean;
  leftSpace?: string;
}

export function encodeDisplayItemFormat(message: DisplayItemFormat): Uint8Array {
  let bb = popByteBuffer();
  _encodeDisplayItemFormat(message, bb);
  return toUint8Array(bb);
}

export function _encodeDisplayItemFormat(message: DisplayItemFormat, bb: ByteBuffer): void {
  // optional bool enableLeftSpace = 1;
  let $enableLeftSpace = message.enableLeftSpace;
  if ($enableLeftSpace !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $enableLeftSpace ? 1 : 0);
  }

  // optional int64 leftSpace = 2;
  let $leftSpace = message.leftSpace;
  if ($leftSpace !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $leftSpace);
  }
}

export function decodeDisplayItemFormat(binary: Uint8Array): DisplayItemFormat {
  return _decodeDisplayItemFormat(wrapByteBuffer(binary));
}

export function _decodeDisplayItemFormat(bb: ByteBuffer): DisplayItemFormat {
  let message: DisplayItemFormat = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bool enableLeftSpace = 1;
      case 1: {
        message.enableLeftSpace = !!readByte(bb);
        break;
      }

      // optional int64 leftSpace = 2;
      case 2: {
        message.leftSpace = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Quiz {
  quizId?: string;
  title?: string;
  options?: string;
  quizStatus?: number;
  countdownTime?: string;
  winOption?: string;
  betOption?: string;
  gain?: string;
  templateId?: string;
  absoluteEndTime?: string;
}

export function encodeQuiz(message: Quiz): Uint8Array {
  let bb = popByteBuffer();
  _encodeQuiz(message, bb);
  return toUint8Array(bb);
}

export function _encodeQuiz(message: Quiz, bb: ByteBuffer): void {
  // optional string quizId = 1;
  let $quizId = message.quizId;
  if ($quizId !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $quizId);
  }

  // optional string title = 2;
  let $title = message.title;
  if ($title !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $title);
  }

  // optional string options = 3;
  let $options = message.options;
  if ($options !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $options);
  }

  // optional int32 quizStatus = 4;
  let $quizStatus = message.quizStatus;
  if ($quizStatus !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($quizStatus));
  }

  // optional int64 countdownTime = 5;
  let $countdownTime = message.countdownTime;
  if ($countdownTime !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $countdownTime);
  }

  // optional int64 winOption = 6;
  let $winOption = message.winOption;
  if ($winOption !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $winOption);
  }

  // optional int64 betOption = 7;
  let $betOption = message.betOption;
  if ($betOption !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $betOption);
  }

  // optional string gain = 8;
  let $gain = message.gain;
  if ($gain !== undefined) {
    writeVarint32(bb, 66);
    writeString(bb, $gain);
  }

  // optional string templateId = 9;
  let $templateId = message.templateId;
  if ($templateId !== undefined) {
    writeVarint32(bb, 74);
    writeString(bb, $templateId);
  }

  // optional int64 absoluteEndTime = 10;
  let $absoluteEndTime = message.absoluteEndTime;
  if ($absoluteEndTime !== undefined) {
    writeVarint32(bb, 80);
    writeVarint64(bb, $absoluteEndTime);
  }
}

export function decodeQuiz(binary: Uint8Array): Quiz {
  return _decodeQuiz(wrapByteBuffer(binary));
}

export function _decodeQuiz(bb: ByteBuffer): Quiz {
  let message: Quiz = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string quizId = 1;
      case 1: {
        message.quizId = readString(bb, readVarint32(bb));
        break;
      }

      // optional string title = 2;
      case 2: {
        message.title = readString(bb, readVarint32(bb));
        break;
      }

      // optional string options = 3;
      case 3: {
        message.options = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 quizStatus = 4;
      case 4: {
        message.quizStatus = readVarint32(bb);
        break;
      }

      // optional int64 countdownTime = 5;
      case 5: {
        message.countdownTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 winOption = 6;
      case 6: {
        message.winOption = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 betOption = 7;
      case 7: {
        message.betOption = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string gain = 8;
      case 8: {
        message.gain = readString(bb, readVarint32(bb));
        break;
      }

      // optional string templateId = 9;
      case 9: {
        message.templateId = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 absoluteEndTime = 10;
      case 10: {
        message.absoluteEndTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

