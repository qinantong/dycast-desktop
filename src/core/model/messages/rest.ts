import { Long } from '../../Long';
import {
  popByteBuffer, pushByteBuffer, wrapByteBuffer, toUint8Array,
  writeVarint32, writeVarint64, writeString, writeBytes, writeByteBuffer, writeByte,
  readVarint32, readVarint64, readString, readBytes, readByte, readFloat, readDouble,
  writeFloat, writeDouble, longToString, stringToLong, intToLong,
  pushTemporaryLength, skipUnknownField, isAtEnd,
} from '../shared';
import type { ByteBuffer } from '../shared';
import { _decodeCombinedText, _decodeCommon, _decodeEffectImageInfo, _decodeEffectTextInfo, _decodeEffectiveActivityEmojiGroup, _decodeGiftSortStrategy, _decodeImage, _decodePublicAreaCommon, _decodeQuiz, _decodeRanklistHourEntrance, _decodeRoomIntroAppointmentInfo, _decodeRoomIntroLabel, _decodeRoomMsgExtra, _decodeSandwichBorder, _decodeText, _decodeUser, _encodeCombinedText, _encodeCommon, _encodeEffectImageInfo, _encodeEffectTextInfo, _encodeEffectiveActivityEmojiGroup, _encodeGiftSortStrategy, _encodeImage, _encodePublicAreaCommon, _encodeQuiz, _encodeRanklistHourEntrance, _encodeRoomIntroAppointmentInfo, _encodeRoomIntroLabel, _encodeRoomMsgExtra, _encodeSandwichBorder, _encodeText, _encodeUser } from '../base';
import type { CombinedText, Common, EffectImageInfo, EffectTextInfo, EffectiveActivityEmojiGroup, GiftSortStrategy, Image, PublicAreaCommon, Quiz, RanklistHourEntrance, RoomIntroAppointmentInfo, RoomIntroLabel, RoomMsgExtra, SandwichBorder, Text, User } from '../base';

export interface FansclubMessage {
  commonInfo?: Common;
  type?: number;
  content?: string;
  user?: User;
  upgradePrivilege?: FansclubMessage_UpgradePrivilege;
  publicAreaCommon?: PublicAreaCommon;
  leftDiamond?: string;
}

export function encodeFansclubMessage(message: FansclubMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeFansclubMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeFansclubMessage(message: FansclubMessage, bb: ByteBuffer): void {
  // optional Common commonInfo = 1;
  let $commonInfo = message.commonInfo;
  if ($commonInfo !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeCommon($commonInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int32 type = 2;
  let $type = message.type;
  if ($type !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($type));
  }

  // optional string content = 3;
  let $content = message.content;
  if ($content !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $content);
  }

  // optional User user = 4;
  let $user = message.user;
  if ($user !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeUser($user, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional FansclubMessage_UpgradePrivilege upgradePrivilege = 5;
  let $upgradePrivilege = message.upgradePrivilege;
  if ($upgradePrivilege !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeFansclubMessage_UpgradePrivilege($upgradePrivilege, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional PublicAreaCommon publicAreaCommon = 6;
  let $publicAreaCommon = message.publicAreaCommon;
  if ($publicAreaCommon !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodePublicAreaCommon($publicAreaCommon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 leftDiamond = 7;
  let $leftDiamond = message.leftDiamond;
  if ($leftDiamond !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $leftDiamond);
  }
}

export function decodeFansclubMessage(binary: Uint8Array): FansclubMessage {
  return _decodeFansclubMessage(wrapByteBuffer(binary));
}

function _decodeFansclubMessage(bb: ByteBuffer): FansclubMessage {
  let message: FansclubMessage = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Common commonInfo = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.commonInfo = _decodeCommon(bb);
        bb.limit = limit;
        break;
      }

      // optional int32 type = 2;
      case 2: {
        message.type = readVarint32(bb);
        break;
      }

      // optional string content = 3;
      case 3: {
        message.content = readString(bb, readVarint32(bb));
        break;
      }

      // optional User user = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.user = _decodeUser(bb);
        bb.limit = limit;
        break;
      }

      // optional FansclubMessage_UpgradePrivilege upgradePrivilege = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.upgradePrivilege = _decodeFansclubMessage_UpgradePrivilege(bb);
        bb.limit = limit;
        break;
      }

      // optional PublicAreaCommon publicAreaCommon = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.publicAreaCommon = _decodePublicAreaCommon(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 leftDiamond = 7;
      case 7: {
        message.leftDiamond = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface FansclubMessage_UpgradePrivilege {
  content?: string;
  description?: string;
  buttonType?: number;
}

export function encodeFansclubMessage_UpgradePrivilege(message: FansclubMessage_UpgradePrivilege): Uint8Array {
  let bb = popByteBuffer();
  _encodeFansclubMessage_UpgradePrivilege(message, bb);
  return toUint8Array(bb);
}

function _encodeFansclubMessage_UpgradePrivilege(message: FansclubMessage_UpgradePrivilege, bb: ByteBuffer): void {
  // optional string content = 1;
  let $content = message.content;
  if ($content !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $content);
  }

  // optional string description = 2;
  let $description = message.description;
  if ($description !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $description);
  }

  // optional int32 buttonType = 3;
  let $buttonType = message.buttonType;
  if ($buttonType !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($buttonType));
  }
}

export function decodeFansclubMessage_UpgradePrivilege(binary: Uint8Array): FansclubMessage_UpgradePrivilege {
  return _decodeFansclubMessage_UpgradePrivilege(wrapByteBuffer(binary));
}

function _decodeFansclubMessage_UpgradePrivilege(bb: ByteBuffer): FansclubMessage_UpgradePrivilege {
  let message: FansclubMessage_UpgradePrivilege = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string content = 1;
      case 1: {
        message.content = readString(bb, readVarint32(bb));
        break;
      }

      // optional string description = 2;
      case 2: {
        message.description = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 buttonType = 3;
      case 3: {
        message.buttonType = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RoomMessage {
  common?: Common;
  content?: string;
  supprotLandscape?: boolean;
  roomMessageType?: number;
  systemTopMsg?: boolean;
  forcedGuarantee?: boolean;
  publicAreaCommon?: PublicAreaCommon;
  bizScene?: string;
  extra?: RoomMsgExtra;
}

export function encodeRoomMessage(message: RoomMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeRoomMessage(message: RoomMessage, bb: ByteBuffer): void {
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

  // optional string content = 2;
  let $content = message.content;
  if ($content !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $content);
  }

  // optional bool supprotLandscape = 3;
  let $supprotLandscape = message.supprotLandscape;
  if ($supprotLandscape !== undefined) {
    writeVarint32(bb, 24);
    writeByte(bb, $supprotLandscape ? 1 : 0);
  }

  // optional int32 roomMessageType = 4;
  let $roomMessageType = message.roomMessageType;
  if ($roomMessageType !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($roomMessageType));
  }

  // optional bool systemTopMsg = 5;
  let $systemTopMsg = message.systemTopMsg;
  if ($systemTopMsg !== undefined) {
    writeVarint32(bb, 40);
    writeByte(bb, $systemTopMsg ? 1 : 0);
  }

  // optional bool forcedGuarantee = 6;
  let $forcedGuarantee = message.forcedGuarantee;
  if ($forcedGuarantee !== undefined) {
    writeVarint32(bb, 48);
    writeByte(bb, $forcedGuarantee ? 1 : 0);
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

  // optional string bizScene = 20;
  let $bizScene = message.bizScene;
  if ($bizScene !== undefined) {
    writeVarint32(bb, 162);
    writeString(bb, $bizScene);
  }

  // optional RoomMsgExtra extra = 40;
  let $extra = message.extra;
  if ($extra !== undefined) {
    writeVarint32(bb, 322);
    let nested = popByteBuffer();
    _encodeRoomMsgExtra($extra, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeRoomMessage(binary: Uint8Array): RoomMessage {
  return _decodeRoomMessage(wrapByteBuffer(binary));
}

function _decodeRoomMessage(bb: ByteBuffer): RoomMessage {
  let message: RoomMessage = {} as any;

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

      // optional string content = 2;
      case 2: {
        message.content = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool supprotLandscape = 3;
      case 3: {
        message.supprotLandscape = !!readByte(bb);
        break;
      }

      // optional int32 roomMessageType = 4;
      case 4: {
        message.roomMessageType = readVarint32(bb);
        break;
      }

      // optional bool systemTopMsg = 5;
      case 5: {
        message.systemTopMsg = !!readByte(bb);
        break;
      }

      // optional bool forcedGuarantee = 6;
      case 6: {
        message.forcedGuarantee = !!readByte(bb);
        break;
      }

      // optional PublicAreaCommon publicAreaCommon = 7;
      case 7: {
        let limit = pushTemporaryLength(bb);
        message.publicAreaCommon = _decodePublicAreaCommon(bb);
        bb.limit = limit;
        break;
      }

      // optional string bizScene = 20;
      case 20: {
        message.bizScene = readString(bb, readVarint32(bb));
        break;
      }

      // optional RoomMsgExtra extra = 40;
      case 40: {
        let limit = pushTemporaryLength(bb);
        message.extra = _decodeRoomMsgExtra(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface InRoomBannerMessage {
  common?: Common;
  extra?: string;
  position?: number;
  actionType?: number;
  containerUrl?: string;
  lynxContainerUrl?: string;
  containerType?: number;
  opType?: number;
}

export function encodeInRoomBannerMessage(message: InRoomBannerMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeInRoomBannerMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeInRoomBannerMessage(message: InRoomBannerMessage, bb: ByteBuffer): void {
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

  // optional string extra = 2;
  let $extra = message.extra;
  if ($extra !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $extra);
  }

  // optional int32 position = 3;
  let $position = message.position;
  if ($position !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($position));
  }

  // optional int32 actionType = 4;
  let $actionType = message.actionType;
  if ($actionType !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($actionType));
  }

  // optional string containerUrl = 5;
  let $containerUrl = message.containerUrl;
  if ($containerUrl !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $containerUrl);
  }

  // optional string lynxContainerUrl = 6;
  let $lynxContainerUrl = message.lynxContainerUrl;
  if ($lynxContainerUrl !== undefined) {
    writeVarint32(bb, 50);
    writeString(bb, $lynxContainerUrl);
  }

  // optional int32 containerType = 7;
  let $containerType = message.containerType;
  if ($containerType !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, intToLong($containerType));
  }

  // optional int32 opType = 8;
  let $opType = message.opType;
  if ($opType !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, intToLong($opType));
  }
}

export function decodeInRoomBannerMessage(binary: Uint8Array): InRoomBannerMessage {
  return _decodeInRoomBannerMessage(wrapByteBuffer(binary));
}

function _decodeInRoomBannerMessage(bb: ByteBuffer): InRoomBannerMessage {
  let message: InRoomBannerMessage = {} as any;

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

      // optional string extra = 2;
      case 2: {
        message.extra = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 position = 3;
      case 3: {
        message.position = readVarint32(bb);
        break;
      }

      // optional int32 actionType = 4;
      case 4: {
        message.actionType = readVarint32(bb);
        break;
      }

      // optional string containerUrl = 5;
      case 5: {
        message.containerUrl = readString(bb, readVarint32(bb));
        break;
      }

      // optional string lynxContainerUrl = 6;
      case 6: {
        message.lynxContainerUrl = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 containerType = 7;
      case 7: {
        message.containerType = readVarint32(bb);
        break;
      }

      // optional int32 opType = 8;
      case 8: {
        message.opType = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RoomDataSyncMessage {
  common?: Common;
  roomID?: string;
  syncKey?: string;
  version?: string;
  payload?: Uint8Array;
  bizLogID?: string;
}

export function encodeRoomDataSyncMessage(message: RoomDataSyncMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomDataSyncMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeRoomDataSyncMessage(message: RoomDataSyncMessage, bb: ByteBuffer): void {
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

  // optional int64 roomID = 2;
  let $roomID = message.roomID;
  if ($roomID !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $roomID);
  }

  // optional string syncKey = 3;
  let $syncKey = message.syncKey;
  if ($syncKey !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $syncKey);
  }

  // optional int64 version = 4;
  let $version = message.version;
  if ($version !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $version);
  }

  // optional bytes payload = 5;
  let $payload = message.payload;
  if ($payload !== undefined) {
    writeVarint32(bb, 42);
    writeVarint32(bb, $payload.length), writeBytes(bb, $payload);
  }

  // optional string bizLogID = 6;
  let $bizLogID = message.bizLogID;
  if ($bizLogID !== undefined) {
    writeVarint32(bb, 50);
    writeString(bb, $bizLogID);
  }
}

export function decodeRoomDataSyncMessage(binary: Uint8Array): RoomDataSyncMessage {
  return _decodeRoomDataSyncMessage(wrapByteBuffer(binary));
}

function _decodeRoomDataSyncMessage(bb: ByteBuffer): RoomDataSyncMessage {
  let message: RoomDataSyncMessage = {} as any;

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

      // optional int64 roomID = 2;
      case 2: {
        message.roomID = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string syncKey = 3;
      case 3: {
        message.syncKey = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 version = 4;
      case 4: {
        message.version = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional bytes payload = 5;
      case 5: {
        message.payload = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional string bizLogID = 6;
      case 6: {
        message.bizLogID = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface ActivityEmojiGroupsMessage {
  common?: Common;
  activityEmojiGroups?: EffectiveActivityEmojiGroup[];
}

export function encodeActivityEmojiGroupsMessage(message: ActivityEmojiGroupsMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeActivityEmojiGroupsMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeActivityEmojiGroupsMessage(message: ActivityEmojiGroupsMessage, bb: ByteBuffer): void {
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

  // repeated EffectiveActivityEmojiGroup activityEmojiGroups = 2;
  let array$activityEmojiGroups = message.activityEmojiGroups;
  if (array$activityEmojiGroups !== undefined) {
    for (let value of array$activityEmojiGroups) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeEffectiveActivityEmojiGroup(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeActivityEmojiGroupsMessage(binary: Uint8Array): ActivityEmojiGroupsMessage {
  return _decodeActivityEmojiGroupsMessage(wrapByteBuffer(binary));
}

function _decodeActivityEmojiGroupsMessage(bb: ByteBuffer): ActivityEmojiGroupsMessage {
  let message: ActivityEmojiGroupsMessage = {} as any;

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

      // repeated EffectiveActivityEmojiGroup activityEmojiGroups = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.activityEmojiGroups || (message.activityEmojiGroups = []);
        values.push(_decodeEffectiveActivityEmojiGroup(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GiftSortMessage {
  common?: Common;
  messageType?: number;
  minConsumeLevel?: string;
  sceneInsertStrategy?: GiftSortStrategy;
}

export function encodeGiftSortMessage(message: GiftSortMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeGiftSortMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeGiftSortMessage(message: GiftSortMessage, bb: ByteBuffer): void {
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

  // optional int32 messageType = 2;
  let $messageType = message.messageType;
  if ($messageType !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($messageType));
  }

  // optional int64 minConsumeLevel = 3;
  let $minConsumeLevel = message.minConsumeLevel;
  if ($minConsumeLevel !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $minConsumeLevel);
  }

  // optional GiftSortStrategy sceneInsertStrategy = 4;
  let $sceneInsertStrategy = message.sceneInsertStrategy;
  if ($sceneInsertStrategy !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeGiftSortStrategy($sceneInsertStrategy, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeGiftSortMessage(binary: Uint8Array): GiftSortMessage {
  return _decodeGiftSortMessage(wrapByteBuffer(binary));
}

function _decodeGiftSortMessage(bb: ByteBuffer): GiftSortMessage {
  let message: GiftSortMessage = {} as any;

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

      // optional int32 messageType = 2;
      case 2: {
        message.messageType = readVarint32(bb);
        break;
      }

      // optional int64 minConsumeLevel = 3;
      case 3: {
        message.minConsumeLevel = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional GiftSortStrategy sceneInsertStrategy = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.sceneInsertStrategy = _decodeGiftSortStrategy(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface UpdateFanTicketMessage {
  common?: Common;
  roomFanTicketCountText?: string;
  roomFanTicketCount?: string;
  forceUpdate?: boolean;
}

export function encodeUpdateFanTicketMessage(message: UpdateFanTicketMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeUpdateFanTicketMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeUpdateFanTicketMessage(message: UpdateFanTicketMessage, bb: ByteBuffer): void {
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

  // optional string roomFanTicketCountText = 2;
  let $roomFanTicketCountText = message.roomFanTicketCountText;
  if ($roomFanTicketCountText !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $roomFanTicketCountText);
  }

  // optional int64 roomFanTicketCount = 3;
  let $roomFanTicketCount = message.roomFanTicketCount;
  if ($roomFanTicketCount !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $roomFanTicketCount);
  }

  // optional bool forceUpdate = 4;
  let $forceUpdate = message.forceUpdate;
  if ($forceUpdate !== undefined) {
    writeVarint32(bb, 32);
    writeByte(bb, $forceUpdate ? 1 : 0);
  }
}

export function decodeUpdateFanTicketMessage(binary: Uint8Array): UpdateFanTicketMessage {
  return _decodeUpdateFanTicketMessage(wrapByteBuffer(binary));
}

function _decodeUpdateFanTicketMessage(bb: ByteBuffer): UpdateFanTicketMessage {
  let message: UpdateFanTicketMessage = {} as any;

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

      // optional string roomFanTicketCountText = 2;
      case 2: {
        message.roomFanTicketCountText = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 roomFanTicketCount = 3;
      case 3: {
        message.roomFanTicketCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional bool forceUpdate = 4;
      case 4: {
        message.forceUpdate = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface InteractEffectMessage {
  common?: Common;
  effectId?: string;
  extra?: string;
  teaLog?: string;
  messageType?: string;
  arg1?: string;
  arg2?: string;
  arg3?: string;
}

export function encodeInteractEffectMessage(message: InteractEffectMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeInteractEffectMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeInteractEffectMessage(message: InteractEffectMessage, bb: ByteBuffer): void {
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

  // optional int64 effectId = 2;
  let $effectId = message.effectId;
  if ($effectId !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $effectId);
  }

  // optional string extra = 3;
  let $extra = message.extra;
  if ($extra !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $extra);
  }

  // optional string teaLog = 4;
  let $teaLog = message.teaLog;
  if ($teaLog !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $teaLog);
  }

  // optional int64 messageType = 5;
  let $messageType = message.messageType;
  if ($messageType !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $messageType);
  }

  // optional int64 arg1 = 6;
  let $arg1 = message.arg1;
  if ($arg1 !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $arg1);
  }

  // optional int64 arg2 = 7;
  let $arg2 = message.arg2;
  if ($arg2 !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $arg2);
  }

  // optional string arg3 = 8;
  let $arg3 = message.arg3;
  if ($arg3 !== undefined) {
    writeVarint32(bb, 66);
    writeString(bb, $arg3);
  }
}

export function decodeInteractEffectMessage(binary: Uint8Array): InteractEffectMessage {
  return _decodeInteractEffectMessage(wrapByteBuffer(binary));
}

function _decodeInteractEffectMessage(bb: ByteBuffer): InteractEffectMessage {
  let message: InteractEffectMessage = {} as any;

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

      // optional int64 effectId = 2;
      case 2: {
        message.effectId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string extra = 3;
      case 3: {
        message.extra = readString(bb, readVarint32(bb));
        break;
      }

      // optional string teaLog = 4;
      case 4: {
        message.teaLog = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 messageType = 5;
      case 5: {
        message.messageType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 arg1 = 6;
      case 6: {
        message.arg1 = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 arg2 = 7;
      case 7: {
        message.arg2 = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string arg3 = 8;
      case 8: {
        message.arg3 = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RanklistHourEntranceMessage {
  common?: Common;
  info?: RanklistHourEntrance;
}

export function encodeRanklistHourEntranceMessage(message: RanklistHourEntranceMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeRanklistHourEntranceMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeRanklistHourEntranceMessage(message: RanklistHourEntranceMessage, bb: ByteBuffer): void {
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

  // optional RanklistHourEntrance info = 2;
  let $info = message.info;
  if ($info !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeRanklistHourEntrance($info, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeRanklistHourEntranceMessage(binary: Uint8Array): RanklistHourEntranceMessage {
  return _decodeRanklistHourEntranceMessage(wrapByteBuffer(binary));
}

function _decodeRanklistHourEntranceMessage(bb: ByteBuffer): RanklistHourEntranceMessage {
  let message: RanklistHourEntranceMessage = {} as any;

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

      // optional RanklistHourEntrance info = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.info = _decodeRanklistHourEntrance(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface ChatLikeMessage {
  common?: Common;
}

export function encodeChatLikeMessage(message: ChatLikeMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeChatLikeMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeChatLikeMessage(message: ChatLikeMessage, bb: ByteBuffer): void {
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
}

export function decodeChatLikeMessage(binary: Uint8Array): ChatLikeMessage {
  return _decodeChatLikeMessage(wrapByteBuffer(binary));
}

function _decodeChatLikeMessage(bb: ByteBuffer): ChatLikeMessage {
  let message: ChatLikeMessage = {} as any;

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

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RoomStreamAdaptationMessage {
  common?: Common;
  adaptationType?: number;
  adaptationHeightRatio?: number;
  adaptationBodyCenterRatio?: number;
  adaptationContentTopRatio?: number;
  adaptationContentBottomRatio?: number;
}

export function encodeRoomStreamAdaptationMessage(message: RoomStreamAdaptationMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomStreamAdaptationMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeRoomStreamAdaptationMessage(message: RoomStreamAdaptationMessage, bb: ByteBuffer): void {
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

  // optional int32 adaptationType = 2;
  let $adaptationType = message.adaptationType;
  if ($adaptationType !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($adaptationType));
  }

  // optional float adaptationHeightRatio = 3;
  let $adaptationHeightRatio = message.adaptationHeightRatio;
  if ($adaptationHeightRatio !== undefined) {
    writeVarint32(bb, 29);
    writeFloat(bb, $adaptationHeightRatio);
  }

  // optional float adaptationBodyCenterRatio = 4;
  let $adaptationBodyCenterRatio = message.adaptationBodyCenterRatio;
  if ($adaptationBodyCenterRatio !== undefined) {
    writeVarint32(bb, 37);
    writeFloat(bb, $adaptationBodyCenterRatio);
  }

  // optional float adaptationContentTopRatio = 5;
  let $adaptationContentTopRatio = message.adaptationContentTopRatio;
  if ($adaptationContentTopRatio !== undefined) {
    writeVarint32(bb, 45);
    writeFloat(bb, $adaptationContentTopRatio);
  }

  // optional float adaptationContentBottomRatio = 6;
  let $adaptationContentBottomRatio = message.adaptationContentBottomRatio;
  if ($adaptationContentBottomRatio !== undefined) {
    writeVarint32(bb, 53);
    writeFloat(bb, $adaptationContentBottomRatio);
  }
}

export function decodeRoomStreamAdaptationMessage(binary: Uint8Array): RoomStreamAdaptationMessage {
  return _decodeRoomStreamAdaptationMessage(wrapByteBuffer(binary));
}

function _decodeRoomStreamAdaptationMessage(bb: ByteBuffer): RoomStreamAdaptationMessage {
  let message: RoomStreamAdaptationMessage = {} as any;

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

      // optional int32 adaptationType = 2;
      case 2: {
        message.adaptationType = readVarint32(bb);
        break;
      }

      // optional float adaptationHeightRatio = 3;
      case 3: {
        message.adaptationHeightRatio = readFloat(bb);
        break;
      }

      // optional float adaptationBodyCenterRatio = 4;
      case 4: {
        message.adaptationBodyCenterRatio = readFloat(bb);
        break;
      }

      // optional float adaptationContentTopRatio = 5;
      case 5: {
        message.adaptationContentTopRatio = readFloat(bb);
        break;
      }

      // optional float adaptationContentBottomRatio = 6;
      case 6: {
        message.adaptationContentBottomRatio = readFloat(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface TopEffectMessage {
  common?: Common;
  assetId?: string;
  priority?: string;
  action?: number;
  scene?: string;
  endTime?: string;
  fadeInDuration?: string;
  fadeOutDuration?: string;
  images?: EffectImageInfo[];
  texts?: EffectTextInfo[];
}

export function encodeTopEffectMessage(message: TopEffectMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeTopEffectMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeTopEffectMessage(message: TopEffectMessage, bb: ByteBuffer): void {
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

  // optional int64 assetId = 2;
  let $assetId = message.assetId;
  if ($assetId !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $assetId);
  }

  // optional int64 priority = 3;
  let $priority = message.priority;
  if ($priority !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $priority);
  }

  // optional int32 action = 4;
  let $action = message.action;
  if ($action !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($action));
  }

  // optional string scene = 5;
  let $scene = message.scene;
  if ($scene !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $scene);
  }

  // optional int64 endTime = 6;
  let $endTime = message.endTime;
  if ($endTime !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $endTime);
  }

  // optional int64 fadeInDuration = 7;
  let $fadeInDuration = message.fadeInDuration;
  if ($fadeInDuration !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $fadeInDuration);
  }

  // optional int64 fadeOutDuration = 8;
  let $fadeOutDuration = message.fadeOutDuration;
  if ($fadeOutDuration !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, $fadeOutDuration);
  }

  // repeated EffectImageInfo images = 10;
  let array$images = message.images;
  if (array$images !== undefined) {
    for (let value of array$images) {
      writeVarint32(bb, 82);
      let nested = popByteBuffer();
      _encodeEffectImageInfo(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // repeated EffectTextInfo texts = 20;
  let array$texts = message.texts;
  if (array$texts !== undefined) {
    for (let value of array$texts) {
      writeVarint32(bb, 162);
      let nested = popByteBuffer();
      _encodeEffectTextInfo(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeTopEffectMessage(binary: Uint8Array): TopEffectMessage {
  return _decodeTopEffectMessage(wrapByteBuffer(binary));
}

function _decodeTopEffectMessage(bb: ByteBuffer): TopEffectMessage {
  let message: TopEffectMessage = {} as any;

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

      // optional int64 assetId = 2;
      case 2: {
        message.assetId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 priority = 3;
      case 3: {
        message.priority = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 action = 4;
      case 4: {
        message.action = readVarint32(bb);
        break;
      }

      // optional string scene = 5;
      case 5: {
        message.scene = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 endTime = 6;
      case 6: {
        message.endTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 fadeInDuration = 7;
      case 7: {
        message.fadeInDuration = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 fadeOutDuration = 8;
      case 8: {
        message.fadeOutDuration = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // repeated EffectImageInfo images = 10;
      case 10: {
        let limit = pushTemporaryLength(bb);
        let values = message.images || (message.images = []);
        values.push(_decodeEffectImageInfo(bb));
        bb.limit = limit;
        break;
      }

      // repeated EffectTextInfo texts = 20;
      case 20: {
        let limit = pushTemporaryLength(bb);
        let values = message.texts || (message.texts = []);
        values.push(_decodeEffectTextInfo(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RoomIntroMessage {
  common?: Common;
  user?: User;
  style?: string;
  intro?: string;
  label?: string;
  introVideoItemId?: string;
  introVideoTitle?: string;
  selectedLabels?: RoomIntroLabel[];
  introLabels?: RoomIntroLabel[];
  publicAreaCommon?: PublicAreaCommon;
  poiEnabled?: boolean;
  appointmentInfo?: RoomIntroAppointmentInfo;
}

export function encodeRoomIntroMessage(message: RoomIntroMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomIntroMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeRoomIntroMessage(message: RoomIntroMessage, bb: ByteBuffer): void {
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

  // optional int64 style = 3;
  let $style = message.style;
  if ($style !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $style);
  }

  // optional string intro = 4;
  let $intro = message.intro;
  if ($intro !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $intro);
  }

  // optional string label = 5;
  let $label = message.label;
  if ($label !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $label);
  }

  // optional int64 introVideoItemId = 6;
  let $introVideoItemId = message.introVideoItemId;
  if ($introVideoItemId !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $introVideoItemId);
  }

  // optional string introVideoTitle = 7;
  let $introVideoTitle = message.introVideoTitle;
  if ($introVideoTitle !== undefined) {
    writeVarint32(bb, 58);
    writeString(bb, $introVideoTitle);
  }

  // repeated RoomIntroLabel selectedLabels = 8;
  let array$selectedLabels = message.selectedLabels;
  if (array$selectedLabels !== undefined) {
    for (let value of array$selectedLabels) {
      writeVarint32(bb, 66);
      let nested = popByteBuffer();
      _encodeRoomIntroLabel(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // repeated RoomIntroLabel introLabels = 9;
  let array$introLabels = message.introLabels;
  if (array$introLabels !== undefined) {
    for (let value of array$introLabels) {
      writeVarint32(bb, 74);
      let nested = popByteBuffer();
      _encodeRoomIntroLabel(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional PublicAreaCommon publicAreaCommon = 10;
  let $publicAreaCommon = message.publicAreaCommon;
  if ($publicAreaCommon !== undefined) {
    writeVarint32(bb, 82);
    let nested = popByteBuffer();
    _encodePublicAreaCommon($publicAreaCommon, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool poiEnabled = 11;
  let $poiEnabled = message.poiEnabled;
  if ($poiEnabled !== undefined) {
    writeVarint32(bb, 88);
    writeByte(bb, $poiEnabled ? 1 : 0);
  }

  // optional RoomIntroAppointmentInfo appointmentInfo = 22;
  let $appointmentInfo = message.appointmentInfo;
  if ($appointmentInfo !== undefined) {
    writeVarint32(bb, 178);
    let nested = popByteBuffer();
    _encodeRoomIntroAppointmentInfo($appointmentInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeRoomIntroMessage(binary: Uint8Array): RoomIntroMessage {
  return _decodeRoomIntroMessage(wrapByteBuffer(binary));
}

function _decodeRoomIntroMessage(bb: ByteBuffer): RoomIntroMessage {
  let message: RoomIntroMessage = {} as any;

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

      // optional int64 style = 3;
      case 3: {
        message.style = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string intro = 4;
      case 4: {
        message.intro = readString(bb, readVarint32(bb));
        break;
      }

      // optional string label = 5;
      case 5: {
        message.label = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 introVideoItemId = 6;
      case 6: {
        message.introVideoItemId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string introVideoTitle = 7;
      case 7: {
        message.introVideoTitle = readString(bb, readVarint32(bb));
        break;
      }

      // repeated RoomIntroLabel selectedLabels = 8;
      case 8: {
        let limit = pushTemporaryLength(bb);
        let values = message.selectedLabels || (message.selectedLabels = []);
        values.push(_decodeRoomIntroLabel(bb));
        bb.limit = limit;
        break;
      }

      // repeated RoomIntroLabel introLabels = 9;
      case 9: {
        let limit = pushTemporaryLength(bb);
        let values = message.introLabels || (message.introLabels = []);
        values.push(_decodeRoomIntroLabel(bb));
        bb.limit = limit;
        break;
      }

      // optional PublicAreaCommon publicAreaCommon = 10;
      case 10: {
        let limit = pushTemporaryLength(bb);
        message.publicAreaCommon = _decodePublicAreaCommon(bb);
        bb.limit = limit;
        break;
      }

      // optional bool poiEnabled = 11;
      case 11: {
        message.poiEnabled = !!readByte(bb);
        break;
      }

      // optional RoomIntroAppointmentInfo appointmentInfo = 22;
      case 22: {
        let limit = pushTemporaryLength(bb);
        message.appointmentInfo = _decodeRoomIntroAppointmentInfo(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SandwichBorderMessage {
  common?: Common;
  sandwichBorderInfo?: SandwichBorder;
}

export function encodeSandwichBorderMessage(message: SandwichBorderMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeSandwichBorderMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeSandwichBorderMessage(message: SandwichBorderMessage, bb: ByteBuffer): void {
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

  // optional SandwichBorder sandwichBorderInfo = 2;
  let $sandwichBorderInfo = message.sandwichBorderInfo;
  if ($sandwichBorderInfo !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeSandwichBorder($sandwichBorderInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeSandwichBorderMessage(binary: Uint8Array): SandwichBorderMessage {
  return _decodeSandwichBorderMessage(wrapByteBuffer(binary));
}

function _decodeSandwichBorderMessage(bb: ByteBuffer): SandwichBorderMessage {
  let message: SandwichBorderMessage = {} as any;

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

      // optional SandwichBorder sandwichBorderInfo = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.sandwichBorderInfo = _decodeSandwichBorder(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface NotifyEffectMessage {
  common?: Common;
  icons?: Image[];
  text?: Text;
  background?: NotifyEffectMessage_Background;
  dynamicConfig?: NotifyEffectMessage_DynamicConfig;
  textV2?: CombinedText;
  supportLandscape?: boolean;
  sceneConfig?: NotifyEffectMessage_SceneConfig;
}

export function encodeNotifyEffectMessage(message: NotifyEffectMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeNotifyEffectMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeNotifyEffectMessage(message: NotifyEffectMessage, bb: ByteBuffer): void {
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

  // repeated Image icons = 2;
  let array$icons = message.icons;
  if (array$icons !== undefined) {
    for (let value of array$icons) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeImage(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
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

  // optional NotifyEffectMessage_Background background = 4;
  let $background = message.background;
  if ($background !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeNotifyEffectMessage_Background($background, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional NotifyEffectMessage_DynamicConfig dynamicConfig = 5;
  let $dynamicConfig = message.dynamicConfig;
  if ($dynamicConfig !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeNotifyEffectMessage_DynamicConfig($dynamicConfig, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional CombinedText textV2 = 6;
  let $textV2 = message.textV2;
  if ($textV2 !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeCombinedText($textV2, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool supportLandscape = 7;
  let $supportLandscape = message.supportLandscape;
  if ($supportLandscape !== undefined) {
    writeVarint32(bb, 56);
    writeByte(bb, $supportLandscape ? 1 : 0);
  }

  // optional NotifyEffectMessage_SceneConfig sceneConfig = 10;
  let $sceneConfig = message.sceneConfig;
  if ($sceneConfig !== undefined) {
    writeVarint32(bb, 82);
    let nested = popByteBuffer();
    _encodeNotifyEffectMessage_SceneConfig($sceneConfig, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeNotifyEffectMessage(binary: Uint8Array): NotifyEffectMessage {
  return _decodeNotifyEffectMessage(wrapByteBuffer(binary));
}

function _decodeNotifyEffectMessage(bb: ByteBuffer): NotifyEffectMessage {
  let message: NotifyEffectMessage = {} as any;

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

      // repeated Image icons = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.icons || (message.icons = []);
        values.push(_decodeImage(bb));
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

      // optional NotifyEffectMessage_Background background = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.background = _decodeNotifyEffectMessage_Background(bb);
        bb.limit = limit;
        break;
      }

      // optional NotifyEffectMessage_DynamicConfig dynamicConfig = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.dynamicConfig = _decodeNotifyEffectMessage_DynamicConfig(bb);
        bb.limit = limit;
        break;
      }

      // optional CombinedText textV2 = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.textV2 = _decodeCombinedText(bb);
        bb.limit = limit;
        break;
      }

      // optional bool supportLandscape = 7;
      case 7: {
        message.supportLandscape = !!readByte(bb);
        break;
      }

      // optional NotifyEffectMessage_SceneConfig sceneConfig = 10;
      case 10: {
        let limit = pushTemporaryLength(bb);
        message.sceneConfig = _decodeNotifyEffectMessage_SceneConfig(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface NotifyEffectMessage_Background {
  backgroundImage?: Image;
  backgroundColor?: string;
  backgroundEffect?: Image;
}

export function encodeNotifyEffectMessage_Background(message: NotifyEffectMessage_Background): Uint8Array {
  let bb = popByteBuffer();
  _encodeNotifyEffectMessage_Background(message, bb);
  return toUint8Array(bb);
}

function _encodeNotifyEffectMessage_Background(message: NotifyEffectMessage_Background, bb: ByteBuffer): void {
  // optional Image backgroundImage = 1;
  let $backgroundImage = message.backgroundImage;
  if ($backgroundImage !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeImage($backgroundImage, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string backgroundColor = 10;
  let $backgroundColor = message.backgroundColor;
  if ($backgroundColor !== undefined) {
    writeVarint32(bb, 82);
    writeString(bb, $backgroundColor);
  }

  // optional Image backgroundEffect = 11;
  let $backgroundEffect = message.backgroundEffect;
  if ($backgroundEffect !== undefined) {
    writeVarint32(bb, 90);
    let nested = popByteBuffer();
    _encodeImage($backgroundEffect, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeNotifyEffectMessage_Background(binary: Uint8Array): NotifyEffectMessage_Background {
  return _decodeNotifyEffectMessage_Background(wrapByteBuffer(binary));
}

function _decodeNotifyEffectMessage_Background(bb: ByteBuffer): NotifyEffectMessage_Background {
  let message: NotifyEffectMessage_Background = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Image backgroundImage = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.backgroundImage = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      // optional string backgroundColor = 10;
      case 10: {
        message.backgroundColor = readString(bb, readVarint32(bb));
        break;
      }

      // optional Image backgroundEffect = 11;
      case 11: {
        let limit = pushTemporaryLength(bb);
        message.backgroundEffect = _decodeImage(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface NotifyEffectMessage_DynamicConfig {
  stayTime?: number;
  maxStayTime?: number;
  displayEffectType?: number;
}

export function encodeNotifyEffectMessage_DynamicConfig(message: NotifyEffectMessage_DynamicConfig): Uint8Array {
  let bb = popByteBuffer();
  _encodeNotifyEffectMessage_DynamicConfig(message, bb);
  return toUint8Array(bb);
}

function _encodeNotifyEffectMessage_DynamicConfig(message: NotifyEffectMessage_DynamicConfig, bb: ByteBuffer): void {
  // optional int32 stayTime = 1;
  let $stayTime = message.stayTime;
  if ($stayTime !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($stayTime));
  }

  // optional int32 maxStayTime = 2;
  let $maxStayTime = message.maxStayTime;
  if ($maxStayTime !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($maxStayTime));
  }

  // optional int32 displayEffectType = 3;
  let $displayEffectType = message.displayEffectType;
  if ($displayEffectType !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($displayEffectType));
  }
}

export function decodeNotifyEffectMessage_DynamicConfig(binary: Uint8Array): NotifyEffectMessage_DynamicConfig {
  return _decodeNotifyEffectMessage_DynamicConfig(wrapByteBuffer(binary));
}

function _decodeNotifyEffectMessage_DynamicConfig(bb: ByteBuffer): NotifyEffectMessage_DynamicConfig {
  let message: NotifyEffectMessage_DynamicConfig = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 stayTime = 1;
      case 1: {
        message.stayTime = readVarint32(bb);
        break;
      }

      // optional int32 maxStayTime = 2;
      case 2: {
        message.maxStayTime = readVarint32(bb);
        break;
      }

      // optional int32 displayEffectType = 3;
      case 3: {
        message.displayEffectType = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface NotifyEffectMessage_SceneConfig {
  scene?: string;
  priority?: string;
  needAggregate?: boolean;
  aggregateNum?: string;
  aggregateText?: Text;
  subScene?: string;
  maxWaitTime?: string;
}

export function encodeNotifyEffectMessage_SceneConfig(message: NotifyEffectMessage_SceneConfig): Uint8Array {
  let bb = popByteBuffer();
  _encodeNotifyEffectMessage_SceneConfig(message, bb);
  return toUint8Array(bb);
}

function _encodeNotifyEffectMessage_SceneConfig(message: NotifyEffectMessage_SceneConfig, bb: ByteBuffer): void {
  // optional string scene = 1;
  let $scene = message.scene;
  if ($scene !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $scene);
  }

  // optional int64 priority = 2;
  let $priority = message.priority;
  if ($priority !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $priority);
  }

  // optional bool needAggregate = 3;
  let $needAggregate = message.needAggregate;
  if ($needAggregate !== undefined) {
    writeVarint32(bb, 24);
    writeByte(bb, $needAggregate ? 1 : 0);
  }

  // optional int64 aggregateNum = 4;
  let $aggregateNum = message.aggregateNum;
  if ($aggregateNum !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $aggregateNum);
  }

  // optional Text aggregateText = 5;
  let $aggregateText = message.aggregateText;
  if ($aggregateText !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeText($aggregateText, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional string subScene = 6;
  let $subScene = message.subScene;
  if ($subScene !== undefined) {
    writeVarint32(bb, 50);
    writeString(bb, $subScene);
  }

  // optional int64 maxWaitTime = 7;
  let $maxWaitTime = message.maxWaitTime;
  if ($maxWaitTime !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $maxWaitTime);
  }
}

export function decodeNotifyEffectMessage_SceneConfig(binary: Uint8Array): NotifyEffectMessage_SceneConfig {
  return _decodeNotifyEffectMessage_SceneConfig(wrapByteBuffer(binary));
}

function _decodeNotifyEffectMessage_SceneConfig(bb: ByteBuffer): NotifyEffectMessage_SceneConfig {
  let message: NotifyEffectMessage_SceneConfig = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string scene = 1;
      case 1: {
        message.scene = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 priority = 2;
      case 2: {
        message.priority = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional bool needAggregate = 3;
      case 3: {
        message.needAggregate = !!readByte(bb);
        break;
      }

      // optional int64 aggregateNum = 4;
      case 4: {
        message.aggregateNum = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional Text aggregateText = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.aggregateText = _decodeText(bb);
        bb.limit = limit;
        break;
      }

      // optional string subScene = 6;
      case 6: {
        message.subScene = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 maxWaitTime = 7;
      case 7: {
        message.maxWaitTime = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface NotifyMessage {
  common?: Common;
  schema?: string;
  notifyType?: string;
  content?: string;
  user?: User;
  extra?: NotifyMessage_Extra;
  notifyClass?: string;
  flexSetting?: string[];
  bizScene?: string;
}

export function encodeNotifyMessage(message: NotifyMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeNotifyMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeNotifyMessage(message: NotifyMessage, bb: ByteBuffer): void {
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

  // optional string schema = 2;
  let $schema = message.schema;
  if ($schema !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $schema);
  }

  // optional int64 notifyType = 3;
  let $notifyType = message.notifyType;
  if ($notifyType !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $notifyType);
  }

  // optional string content = 4;
  let $content = message.content;
  if ($content !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $content);
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

  // optional NotifyMessage_Extra extra = 6;
  let $extra = message.extra;
  if ($extra !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeNotifyMessage_Extra($extra, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 notifyClass = 7;
  let $notifyClass = message.notifyClass;
  if ($notifyClass !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $notifyClass);
  }

  // repeated int64 flexSetting = 8;
  let array$flexSetting = message.flexSetting;
  if (array$flexSetting !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$flexSetting) {
      writeVarint64(packed, value);
    }
    writeVarint32(bb, 66);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // optional string bizScene = 100;
  let $bizScene = message.bizScene;
  if ($bizScene !== undefined) {
    writeVarint32(bb, 802);
    writeString(bb, $bizScene);
  }
}

export function decodeNotifyMessage(binary: Uint8Array): NotifyMessage {
  return _decodeNotifyMessage(wrapByteBuffer(binary));
}

function _decodeNotifyMessage(bb: ByteBuffer): NotifyMessage {
  let message: NotifyMessage = {} as any;

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

      // optional string schema = 2;
      case 2: {
        message.schema = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 notifyType = 3;
      case 3: {
        message.notifyType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string content = 4;
      case 4: {
        message.content = readString(bb, readVarint32(bb));
        break;
      }

      // optional User user = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.user = _decodeUser(bb);
        bb.limit = limit;
        break;
      }

      // optional NotifyMessage_Extra extra = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.extra = _decodeNotifyMessage_Extra(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 notifyClass = 7;
      case 7: {
        message.notifyClass = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // repeated int64 flexSetting = 8;
      case 8: {
        let values = message.flexSetting || (message.flexSetting = []);
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

      // optional string bizScene = 100;
      case 100: {
        message.bizScene = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface NotifyMessage_Extra {
  duration?: string;
  background?: NotifyMessage_Background;
  contentList?: NotifyMessage_ContentList;
  needGiftFrequency?: boolean;
}

export function encodeNotifyMessage_Extra(message: NotifyMessage_Extra): Uint8Array {
  let bb = popByteBuffer();
  _encodeNotifyMessage_Extra(message, bb);
  return toUint8Array(bb);
}

function _encodeNotifyMessage_Extra(message: NotifyMessage_Extra, bb: ByteBuffer): void {
  // optional int64 duration = 1;
  let $duration = message.duration;
  if ($duration !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $duration);
  }

  // optional NotifyMessage_Background background = 2;
  let $background = message.background;
  if ($background !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeNotifyMessage_Background($background, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional NotifyMessage_ContentList contentList = 3;
  let $contentList = message.contentList;
  if ($contentList !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeNotifyMessage_ContentList($contentList, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional bool needGiftFrequency = 6;
  let $needGiftFrequency = message.needGiftFrequency;
  if ($needGiftFrequency !== undefined) {
    writeVarint32(bb, 48);
    writeByte(bb, $needGiftFrequency ? 1 : 0);
  }
}

export function decodeNotifyMessage_Extra(binary: Uint8Array): NotifyMessage_Extra {
  return _decodeNotifyMessage_Extra(wrapByteBuffer(binary));
}

function _decodeNotifyMessage_Extra(bb: ByteBuffer): NotifyMessage_Extra {
  let message: NotifyMessage_Extra = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 duration = 1;
      case 1: {
        message.duration = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional NotifyMessage_Background background = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.background = _decodeNotifyMessage_Background(bb);
        bb.limit = limit;
        break;
      }

      // optional NotifyMessage_ContentList contentList = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.contentList = _decodeNotifyMessage_ContentList(bb);
        bb.limit = limit;
        break;
      }

      // optional bool needGiftFrequency = 6;
      case 6: {
        message.needGiftFrequency = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface NotifyMessage_Background {
  width?: number;
  height?: number;
  urlList?: string;
  uri?: string;
}

export function encodeNotifyMessage_Background(message: NotifyMessage_Background): Uint8Array {
  let bb = popByteBuffer();
  _encodeNotifyMessage_Background(message, bb);
  return toUint8Array(bb);
}

function _encodeNotifyMessage_Background(message: NotifyMessage_Background, bb: ByteBuffer): void {
  // optional int32 width = 1;
  let $width = message.width;
  if ($width !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($width));
  }

  // optional int32 height = 2;
  let $height = message.height;
  if ($height !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($height));
  }

  // optional string urlList = 3;
  let $urlList = message.urlList;
  if ($urlList !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $urlList);
  }

  // optional string uri = 4;
  let $uri = message.uri;
  if ($uri !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $uri);
  }
}

export function decodeNotifyMessage_Background(binary: Uint8Array): NotifyMessage_Background {
  return _decodeNotifyMessage_Background(wrapByteBuffer(binary));
}

function _decodeNotifyMessage_Background(bb: ByteBuffer): NotifyMessage_Background {
  let message: NotifyMessage_Background = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 width = 1;
      case 1: {
        message.width = readVarint32(bb);
        break;
      }

      // optional int32 height = 2;
      case 2: {
        message.height = readVarint32(bb);
        break;
      }

      // optional string urlList = 3;
      case 3: {
        message.urlList = readString(bb, readVarint32(bb));
        break;
      }

      // optional string uri = 4;
      case 4: {
        message.uri = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface NotifyMessage_ContentList {
  contents?: NotifyMessage_Content[];
  highLightColor?: string;
}

export function encodeNotifyMessage_ContentList(message: NotifyMessage_ContentList): Uint8Array {
  let bb = popByteBuffer();
  _encodeNotifyMessage_ContentList(message, bb);
  return toUint8Array(bb);
}

function _encodeNotifyMessage_ContentList(message: NotifyMessage_ContentList, bb: ByteBuffer): void {
  // repeated NotifyMessage_Content contents = 1;
  let array$contents = message.contents;
  if (array$contents !== undefined) {
    for (let value of array$contents) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeNotifyMessage_Content(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional string highLightColor = 2;
  let $highLightColor = message.highLightColor;
  if ($highLightColor !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $highLightColor);
  }
}

export function decodeNotifyMessage_ContentList(binary: Uint8Array): NotifyMessage_ContentList {
  return _decodeNotifyMessage_ContentList(wrapByteBuffer(binary));
}

function _decodeNotifyMessage_ContentList(bb: ByteBuffer): NotifyMessage_ContentList {
  let message: NotifyMessage_ContentList = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated NotifyMessage_Content contents = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.contents || (message.contents = []);
        values.push(_decodeNotifyMessage_Content(bb));
        bb.limit = limit;
        break;
      }

      // optional string highLightColor = 2;
      case 2: {
        message.highLightColor = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface NotifyMessage_Content {
  content?: string;
  needHighLight?: boolean;
}

export function encodeNotifyMessage_Content(message: NotifyMessage_Content): Uint8Array {
  let bb = popByteBuffer();
  _encodeNotifyMessage_Content(message, bb);
  return toUint8Array(bb);
}

function _encodeNotifyMessage_Content(message: NotifyMessage_Content, bb: ByteBuffer): void {
  // optional string content = 1;
  let $content = message.content;
  if ($content !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $content);
  }

  // optional bool needHighLight = 2;
  let $needHighLight = message.needHighLight;
  if ($needHighLight !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $needHighLight ? 1 : 0);
  }
}

export function decodeNotifyMessage_Content(binary: Uint8Array): NotifyMessage_Content {
  return _decodeNotifyMessage_Content(wrapByteBuffer(binary));
}

function _decodeNotifyMessage_Content(bb: ByteBuffer): NotifyMessage_Content {
  let message: NotifyMessage_Content = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string content = 1;
      case 1: {
        message.content = readString(bb, readVarint32(bb));
        break;
      }

      // optional bool needHighLight = 2;
      case 2: {
        message.needHighLight = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface RoomNotifyMessage {
  common?: Common;
  schema?: string;
  notifyType?: string;
  content?: string;
  user?: User;
  extra?: NotifyMessage_Extra;
  notifyClass?: string;
  flexSetting?: string[];
  bizScene?: string;
}

export function encodeRoomNotifyMessage(message: RoomNotifyMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomNotifyMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeRoomNotifyMessage(message: RoomNotifyMessage, bb: ByteBuffer): void {
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

  // optional string schema = 2;
  let $schema = message.schema;
  if ($schema !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $schema);
  }

  // optional int64 notifyType = 3;
  let $notifyType = message.notifyType;
  if ($notifyType !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $notifyType);
  }

  // optional string content = 4;
  let $content = message.content;
  if ($content !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $content);
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

  // optional NotifyMessage_Extra extra = 6;
  let $extra = message.extra;
  if ($extra !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeNotifyMessage_Extra($extra, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional int64 notifyClass = 7;
  let $notifyClass = message.notifyClass;
  if ($notifyClass !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $notifyClass);
  }

  // repeated int64 flexSetting = 8;
  let array$flexSetting = message.flexSetting;
  if (array$flexSetting !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$flexSetting) {
      writeVarint64(packed, value);
    }
    writeVarint32(bb, 66);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // optional string bizScene = 100;
  let $bizScene = message.bizScene;
  if ($bizScene !== undefined) {
    writeVarint32(bb, 802);
    writeString(bb, $bizScene);
  }
}

export function decodeRoomNotifyMessage(binary: Uint8Array): RoomNotifyMessage {
  return _decodeRoomNotifyMessage(wrapByteBuffer(binary));
}

function _decodeRoomNotifyMessage(bb: ByteBuffer): RoomNotifyMessage {
  let message: RoomNotifyMessage = {} as any;

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

      // optional string schema = 2;
      case 2: {
        message.schema = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 notifyType = 3;
      case 3: {
        message.notifyType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string content = 4;
      case 4: {
        message.content = readString(bb, readVarint32(bb));
        break;
      }

      // optional User user = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.user = _decodeUser(bb);
        bb.limit = limit;
        break;
      }

      // optional NotifyMessage_Extra extra = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.extra = _decodeNotifyMessage_Extra(bb);
        bb.limit = limit;
        break;
      }

      // optional int64 notifyClass = 7;
      case 7: {
        message.notifyClass = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // repeated int64 flexSetting = 8;
      case 8: {
        let values = message.flexSetting || (message.flexSetting = []);
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

      // optional string bizScene = 100;
      case 100: {
        message.bizScene = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface QuizAudienceStatusMessage {
  common?: Common;
  quizList?: Quiz[];
}

export function encodeQuizAudienceStatusMessage(message: QuizAudienceStatusMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeQuizAudienceStatusMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeQuizAudienceStatusMessage(message: QuizAudienceStatusMessage, bb: ByteBuffer): void {
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

  // repeated Quiz quizList = 2;
  let array$quizList = message.quizList;
  if (array$quizList !== undefined) {
    for (let value of array$quizList) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeQuiz(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeQuizAudienceStatusMessage(binary: Uint8Array): QuizAudienceStatusMessage {
  return _decodeQuizAudienceStatusMessage(wrapByteBuffer(binary));
}

function _decodeQuizAudienceStatusMessage(bb: ByteBuffer): QuizAudienceStatusMessage {
  let message: QuizAudienceStatusMessage = {} as any;

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

      // repeated Quiz quizList = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.quizList || (message.quizList = []);
        values.push(_decodeQuiz(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface TempStateAreaReachMessage {
  common?: Common;
  elemType?: string;
  elemId?: string;
  itemId?: string;
  status?: string;
  resource?: TempStateAreaReachMessage_Resource;
}

export function encodeTempStateAreaReachMessage(message: TempStateAreaReachMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeTempStateAreaReachMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeTempStateAreaReachMessage(message: TempStateAreaReachMessage, bb: ByteBuffer): void {
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

  // optional int64 elemType = 2;
  let $elemType = message.elemType;
  if ($elemType !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $elemType);
  }

  // optional int64 elemId = 3;
  let $elemId = message.elemId;
  if ($elemId !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $elemId);
  }

  // optional int64 itemId = 4;
  let $itemId = message.itemId;
  if ($itemId !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $itemId);
  }

  // optional int64 status = 5;
  let $status = message.status;
  if ($status !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $status);
  }

  // optional TempStateAreaReachMessage_Resource resource = 6;
  let $resource = message.resource;
  if ($resource !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeTempStateAreaReachMessage_Resource($resource, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeTempStateAreaReachMessage(binary: Uint8Array): TempStateAreaReachMessage {
  return _decodeTempStateAreaReachMessage(wrapByteBuffer(binary));
}

function _decodeTempStateAreaReachMessage(bb: ByteBuffer): TempStateAreaReachMessage {
  let message: TempStateAreaReachMessage = {} as any;

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

      // optional int64 elemType = 2;
      case 2: {
        message.elemType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 elemId = 3;
      case 3: {
        message.elemId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 itemId = 4;
      case 4: {
        message.itemId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 status = 5;
      case 5: {
        message.status = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional TempStateAreaReachMessage_Resource resource = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.resource = _decodeTempStateAreaReachMessage_Resource(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface TempStateAreaReachMessage_Resource {
  name?: string;
  icon?: string;
  description?: string;
  extra?: string;
}

export function encodeTempStateAreaReachMessage_Resource(message: TempStateAreaReachMessage_Resource): Uint8Array {
  let bb = popByteBuffer();
  _encodeTempStateAreaReachMessage_Resource(message, bb);
  return toUint8Array(bb);
}

function _encodeTempStateAreaReachMessage_Resource(message: TempStateAreaReachMessage_Resource, bb: ByteBuffer): void {
  // optional string name = 1;
  let $name = message.name;
  if ($name !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $name);
  }

  // optional string icon = 2;
  let $icon = message.icon;
  if ($icon !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $icon);
  }

  // optional string description = 3;
  let $description = message.description;
  if ($description !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $description);
  }

  // optional string extra = 4;
  let $extra = message.extra;
  if ($extra !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $extra);
  }
}

export function decodeTempStateAreaReachMessage_Resource(binary: Uint8Array): TempStateAreaReachMessage_Resource {
  return _decodeTempStateAreaReachMessage_Resource(wrapByteBuffer(binary));
}

function _decodeTempStateAreaReachMessage_Resource(bb: ByteBuffer): TempStateAreaReachMessage_Resource {
  let message: TempStateAreaReachMessage_Resource = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string name = 1;
      case 1: {
        message.name = readString(bb, readVarint32(bb));
        break;
      }

      // optional string icon = 2;
      case 2: {
        message.icon = readString(bb, readVarint32(bb));
        break;
      }

      // optional string description = 3;
      case 3: {
        message.description = readString(bb, readVarint32(bb));
        break;
      }

      // optional string extra = 4;
      case 4: {
        message.extra = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface CornerReachMessage {
  common?: Common;
  duration?: string;
  elemType?: string;
}

export function encodeCornerReachMessage(message: CornerReachMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeCornerReachMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeCornerReachMessage(message: CornerReachMessage, bb: ByteBuffer): void {
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

  // optional int64 duration = 2;
  let $duration = message.duration;
  if ($duration !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $duration);
  }

  // optional int64 elemType = 3;
  let $elemType = message.elemType;
  if ($elemType !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $elemType);
  }
}

export function decodeCornerReachMessage(binary: Uint8Array): CornerReachMessage {
  return _decodeCornerReachMessage(wrapByteBuffer(binary));
}

function _decodeCornerReachMessage(bb: ByteBuffer): CornerReachMessage {
  let message: CornerReachMessage = {} as any;

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

      // optional int64 duration = 2;
      case 2: {
        message.duration = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 elemType = 3;
      case 3: {
        message.elemType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

