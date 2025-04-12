Implement Modular AI Components
Create dedicated components for AI interactions, following the single responsibility principle.

Structure AI-related code in a dedicated /ai or /lib/ai directory for clear separation of concerns.
Develop custom hooks (e.g., useCompletion, useChat) to abstract AI interaction logic from UI components.

**Example:**

```typescript
// lib/ai/hooks/useAICompletion.ts
import { useCompletion } from 'ai/react';

export function useAICompletion(config = {}) {
  return useCompletion({
    api: '/api/ai/completion',
    ...config
  });
}
```

### Design for Streaming Responses

- Use React Suspense boundaries to handle loading states during streaming operations.
- Design UI components that progressively display AI-generated content as it arrives.
- Implement dedicated error boundaries to catch and handle AI streaming errors gracefully.

## AI Integration Fundamentals

### Leverage Vercel AI SDK Effectively

- Install and configure the Vercel AI SDK as the foundation for LLM integration.
- Utilize the SDK's unified API to simplify interactions with various AI providers (OpenAI, Anthropic, etc.).
- Implement proper provider configuration based on your selected LLM service.

**Example:**

```typescript
// app/api/ai/completion/route.ts
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { openai } from '@/lib/ai/providers/openai';

export async function POST(req: Request) {
  const { prompt } = await req.json();
  
  const response = await openai.createCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    temperature: 0.7,
    prompt
  });
  
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
```

### Implement Effective Prompt Engineering

- Create a structured prompt template system that enforces consistency and quality.
- Store prompt templates in a dedicated directory with version control.
- Include system prompts, user context, and specific instructions in your prompt structure.
- Implement prompt validation to ensure inputs meet quality requirements before sending to AI models.


### Implement Robust AI Error Management

- Create dedicated error handling for different AI failure modes (rate limiting, context length, inappropriate content).
- Design fallback strategies when AI services are unavailable or return errors.
- Implement circuit breakers to prevent cascading failures when AI services degrade.
- Sanitize all AI outputs before rendering to prevent XSS or injection attacks.

