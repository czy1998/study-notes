# skill

本质是: 「大语言模型 + 一组被允许使用的工具 + 明确的使用边界」

说白了，Skill 就是给 Claude Code/Github Copilot 装技能包，让大模型按照某种特定的方法论去行动的机制。

## 创建 skill

1. 全局 skill
   - claude code
     `~/.claude/skills/demo/SKILL.md`
     在如上目录下（`~/.claude/skills`）创建 `skill` 目录
     目录下创建一个 `SKILL.md` 文件，文件名不可变

   - github copilot
     `~/.copilot/skills/demo/SKILL.md`
     后面步骤同上

2. 项目 skill
   - claude code
     `你的项目目录/.claude/skills/demo/SKILL.md`
     后面步骤同上

   - github copilot
     `你的项目目录/.github/skills/demo/SKILL.md`
     后面步骤同上

## 编写 skill

SKILL.md 包含两部分内容:

- YAML 前置元数据（在 --- 标记之间）告诉 Claude 何时使用该技能
  - name: 技能的唯一标识符，字母要小写，使用 `-` 替换空格用作连接
  - description: 描述技能做什么，帮助 Claude 决定何时自动加载它
- 包含 Claude 在调用技能时遵循的说明的 markdown 内容。

[skill Specification 规范](https://agentskills.io/specification)

### demo

````md
---
name: "API接口代码生成器"
description: "根据接口文档生成TS类型定义和axios封装"
version: "1.0.0"
---

# API代码生成专家

你是一位全栈工程师，擅长前后端接口对接。你的任务是根据API文档生成高质量的TypeScript代码。

## 生成内容

### 1. TypeScript类型定义

```ts
// 请求参数类型
interface GetUserRequest {
  userId: string;
  includeDetails?: boolean;
}

// 响应数据类型
interface GetUserResponse {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}
```

### 2. Axios请求函数

```ts
import request from "@/utils/request";

export const getUserAPI = async (
  params: GetUserRequest,
): Promise<GetUserResponse> => {
  try {
    const response = await request.get<GetUserResponse>("/api/user", {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("获取用户信息失败:", error);
    throw error;
  }
};
```

### 3. React Hook封装（可选）

```ts
export const useGetUser = (userId: string) => {
  const [data, setData] = useState<GetUserResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getUserAPI({ userId });
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  return { data, loading, error };
};
```

### 代码规范

- 命名遵循驼峰命名法
- API 函数以 `API` 结尾
- Hook 函数以 `use` 开头
- 所有异步函数都要有错误处理
- 导出的类型和函数都要加 JSDoc 注释

### 输出格式

- 先输出类型定义
- 再输出 API 函数
- 如果是常用接口，再生成 Hook 封装
- 最后给出使用示例
````

## 调用 skill

- claude code
  1. `让 Claude 自动调用它`，通过询问与 skill 描述匹配的内容
  2. 或直接使用技能名称调用它
     `/explain-code src/auth/login.ts`

- github copilot
  1. `让 Copilot 自动调用它`，通过询问与 skill 描述匹配的内容
