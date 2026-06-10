import { Long } from '../../Long';
import {
  popByteBuffer, pushByteBuffer, wrapByteBuffer, toUint8Array,
  writeVarint32, writeVarint64, writeString, writeBytes, writeByteBuffer, writeByte,
  readVarint32, readVarint64, readString, readBytes, readByte, readFloat, readDouble,
  writeFloat, writeDouble, longToString, stringToLong, intToLong,
  pushTemporaryLength, skipUnknownField, isAtEnd,
} from '../shared';
import type { ByteBuffer } from '../shared';
import { _decodeCommon, _encodeCommon } from '../base';
import type { Common } from '../base';

export interface RoomStatsMessage {
  common?: Common;
  displayShort?: string;
  displayMiddle?: string;
  displayLong?: string;
  displayValue?: string;
  displayVersion?: string;
  incremental?: boolean;
  isHidden?: boolean;
  total?: string;
  displayType?: string;
}

export function encodeRoomStatsMessage(message: RoomStatsMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomStatsMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeRoomStatsMessage(message: RoomStatsMessage, bb: ByteBuffer): void {
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

  // optional string displayShort = 2;
  let $displayShort = message.displayShort;
  if ($displayShort !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $displayShort);
  }

  // optional string displayMiddle = 3;
  let $displayMiddle = message.displayMiddle;
  if ($displayMiddle !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $displayMiddle);
  }

  // optional string displayLong = 4;
  let $displayLong = message.displayLong;
  if ($displayLong !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $displayLong);
  }

  // optional int64 displayValue = 5;
  let $displayValue = message.displayValue;
  if ($displayValue !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $displayValue);
  }

  // optional int64 displayVersion = 6;
  let $displayVersion = message.displayVersion;
  if ($displayVersion !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $displayVersion);
  }

  // optional bool incremental = 7;
  let $incremental = message.incremental;
  if ($incremental !== undefined) {
    writeVarint32(bb, 56);
    writeByte(bb, $incremental ? 1 : 0);
  }

  // optional bool isHidden = 8;
  let $isHidden = message.isHidden;
  if ($isHidden !== undefined) {
    writeVarint32(bb, 64);
    writeByte(bb, $isHidden ? 1 : 0);
  }

  // optional int64 total = 9;
  let $total = message.total;
  if ($total !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, $total);
  }

  // optional int64 displayType = 10;
  let $displayType = message.displayType;
  if ($displayType !== undefined) {
    writeVarint32(bb, 80);
    writeVarint64(bb, $displayType);
  }
}

export function decodeRoomStatsMessage(binary: Uint8Array): RoomStatsMessage {
  return _decodeRoomStatsMessage(wrapByteBuffer(binary));
}

function _decodeRoomStatsMessage(bb: ByteBuffer): RoomStatsMessage {
  let message: RoomStatsMessage = {} as any;

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

      // optional string displayShort = 2;
      case 2: {
        message.displayShort = readString(bb, readVarint32(bb));
        break;
      }

      // optional string displayMiddle = 3;
      case 3: {
        message.displayMiddle = readString(bb, readVarint32(bb));
        break;
      }

      // optional string displayLong = 4;
      case 4: {
        message.displayLong = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 displayValue = 5;
      case 5: {
        message.displayValue = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 displayVersion = 6;
      case 6: {
        message.displayVersion = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional bool incremental = 7;
      case 7: {
        message.incremental = !!readByte(bb);
        break;
      }

      // optional bool isHidden = 8;
      case 8: {
        message.isHidden = !!readByte(bb);
        break;
      }

      // optional int64 total = 9;
      case 9: {
        message.total = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 displayType = 10;
      case 10: {
        message.displayType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

