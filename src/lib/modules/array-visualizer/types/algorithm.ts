import type { Node } from './node';

export interface AlgorithmYellowOptions {
  description?: string;
}

export interface AlgorithmYellow extends AlgorithmYellowOptions {
  nodes: Node[];
}

export type AlgorithmFunc = (nodes: Node[]) => Generator<AlgorithmYellow, void, unknown>;
