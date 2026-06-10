import { Long } from '../../Long';
import {
  popByteBuffer, pushByteBuffer, wrapByteBuffer, toUint8Array,
  writeVarint32, writeVarint64, writeString, writeBytes, writeByteBuffer, writeByte,
  readVarint32, readVarint64, readString, readBytes, readByte, readFloat, readDouble,
  writeFloat, writeDouble, longToString, stringToLong, intToLong,
  pushTemporaryLength, skipUnknownField, isAtEnd,
} from '../shared';
import type { ByteBuffer } from '../shared';
import { _decodeCommon, _decodePublicAreaCommon, _decodeText, _encodeCommon, _encodePublicAreaCommon, _encodeText } from '../base';
import type { Common, PublicAreaCommon, Text } from '../base';

export interface ControlMessage {
  common?: Common;
  action?: string;
  tips?: string;
  extra?: ControlMessage_Extra;
  publicAreaCommon?: PublicAreaCommon;
}

export function encodeControlMessage(message: ControlMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeControlMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeControlMessage(message: ControlMessage, bb: ByteBuffer): void {
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

  // optional int64 action = 2;
  let $action = message.action;
  if ($action !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $action);
  }

  // optional string tips = 3;
  let $tips = message.tips;
  if ($tips !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $tips);
  }

  // optional ControlMessage_Extra extra = 4;
  let $extra = message.extra;
  if ($extra !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeControlMessage_Extra($extra, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional PublicAreaCommon publicAreaCommon = 5;
  let $publicAreaCommon = message.publicAreaCommon;
  if ($publicAreaCommon !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodePublicAreaCommon($publicAreaCommon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeControlMessage(binary: Uint8Array): ControlMessage {
  return _decodeControlMessage(wrapByteBuffer(binary));
}

function _decodeControlMessage(bb: ByteBuffer): ControlMessage {
  let message: ControlMessage = {} as any;

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

      // optional int64 action = 2;
      case 2: {
        message.action = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string tips = 3;
      case 3: {
        message.tips = readString(bb, readVarint32(bb));
        break;
      }

      // optional ControlMessage_Extra extra = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.extra = _decodeControlMessage_Extra(bb);
        bb.limit = limit;
        break;
      }

      // optional PublicAreaCommon publicAreaCommon = 5;
      case 5: {
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

export interface ControlMessage_Extra {
  banInfoUrl?: string;
  reasonNo?: string;
  title?: Text;
  violationReason?: Text;
  content?: Text;
  gotItButton?: Text;
  banDetailButton?: Text;
  source?: string;
}

export function encodeControlMessage_Extra(message: ControlMessage_Extra): Uint8Array {
  let bb = popByteBuffer();
  _encodeControlMessage_Extra(message, bb);
  return toUint8Array(bb);
}

function _encodeControlMessage_Extra(message: ControlMessage_Extra, bb: ByteBuffer): void {
  // optional string banInfoUrl = 1;
  let $banInfoUrl = message.banInfoUrl;
  if ($banInfoUrl !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $banInfoUrl);
  }

  // optional int64 reasonNo = 2;
  let $reasonNo = message.reasonNo;
  if ($reasonNo !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $reasonNo);
  }

  // optional Text title = 3;
  let $title = message.title;
  if ($title !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeText($title, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Text violationReason = 4;
  let $violationReason = message.violationReason;
  if ($violationReason !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeText($violationReason, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Text content = 5;
  let $content = message.content;
  if ($content !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeText($content, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Text gotItButton = 6;
  let $gotItButton = message.gotItButton;
  if ($gotItButton !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeText($gotItButton, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional Text banDetailButton = 7;
  let $banDetailButton = message.banDetailButton;
  if ($banDetailButton !== undefined) {
    writeVarint32(bb, 58);
    let nested = popByteBuffer();
    _encodeText($banDetailButton, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string source = 8;
  let $source = message.source;
  if ($source !== undefined) {
    writeVarint32(bb, 66);
    writeString(bb, $source);
  }
}

export function decodeControlMessage_Extra(binary: Uint8Array): ControlMessage_Extra {
  return _decodeControlMessage_Extra(wrapByteBuffer(binary));
}

function _decodeControlMessage_Extra(bb: ByteBuffer): ControlMessage_Extra {
  let message: ControlMessage_Extra = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string banInfoUrl = 1;
      case 1: {
        message.banInfoUrl = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 reasonNo = 2;
      case 2: {
        message.reasonNo = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Text title = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.title = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional Text violationReason = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.violationReason = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional Text content = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.content = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional Text gotItButton = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.gotItButton = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional Text banDetailButton = 7;
      case 7: {
        let limit = pushTemporaryLength(bb);
        message.banDetailButton = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional string source = 8;
      case 8: {
        message.source = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

