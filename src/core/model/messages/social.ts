import { Long } from '../../Long';
import {
  popByteBuffer, pushByteBuffer, wrapByteBuffer, toUint8Array,
  writeVarint32, writeVarint64, writeString, writeBytes, writeByteBuffer, writeByte,
  readVarint32, readVarint64, readString, readBytes, readByte, readFloat, readDouble,
  writeFloat, writeDouble, longToString, stringToLong, intToLong,
  pushTemporaryLength, skipUnknownField, isAtEnd,
} from '../shared';
import type { ByteBuffer } from '../shared';
import { _decodeCommon, _decodePublicAreaCommon, _decodeUser, _encodeCommon, _encodePublicAreaCommon, _encodeUser } from '../base';
import type { Common, PublicAreaCommon, User } from '../base';

export interface SocialMessage {
  common?: Common;
  user?: User;
  shareType?: string;
  action?: string;
  shareTarget?: string;
  followCount?: string;
  publicAreaCommon?: PublicAreaCommon;
}

export function encodeSocialMessage(message: SocialMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeSocialMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeSocialMessage(message: SocialMessage, bb: ByteBuffer): void {
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

  // optional int64 shareType = 3;
  let $shareType = message.shareType;
  if ($shareType !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $shareType);
  }

  // optional int64 action = 4;
  let $action = message.action;
  if ($action !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $action);
  }

  // optional string shareTarget = 5;
  let $shareTarget = message.shareTarget;
  if ($shareTarget !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $shareTarget);
  }

  // optional int64 followCount = 6;
  let $followCount = message.followCount;
  if ($followCount !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $followCount);
  }

  // optional PublicAreaCommon publicAreaCommon = 7;
  let $publicAreaCommon = message.publicAreaCommon;
  if ($publicAreaCommon !== undefined) {
    writeVarint32(bb, 58);
    let nested = popByteBuffer();
    _encodePublicAreaCommon($publicAreaCommon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeSocialMessage(binary: Uint8Array): SocialMessage {
  return _decodeSocialMessage(wrapByteBuffer(binary));
}

function _decodeSocialMessage(bb: ByteBuffer): SocialMessage {
  let message: SocialMessage = {} as any;

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

      // optional int64 shareType = 3;
      case 3: {
        message.shareType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 action = 4;
      case 4: {
        message.action = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string shareTarget = 5;
      case 5: {
        message.shareTarget = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 followCount = 6;
      case 6: {
        message.followCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional PublicAreaCommon publicAreaCommon = 7;
      case 7: {
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

