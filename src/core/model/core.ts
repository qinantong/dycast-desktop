import { Long } from '../Long';
import {
  popByteBuffer, pushByteBuffer, wrapByteBuffer, toUint8Array,
  writeVarint32, writeVarint64, writeString, writeBytes, writeByteBuffer, writeByte,
  readVarint32, readVarint64, readString, readBytes, readByte, readFloat, readDouble,
  writeFloat, writeDouble, longToString, stringToLong, intToLong,
  pushTemporaryLength, skipUnknownField, isAtEnd,
} from './shared';
import type { ByteBuffer } from './shared';

export interface PushFrame {
  seqId?: string;
  logId?: string;
  service?: string;
  method?: string;
  headersList?: { [key: string]: string };
  payloadEncoding?: string;
  payloadType?: string;
  payload?: Uint8Array;
  lodIdNew?: string;
}

export function encodePushFrame(message: PushFrame): Uint8Array {
  let bb = popByteBuffer();
  _encodePushFrame(message, bb);
  return toUint8Array(bb);
}

function _encodePushFrame(message: PushFrame, bb: ByteBuffer): void {
  // optional uint64 seqId = 1;
  let $seqId = message.seqId;
  if ($seqId !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $seqId);
  }

  // optional uint64 logId = 2;
  let $logId = message.logId;
  if ($logId !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $logId);
  }

  // optional uint64 service = 3;
  let $service = message.service;
  if ($service !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $service);
  }

  // optional uint64 method = 4;
  let $method = message.method;
  if ($method !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $method);
  }

  // optional map<string, string> headersList = 5;
  let map$headersList = message.headersList;
  if (map$headersList !== undefined) {
    for (let key in map$headersList) {
      let nested = popByteBuffer();
      let value = map$headersList[key];
      writeVarint32(nested, 10);
      writeString(nested, key);
      writeVarint32(nested, 18);
      writeString(nested, value);
      writeVarint32(bb, 42);
      writeVarint32(bb, nested.offset);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional string payloadEncoding = 6;
  let $payloadEncoding = message.payloadEncoding;
  if ($payloadEncoding !== undefined) {
    writeVarint32(bb, 50);
    writeString(bb, $payloadEncoding);
  }

  // optional string payloadType = 7;
  let $payloadType = message.payloadType;
  if ($payloadType !== undefined) {
    writeVarint32(bb, 58);
    writeString(bb, $payloadType);
  }

  // optional bytes payload = 8;
  let $payload = message.payload;
  if ($payload !== undefined) {
    writeVarint32(bb, 66);
    writeVarint32(bb, $payload.length), writeBytes(bb, $payload);
  }

  // optional string lodIdNew = 9;
  let $lodIdNew = message.lodIdNew;
  if ($lodIdNew !== undefined) {
    writeVarint32(bb, 74);
    writeString(bb, $lodIdNew);
  }
}

export function decodePushFrame(binary: Uint8Array): PushFrame {
  return _decodePushFrame(wrapByteBuffer(binary));
}

function _decodePushFrame(bb: ByteBuffer): PushFrame {
  let message: PushFrame = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 seqId = 1;
      case 1: {
        message.seqId = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint64 logId = 2;
      case 2: {
        message.logId = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint64 service = 3;
      case 3: {
        message.service = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint64 method = 4;
      case 4: {
        message.method = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional map<string, string> headersList = 5;
      case 5: {
        let values = message.headersList || (message.headersList = {});
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
              value = readString(bb, readVarint32(bb));
              break;
            }
            default:
              skipUnknownField(bb, tag & 7);
          }
        }
        if (key === undefined || value === undefined) throw new Error('Invalid data for map: headersList');
        values[key] = value;
        bb.limit = outerLimit;
        break;
      }

      // optional string payloadEncoding = 6;
      case 6: {
        message.payloadEncoding = readString(bb, readVarint32(bb));
        break;
      }

      // optional string payloadType = 7;
      case 7: {
        message.payloadType = readString(bb, readVarint32(bb));
        break;
      }

      // optional bytes payload = 8;
      case 8: {
        message.payload = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional string lodIdNew = 9;
      case 9: {
        message.lodIdNew = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Response {
  messages?: Message[];
  cursor?: string;
  fetchInterval?: string;
  now?: string;
  internalExt?: string;
  fetchType?: number;
  routeParams?: { [key: string]: string };
  heartbeatDuration?: string;
  needAck?: boolean;
  pushServer?: string;
  liveCursor?: string;
  historyNoMore?: boolean;
  proxyServer?: string;
}

export function encodeResponse(message: Response): Uint8Array {
  let bb = popByteBuffer();
  _encodeResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeResponse(message: Response, bb: ByteBuffer): void {
  // repeated Message messages = 1;
  let array$messages = message.messages;
  if (array$messages !== undefined) {
    for (let value of array$messages) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeMessage(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional string cursor = 2;
  let $cursor = message.cursor;
  if ($cursor !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $cursor);
  }

  // optional int64 fetchInterval = 3;
  let $fetchInterval = message.fetchInterval;
  if ($fetchInterval !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $fetchInterval);
  }

  // optional int64 now = 4;
  let $now = message.now;
  if ($now !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $now);
  }

  // optional string internalExt = 5;
  let $internalExt = message.internalExt;
  if ($internalExt !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $internalExt);
  }

  // optional int32 fetchType = 6;
  let $fetchType = message.fetchType;
  if ($fetchType !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, intToLong($fetchType));
  }

  // optional map<string, string> routeParams = 7;
  let map$routeParams = message.routeParams;
  if (map$routeParams !== undefined) {
    for (let key in map$routeParams) {
      let nested = popByteBuffer();
      let value = map$routeParams[key];
      writeVarint32(nested, 10);
      writeString(nested, key);
      writeVarint32(nested, 18);
      writeString(nested, value);
      writeVarint32(bb, 58);
      writeVarint32(bb, nested.offset);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional int64 heartbeatDuration = 8;
  let $heartbeatDuration = message.heartbeatDuration;
  if ($heartbeatDuration !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, $heartbeatDuration);
  }

  // optional bool needAck = 9;
  let $needAck = message.needAck;
  if ($needAck !== undefined) {
    writeVarint32(bb, 72);
    writeByte(bb, $needAck ? 1 : 0);
  }

  // optional string pushServer = 10;
  let $pushServer = message.pushServer;
  if ($pushServer !== undefined) {
    writeVarint32(bb, 82);
    writeString(bb, $pushServer);
  }

  // optional string liveCursor = 11;
  let $liveCursor = message.liveCursor;
  if ($liveCursor !== undefined) {
    writeVarint32(bb, 90);
    writeString(bb, $liveCursor);
  }

  // optional bool historyNoMore = 12;
  let $historyNoMore = message.historyNoMore;
  if ($historyNoMore !== undefined) {
    writeVarint32(bb, 96);
    writeByte(bb, $historyNoMore ? 1 : 0);
  }

  // optional string proxyServer = 13;
  let $proxyServer = message.proxyServer;
  if ($proxyServer !== undefined) {
    writeVarint32(bb, 106);
    writeString(bb, $proxyServer);
  }
}

export function decodeResponse(binary: Uint8Array): Response {
  return _decodeResponse(wrapByteBuffer(binary));
}

function _decodeResponse(bb: ByteBuffer): Response {
  let message: Response = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated Message messages = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.messages || (message.messages = []);
        values.push(_decodeMessage(bb));
        bb.limit = limit;
        break;
      }

      // optional string cursor = 2;
      case 2: {
        message.cursor = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 fetchInterval = 3;
      case 3: {
        message.fetchInterval = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 now = 4;
      case 4: {
        message.now = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string internalExt = 5;
      case 5: {
        message.internalExt = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 fetchType = 6;
      case 6: {
        message.fetchType = readVarint32(bb);
        break;
      }

      // optional map<string, string> routeParams = 7;
      case 7: {
        let values = message.routeParams || (message.routeParams = {});
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
              value = readString(bb, readVarint32(bb));
              break;
            }
            default:
              skipUnknownField(bb, tag & 7);
          }
        }
        if (key === undefined || value === undefined) throw new Error('Invalid data for map: routeParams');
        values[key] = value;
        bb.limit = outerLimit;
        break;
      }

      // optional int64 heartbeatDuration = 8;
      case 8: {
        message.heartbeatDuration = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional bool needAck = 9;
      case 9: {
        message.needAck = !!readByte(bb);
        break;
      }

      // optional string pushServer = 10;
      case 10: {
        message.pushServer = readString(bb, readVarint32(bb));
        break;
      }

      // optional string liveCursor = 11;
      case 11: {
        message.liveCursor = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool historyNoMore = 12;
      case 12: {
        message.historyNoMore = !!readByte(bb);
        break;
      }

      // optional string proxyServer = 13;
      case 13: {
        message.proxyServer = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Message {
  method?: string;
  payload?: Uint8Array;
  msgId?: string;
  msgType?: number;
  offset?: string;
  needWrdsStore?: boolean;
  wrdsVersion?: string;
  wrdsSubKey?: string;
}

export function encodeMessage(message: Message): Uint8Array {
  let bb = popByteBuffer();
  _encodeMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeMessage(message: Message, bb: ByteBuffer): void {
  // optional string method = 1;
  let $method = message.method;
  if ($method !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $method);
  }

  // optional bytes payload = 2;
  let $payload = message.payload;
  if ($payload !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $payload.length), writeBytes(bb, $payload);
  }

  // optional int64 msgId = 3;
  let $msgId = message.msgId;
  if ($msgId !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $msgId);
  }

  // optional int32 msgType = 4;
  let $msgType = message.msgType;
  if ($msgType !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($msgType));
  }

  // optional int64 offset = 5;
  let $offset = message.offset;
  if ($offset !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $offset);
  }

  // optional bool needWrdsStore = 6;
  let $needWrdsStore = message.needWrdsStore;
  if ($needWrdsStore !== undefined) {
    writeVarint32(bb, 48);
    writeByte(bb, $needWrdsStore ? 1 : 0);
  }

  // optional int64 wrdsVersion = 7;
  let $wrdsVersion = message.wrdsVersion;
  if ($wrdsVersion !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $wrdsVersion);
  }

  // optional string wrdsSubKey = 8;
  let $wrdsSubKey = message.wrdsSubKey;
  if ($wrdsSubKey !== undefined) {
    writeVarint32(bb, 66);
    writeString(bb, $wrdsSubKey);
  }
}

export function decodeMessage(binary: Uint8Array): Message {
  return _decodeMessage(wrapByteBuffer(binary));
}

function _decodeMessage(bb: ByteBuffer): Message {
  let message: Message = {} as any;

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

      // optional bytes payload = 2;
      case 2: {
        message.payload = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional int64 msgId = 3;
      case 3: {
        message.msgId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 msgType = 4;
      case 4: {
        message.msgType = readVarint32(bb);
        break;
      }

      // optional int64 offset = 5;
      case 5: {
        message.offset = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional bool needWrdsStore = 6;
      case 6: {
        message.needWrdsStore = !!readByte(bb);
        break;
      }

      // optional int64 wrdsVersion = 7;
      case 7: {
        message.wrdsVersion = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string wrdsSubKey = 8;
      case 8: {
        message.wrdsSubKey = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

