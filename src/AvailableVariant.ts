export interface AvailableVariant {
    key: string
    name: string
    description: string
    group?: string
}
type EditorMode = Omit<AvailableVariant, 'group'>;
export {
    EditorMode
};