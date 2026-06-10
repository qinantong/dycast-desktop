import asyncio
import websockets
import time

async def echo(websocket):
    async for message in websocket:
        print(message)
        message = "服务端获取到消息: {}".format(message)
        await websocket.send(message)

async def main():
    async with websockets.serve(echo, 'localhost', 8765):
        print('WebSocket服务启动成功，可通过 ws://localhost:8765 进行访问')
        await asyncio.Future()

if __name__ == '__main__':
    asyncio.run(main())

'''
# 创建一个WebSocket服务端
# 用于接收解析到的弹幕数据
# 测试弹幕转发功能
'''
