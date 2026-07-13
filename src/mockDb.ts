export interface Model {
  id: string;
  name: string;
  cover: string;
  description: string;
  price: number;
  discountPercentage: number;
  buyLink: string;
  categories: string[];
  photosCount: number;
  videosCount: number;
  isFeatured: boolean;
  isAvailable: boolean;
  returnDays: number;
  views: number;
  earnings: number;
}

export interface Lead {
  id: string;
  name: string;
  whatsapp: string;
  email: string;
  modelId: string;
  modelName: string;
  createdAt: string;
}

export interface Transaction {
  id: string;
  customerName: string;
  customerEmail: string;
  modelName: string;
  amount: number;
  status: 'Aprovado' | 'Pendente' | 'Cancelado';
  createdAt: string;
}

export interface AdminUser {
  username: string;
  passwordHash: string;
}

const DEFAULT_MODELS: Model[] = [
  {
    id: '1',
    name: 'Talita Xavier',
    cover: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600&h=800',
    description: 'A modelo mais desejada do Brasil. Ensaios premium exclusivos e bastidores inéditos da modelo de elite. Apenas para membros VIP.',
    price: 39.90,
    discountPercentage: 20,
    buyLink: 'https://checkout.perfectpay.com.br/pay/PPU38DOP974',
    categories: ['Premium', 'Mais Vendidas', 'Elite'],
    photosCount: 142,
    videosCount: 24,
    isFeatured: true,
    isAvailable: true,
    returnDays: 14,
    views: 12402,
    earnings: 45900.50
  },
  {
    id: '2',
    name: 'Gabriela Lins',
    cover: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600&h=800',
    description: 'Estilo único, carismática e com o pack mais completo do mercado. Conteúdo sensual e artístico com atualizações semanais.',
    price: 29.90,
    discountPercentage: 10,
    buyLink: 'https://checkout.perfectpay.com.br/pay/PPU38DOP975',
    categories: ['Destaque', 'VIP'],
    photosCount: 98,
    videosCount: 12,
    isFeatured: true,
    isAvailable: true,
    returnDays: 7,
    views: 8931,
    earnings: 28400.00
  },
  {
    id: '3',
    name: 'Mariana Costa',
    cover: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=800',
    description: 'Ensaios amadores de altíssima qualidade. O pack secreto que viralizou nas redes agora em versão completa e privada.',
    price: 49.90,
    discountPercentage: 30,
    buyLink: 'https://checkout.perfectpay.com.br/pay/PPU38DOP976',
    categories: ['Novidades', 'Amador'],
    photosCount: 65,
    videosCount: 8,
    isFeatured: false,
    isAvailable: true,
    returnDays: 14,
    views: 4501,
    earnings: 12500.00
  },
  {
    id: '4',
    name: 'Bruna Albuquerque',
    cover: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600&h=800',
    description: 'Exclusividade pura. A modelo revelação do ano abre seu acervo pessoal de fotos artísticas em alta definição.',
    price: 19.90,
    discountPercentage: 0,
    buyLink: 'https://checkout.perfectpay.com.br/pay/PPU38DOP977',
    categories: ['Novidades', 'Elite'],
    photosCount: 45,
    videosCount: 5,
    isFeatured: false,
    isAvailable: true,
    returnDays: 3,
    views: 3102,
    earnings: 5800.00
  }
];

const DEFAULT_LEADS: Lead[] = [
  {
    id: 'lead-1',
    name: 'Carlos Silva',
    whatsapp: '11999998888',
    email: 'carlos.silva@gmail.com',
    modelId: '1',
    modelName: 'Talita Xavier',
    createdAt: '2026-07-13T10:15:00.000Z'
  },
  {
    id: 'lead-2',
    name: 'Rodrigo Santos',
    whatsapp: '21988887777',
    email: 'rodrigo.santos@yahoo.com.br',
    modelId: '2',
    modelName: 'Gabriela Lins',
    createdAt: '2026-07-13T11:42:00.000Z'
  },
  {
    id: 'lead-3',
    name: 'Mateus Oliveira',
    whatsapp: '31977776666',
    email: 'mateus.oliveira@outlook.com',
    modelId: '1',
    modelName: 'Talita Xavier',
    createdAt: '2026-07-13T12:05:00.000Z'
  }
];

const DEFAULT_TRANSACTIONS: Transaction[] = [
  {
    id: 'trans-1',
    customerName: 'Carlos Silva',
    customerEmail: 'carlos.silva@gmail.com',
    modelName: 'Talita Xavier',
    amount: 31.92, // 39.90 - 20%
    status: 'Aprovado',
    createdAt: '2026-07-13T10:18:00.000Z'
  },
  {
    id: 'trans-2',
    customerName: 'Rodrigo Santos',
    customerEmail: 'rodrigo.santos@yahoo.com.br',
    modelName: 'Gabriela Lins',
    amount: 26.91, // 29.90 - 10%
    status: 'Aprovado',
    createdAt: '2026-07-13T11:45:00.000Z'
  },
  {
    id: 'trans-3',
    customerName: 'Fernando Costa',
    customerEmail: 'fer.costa@hotmail.com',
    modelName: 'Mariana Costa',
    amount: 34.93, // 49.90 - 30%
    status: 'Pendente',
    createdAt: '2026-07-13T13:20:00.000Z'
  }
];

// Inicializar localStorage se estiver vazio
export const initializeStorage = () => {
  if (!localStorage.getItem('hotmodel_models')) {
    localStorage.setItem('hotmodel_models', JSON.stringify(DEFAULT_MODELS));
  }
  if (!localStorage.getItem('hotmodel_leads')) {
    localStorage.setItem('hotmodel_leads', JSON.stringify(DEFAULT_LEADS));
  }
  if (!localStorage.getItem('hotmodel_transactions')) {
    localStorage.setItem('hotmodel_transactions', JSON.stringify(DEFAULT_TRANSACTIONS));
  }
  if (!localStorage.getItem('hotmodel_admin_user')) {
    localStorage.setItem('hotmodel_admin_user', JSON.stringify({ username: 'admin', passwordHash: 'admin' }));
  }
};

// Modelos CRUD
export const getModels = (): Model[] => {
  initializeStorage();
  return JSON.parse(localStorage.getItem('hotmodel_models') || '[]');
};

export const saveModels = (models: Model[]) => {
  localStorage.setItem('hotmodel_models', JSON.stringify(models));
};

export const addModel = (model: Omit<Model, 'id' | 'views' | 'earnings'>): Model => {
  const models = getModels();
  const newModel: Model = {
    ...model,
    id: Date.now().toString(),
    views: 0,
    earnings: 0
  };
  models.push(newModel);
  saveModels(models);
  return newModel;
};

export const updateModel = (updatedModel: Model) => {
  const models = getModels();
  const index = models.findIndex(m => m.id === updatedModel.id);
  if (index !== -1) {
    models[index] = updatedModel;
    saveModels(models);
  }
};

export const deleteModel = (id: string) => {
  const models = getModels();
  const filtered = models.filter(m => m.id !== id);
  saveModels(filtered);
};

// Leads CRUD
export const getLeads = (): Lead[] => {
  initializeStorage();
  return JSON.parse(localStorage.getItem('hotmodel_leads') || '[]');
};

export const addLead = (lead: Omit<Lead, 'id' | 'createdAt'>): Lead => {
  const leads = getLeads();
  const newLead: Lead = {
    ...lead,
    id: 'lead-' + Date.now(),
    createdAt: new Date().toISOString()
  };
  leads.unshift(newLead); // Adicionar no topo
  localStorage.setItem('hotmodel_leads', JSON.stringify(leads));

  // Simular uma nova transação gerada pelo lead (50% de chance de conversão imediata para demonstração)
  if (Math.random() > 0.5) {
    const models = getModels();
    const model = models.find(m => m.id === lead.modelId);
    if (model) {
      const finalPrice = model.price * (1 - model.discountPercentage / 100);
      addTransaction({
        customerName: lead.name,
        customerEmail: lead.email,
        modelName: model.name,
        amount: finalPrice,
        status: 'Aprovado'
      });
      // Atualizar estatísticas do modelo
      model.earnings += finalPrice;
      model.views += 1;
      updateModel(model);
    }
  }
  
  return newLead;
};

export const deleteLead = (id: string) => {
  const leads = getLeads();
  const filtered = leads.filter(l => l.id !== id);
  localStorage.setItem('hotmodel_leads', JSON.stringify(filtered));
};

// Transações CRUD
export const getTransactions = (): Transaction[] => {
  initializeStorage();
  return JSON.parse(localStorage.getItem('hotmodel_transactions') || '[]');
};

export const addTransaction = (trans: Omit<Transaction, 'id' | 'createdAt'>): Transaction => {
  const transactions = getTransactions();
  const newTrans: Transaction = {
    ...trans,
    id: 'trans-' + Date.now(),
    createdAt: new Date().toISOString()
  };
  transactions.unshift(newTrans);
  localStorage.setItem('hotmodel_transactions', JSON.stringify(transactions));
  return newTrans;
};

// Estatísticas Gerais
export interface Stats {
  totalRevenue: number;
  approvedSales: number;
  pendingSales: number;
  totalLeads: number;
  conversionRate: number;
}

export const getStats = (): Stats => {
  const transactions = getTransactions();
  const leads = getLeads();
  
  const approved = transactions.filter(t => t.status === 'Aprovado');
  const pending = transactions.filter(t => t.status === 'Pendente');
  
  const totalRevenue = approved.reduce((acc, curr) => acc + curr.amount, 0);
  const totalLeads = leads.length;
  
  // Taxa de conversão = vendas aprovadas / (leads + vendas aprovadas)
  const denominator = totalLeads + approved.length;
  const conversionRate = denominator > 0 ? (approved.length / denominator) * 100 : 0;
  
  return {
    totalRevenue,
    approvedSales: approved.length,
    pendingSales: pending.length,
    totalLeads,
    conversionRate
  };
};

// Configuração do Admin
export const getAdminUser = (): AdminUser => {
  initializeStorage();
  return JSON.parse(localStorage.getItem('hotmodel_admin_user') || '{"username":"admin","passwordHash":"admin"}');
};

export const updateAdminPassword = (newPassword: string) => {
  const user = getAdminUser();
  user.passwordHash = newPassword;
  localStorage.setItem('hotmodel_admin_user', JSON.stringify(user));
};
