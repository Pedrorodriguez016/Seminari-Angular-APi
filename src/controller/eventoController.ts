import { Request, Response } from 'express';
import { EventoService } from '../services/eventoServices';

const eventoService = new EventoService();

function normalizeSchedule(s: any): string {
  if (Array.isArray(s)) return s[0] || '';
  return s || '';
}

function normalizeParticipantes(p: any): string[] {
  if (Array.isArray(p)) return p.filter(Boolean);
  if (Array.isArray((p || {}).participants)) return (p.participants as any[]).filter(Boolean) as string[];
  return [];
}

export async function createEvento(req: Request, res: Response): Promise<Response> {
  try {
    const name = req.body.name;
    const schedule = normalizeSchedule(req.body.schedule);
    const address = req.body.address ?? req.body.direccion;
    const participantes = normalizeParticipantes(req.body.participantes ?? req.body.participants);
    const evento = await eventoService.createEvento({ name, schedule, address, participantes } as any);
    return res.status(201).json(evento);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function getAllEventos(req: Request, res: Response): Promise<Response> {
  try {
    const eventos = await eventoService.getAllEventos();
    return res.status(200).json(eventos);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function getEventoById(req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params;
    const evento = await eventoService.getEventoById(id);
    if (!evento) return res.status(404).json({ message: 'EVENTO NO ENCONTRADO' });
    return res.status(200).json(evento);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function deleteEventoById(req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params;
    const deleted = await eventoService.deleteEventoById(id);
    if (!deleted) return res.status(404).json({ message: 'EVENTO NO ENCONTRADO' });
    return res.status(200).json(deleted);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}