import { Long } from '../../Long';
import {
  popByteBuffer, pushByteBuffer, wrapByteBuffer, toUint8Array,
  writeVarint32, writeVarint64, writeString, writeBytes, writeByteBuffer, writeByte,
  readVarint32, readVarint64, readString, readBytes, readByte, readFloat, readDouble,
  writeFloat, writeDouble, longToString, stringToLong, intToLong,
  pushTemporaryLength, skipUnknownField, isAtEnd,
} from '../shared';
import type { ByteBuffer } from '../shared';
import { _decodeCommon, _decodeImage, _decodePublicAreaCommon, _decodeText, _decodeUser, _encodeCommon, _encodeImage, _encodePublicAreaCommon, _encodeText, _encodeUser } from '../base';
import type { Common, Image, PublicAreaCommon, Text, User } from '../base';

export interface MemberMessage {
  common?: Common;
  user?: User;
  memberCount?: string;
  operator?: User;
  isSetToAdmin?: boolean;
  isTopUser?: boolean;
  rankScore?: string;
  topUserNo?: string;
  enterType?: string;
  action?: string;
  actionDescription?: string;
  userId?: string;
  effectConfig?: MemberMessage_EffectConfig;
  popStr?: string;
  enterEffectConfig?: MemberMessage_EffectConfig;
  backgroundImage?: Image;
  backgroundImageV2?: Image;
  anchorDisplayText?: Text;
  publicAreaCommon?: PublicAreaCommon;
  userEnterTipType?: string;
  anchorEnterTipType?: string;
  picoEnterEffectConfig?: MemberMessage_PicoEffectConfig;
  userOpenId?: string;
}

export function encodeMemberMessage(message: MemberMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeMemberMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeMemberMessage(message: MemberMessage, bb: ByteBuffer): void {
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

  // optional User user = 2;
  let $user = message.user;
  if ($user !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeUser($user, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 memberCount = 3;
  let $memberCount = message.memberCount;
  if ($memberCount !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $memberCount);
  }

  // optional User operator = 4;
  let $operator = message.operator;
  if ($operator !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeUser($operator, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool isSetToAdmin = 5;
  let $isSetToAdmin = message.isSetToAdmin;
  if ($isSetToAdmin !== undefined) {
    writeVarint32(bb, 40);
    writeByte(bb, $isSetToAdmin ? 1 : 0);
  }

  // optional bool isTopUser = 6;
  let $isTopUser = message.isTopUser;
  if ($isTopUser !== undefined) {
    writeVarint32(bb, 48);
    writeByte(bb, $isTopUser ? 1 : 0);
  }

  // optional int64 rankScore = 7;
  let $rankScore = message.rankScore;
  if ($rankScore !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $rankScore);
  }

  // optional int64 topUserNo = 8;
  let $topUserNo = message.topUserNo;
  if ($topUserNo !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, $topUserNo);
  }

  // optional int64 enterType = 9;
  let $enterType = message.enterType;
  if ($enterType !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, $enterType);
  }

  // optional int64 action = 10;
  let $action = message.action;
  if ($action !== undefined) {
    writeVarint32(bb, 80);
    writeVarint64(bb, $action);
  }

  // optional string actionDescription = 11;
  let $actionDescription = message.actionDescription;
  if ($actionDescription !== undefined) {
    writeVarint32(bb, 90);
    writeString(bb, $actionDescription);
  }

  // optional int64 userId = 12;
  let $userId = message.userId;
  if ($userId !== undefined) {
    writeVarint32(bb, 96);
    writeVarint64(bb, $userId);
  }

  // optional MemberMessage_EffectConfig effectConfig = 13;
  let $effectConfig = message.effectConfig;
  if ($effectConfig !== undefined) {
    writeVarint32(bb, 106);
    let nested = popByteBuffer();
    _encodeMemberMessage_EffectConfig($effectConfig, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string popStr = 14;
  let $popStr = message.popStr;
  if ($popStr !== undefined) {
    writeVarint32(bb, 114);
    writeString(bb, $popStr);
  }

  // optional MemberMessage_EffectConfig enterEffectConfig = 15;
  let $enterEffectConfig = message.enterEffectConfig;
  if ($enterEffectConfig !== undefined) {
    writeVarint32(bb, 122);
    let nested = popByteBuffer();
    _encodeMemberMessage_EffectConfig($enterEffectConfig, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image backgroundImage = 16;
  let $backgroundImage = message.backgroundImage;
  if ($backgroundImage !== undefined) {
    writeVarint32(bb, 130);
    let nested = popByteBuffer();
    _encodeImage($backgroundImage, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image backgroundImageV2 = 17;
  let $backgroundImageV2 = message.backgroundImageV2;
  if ($backgroundImageV2 !== undefined) {
    writeVarint32(bb, 138);
    let nested = popByteBuffer();
    _encodeImage($backgroundImageV2, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Text anchorDisplayText = 18;
  let $anchorDisplayText = message.anchorDisplayText;
  if ($anchorDisplayText !== undefined) {
    writeVarint32(bb, 146);
    let nested = popByteBuffer();
    _encodeText($anchorDisplayText, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional PublicAreaCommon publicAreaCommon = 19;
  let $publicAreaCommon = message.publicAreaCommon;
  if ($publicAreaCommon !== undefined) {
    writeVarint32(bb, 154);
    let nested = popByteBuffer();
    _encodePublicAreaCommon($publicAreaCommon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 userEnterTipType = 20;
  let $userEnterTipType = message.userEnterTipType;
  if ($userEnterTipType !== undefined) {
    writeVarint32(bb, 160);
    writeVarint64(bb, $userEnterTipType);
  }

  // optional int64 anchorEnterTipType = 21;
  let $anchorEnterTipType = message.anchorEnterTipType;
  if ($anchorEnterTipType !== undefined) {
    writeVarint32(bb, 168);
    writeVarint64(bb, $anchorEnterTipType);
  }

  // optional MemberMessage_PicoEffectConfig picoEnterEffectConfig = 24;
  let $picoEnterEffectConfig = message.picoEnterEffectConfig;
  if ($picoEnterEffectConfig !== undefined) {
    writeVarint32(bb, 194);
    let nested = popByteBuffer();
    _encodeMemberMessage_PicoEffectConfig($picoEnterEffectConfig, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string userOpenId = 5000;
  let $userOpenId = message.userOpenId;
  if ($userOpenId !== undefined) {
    writeVarint32(bb, 40002);
    writeString(bb, $userOpenId);
  }
}

export function decodeMemberMessage(binary: Uint8Array): MemberMessage {
  return _decodeMemberMessage(wrapByteBuffer(binary));
}

function _decodeMemberMessage(bb: ByteBuffer): MemberMessage {
  let message: MemberMessage = {} as any;

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

      // optional User user = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.user = _decodeUser(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 memberCount = 3;
      case 3: {
        message.memberCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional User operator = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.operator = _decodeUser(bb);
        bb.limit = limit;
        break;
      }

      // optional bool isSetToAdmin = 5;
      case 5: {
        message.isSetToAdmin = !!readByte(bb);
        break;
      }

      // optional bool isTopUser = 6;
      case 6: {
        message.isTopUser = !!readByte(bb);
        break;
      }

      // optional int64 rankScore = 7;
      case 7: {
        message.rankScore = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 topUserNo = 8;
      case 8: {
        message.topUserNo = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 enterType = 9;
      case 9: {
        message.enterType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 action = 10;
      case 10: {
        message.action = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string actionDescription = 11;
      case 11: {
        message.actionDescription = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 userId = 12;
      case 12: {
        message.userId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional MemberMessage_EffectConfig effectConfig = 13;
      case 13: {
        let limit = pushTemporaryLength(bb);
        message.effectConfig = _decodeMemberMessage_EffectConfig(bb);
        bb.limit = limit;
        break;
      }

      // optional string popStr = 14;
      case 14: {
        message.popStr = readString(bb, readVarint32(bb));
        break;
      }

      // optional MemberMessage_EffectConfig enterEffectConfig = 15;
      case 15: {
        let limit = pushTemporaryLength(bb);
        message.enterEffectConfig = _decodeMemberMessage_EffectConfig(bb);
        bb.limit = limit;
        break;
      }

      // optional Image backgroundImage = 16;
      case 16: {
        let limit = pushTemporaryLength(bb);
        message.backgroundImage = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image backgroundImageV2 = 17;
      case 17: {
        let limit = pushTemporaryLength(bb);
        message.backgroundImageV2 = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Text anchorDisplayText = 18;
      case 18: {
        let limit = pushTemporaryLength(bb);
        message.anchorDisplayText = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional PublicAreaCommon publicAreaCommon = 19;
      case 19: {
        let limit = pushTemporaryLength(bb);
        message.publicAreaCommon = _decodePublicAreaCommon(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 userEnterTipType = 20;
      case 20: {
        message.userEnterTipType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 anchorEnterTipType = 21;
      case 21: {
        message.anchorEnterTipType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional MemberMessage_PicoEffectConfig picoEnterEffectConfig = 24;
      case 24: {
        let limit = pushTemporaryLength(bb);
        message.picoEnterEffectConfig = _decodeMemberMessage_PicoEffectConfig(bb);
        bb.limit = limit;
        break;
      }

      // optional string userOpenId = 5000;
      case 5000: {
        message.userOpenId = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface MemberMessage_EffectConfig {
  type?: string;
  icon?: Image;
  avatarPos?: string;
  text?: Text;
  textIcon?: Image;
  stayTime?: number;
  animAssetId?: string;
  badge?: Image;
  flexSettingArray?: string[];
  textIconOverlay?: Image;
  animatedBadge?: Image;
  hasSweepLight?: boolean;
  textFlexSettingArray?: string[];
  centerAnimAssetId?: string;
}

export function encodeMemberMessage_EffectConfig(message: MemberMessage_EffectConfig): Uint8Array {
  let bb = popByteBuffer();
  _encodeMemberMessage_EffectConfig(message, bb);
  return toUint8Array(bb);
}

function _encodeMemberMessage_EffectConfig(message: MemberMessage_EffectConfig, bb: ByteBuffer): void {
  // optional int64 type = 1;
  let $type = message.type;
  if ($type !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $type);
  }

  // optional Image icon = 2;
  let $icon = message.icon;
  if ($icon !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeImage($icon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 avatarPos = 3;
  let $avatarPos = message.avatarPos;
  if ($avatarPos !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $avatarPos);
  }

  // optional Text text = 4;
  let $text = message.text;
  if ($text !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeText($text, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image textIcon = 5;
  let $textIcon = message.textIcon;
  if ($textIcon !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeImage($textIcon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 stayTime = 6;
  let $stayTime = message.stayTime;
  if ($stayTime !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, intToLong($stayTime));
  }

  // optional int64 animAssetId = 7;
  let $animAssetId = message.animAssetId;
  if ($animAssetId !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $animAssetId);
  }

  // optional Image badge = 8;
  let $badge = message.badge;
  if ($badge !== undefined) {
    writeVarint32(bb, 66);
    let nested = popByteBuffer();
    _encodeImage($badge, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // repeated int64 flexSettingArray = 9;
  let array$flexSettingArray = message.flexSettingArray;
  if (array$flexSettingArray !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$flexSettingArray) {
      writeVarint64(packed, value);
    }
    writeVarint32(bb, 74);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // optional Image textIconOverlay = 10;
  let $textIconOverlay = message.textIconOverlay;
  if ($textIconOverlay !== undefined) {
    writeVarint32(bb, 82);
    let nested = popByteBuffer();
    _encodeImage($textIconOverlay, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image animatedBadge = 11;
  let $animatedBadge = message.animatedBadge;
  if ($animatedBadge !== undefined) {
    writeVarint32(bb, 90);
    let nested = popByteBuffer();
    _encodeImage($animatedBadge, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool hasSweepLight = 12;
  let $hasSweepLight = message.hasSweepLight;
  if ($hasSweepLight !== undefined) {
    writeVarint32(bb, 96);
    writeByte(bb, $hasSweepLight ? 1 : 0);
  }

  // repeated int64 textFlexSettingArray = 13;
  let array$textFlexSettingArray = message.textFlexSettingArray;
  if (array$textFlexSettingArray !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$textFlexSettingArray) {
      writeVarint64(packed, value);
    }
    writeVarint32(bb, 106);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // optional int64 centerAnimAssetId = 14;
  let $centerAnimAssetId = message.centerAnimAssetId;
  if ($centerAnimAssetId !== undefined) {
    writeVarint32(bb, 112);
    writeVarint64(bb, $centerAnimAssetId);
  }
}

export function decodeMemberMessage_EffectConfig(binary: Uint8Array): MemberMessage_EffectConfig {
  return _decodeMemberMessage_EffectConfig(wrapByteBuffer(binary));
}

function _decodeMemberMessage_EffectConfig(bb: ByteBuffer): MemberMessage_EffectConfig {
  let message: MemberMessage_EffectConfig = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 type = 1;
      case 1: {
        message.type = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Image icon = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.icon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 avatarPos = 3;
      case 3: {
        message.avatarPos = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Text text = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.text = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional Image textIcon = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.textIcon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 stayTime = 6;
      case 6: {
        message.stayTime = readVarint32(bb);
        break;
      }

      // optional int64 animAssetId = 7;
      case 7: {
        message.animAssetId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Image badge = 8;
      case 8: {
        let limit = pushTemporaryLength(bb);
        message.badge = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // repeated int64 flexSettingArray = 9;
      case 9: {
        let values = message.flexSettingArray || (message.flexSettingArray = []);
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

      // optional Image textIconOverlay = 10;
      case 10: {
        let limit = pushTemporaryLength(bb);
        message.textIconOverlay = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Image animatedBadge = 11;
      case 11: {
        let limit = pushTemporaryLength(bb);
        message.animatedBadge = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional bool hasSweepLight = 12;
      case 12: {
        message.hasSweepLight = !!readByte(bb);
        break;
      }

      // repeated int64 textFlexSettingArray = 13;
      case 13: {
        let values = message.textFlexSettingArray || (message.textFlexSettingArray = []);
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

      // optional int64 centerAnimAssetId = 14;
      case 14: {
        message.centerAnimAssetId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface MemberMessage_PicoEffectConfig {
  type?: string;
  icon?: Image;
  text?: Text;
  textIcon?: Image;
  stayTime?: number;
  badge?: Image;
  centerAnimAssetId?: string;
  dressId?: string;
}

export function encodeMemberMessage_PicoEffectConfig(message: MemberMessage_PicoEffectConfig): Uint8Array {
  let bb = popByteBuffer();
  _encodeMemberMessage_PicoEffectConfig(message, bb);
  return toUint8Array(bb);
}

function _encodeMemberMessage_PicoEffectConfig(message: MemberMessage_PicoEffectConfig, bb: ByteBuffer): void {
  // optional int64 type = 1;
  let $type = message.type;
  if ($type !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $type);
  }

  // optional Image icon = 2;
  let $icon = message.icon;
  if ($icon !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeImage($icon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Text text = 3;
  let $text = message.text;
  if ($text !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeText($text, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image textIcon = 4;
  let $textIcon = message.textIcon;
  if ($textIcon !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeImage($textIcon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 stayTime = 5;
  let $stayTime = message.stayTime;
  if ($stayTime !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($stayTime));
  }

  // optional Image badge = 6;
  let $badge = message.badge;
  if ($badge !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeImage($badge, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 centerAnimAssetId = 7;
  let $centerAnimAssetId = message.centerAnimAssetId;
  if ($centerAnimAssetId !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $centerAnimAssetId);
  }

  // optional string dressId = 9;
  let $dressId = message.dressId;
  if ($dressId !== undefined) {
    writeVarint32(bb, 74);
    writeString(bb, $dressId);
  }
}

export function decodeMemberMessage_PicoEffectConfig(binary: Uint8Array): MemberMessage_PicoEffectConfig {
  return _decodeMemberMessage_PicoEffectConfig(wrapByteBuffer(binary));
}

function _decodeMemberMessage_PicoEffectConfig(bb: ByteBuffer): MemberMessage_PicoEffectConfig {
  let message: MemberMessage_PicoEffectConfig = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 type = 1;
      case 1: {
        message.type = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Image icon = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.icon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional Text text = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.text = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional Image textIcon = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.textIcon = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 stayTime = 5;
      case 5: {
        message.stayTime = readVarint32(bb);
        break;
      }

      // optional Image badge = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.badge = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 centerAnimAssetId = 7;
      case 7: {
        message.centerAnimAssetId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string dressId = 9;
      case 9: {
        message.dressId = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

