import { Long } from '../../Long';
import {
  popByteBuffer, pushByteBuffer, wrapByteBuffer, toUint8Array,
  writeVarint32, writeVarint64, writeString, writeBytes, writeByteBuffer, writeByte,
  readVarint32, readVarint64, readString, readBytes, readByte, readFloat, readDouble,
  writeFloat, writeDouble, longToString, stringToLong, intToLong,
  pushTemporaryLength, skipUnknownField, isAtEnd,
} from '../shared';
import type { ByteBuffer } from '../shared';
import { _decodeCommon, _decodeDisplayControlInfo, _decodeDoubleLikeDetail, _decodePicoDisplayInfo, _decodePublicAreaCommon, _decodeUser, _encodeCommon, _encodeDisplayControlInfo, _encodeDoubleLikeDetail, _encodePicoDisplayInfo, _encodePublicAreaCommon, _encodeUser } from '../base';
import type { Common, DisplayControlInfo, DoubleLikeDetail, PicoDisplayInfo, PublicAreaCommon, User } from '../base';

export interface LikeMessage {
  common?: Common;
  count?: string;
  total?: string;
  color?: string;
  user?: User;
  icon?: string;
  doubleLikeDetail?: DoubleLikeDetail;
  displayControlInfo?: DisplayControlInfo;
  linkmicGuestUid?: string;
  scene?: string;
  picoDisplayInfo?: PicoDisplayInfo;
  publicAreaCommon?: PublicAreaCommon;
}

export function encodeLikeMessage(message: LikeMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeLikeMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeLikeMessage(message: LikeMessage, bb: ByteBuffer): void {
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

  // optional int64 count = 2;
  let $count = message.count;
  if ($count !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $count);
  }

  // optional int64 total = 3;
  let $total = message.total;
  if ($total !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $total);
  }

  // optional int64 color = 4;
  let $color = message.color;
  if ($color !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $color);
  }

  // optional User user = 5;
  let $user = message.user;
  if ($user !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeUser($user, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string icon = 6;
  let $icon = message.icon;
  if ($icon !== undefined) {
    writeVarint32(bb, 50);
    writeString(bb, $icon);
  }

  // optional DoubleLikeDetail doubleLikeDetail = 7;
  let $doubleLikeDetail = message.doubleLikeDetail;
  if ($doubleLikeDetail !== undefined) {
    writeVarint32(bb, 58);
    let nested = popByteBuffer();
    _encodeDoubleLikeDetail($doubleLikeDetail, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional DisplayControlInfo displayControlInfo = 8;
  let $displayControlInfo = message.displayControlInfo;
  if ($displayControlInfo !== undefined) {
    writeVarint32(bb, 66);
    let nested = popByteBuffer();
    _encodeDisplayControlInfo($displayControlInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 linkmicGuestUid = 9;
  let $linkmicGuestUid = message.linkmicGuestUid;
  if ($linkmicGuestUid !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, $linkmicGuestUid);
  }

  // optional string scene = 10;
  let $scene = message.scene;
  if ($scene !== undefined) {
    writeVarint32(bb, 82);
    writeString(bb, $scene);
  }

  // optional PicoDisplayInfo picoDisplayInfo = 11;
  let $picoDisplayInfo = message.picoDisplayInfo;
  if ($picoDisplayInfo !== undefined) {
    writeVarint32(bb, 90);
    let nested = popByteBuffer();
    _encodePicoDisplayInfo($picoDisplayInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional PublicAreaCommon publicAreaCommon = 12;
  let $publicAreaCommon = message.publicAreaCommon;
  if ($publicAreaCommon !== undefined) {
    writeVarint32(bb, 98);
    let nested = popByteBuffer();
    _encodePublicAreaCommon($publicAreaCommon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeLikeMessage(binary: Uint8Array): LikeMessage {
  return _decodeLikeMessage(wrapByteBuffer(binary));
}

function _decodeLikeMessage(bb: ByteBuffer): LikeMessage {
  let message: LikeMessage = {} as any;

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

      // optional int64 count = 2;
      case 2: {
        message.count = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 total = 3;
      case 3: {
        message.total = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 color = 4;
      case 4: {
        message.color = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional User user = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.user = _decodeUser(bb);
        bb.limit = limit;
        break;
      }

      // optional string icon = 6;
      case 6: {
        message.icon = readString(bb, readVarint32(bb));
        break;
      }

      // optional DoubleLikeDetail doubleLikeDetail = 7;
      case 7: {
        let limit = pushTemporaryLength(bb);
        message.doubleLikeDetail = _decodeDoubleLikeDetail(bb);
        bb.limit = limit;
        break;
      }

      // optional DisplayControlInfo displayControlInfo = 8;
      case 8: {
        let limit = pushTemporaryLength(bb);
        message.displayControlInfo = _decodeDisplayControlInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 linkmicGuestUid = 9;
      case 9: {
        message.linkmicGuestUid = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string scene = 10;
      case 10: {
        message.scene = readString(bb, readVarint32(bb));
        break;
      }

      // optional PicoDisplayInfo picoDisplayInfo = 11;
      case 11: {
        let limit = pushTemporaryLength(bb);
        message.picoDisplayInfo = _decodePicoDisplayInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional PublicAreaCommon publicAreaCommon = 12;
      case 12: {
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

