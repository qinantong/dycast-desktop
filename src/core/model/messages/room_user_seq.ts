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

export interface RoomUserSeqMessage {
  common?: Common;
  ranks?: RoomUserSeqMessage_Contributor[];
  total?: string;
  popStr?: string;
  seats?: RoomUserSeqMessage_Contributor[];
  popularity?: string;
  totalUser?: string;
  totalUserStr?: string;
  totalStr?: string;
  onlineUserForAnchor?: string;
  totalPvForAnchor?: string;
  upRightStatsStr?: string;
  upRightStatsStrComplete?: string;
}

export function encodeRoomUserSeqMessage(message: RoomUserSeqMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomUserSeqMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeRoomUserSeqMessage(message: RoomUserSeqMessage, bb: ByteBuffer): void {
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

  // repeated RoomUserSeqMessage_Contributor ranks = 2;
  let array$ranks = message.ranks;
  if (array$ranks !== undefined) {
    for (let value of array$ranks) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeRoomUserSeqMessage_Contributor(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional int64 total = 3;
  let $total = message.total;
  if ($total !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $total);
  }

  // optional string popStr = 4;
  let $popStr = message.popStr;
  if ($popStr !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $popStr);
  }

  // repeated RoomUserSeqMessage_Contributor seats = 5;
  let array$seats = message.seats;
  if (array$seats !== undefined) {
    for (let value of array$seats) {
      writeVarint32(bb, 42);
      let nested = popByteBuffer();
      _encodeRoomUserSeqMessage_Contributor(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional int64 popularity = 6;
  let $popularity = message.popularity;
  if ($popularity !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $popularity);
  }

  // optional int64 totalUser = 7;
  let $totalUser = message.totalUser;
  if ($totalUser !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $totalUser);
  }

  // optional string totalUserStr = 8;
  let $totalUserStr = message.totalUserStr;
  if ($totalUserStr !== undefined) {
    writeVarint32(bb, 66);
    writeString(bb, $totalUserStr);
  }

  // optional string totalStr = 9;
  let $totalStr = message.totalStr;
  if ($totalStr !== undefined) {
    writeVarint32(bb, 74);
    writeString(bb, $totalStr);
  }

  // optional string onlineUserForAnchor = 10;
  let $onlineUserForAnchor = message.onlineUserForAnchor;
  if ($onlineUserForAnchor !== undefined) {
    writeVarint32(bb, 82);
    writeString(bb, $onlineUserForAnchor);
  }

  // optional string totalPvForAnchor = 11;
  let $totalPvForAnchor = message.totalPvForAnchor;
  if ($totalPvForAnchor !== undefined) {
    writeVarint32(bb, 90);
    writeString(bb, $totalPvForAnchor);
  }

  // optional string upRightStatsStr = 12;
  let $upRightStatsStr = message.upRightStatsStr;
  if ($upRightStatsStr !== undefined) {
    writeVarint32(bb, 98);
    writeString(bb, $upRightStatsStr);
  }

  // optional string upRightStatsStrComplete = 13;
  let $upRightStatsStrComplete = message.upRightStatsStrComplete;
  if ($upRightStatsStrComplete !== undefined) {
    writeVarint32(bb, 106);
    writeString(bb, $upRightStatsStrComplete);
  }
}

export function decodeRoomUserSeqMessage(binary: Uint8Array): RoomUserSeqMessage {
  return _decodeRoomUserSeqMessage(wrapByteBuffer(binary));
}

function _decodeRoomUserSeqMessage(bb: ByteBuffer): RoomUserSeqMessage {
  let message: RoomUserSeqMessage = {} as any;

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

      // repeated RoomUserSeqMessage_Contributor ranks = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.ranks || (message.ranks = []);
        values.push(_decodeRoomUserSeqMessage_Contributor(bb));
        bb.limit = limit;
        break;
      }

      // optional int64 total = 3;
      case 3: {
        message.total = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string popStr = 4;
      case 4: {
        message.popStr = readString(bb, readVarint32(bb));
        break;
      }

      // repeated RoomUserSeqMessage_Contributor seats = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        let values = message.seats || (message.seats = []);
        values.push(_decodeRoomUserSeqMessage_Contributor(bb));
        bb.limit = limit;
        break;
      }

      // optional int64 popularity = 6;
      case 6: {
        message.popularity = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 totalUser = 7;
      case 7: {
        message.totalUser = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string totalUserStr = 8;
      case 8: {
        message.totalUserStr = readString(bb, readVarint32(bb));
        break;
      }

      // optional string totalStr = 9;
      case 9: {
        message.totalStr = readString(bb, readVarint32(bb));
        break;
      }

      // optional string onlineUserForAnchor = 10;
      case 10: {
        message.onlineUserForAnchor = readString(bb, readVarint32(bb));
        break;
      }

      // optional string totalPvForAnchor = 11;
      case 11: {
        message.totalPvForAnchor = readString(bb, readVarint32(bb));
        break;
      }

      // optional string upRightStatsStr = 12;
      case 12: {
        message.upRightStatsStr = readString(bb, readVarint32(bb));
        break;
      }

      // optional string upRightStatsStrComplete = 13;
      case 13: {
        message.upRightStatsStrComplete = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RoomUserSeqMessage_Contributor {
  score?: string;
  user?: User;
  rank?: string;
  delta?: string;
  isHidden?: boolean;
  scoreDescription?: string;
  exactlyScore?: string;
}

export function encodeRoomUserSeqMessage_Contributor(message: RoomUserSeqMessage_Contributor): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomUserSeqMessage_Contributor(message, bb);
  return toUint8Array(bb);
}

function _encodeRoomUserSeqMessage_Contributor(message: RoomUserSeqMessage_Contributor, bb: ByteBuffer): void {
  // optional int64 score = 1;
  let $score = message.score;
  if ($score !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $score);
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

  // optional int64 rank = 3;
  let $rank = message.rank;
  if ($rank !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $rank);
  }

  // optional int64 delta = 4;
  let $delta = message.delta;
  if ($delta !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $delta);
  }

  // optional bool isHidden = 5;
  let $isHidden = message.isHidden;
  if ($isHidden !== undefined) {
    writeVarint32(bb, 40);
    writeByte(bb, $isHidden ? 1 : 0);
  }

  // optional string scoreDescription = 6;
  let $scoreDescription = message.scoreDescription;
  if ($scoreDescription !== undefined) {
    writeVarint32(bb, 50);
    writeString(bb, $scoreDescription);
  }

  // optional string exactlyScore = 7;
  let $exactlyScore = message.exactlyScore;
  if ($exactlyScore !== undefined) {
    writeVarint32(bb, 58);
    writeString(bb, $exactlyScore);
  }
}

export function decodeRoomUserSeqMessage_Contributor(binary: Uint8Array): RoomUserSeqMessage_Contributor {
  return _decodeRoomUserSeqMessage_Contributor(wrapByteBuffer(binary));
}

function _decodeRoomUserSeqMessage_Contributor(bb: ByteBuffer): RoomUserSeqMessage_Contributor {
  let message: RoomUserSeqMessage_Contributor = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 score = 1;
      case 1: {
        message.score = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional User user = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.user = _decodeUser(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 rank = 3;
      case 3: {
        message.rank = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 delta = 4;
      case 4: {
        message.delta = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional bool isHidden = 5;
      case 5: {
        message.isHidden = !!readByte(bb);
        break;
      }

      // optional string scoreDescription = 6;
      case 6: {
        message.scoreDescription = readString(bb, readVarint32(bb));
        break;
      }

      // optional string exactlyScore = 7;
      case 7: {
        message.exactlyScore = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

