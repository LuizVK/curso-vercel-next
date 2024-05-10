export type Tone = {
    tone: string,
    hexColor: string;
}

export type Color = {
    name: string;
    tones: Tone[];
}

export type Palette = Color[]

const palette: Palette = [
    {
        name: 'Slate',
        tones: [
            { tone: '50', hexColor: '#f8fafc' },
            { tone: '100', hexColor: '#f1f5f9' },
            { tone: '200', hexColor: '#e2e8f0' },
            { tone: '300', hexColor: '#cbd5e1' },
            { tone: '400', hexColor: '#94a3b8' },
            { tone: '500', hexColor: '#64748b' },
            { tone: '600', hexColor: '#475569' },
            { tone: '700', hexColor: '#334155' },
            { tone: '800', hexColor: '#1e293b' },
            { tone: '900', hexColor: '#0f172a' },
            { tone: '950', hexColor: '#020617' }
        ]
    },
    {
        name: 'Gray',
        tones: [
            { tone: '50', hexColor: '#f9fafb' },
            { tone: '100', hexColor: '#f3f4f6' },
            { tone: '200', hexColor: '#e5e7eb' },
            { tone: '300', hexColor: '#d1d5db' },
            { tone: '400', hexColor: '#9ca3af' },
            { tone: '500', hexColor: '#6b7280' },
            { tone: '600', hexColor: '#4b5563' },
            { tone: '700', hexColor: '#374151' },
            { tone: '800', hexColor: '#1f2937' },
            { tone: '900', hexColor: '#111827' },
            { tone: '950', hexColor: '#030712' }
        ]
    },
    {
        name: 'Zinc',
        tones: [
            { tone: '50', hexColor: '#fafafa' },
            { tone: '100', hexColor: '#f4f4f5' },
            { tone: '200', hexColor: '#e4e4e7' },
            { tone: '300', hexColor: '#d4d4d8' },
            { tone: '400', hexColor: '#a1a1aa' },
            { tone: '500', hexColor: '#71717a' },
            { tone: '600', hexColor: '#52525b' },
            { tone: '700', hexColor: '#3f3f46' },
            { tone: '800', hexColor: '#27272a' },
            { tone: '900', hexColor: '#18181b' },
            { tone: '950', hexColor: '#09090b' }
        ]
    },
    {
        name: 'Neutral',
        tones: [
            { tone: '50', hexColor: '#fafafa' },
            { tone: '100', hexColor: '#f5f5f5' },
            { tone: '200', hexColor: '#e5e5e5' },
            { tone: '300', hexColor: '#d4d4d4' },
            { tone: '400', hexColor: '#a3a3a3' },
            { tone: '500', hexColor: '#737373' },
            { tone: '600', hexColor: '#525252' },
            { tone: '700', hexColor: '#404040' },
            { tone: '800', hexColor: '#262626' },
            { tone: '900', hexColor: '#171717' },
            { tone: '950', hexColor: '#0a0a0a' }
        ]
    },
    {
        name: 'Stone',
        tones: [
            { tone: '50', hexColor: '#fafaf9' },
            { tone: '100', hexColor: '#f5f5f4' },
            { tone: '200', hexColor: '#e7e5e4' },
            { tone: '300', hexColor: '#d6d3d1' },
            { tone: '400', hexColor: '#a8a29e' },
            { tone: '500', hexColor: '#78716c' },
            { tone: '600', hexColor: '#57534e' },
            { tone: '700', hexColor: '#44403c' },
            { tone: '800', hexColor: '#292524' },
            { tone: '900', hexColor: '#1c1917' },
            { tone: '950', hexColor: '#0c0a09' }
        ]
    },
    {
        name: 'Red',
        tones: [
            { tone: '50', hexColor: '#fef2f2' },
            { tone: '100', hexColor: '#fee2e2' },
            { tone: '200', hexColor: '#fecaca' },
            { tone: '300', hexColor: '#fca5a5' },
            { tone: '400', hexColor: '#f87171' },
            { tone: '500', hexColor: '#ef4444' },
            { tone: '600', hexColor: '#dc2626' },
            { tone: '700', hexColor: '#b91c1c' },
            { tone: '800', hexColor: '#991b1b' },
            { tone: '900', hexColor: '#7f1d1d' },
            { tone: '950', hexColor: '#450a0a' }
        ]
    },
    {
        name: 'Orange',
        tones: [
            { tone: '50', hexColor: '#fff7ed' },
            { tone: '100', hexColor: '#ffedd5' },
            { tone: '200', hexColor: '#fed7aa' },
            { tone: '300', hexColor: '#fdba74' },
            { tone: '400', hexColor: '#fb923c' },
            { tone: '500', hexColor: '#f97316' },
            { tone: '600', hexColor: '#ea580c' },
            { tone: '700', hexColor: '#c2410c' },
            { tone: '800', hexColor: '#9a3412' },
            { tone: '900', hexColor: '#7c2d12' },
            { tone: '950', hexColor: '#431407' }
        ]
    },
    {
        name: 'Amber',
        tones: [
            { tone: '50', hexColor: '#fffbeb' },
            { tone: '100', hexColor: '#fef3c7' },
            { tone: '200', hexColor: '#fde68a' },
            { tone: '300', hexColor: '#fcd34d' },
            { tone: '400', hexColor: '#fbbf24' },
            { tone: '500', hexColor: '#f59e0b' },
            { tone: '600', hexColor: '#d97706' },
            { tone: '700', hexColor: '#b45309' },
            { tone: '800', hexColor: '#92400e' },
            { tone: '900', hexColor: '#78350f' },
            { tone: '950', hexColor: '#451a03' }
        ]
    },
    {
        name: 'Yellow',
        tones: [
            { tone: '50', hexColor: '#fefce8' },
            { tone: '100', hexColor: '#fef9c3' },
            { tone: '200', hexColor: '#fef08a' },
            { tone: '300', hexColor: '#fde047' },
            { tone: '400', hexColor: '#facc15' },
            { tone: '500', hexColor: '#eab308' },
            { tone: '600', hexColor: '#ca8a04' },
            { tone: '700', hexColor: '#a16207' },
            { tone: '800', hexColor: '#854d0e' },
            { tone: '900', hexColor: '#713f12' },
            { tone: '950', hexColor: '#422006' }
        ]
    },
    {
        name: 'Lime',
        tones: [
            { tone: '50', hexColor: '#f7fee7' },
            { tone: '100', hexColor: '#ecfccb' },
            { tone: '200', hexColor: '#d9f99d' },
            { tone: '300', hexColor: '#bef264' },
            { tone: '400', hexColor: '#a3e635' },
            { tone: '500', hexColor: '#84cc16' },
            { tone: '600', hexColor: '#65a30d' },
            { tone: '700', hexColor: '#4d7c0f' },
            { tone: '800', hexColor: '#3f6212' },
            { tone: '900', hexColor: '#365314' },
            { tone: '950', hexColor: '#1a2e05' }
        ]
    },
    {
        name: 'Green',
        tones: [
            { tone: '50', hexColor: '#f0fdf4' },
            { tone: '100', hexColor: '#dcfce7' },
            { tone: '200', hexColor: '#bbf7d0' },
            { tone: '300', hexColor: '#86efac' },
            { tone: '400', hexColor: '#4ade80' },
            { tone: '500', hexColor: '#22c55e' },
            { tone: '600', hexColor: '#16a34a' },
            { tone: '700', hexColor: '#15803d' },
            { tone: '800', hexColor: '#166534' },
            { tone: '900', hexColor: '#14532d' },
            { tone: '950', hexColor: '#052e16' }
        ]
    },
    {
        name: 'Emerald',
        tones: [
            { tone: '50', hexColor: '#ecfdf5' },
            { tone: '100', hexColor: '#d1fae5' },
            { tone: '200', hexColor: '#a7f3d0' },
            { tone: '300', hexColor: '#6ee7b7' },
            { tone: '400', hexColor: '#34d399' },
            { tone: '500', hexColor: '#10b981' },
            { tone: '600', hexColor: '#059669' },
            { tone: '700', hexColor: '#047857' },
            { tone: '800', hexColor: '#065f46' },
            { tone: '900', hexColor: '#064e3b' },
            { tone: '950', hexColor: '#022c22' }
        ]
    },
    {
        name: 'Teal',
        tones: [
            { tone: '50', hexColor: '#f0fdfa' },
            { tone: '100', hexColor: '#ccfbf1' },
            { tone: '200', hexColor: '#99f6e4' },
            { tone: '300', hexColor: '#5eead4' },
            { tone: '400', hexColor: '#2dd4bf' },
            { tone: '500', hexColor: '#14b8a6' },
            { tone: '600', hexColor: '#0d9488' },
            { tone: '700', hexColor: '#0f766e' },
            { tone: '800', hexColor: '#115e59' },
            { tone: '900', hexColor: '#134e4a' },
            { tone: '950', hexColor: '#042f2e' }
        ]
    },
    {
        name: 'Cyan',
        tones: [
            { tone: '50', hexColor: '#ecfeff' },
            { tone: '100', hexColor: '#cffafe' },
            { tone: '200', hexColor: '#a5f3fc' },
            { tone: '300', hexColor: '#67e8f9' },
            { tone: '400', hexColor: '#22d3ee' },
            { tone: '500', hexColor: '#06b6d4' },
            { tone: '600', hexColor: '#0891b2' },
            { tone: '700', hexColor: '#0e7490' },
            { tone: '800', hexColor: '#155e75' },
            { tone: '900', hexColor: '#164e63' },
            { tone: '950', hexColor: '#083344' }
        ]
    },
    {
        name: 'Sky',
        tones: [
            { tone: '50', hexColor: '#f0f9ff' },
            { tone: '100', hexColor: '#e0f2fe' },
            { tone: '200', hexColor: '#bae6fd' },
            { tone: '300', hexColor: '#7dd3fc' },
            { tone: '400', hexColor: '#38bdf8' },
            { tone: '500', hexColor: '#0ea5e9' },
            { tone: '600', hexColor: '#0284c7' },
            { tone: '700', hexColor: '#0369a1' },
            { tone: '800', hexColor: '#075985' },
            { tone: '900', hexColor: '#0c4a6e' },
            { tone: '950', hexColor: '#082f49' }
        ]
    },
    {
        name: 'Blue',
        tones: [
            { tone: '50', hexColor: '#eff6ff' },
            { tone: '100', hexColor: '#dbeafe' },
            { tone: '200', hexColor: '#bfdbfe' },
            { tone: '300', hexColor: '#93c5fd' },
            { tone: '400', hexColor: '#60a5fa' },
            { tone: '500', hexColor: '#3b82f6' },
            { tone: '600', hexColor: '#2563eb' },
            { tone: '700', hexColor: '#1d4ed8' },
            { tone: '800', hexColor: '#1e40af' },
            { tone: '900', hexColor: '#1e3a8a' },
            { tone: '950', hexColor: '#172554' }
        ]
    },
    {
        name: 'Indigo',
        tones: [
            { tone: '50', hexColor: '#eef2ff' },
            { tone: '100', hexColor: '#e0e7ff' },
            { tone: '200', hexColor: '#c7d2fe' },
            { tone: '300', hexColor: '#a5b4fc' },
            { tone: '400', hexColor: '#818cf8' },
            { tone: '500', hexColor: '#6366f1' },
            { tone: '600', hexColor: '#4f46e5' },
            { tone: '700', hexColor: '#4338ca' },
            { tone: '800', hexColor: '#3730a3' },
            { tone: '900', hexColor: '#312e81' },
            { tone: '950', hexColor: '#1e1b4b' }
        ]
    },
    {
        name: 'Violet',
        tones: [
            { tone: '50', hexColor: '#f5f3ff' },
            { tone: '100', hexColor: '#ede9fe' },
            { tone: '200', hexColor: '#ddd6fe' },
            { tone: '300', hexColor: '#c4b5fd' },
            { tone: '400', hexColor: '#a78bfa' },
            { tone: '500', hexColor: '#8b5cf6' },
            { tone: '600', hexColor: '#7c3aed' },
            { tone: '700', hexColor: '#6d28d9' },
            { tone: '800', hexColor: '#5b21b6' },
            { tone: '900', hexColor: '#4c1d95' },
            { tone: '950', hexColor: '#2e1065' }
        ]
    },
    {
        name: 'Purple',
        tones: [
            { tone: '50', hexColor: '#faf5ff' },
            { tone: '100', hexColor: '#f3e8ff' },
            { tone: '200', hexColor: '#e9d5ff' },
            { tone: '300', hexColor: '#d8b4fe' },
            { tone: '400', hexColor: '#c084fc' },
            { tone: '500', hexColor: '#a855f7' },
            { tone: '600', hexColor: '#9333ea' },
            { tone: '700', hexColor: '#7e22ce' },
            { tone: '800', hexColor: '#6b21a8' },
            { tone: '900', hexColor: '#581c87' },
            { tone: '950', hexColor: '#3b0764' }
        ]
    },
    {
        name: 'Fuchsia',
        tones: [
            { tone: '50', hexColor: '#fdf4ff' },
            { tone: '100', hexColor: '#fae8ff' },
            { tone: '200', hexColor: '#f5d0fe' },
            { tone: '300', hexColor: '#f0abfc' },
            { tone: '400', hexColor: '#e879f9' },
            { tone: '500', hexColor: '#d946ef' },
            { tone: '600', hexColor: '#c026d3' },
            { tone: '700', hexColor: '#a21caf' },
            { tone: '800', hexColor: '#86198f' },
            { tone: '900', hexColor: '#701a75' },
            { tone: '950', hexColor: '#4a044e' }
        ]
    },
    {
        name: 'Pink',
        tones: [
            { tone: '50', hexColor: '#fdf2f8' },
            { tone: '100', hexColor: '#fce7f3' },
            { tone: '200', hexColor: '#fbcfe8' },
            { tone: '300', hexColor: '#f9a8d4' },
            { tone: '400', hexColor: '#f472b6' },
            { tone: '500', hexColor: '#ec4899' },
            { tone: '600', hexColor: '#db2777' },
            { tone: '700', hexColor: '#be185d' },
            { tone: '800', hexColor: '#9d174d' },
            { tone: '900', hexColor: '#831843' },
            { tone: '950', hexColor: '#500724' }
        ]
    },
    {
        name: 'Rose',
        tones: [
            { tone: '50', hexColor: '#fff1f2' },
            { tone: '100', hexColor: '#ffe4e6' },
            { tone: '200', hexColor: '#fecdd3' },
            { tone: '300', hexColor: '#fda4af' },
            { tone: '400', hexColor: '#fb7185' },
            { tone: '500', hexColor: '#f43f5e' },
            { tone: '600', hexColor: '#e11d48' },
            { tone: '700', hexColor: '#be123c' },
            { tone: '800', hexColor: '#9f1239' },
            { tone: '900', hexColor: '#881337' },
            { tone: '950', hexColor: '#4c0519' }
        ]
    }
]

export default async function getAllColors() {
    return palette
}

