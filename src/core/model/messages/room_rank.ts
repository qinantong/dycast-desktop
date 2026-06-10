import { Long } from '../../Long';
import {
  popByteBuffer, pushByteBuffer, wrapByteBuffer, toUint8Array,
  writeVarint32, writeVarint64, writeString, writeBytes, writeByteBuffer, writeByte,
  readVarint32, readVarint64, readString, readBytes, readByte, readFloat, readDouble,
  writeFloat, writeDouble, longToString, stringToLong, intToLong,
  pushTemporaryLength, skipUnknownField, isAtEnd,
} from '../shared';
import type { ByteBuffer } from '../shared';
import { _decodeCommon, _decodeUser, _encodeCommon, _encodeUser } from '../base';
import type { Common, User } from '../base';

export interface RoomRankMessage {
  common?: Common;
  ranks?: RoomRankMessage_RoomRank[];
}

export function encodeRoomRankMessage(message: RoomRankMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomRankMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeRoomRankMessage(message: RoomRankMessage, bb: ByteBuffer): void {
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

  // repeated RoomRankMessage_RoomRank ranks = 2;
  let array$ranks = message.ranks;
  if (array$ranks !== undefined) {
    for (let value of array$ranks) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeRoomRankMessage_RoomRank(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeRoomRankMessage(binary: Uint8Array): RoomRankMessage {
  return _decodeRoomRankMessage(wrapByteBuffer(binary));
}

function _decodeRoomRankMessage(bb: ByteBuffer): RoomRankMessage {
  let message: RoomRankMessage = {} as any;

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

      // repeated RoomRankMessage_RoomRank ranks = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.ranks || (message.ranks = []);
        values.push(_decodeRoomRankMessage_RoomRank(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RoomRankMessage_RoomRank {
  user?: User;
  scoreStr?: string;
  profileHidden?: boolean;
}

export function encodeRoomRankMessage_RoomRank(message: RoomRankMessage_RoomRank): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomRankMessage_RoomRank(message, bb);
  return toUint8Array(bb);
}

function _encodeRoomRankMessage_RoomRank(message: RoomRankMessage_RoomRank, bb: ByteBuffer): void {
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

  // optional string scoreStr = 2;
  let $scoreStr = message.scoreStr;
  if ($scoreStr !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $scoreStr);
  }

  // optional bool profileHidden = 3;
  let $profileHidden = message.profileHidden;
  if ($profileHidden !== undefined) {
    writeVarint32(bb, 24);
    writeByte(bb, $profileHidden ? 1 : 0);
  }
}

export function decodeRoomRankMessage_RoomRank(binary: Uint8Array): RoomRankMessage_RoomRank {
  return _decodeRoomRankMessage_RoomRank(wrapByteBuffer(binary));
}

function _decodeRoomRankMessage_RoomRank(bb: ByteBuffer): RoomRankMessage_RoomRank {
  let message: RoomRankMessage_RoomRank = {} as any;

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

      // optional string scoreStr = 2;
      case 2: {
        message.scoreStr = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool profileHidden = 3;
      case 3: {
        message.profileHidden = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

