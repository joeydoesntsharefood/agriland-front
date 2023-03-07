export interface IViewProps {
  onClick: () => void
  onChange: (value: { email?: string, password?: string }) => void
  values: { email?: string, password?: string }
}