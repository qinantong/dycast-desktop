import { Long } from '../../Long';
import {
  popByteBuffer, pushByteBuffer, wrapByteBuffer, toUint8Array,
  writeVarint32, writeVarint64, writeString, writeBytes, writeByteBuffer, writeByte,
  readVarint32, readVarint64, readString, readBytes, readByte, readFloat, readDouble,
  writeFloat, writeDouble, longToString, stringToLong, intToLong,
  pushTemporaryLength, skipUnknownField, isAtEnd,
} from '../shared';
import type { ByteBuffer } from '../shared';
import { _decodeAnchorGiftData, _decodeAssetEffectMixInfo, _decodeCommon, _decodeExtraEffect, _decodeGiftIMPriority, _decodeGiftStruct, _decodeGiftTrayInfo, _decodeImage, _decodePublicAreaCommon, _decodeRoomHotInfo, _decodeSendTogether, _decodeSeriesPlayGift, _decodeText, _decodeUser, _encodeAnchorGiftData, _encodeAssetEffectMixInfo, _encodeCommon, _encodeExtraEffect, _encodeGiftIMPriority, _encodeGiftStruct, _encodeGiftTrayInfo, _encodeImage, _encodePublicAreaCommon, _encodeRoomHotInfo, _encodeSendTogether, _encodeSeriesPlayGift, _encodeText, _encodeUser } from '../base';
import type { AnchorGiftData, AssetEffectMixInfo, Common, ExtraEffect, GiftIMPriority, GiftStruct, GiftTrayInfo, Image, PublicAreaCommon, RoomHotInfo, SendTogether, SeriesPlayGift, Text, User } from '../base';

export interface GiftMessage {
  common?: Common;
  giftId?: string;
  fanTicketCount?: string;
  groupCount?: string;
  repeatCount?: string;
  comboCount?: string;
  user?: User;
  toUser?: User;
  repeatEnd?: number;
  textEffect?: GiftMessage_TextEffect;
  groupId?: string;
  incomeTaskgifts?: string;
  roomFanTicketCount?: string;
  priority?: GiftIMPriority;
  gift?: GiftStruct;
  logId?: string;
  sendType?: string;
  publicAreaCommon?: PublicAreaCommon;
  trayDisplayText?: Text;
  bannedDisplayEffects?: string;
  trayInfo?: GiftTrayInfo;
  assetEffectMixInfo?: AssetEffectMixInfo;
  displayForSelf?: boolean;
  interactGiftInfo?: string;
  diyItemInfo?: string;
  minAssetSet?: string;
  totalCount?: string;
  clientGiftSource?: number;
  anchorGift?: AnchorGiftData;
  toUserIds?: string;
  sendTime?: string;
  forceDisplayEffects?: string;
  traceId?: string;
  effectDisplayTs?: string;
  sendTogether?: SendTogether;
  extraEffect?: ExtraEffect;
  roomHotInfo?: RoomHotInfo;
  GiftPlayParam?: string;
  multiSendEffectLevel?: number;
  seriesGiftData?: SeriesPlayGift[];
  useRoomMessage?: boolean;
  count?: string;
  toOpenids?: string;
}

export function encodeGiftMessage(message: GiftMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeGiftMessage(message: GiftMessage, bb: ByteBuffer): void {
  // optional Common common = 1;
  let $common = message.common;
  if ($common !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeCommon($common, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 giftId = 2;
  let $giftId = message.giftId;
  if ($giftId !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $giftId);
  }

  // optional int64 fanTicketCount = 3;
  let $fanTicketCount = message.fanTicketCount;
  if ($fanTicketCount !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $fanTicketCount);
  }

  // optional int64 groupCount = 4;
  let $groupCount = message.groupCount;
  if ($groupCount !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $groupCount);
  }

  // optional int64 repeatCount = 5;
  let $repeatCount = message.repeatCount;
  if ($repeatCount !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $repeatCount);
  }

  // optional int64 comboCount = 6;
  let $comboCount = message.comboCount;
  if ($comboCount !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $comboCount);
  }

  // optional User user = 7;
  let $user = message.user;
  if ($user !== undefined) {
    writeVarint32(bb, 58);
    let nested = popByteBuffer();
    _encodeUser($user, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional User toUser = 8;
  let $toUser = message.toUser;
  if ($toUser !== undefined) {
    writeVarint32(bb, 66);
    let nested = popByteBuffer();
    _encodeUser($toUser, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 repeatEnd = 9;
  let $repeatEnd = message.repeatEnd;
  if ($repeatEnd !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, intToLong($repeatEnd));
  }

  // optional GiftMessage_TextEffect textEffect = 10;
  let $textEffect = message.textEffect;
  if ($textEffect !== undefined) {
    writeVarint32(bb, 82);
    let nested = popByteBuffer();
    _encodeGiftMessage_TextEffect($textEffect, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 groupId = 11;
  let $groupId = message.groupId;
  if ($groupId !== undefined) {
    writeVarint32(bb, 88);
    writeVarint64(bb, $groupId);
  }

  // optional int64 incomeTaskgifts = 12;
  let $incomeTaskgifts = message.incomeTaskgifts;
  if ($incomeTaskgifts !== undefined) {
    writeVarint32(bb, 96);
    writeVarint64(bb, $incomeTaskgifts);
  }

  // optional int64 roomFanTicketCount = 13;
  let $roomFanTicketCount = message.roomFanTicketCount;
  if ($roomFanTicketCount !== undefined) {
    writeVarint32(bb, 104);
    writeVarint64(bb, $roomFanTicketCount);
  }

  // optional GiftIMPriority priority = 14;
  let $priority = message.priority;
  if ($priority !== undefined) {
    writeVarint32(bb, 114);
    let nested = popByteBuffer();
    _encodeGiftIMPriority($priority, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional GiftStruct gift = 15;
  let $gift = message.gift;
  if ($gift !== undefined) {
    writeVarint32(bb, 122);
    let nested = popByteBuffer();
    _encodeGiftStruct($gift, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string logId = 16;
  let $logId = message.logId;
  if ($logId !== undefined) {
    writeVarint32(bb, 130);
    writeString(bb, $logId);
  }

  // optional int64 sendType = 17;
  let $sendType = message.sendType;
  if ($sendType !== undefined) {
    writeVarint32(bb, 136);
    writeVarint64(bb, $sendType);
  }

  // optional PublicAreaCommon publicAreaCommon = 18;
  let $publicAreaCommon = message.publicAreaCommon;
  if ($publicAreaCommon !== undefined) {
    writeVarint32(bb, 146);
    let nested = popByteBuffer();
    _encodePublicAreaCommon($publicAreaCommon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Text trayDisplayText = 19;
  let $trayDisplayText = message.trayDisplayText;
  if ($trayDisplayText !== undefined) {
    writeVarint32(bb, 154);
    let nested = popByteBuffer();
    _encodeText($trayDisplayText, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 bannedDisplayEffects = 20;
  let $bannedDisplayEffects = message.bannedDisplayEffects;
  if ($bannedDisplayEffects !== undefined) {
    writeVarint32(bb, 160);
    writeVarint64(bb, $bannedDisplayEffects);
  }

  // optional GiftTrayInfo trayInfo = 21;
  let $trayInfo = message.trayInfo;
  if ($trayInfo !== undefined) {
    writeVarint32(bb, 170);
    let nested = popByteBuffer();
    _encodeGiftTrayInfo($trayInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional AssetEffectMixInfo assetEffectMixInfo = 24;
  let $assetEffectMixInfo = message.assetEffectMixInfo;
  if ($assetEffectMixInfo !== undefined) {
    writeVarint32(bb, 194);
    let nested = popByteBuffer();
    _encodeAssetEffectMixInfo($assetEffectMixInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool displayForSelf = 25;
  let $displayForSelf = message.displayForSelf;
  if ($displayForSelf !== undefined) {
    writeVarint32(bb, 200);
    writeByte(bb, $displayForSelf ? 1 : 0);
  }

  // optional string interactGiftInfo = 26;
  let $interactGiftInfo = message.interactGiftInfo;
  if ($interactGiftInfo !== undefined) {
    writeVarint32(bb, 210);
    writeString(bb, $interactGiftInfo);
  }

  // optional string diyItemInfo = 27;
  let $diyItemInfo = message.diyItemInfo;
  if ($diyItemInfo !== undefined) {
    writeVarint32(bb, 218);
    writeString(bb, $diyItemInfo);
  }

  // optional int64 minAssetSet = 28;
  let $minAssetSet = message.minAssetSet;
  if ($minAssetSet !== undefined) {
    writeVarint32(bb, 224);
    writeVarint64(bb, $minAssetSet);
  }

  // optional int64 totalCount = 29;
  let $totalCount = message.totalCount;
  if ($totalCount !== undefined) {
    writeVarint32(bb, 232);
    writeVarint64(bb, $totalCount);
  }

  // optional int32 clientGiftSource = 30;
  let $clientGiftSource = message.clientGiftSource;
  if ($clientGiftSource !== undefined) {
    writeVarint32(bb, 240);
    writeVarint64(bb, intToLong($clientGiftSource));
  }

  // optional AnchorGiftData anchorGift = 31;
  let $anchorGift = message.anchorGift;
  if ($anchorGift !== undefined) {
    writeVarint32(bb, 250);
    let nested = popByteBuffer();
    _encodeAnchorGiftData($anchorGift, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 toUserIds = 32;
  let $toUserIds = message.toUserIds;
  if ($toUserIds !== undefined) {
    writeVarint32(bb, 256);
    writeVarint64(bb, $toUserIds);
  }

  // optional int64 sendTime = 33;
  let $sendTime = message.sendTime;
  if ($sendTime !== undefined) {
    writeVarint32(bb, 264);
    writeVarint64(bb, $sendTime);
  }

  // optional int64 forceDisplayEffects = 34;
  let $forceDisplayEffects = message.forceDisplayEffects;
  if ($forceDisplayEffects !== undefined) {
    writeVarint32(bb, 272);
    writeVarint64(bb, $forceDisplayEffects);
  }

  // optional string traceId = 35;
  let $traceId = message.traceId;
  if ($traceId !== undefined) {
    writeVarint32(bb, 282);
    writeString(bb, $traceId);
  }

  // optional int64 effectDisplayTs = 36;
  let $effectDisplayTs = message.effectDisplayTs;
  if ($effectDisplayTs !== undefined) {
    writeVarint32(bb, 288);
    writeVarint64(bb, $effectDisplayTs);
  }

  // optional SendTogether sendTogether = 37;
  let $sendTogether = message.sendTogether;
  if ($sendTogether !== undefined) {
    writeVarint32(bb, 298);
    let nested = popByteBuffer();
    _encodeSendTogether($sendTogether, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional ExtraEffect extraEffect = 38;
  let $extraEffect = message.extraEffect;
  if ($extraEffect !== undefined) {
    writeVarint32(bb, 306);
    let nested = popByteBuffer();
    _encodeExtraEffect($extraEffect, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional RoomHotInfo roomHotInfo = 39;
  let $roomHotInfo = message.roomHotInfo;
  if ($roomHotInfo !== undefined) {
    writeVarint32(bb, 314);
    let nested = popByteBuffer();
    _encodeRoomHotInfo($roomHotInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string GiftPlayParam = 40;
  let $GiftPlayParam = message.GiftPlayParam;
  if ($GiftPlayParam !== undefined) {
    writeVarint32(bb, 322);
    writeString(bb, $GiftPlayParam);
  }

  // optional int32 multiSendEffectLevel = 41;
  let $multiSendEffectLevel = message.multiSendEffectLevel;
  if ($multiSendEffectLevel !== undefined) {
    writeVarint32(bb, 328);
    writeVarint64(bb, intToLong($multiSendEffectLevel));
  }

  // repeated SeriesPlayGift seriesGiftData = 42;
  let array$seriesGiftData = message.seriesGiftData;
  if (array$seriesGiftData !== undefined) {
    for (let value of array$seriesGiftData) {
      writeVarint32(bb, 338);
      let nested = popByteBuffer();
      _encodeSeriesPlayGift(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional bool useRoomMessage = 43;
  let $useRoomMessage = message.useRoomMessage;
  if ($useRoomMessage !== undefined) {
    writeVarint32(bb, 344);
    writeByte(bb, $useRoomMessage ? 1 : 0);
  }

  // optional int64 count = 44;
  let $count = message.count;
  if ($count !== undefined) {
    writeVarint32(bb, 352);
    writeVarint64(bb, $count);
  }

  // optional string toOpenids = 5000;
  let $toOpenids = message.toOpenids;
  if ($toOpenids !== undefined) {
    writeVarint32(bb, 40002);
    writeString(bb, $toOpenids);
  }
}

export function decodeGiftMessage(binary: Uint8Array): GiftMessage {
  return _decodeGiftMessage(wrapByteBuffer(binary));
}

function _decodeGiftMessage(bb: ByteBuffer): GiftMessage {
  let message: GiftMessage = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Common common = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.common = _decodeCommon(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 giftId = 2;
      case 2: {
        message.giftId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 fanTicketCount = 3;
      case 3: {
        message.fanTicketCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 groupCount = 4;
      case 4: {
        message.groupCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 repeatCount = 5;
      case 5: {
        message.repeatCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 comboCount = 6;
      case 6: {
        message.comboCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional User user = 7;
      case 7: {
        let limit = pushTemporaryLength(bb);
        message.user = _decodeUser(bb);
        bb.limit = limit;
        break;
      }

      // optional User toUser = 8;
      case 8: {
        let limit = pushTemporaryLength(bb);
        message.toUser = _decodeUser(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 repeatEnd = 9;
      case 9: {
        message.repeatEnd = readVarint32(bb);
        break;
      }

      // optional GiftMessage_TextEffect textEffect = 10;
      case 10: {
        let limit = pushTemporaryLength(bb);
        message.textEffect = _decodeGiftMessage_TextEffect(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 groupId = 11;
      case 11: {
        message.groupId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 incomeTaskgifts = 12;
      case 12: {
        message.incomeTaskgifts = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 roomFanTicketCount = 13;
      case 13: {
        message.roomFanTicketCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional GiftIMPriority priority = 14;
      case 14: {
        let limit = pushTemporaryLength(bb);
        message.priority = _decodeGiftIMPriority(bb);
        bb.limit = limit;
        break;
      }

      // optional GiftStruct gift = 15;
      case 15: {
        let limit = pushTemporaryLength(bb);
        message.gift = _decodeGiftStruct(bb);
        bb.limit = limit;
        break;
      }

      // optional string logId = 16;
      case 16: {
        message.logId = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 sendType = 17;
      case 17: {
        message.sendType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional PublicAreaCommon publicAreaCommon = 18;
      case 18: {
        let limit = pushTemporaryLength(bb);
        message.publicAreaCommon = _decodePublicAreaCommon(bb);
        bb.limit = limit;
        break;
      }

      // optional Text trayDisplayText = 19;
      case 19: {
        let limit = pushTemporaryLength(bb);
        message.trayDisplayText = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 bannedDisplayEffects = 20;
      case 20: {
        message.bannedDisplayEffects = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional GiftTrayInfo trayInfo = 21;
      case 21: {
        let limit = pushTemporaryLength(bb);
        message.trayInfo = _decodeGiftTrayInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional AssetEffectMixInfo assetEffectMixInfo = 24;
      case 24: {
        let limit = pushTemporaryLength(bb);
        message.assetEffectMixInfo = _decodeAssetEffectMixInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional bool displayForSelf = 25;
      case 25: {
        message.displayForSelf = !!readByte(bb);
        break;
      }

      // optional string interactGiftInfo = 26;
      case 26: {
        message.interactGiftInfo = readString(bb, readVarint32(bb));
        break;
      }

      // optional string diyItemInfo = 27;
      case 27: {
        message.diyItemInfo = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 minAssetSet = 28;
      case 28: {
        message.minAssetSet = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 totalCount = 29;
      case 29: {
        message.totalCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 clientGiftSource = 30;
      case 30: {
        message.clientGiftSource = readVarint32(bb);
        break;
      }

      // optional AnchorGiftData anchorGift = 31;
      case 31: {
        let limit = pushTemporaryLength(bb);
        message.anchorGift = _decodeAnchorGiftData(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 toUserIds = 32;
      case 32: {
        message.toUserIds = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 sendTime = 33;
      case 33: {
        message.sendTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 forceDisplayEffects = 34;
      case 34: {
        message.forceDisplayEffects = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string traceId = 35;
      case 35: {
        message.traceId = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 effectDisplayTs = 36;
      case 36: {
        message.effectDisplayTs = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional SendTogether sendTogether = 37;
      case 37: {
        let limit = pushTemporaryLength(bb);
        message.sendTogether = _decodeSendTogether(bb);
        bb.limit = limit;
        break;
      }

      // optional ExtraEffect extraEffect = 38;
      case 38: {
        let limit = pushTemporaryLength(bb);
        message.extraEffect = _decodeExtraEffect(bb);
        bb.limit = limit;
        break;
      }

      // optional RoomHotInfo roomHotInfo = 39;
      case 39: {
        let limit = pushTemporaryLength(bb);
        message.roomHotInfo = _decodeRoomHotInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional string GiftPlayParam = 40;
      case 40: {
        message.GiftPlayParam = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 multiSendEffectLevel = 41;
      case 41: {
        message.multiSendEffectLevel = readVarint32(bb);
        break;
      }

      // repeated SeriesPlayGift seriesGiftData = 42;
      case 42: {
        let limit = pushTemporaryLength(bb);
        let values = message.seriesGiftData || (message.seriesGiftData = []);
        values.push(_decodeSeriesPlayGift(bb));
        bb.limit = limit;
        break;
      }

      // optional bool useRoomMessage = 43;
      case 43: {
        message.useRoomMessage = !!readByte(bb);
        break;
      }

      // optional int64 count = 44;
      case 44: {
        message.count = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string toOpenids = 5000;
      case 5000: {
        message.toOpenids = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftMessage_TextEffect {
  portrait?: GiftMessage_TextEffect_Detail;
  landscape?: GiftMessage_TextEffect_Detail;
}

export function encodeGiftMessage_TextEffect(message: GiftMessage_TextEffect): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftMessage_TextEffect(message, bb);
  return toUint8Array(bb);
}

function _encodeGiftMessage_TextEffect(message: GiftMessage_TextEffect, bb: ByteBuffer): void {
  // optional GiftMessage_TextEffect_Detail portrait = 1;
  let $portrait = message.portrait;
  if ($portrait !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeGiftMessage_TextEffect_Detail($portrait, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional GiftMessage_TextEffect_Detail landscape = 2;
  let $landscape = message.landscape;
  if ($landscape !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeGiftMessage_TextEffect_Detail($landscape, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeGiftMessage_TextEffect(binary: Uint8Array): GiftMessage_TextEffect {
  return _decodeGiftMessage_TextEffect(wrapByteBuffer(binary));
}

function _decodeGiftMessage_TextEffect(bb: ByteBuffer): GiftMessage_TextEffect {
  let message: GiftMessage_TextEffect = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional GiftMessage_TextEffect_Detail portrait = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.portrait = _decodeGiftMessage_TextEffect_Detail(bb);
        bb.limit = limit;
        break;
      }

      // optional GiftMessage_TextEffect_Detail landscape = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.landscape = _decodeGiftMessage_TextEffect_Detail(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftMessage_TextEffect_Detail {
  text?: Text;
  textFontSize?: number;
  background?: Image;
  start?: number;
  duration?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  shadowDx?: number;
  shadowDy?: number;
  shadowRadius?: number;
  shadowColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

export function encodeGiftMessage_TextEffect_Detail(message: GiftMessage_TextEffect_Detail): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftMessage_TextEffect_Detail(message, bb);
  return toUint8Array(bb);
}

function _encodeGiftMessage_TextEffect_Detail(message: GiftMessage_TextEffect_Detail, bb: ByteBuffer): void {
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

  // optional int32 textFontSize = 2;
  let $textFontSize = message.textFontSize;
  if ($textFontSize !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($textFontSize));
  }

  // optional Image background = 3;
  let $background = message.background;
  if ($background !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeImage($background, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 start = 4;
  let $start = message.start;
  if ($start !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($start));
  }

  // optional int32 duration = 5;
  let $duration = message.duration;
  if ($duration !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($duration));
  }

  // optional int32 x = 6;
  let $x = message.x;
  if ($x !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, intToLong($x));
  }

  // optional int32 y = 7;
  let $y = message.y;
  if ($y !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, intToLong($y));
  }

  // optional int32 width = 8;
  let $width = message.width;
  if ($width !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, intToLong($width));
  }

  // optional int32 height = 9;
  let $height = message.height;
  if ($height !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, intToLong($height));
  }

  // optional int32 shadowDx = 10;
  let $shadowDx = message.shadowDx;
  if ($shadowDx !== undefined) {
    writeVarint32(bb, 80);
    writeVarint64(bb, intToLong($shadowDx));
  }

  // optional int32 shadowDy = 11;
  let $shadowDy = message.shadowDy;
  if ($shadowDy !== undefined) {
    writeVarint32(bb, 88);
    writeVarint64(bb, intToLong($shadowDy));
  }

  // optional int32 shadowRadius = 12;
  let $shadowRadius = message.shadowRadius;
  if ($shadowRadius !== undefined) {
    writeVarint32(bb, 96);
    writeVarint64(bb, intToLong($shadowRadius));
  }

  // optional string shadowColor = 13;
  let $shadowColor = message.shadowColor;
  if ($shadowColor !== undefined) {
    writeVarint32(bb, 106);
    writeString(bb, $shadowColor);
  }

  // optional string strokeColor = 14;
  let $strokeColor = message.strokeColor;
  if ($strokeColor !== undefined) {
    writeVarint32(bb, 114);
    writeString(bb, $strokeColor);
  }

  // optional int32 strokeWidth = 15;
  let $strokeWidth = message.strokeWidth;
  if ($strokeWidth !== undefined) {
    writeVarint32(bb, 120);
    writeVarint64(bb, intToLong($strokeWidth));
  }
}

export function decodeGiftMessage_TextEffect_Detail(binary: Uint8Array): GiftMessage_TextEffect_Detail {
  return _decodeGiftMessage_TextEffect_Detail(wrapByteBuffer(binary));
}

function _decodeGiftMessage_TextEffect_Detail(bb: ByteBuffer): GiftMessage_TextEffect_Detail {
  let message: GiftMessage_TextEffect_Detail = {} as any;

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

      // optional int32 textFontSize = 2;
      case 2: {
        message.textFontSize = readVarint32(bb);
        break;
      }

      // optional Image background = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.background = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 start = 4;
      case 4: {
        message.start = readVarint32(bb);
        break;
      }

      // optional int32 duration = 5;
      case 5: {
        message.duration = readVarint32(bb);
        break;
      }

      // optional int32 x = 6;
      case 6: {
        message.x = readVarint32(bb);
        break;
      }

      // optional int32 y = 7;
      case 7: {
        message.y = readVarint32(bb);
        break;
      }

      // optional int32 width = 8;
      case 8: {
        message.width = readVarint32(bb);
        break;
      }

      // optional int32 height = 9;
      case 9: {
        message.height = readVarint32(bb);
        break;
      }

      // optional int32 shadowDx = 10;
      case 10: {
        message.shadowDx = readVarint32(bb);
        break;
      }

      // optional int32 shadowDy = 11;
      case 11: {
        message.shadowDy = readVarint32(bb);
        break;
      }

      // optional int32 shadowRadius = 12;
      case 12: {
        message.shadowRadius = readVarint32(bb);
        break;
      }

      // optional string shadowColor = 13;
      case 13: {
        message.shadowColor = readString(bb, readVarint32(bb));
        break;
      }

      // optional string strokeColor = 14;
      case 14: {
        message.strokeColor = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 strokeWidth = 15;
      case 15: {
        message.strokeWidth = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

