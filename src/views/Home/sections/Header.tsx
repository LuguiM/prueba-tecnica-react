interface HeaderSectionProps {
    children: React.ReactNode;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({ children }) => {
    
    return (
        <div className="bg-blue-light rounded-lg">
            <div className="section-spacing flex flex-col space-y-4 my-8">
                <h1 className="text-h4 font-bold">Te damos la bienvenida</h1>
                <p className="text-bodyLarge">Millones de películas, series y gente por descubrir. Explora ya</p>
                <div className="flex flex-col md:flex-row gap-4">
                    {children}
                </div>
            </div>
        </div>
    )
}
