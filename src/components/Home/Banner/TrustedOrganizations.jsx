

const TrustedOrganizations = () => {
    const organizations = [
        {
            img:'https://i.ibb.co/L0KPfRJ/purepng-com-microsoft-logologobrand-logoiconslogos-251519939132du80p-removebg-preview.png'
        },
        {
            img:'https://i.ibb.co/HDjNZfH/google-logo-icon-png-svg-removebg-preview-1.png'
        },
        {
            img:'https://i.ibb.co/hcCrVdH/meta-icons-removebg-preview.png'
        },
        {
            img:'https://i.ibb.co/vdgNwXF/aws-removebg-preview.png'
        },
        {
            img:'https://i.ibb.co/8gNwGBL/okata-removebg-preview.png'
        },
        {
            img:'https://i.ibb.co/Lt9Z4t7/atlassian-removebg-preview.png'
        },
    ]
    return (
        <div>
            <div>
                <h1 className="text-lg">TRUSTED BY THE WORLD'S LEADING ORGANIZATIONS</h1>
                <div className="flex  items-center gap-8 bg-slate-300 px-8 py-5 rounded-md shadow-lg">
                   {
                    organizations.map((data, idx)=> (
                        <div key={idx} 
                        
                        >
                            <img src={data.img} className="h-20 " alt="" />
                        </div>
                    ))
                   }
                </div>
            </div>
        </div>
    );
};

export default TrustedOrganizations;