import client from "./internal/httpClient";

// 基础聊天
export function baseChat(msg: String) {
    return client.get(`/api/v1/ai/chat/${msg}`, {});
}
