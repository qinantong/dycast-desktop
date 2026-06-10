import { Long } from '../../Long';
import {
  popByteBuffer, pushByteBuffer, wrapByteBuffer, toUint8Array,
  writeVarint32, writeVarint64, writeString, writeBytes, writeByteBuffer, writeByte,
  readVarint32, readVarint64, readString, readBytes, readByte, readFloat, readDouble,
  writeFloat, writeDouble, longToString, stringToLong, intToLong,
  pushTemporaryLength, skipUnknownField, isAtEnd,
} from '../shared';
import type { ByteBuffer } from '../shared';
import { _decodeCommon, _decodeImage, _decodeLandscapeAreaCommon, _decodePublicAreaCommon, _decodeText, _decodeUser, _encodeCommon, _encodeImage, _encodeLandscapeAreaCommon, _encodePublicAreaCommon, _encodeText, _encodeUser } from '../base';
import type { Common, Image, LandscapeAreaCommon, PublicAreaCommon, Text, User } from '../base';

export interface ChatMessage {
  common?: Common;
  user?: User;
  content?: string;
  visibleToSender?: boolean;
  backgroundImage?: Image;
  fullScreenTextColor?: string;
  backgroundImageV2?: Image;
  publicAreaCommon?: PublicAreaCommon;
  giftImage?: Image;
  agreeMsgId?: string;
  priorityLevel?: number;
  landscapeAreaCommon?: LandscapeAreaCommon;
  eventTime?: string;
  sendReview?: boolean;
  fromIntercom?: boolean;
  intercomHideUserCard?: boolean;
  chatTags?: number;
  chatBy?: string;
  individualChatPriority?: number;
  rtfContent?: Text;
  rtfContentV2?: Text;
}

export function encodeChatMessage(message: ChatMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeChatMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeChatMessage(message: ChatMessage, bb: ByteBuffer): void {
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

  // optional string content = 3;
  let $content = message.content;
  if ($content !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $content);
  }

  // optional bool visibleToSender = 4;
  let $visibleToSender = message.visibleToSender;
  if ($visibleToSender !== undefined) {
    writeVarint32(bb, 32);
    writeByte(bb, $visibleToSender ? 1 : 0);
  }

  // optional Image backgroundImage = 5;
  let $backgroundImage = message.backgroundImage;
  if ($backgroundImage !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeImage($backgroundImage, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string fullScreenTextColor = 6;
  let $fullScreenTextColor = message.fullScreenTextColor;
  if ($fullScreenTextColor !== undefined) {
    writeVarint32(bb, 50);
    writeString(bb, $fullScreenTextColor);
  }

  // optional Image backgroundImageV2 = 7;
  let $backgroundImageV2 = message.backgroundImageV2;
  if ($backgroundImageV2 !== undefined) {
    writeVarint32(bb, 58);
    let nested = popByteBuffer();
    _encodeImage($backgroundImageV2, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional PublicAreaCommon publicAreaCommon = 9;
  let $publicAreaCommon = message.publicAreaCommon;
  if ($publicAreaCommon !== undefined) {
    writeVarint32(bb, 74);
    let nested = popByteBuffer();
    _encodePublicAreaCommon($publicAreaCommon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Image giftImage = 10;
  let $giftImage = message.giftImage;
  if ($giftImage !== undefined) {
    writeVarint32(bb, 82);
    let nested = popByteBuffer();
    _encodeImage($giftImage, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 agreeMsgId = 11;
  let $agreeMsgId = message.agreeMsgId;
  if ($agreeMsgId !== undefined) {
    writeVarint32(bb, 88);
    writeVarint64(bb, $agreeMsgId);
  }

  // optional int32 priorityLevel = 12;
  let $priorityLevel = message.priorityLevel;
  if ($priorityLevel !== undefined) {
    writeVarint32(bb, 96);
    writeVarint64(bb, intToLong($priorityLevel));
  }

  // optional LandscapeAreaCommon landscapeAreaCommon = 13;
  let $landscapeAreaCommon = message.landscapeAreaCommon;
  if ($landscapeAreaCommon !== undefined) {
    writeVarint32(bb, 106);
    let nested = popByteBuffer();
    _encodeLandscapeAreaCommon($landscapeAreaCommon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 eventTime = 15;
  let $eventTime = message.eventTime;
  if ($eventTime !== undefined) {
    writeVarint32(bb, 120);
    writeVarint64(bb, $eventTime);
  }

  // optional bool sendReview = 16;
  let $sendReview = message.sendReview;
  if ($sendReview !== undefined) {
    writeVarint32(bb, 128);
    writeByte(bb, $sendReview ? 1 : 0);
  }

  // optional bool fromIntercom = 17;
  let $fromIntercom = message.fromIntercom;
  if ($fromIntercom !== undefined) {
    writeVarint32(bb, 136);
    writeByte(bb, $fromIntercom ? 1 : 0);
  }

  // optional bool intercomHideUserCard = 18;
  let $intercomHideUserCard = message.intercomHideUserCard;
  if ($intercomHideUserCard !== undefined) {
    writeVarint32(bb, 144);
    writeByte(bb, $intercomHideUserCard ? 1 : 0);
  }

  // optional int32 chatTags = 19;
  let $chatTags = message.chatTags;
  if ($chatTags !== undefined) {
    writeVarint32(bb, 152);
    writeVarint64(bb, intToLong($chatTags));
  }

  // optional int64 chatBy = 20;
  let $chatBy = message.chatBy;
  if ($chatBy !== undefined) {
    writeVarint32(bb, 160);
    writeVarint64(bb, $chatBy);
  }

  // optional int32 individualChatPriority = 21;
  let $individualChatPriority = message.individualChatPriority;
  if ($individualChatPriority !== undefined) {
    writeVarint32(bb, 168);
    writeVarint64(bb, intToLong($individualChatPriority));
  }

  // optional Text rtfContent = 40;
  let $rtfContent = message.rtfContent;
  if ($rtfContent !== undefined) {
    writeVarint32(bb, 322);
    let nested = popByteBuffer();
    _encodeText($rtfContent, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Text rtfContentV2 = 41;
  let $rtfContentV2 = message.rtfContentV2;
  if ($rtfContentV2 !== undefined) {
    writeVarint32(bb, 330);
    let nested = popByteBuffer();
    _encodeText($rtfContentV2, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeChatMessage(binary: Uint8Array): ChatMessage {
  return _decodeChatMessage(wrapByteBuffer(binary));
}

function _decodeChatMessage(bb: ByteBuffer): ChatMessage {
  let message: ChatMessage = {} as any;

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

      // optional string content = 3;
      case 3: {
        message.content = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool visibleToSender = 4;
      case 4: {
        message.visibleToSender = !!readByte(bb);
        break;
      }

      // optional Image backgroundImage = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.backgroundImage = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string fullScreenTextColor = 6;
      case 6: {
        message.fullScreenTextColor = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image backgroundImageV2 = 7;
      case 7: {
        let limit = pushTemporaryLength(bb);
        message.backgroundImageV2 = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional PublicAreaCommon publicAreaCommon = 9;
      case 9: {
        let limit = pushTemporaryLength(bb);
        message.publicAreaCommon = _decodePublicAreaCommon(bb);
        bb.limit = limit;
        break;
      }

      // optional Image giftImage = 10;
      case 10: {
        let limit = pushTemporaryLength(bb);
        message.giftImage = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 agreeMsgId = 11;
      case 11: {
        message.agreeMsgId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 priorityLevel = 12;
      case 12: {
        message.priorityLevel = readVarint32(bb);
        break;
      }

      // optional LandscapeAreaCommon landscapeAreaCommon = 13;
      case 13: {
        let limit = pushTemporaryLength(bb);
        message.landscapeAreaCommon = _decodeLandscapeAreaCommon(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 eventTime = 15;
      case 15: {
        message.eventTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional bool sendReview = 16;
      case 16: {
        message.sendReview = !!readByte(bb);
        break;
      }

      // optional bool fromIntercom = 17;
      case 17: {
        message.fromIntercom = !!readByte(bb);
        break;
      }

      // optional bool intercomHideUserCard = 18;
      case 18: {
        message.intercomHideUserCard = !!readByte(bb);
        break;
      }

      // optional int32 chatTags = 19;
      case 19: {
        message.chatTags = readVarint32(bb);
        break;
      }

      // optional int64 chatBy = 20;
      case 20: {
        message.chatBy = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 individualChatPriority = 21;
      case 21: {
        message.individualChatPriority = readVarint32(bb);
        break;
      }

      // optional Text rtfContent = 40;
      case 40: {
        let limit = pushTemporaryLength(bb);
        message.rtfContent = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional Text rtfContentV2 = 41;
      case 41: {
        let limit = pushTemporaryLength(bb);
        message.rtfContentV2 = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface EmojiChatMessage {
  common?: Common;
  user?: User;
  emojiId?: string;
  emojiContent?: Text;
  defaultContent?: string;
  backgroundImage?: Image;
  fromIntercom?: boolean;
  intercomHideUserCard?: boolean;
  publicAreaCommon?: PublicAreaCommon;
}

export function encodeEmojiChatMessage(message: EmojiChatMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeEmojiChatMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeEmojiChatMessage(message: EmojiChatMessage, bb: ByteBuffer): void {
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

  // optional int64 emojiId = 3;
  let $emojiId = message.emojiId;
  if ($emojiId !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $emojiId);
  }

  // optional Text emojiContent = 4;
  let $emojiContent = message.emojiContent;
  if ($emojiContent !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeText($emojiContent, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string defaultContent = 5;
  let $defaultContent = message.defaultContent;
  if ($defaultContent !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $defaultContent);
  }

  // optional Image backgroundImage = 6;
  let $backgroundImage = message.backgroundImage;
  if ($backgroundImage !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeImage($backgroundImage, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool fromIntercom = 7;
  let $fromIntercom = message.fromIntercom;
  if ($fromIntercom !== undefined) {
    writeVarint32(bb, 56);
    writeByte(bb, $fromIntercom ? 1 : 0);
  }

  // optional bool intercomHideUserCard = 8;
  let $intercomHideUserCard = message.intercomHideUserCard;
  if ($intercomHideUserCard !== undefined) {
    writeVarint32(bb, 64);
    writeByte(bb, $intercomHideUserCard ? 1 : 0);
  }

  // optional PublicAreaCommon publicAreaCommon = 9;
  let $publicAreaCommon = message.publicAreaCommon;
  if ($publicAreaCommon !== undefined) {
    writeVarint32(bb, 74);
    let nested = popByteBuffer();
    _encodePublicAreaCommon($publicAreaCommon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeEmojiChatMessage(binary: Uint8Array): EmojiChatMessage {
  return _decodeEmojiChatMessage(wrapByteBuffer(binary));
}

function _decodeEmojiChatMessage(bb: ByteBuffer): EmojiChatMessage {
  let message: EmojiChatMessage = {} as any;

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

      // optional int64 emojiId = 3;
      case 3: {
        message.emojiId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Text emojiContent = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.emojiContent = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional string defaultContent = 5;
      case 5: {
        message.defaultContent = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image backgroundImage = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.backgroundImage = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional bool fromIntercom = 7;
      case 7: {
        message.fromIntercom = !!readByte(bb);
        break;
      }

      // optional bool intercomHideUserCard = 8;
      case 8: {
        message.intercomHideUserCard = !!readByte(bb);
        break;
      }

      // optional PublicAreaCommon publicAreaCommon = 9;
      case 9: {
        let limit = pushTemporaryLength(bb);
        message.publicAreaCommon = _decodePublicAreaCommon(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

