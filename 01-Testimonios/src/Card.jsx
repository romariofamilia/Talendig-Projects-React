import './Card.css'

export function TestimonyCard ({ name, lugar, cargo, empresa, testimonio }) {
    const formatNameToImage = (name) => {
        let newName = name.toLowerCase();
        let defName;
        for (let i = 0; i < newName.length; i++) {
            if(newName[i] == ' ') {
                defName = newName.slice(0, i);
            }
        }
        return defName.trim();
      }

      const formattedName = formatNameToImage(name);
    return (
        <section>
            <div className="container">
                <figure className="card-container-image">
                    <img src={`/src/imagenes/testimonio-${formattedName}.png`} alt={formattedName + " image"} className="card-image" />
                </figure>
                <main className="card-info">
                    <div className="card-personalInfo">
                        <p className="card-name"><strong>{name}</strong> en <strong>{lugar}</strong></p>
                        <p className="card-profesion"><strong>{cargo}</strong> en <strong>{empresa}</strong> </p>
                    </div>
                    <div className="card-testimony">
                        "{testimonio}"
                    </div>
                </main>
            </div>
        </section>
    )
}