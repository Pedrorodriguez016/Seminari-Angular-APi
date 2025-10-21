import { Evento, IEvento } from '../models/evento';

export class EventoService {
  async createEvento(data: Partial<IEvento>): Promise<IEvento> {
    const e = new Evento(data);
    return await e.save();
  }
  async getAllEventos(): Promise<IEvento[]> {
    return await Evento.find();
  }
  async getEventoById(id: string): Promise<IEvento | null> {
    return await Evento.findById(id);
  }
  async deleteEventoById(id: string): Promise<IEvento | null> {
    return await Evento.findByIdAndDelete(id);
  }
  async updateEventoById(id: string, data: Partial<IEvento>): Promise<IEvento | null> {
  try {
    const updated = await Evento.findByIdAndUpdate(id, data, { new: true });
    return updated;
  } catch (error) {
    console.error('Error en updateEventoById:', error);
    throw new Error('Error actualizando evento');
  }
}
}
