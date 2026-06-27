interface LoadingScreenProps {
  label?: string
}

export function LoadingScreen({ label = 'Loading…' }: LoadingScreenProps) {
  return (
    <div
      className="flex items-center justify-center min-h-full py-24"
      role="status"
      aria-label={label}
    >
      <div className="size-10 rounded-full border-4 border-muted border-t-primary animate-spin" />
    </div>
  )
}
