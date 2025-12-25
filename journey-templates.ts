import { JourneyDefinition } from '@/types';
import { BOARD_TEMPLATES } from '@/board-templates';

export const OFFICIAL_JOURNEYS: Record<
  string,
  JourneyDefinition & { id: string; description: string; icon: string }
> = {
  B2B_MACHINE: {
    id: 'B2B_MACHINE',
    schemaVersion: '1.0',
    name: 'Máquina de Vendas B2B (Completa)',
    description:
      'O setup ideal para empresas SaaS. Inclui Pré-vendas (SDR), Vendas (Closer), Onboarding, CS (Saúde) e Expansão (Upsell).',
    icon: '🏭',
    boards: [
      {
        slug: 'sdr',
        name: '1. Pré-vendas (SDR)',
        columns: BOARD_TEMPLATES.PRE_SALES.stages.map(s => ({
          name: s.label,
          color: s.color,
          linkedLifecycleStage: s.linkedLifecycleStage,
        })),
        strategy: {
          agentPersona: BOARD_TEMPLATES.PRE_SALES.agentPersona,
          goal: BOARD_TEMPLATES.PRE_SALES.goal,
          entryTrigger: BOARD_TEMPLATES.PRE_SALES.entryTrigger,
        },
      },
      {
        slug: 'sales',
        name: '2. Pipeline de Vendas',
        columns: BOARD_TEMPLATES.SALES.stages.map(s => ({
          name: s.label,
          color: s.color,
          linkedLifecycleStage: s.linkedLifecycleStage,
        })),
        strategy: {
          agentPersona: BOARD_TEMPLATES.SALES.agentPersona,
          goal: BOARD_TEMPLATES.SALES.goal,
          entryTrigger: BOARD_TEMPLATES.SALES.entryTrigger,
        },
      },
      {
        slug: 'onboarding',
        name: '3. Onboarding',
        columns: BOARD_TEMPLATES.ONBOARDING.stages.map(s => ({
          name: s.label,
          color: s.color,
          linkedLifecycleStage: s.linkedLifecycleStage,
        })),
        strategy: {
          agentPersona: BOARD_TEMPLATES.ONBOARDING.agentPersona,
          goal: BOARD_TEMPLATES.ONBOARDING.goal,
          entryTrigger: BOARD_TEMPLATES.ONBOARDING.entryTrigger,
        },
      },
      {
        slug: 'cs',
        name: '4. CS (Saúde da Conta)',
        columns: BOARD_TEMPLATES.CS.stages.map(s => ({
          name: s.label,
          color: s.color,
          linkedLifecycleStage: s.linkedLifecycleStage,
        })),
        strategy: {
          agentPersona: BOARD_TEMPLATES.CS.agentPersona,
          goal: BOARD_TEMPLATES.CS.goal,
          entryTrigger: BOARD_TEMPLATES.CS.entryTrigger,
        },
      },
      {
        slug: 'expansion',
        name: '5. Expansão (Upsell)',
        columns: [
          { name: 'Identificado', color: 'bg-blue-500', linkedLifecycleStage: 'CUSTOMER' },
          { name: 'Qualificando', color: 'bg-yellow-500', linkedLifecycleStage: 'CUSTOMER' },
          { name: 'Proposta', color: 'bg-purple-500', linkedLifecycleStage: 'CUSTOMER' },
          { name: 'Negociação', color: 'bg-orange-500', linkedLifecycleStage: 'CUSTOMER' },
          { name: 'Upsell Fechado', color: 'bg-green-500', linkedLifecycleStage: 'CUSTOMER' },
          { name: 'Perdido', color: 'bg-red-500', linkedLifecycleStage: 'OTHER' },
        ],
        strategy: {
          agentPersona: {
            name: 'Expansion AM',
            role: 'Expansão / Upsell',
            behavior:
              'Trate expansão como venda consultiva para clientes ativos. Valide uso/valor, descubra novas dores e construa business case. Seja objetivo e pragmático.',
          },
          goal: {
            description: 'Gerar receita de expansão com previsibilidade.',
            kpi: 'Expansion MRR',
            targetValue: '15000',
            type: 'currency',
          },
          entryTrigger: 'Clientes saudáveis com sinais de expansão (uso alto, novas squads, request de features).',
        },
      },
    ],
  },
  SIMPLE_SALES: {
    id: 'SIMPLE_SALES',
    schemaVersion: '1.0',
    name: 'Funil de Vendas Simples',
    description: 'Perfeito para começar. Um único board focado em fechar negócios rapidamente.',
    icon: '⚡',
    boards: [
      {
        slug: 'sales-simple',
        name: 'Pipeline de Vendas',
        columns: BOARD_TEMPLATES.SALES.stages.map(s => ({
          name: s.label,
          color: s.color,
          linkedLifecycleStage: s.linkedLifecycleStage,
        })),
        strategy: {
          agentPersona: BOARD_TEMPLATES.SALES.agentPersona,
          goal: BOARD_TEMPLATES.SALES.goal,
          entryTrigger: BOARD_TEMPLATES.SALES.entryTrigger,
        },
      },
    ],
  },
};
