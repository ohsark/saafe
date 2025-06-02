import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import home from '../assets/screenshots/home.png';
import upload_data from '../assets/screenshots/upload_data.png';
import am_use from '../assets/screenshots/am_use.png'
import args from '../assets/screenshots/args.png'
import ast from '../assets/screenshots/ast.png'
import last from '../assets/screenshots/last.png'
import microorg_long from '../assets/screenshots/microorg_long.png'
import microorg_wide from '../assets/screenshots/microorg_wide.png'
import microorg from '../assets/screenshots/microorg.png'
import organisation from '../assets/screenshots/organisation.png'
import residues from '../assets/screenshots/residues.png'
import sample_type from '../assets/screenshots/sample_type.png'

export default function Documentation() {
  return (
    <div className="px-8 py-10 max-w-5xl mx-auto space-y-12 prose lg:prose-lg">
      <section>
        <h1 className="text-3xl font-bold text-saafe">SAAFE CRC Data Standardisation Platform</h1>
        <p>
          The SAAFE CRC Data Standardization Platform was developed as part of the Cooperative Research Centre for
          Solving Antimicrobial Resistance (AMR) in Agribusiness, Food, and Environments. It provides a structured,
          user-friendly system for uploading, validating, and harmonizing datasets related to antimicrobial usage (AMU),
          resistance (AMR), and environmental surveillance.
        </p>
        <p>
          By aligning with international standards such as those from FAO, WHO, and APVMA, the platform ensures
          interoperability and compliance. It integrates an ontology-backed relational database, standardized data
          dictionaries, and a guided web interface to streamline the contribution of AMR/AMU data from sectors including
          water, waste, and horticulture.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-saafe">Using the Platform</h2>
        <p>
          The platform guides users through a series of intuitive steps to ensure complete and standard-compliant data
          upload. Below is a simplified walkthrough of the process.
        </p>
        <br />
        <h3 className="text-xl font-semibold">Start on the Home Page</h3>
        <p>
          After authentication, you’ll land on the Home Page. Click the <strong>"Upload Data"</strong> button to begin the
          data upload process.
        </p>
        <img src={home} alt="Home page" className="rounded border-[2px] shadow-md my-4" />

        <h3 className="text-xl font-semibold">Upload Dataset</h3>
        <ul className="list-disc ml-6">
          <li>Enter a unique dataset name and version.</li>
          <li>Provide the last update date of your dataset.</li>
          <li>Upload your file in CSV, TSV, or Excel format.</li>
          <li>Select the type of data (e.g., AMU, AMR, Environmental) and intended use.</li>
        </ul>
        <img src={upload_data} alt="Upload data page page" className="rounded border-[2px] shadow-md my-4" />

        <h3 className="text-xl font-semibold">Enter Organisation Details</h3>
        <ul className="list-disc ml-6">
          <li>Input organization name, sector, location, and contact person details.</li>
          <li>This metadata gets tagged to each data record for provenance.</li>
        </ul>
        <img src={organisation} alt="Organisation details page page" className="rounded border-[2px] shadow-md my-4" />

        <h3 className="text-xl font-semibold">Define Sample Type</h3>
        <ul className="list-disc ml-6">
          <li>Map sample identifiers such as ID, collection date, and location (latitude/longitude).</li>
          <li>Select the sample matrix type (e.g., water, compost, sediment).</li>
        </ul>
        <img src={sample_type} alt="Sample type page" className="rounded border-[2px] shadow-md my-4" />

        <h3 className="text-xl font-semibold">Antimicrobial Presence</h3>
        <ul className="list-disc ml-6">
          <li>Indicate whether antimicrobial compounds are present in your dataset.</li>
          <li>Select the columns that contain antimicrobial names and concentrations.</li>
          <li>Specify whether metabolites or derivatives are included.</li>
        </ul>
        <img src={am_use} alt="Antimicrobial usage page" className="rounded border-[2px] shadow-md my-4" />

        <h3 className="text-xl font-semibold">Microorganism Information</h3>
        <ul className="list-disc ml-6">
          <li>Specify if your data is in long or wide format.</li>
          <li>Identify microorganism names and phenotypic resistance markers.</li>
        </ul>
        <img src={microorg} alt="Microorganisms page" className="rounded border-[2px] shadow-md my-4" />

        <h3 className="text-xl font-semibold">AST Results</h3>
        <ul className="list-disc ml-6">
          <li>Provide isolate counts and S/I/R interpretations.</li>
          <li>Include the testing guideline, method, and version used.</li>
        </ul>
        <img src={ast} alt="AST page" className="rounded border-[2px] shadow-md my-4" />

        <h3 className="text-xl font-semibold">Antimicrobial Residues</h3>
        <ul className="list-disc ml-6">
          <li>List concentration columns and unit of measurement.</li>
          <li>Mention whether metabolites are present and the detection methods used.</li>
        </ul>
        <img src={residues} alt="Antimicrobial residues page" className="rounded border-[2px] shadow-md my-4" />

        <h3 className="text-xl font-semibold">ARGs (Resistance Genes)</h3>
        <ul className="list-disc ml-6">
          <li>Identify columns for ARG names and detection methods.</li>
          <li>Specify the antimicrobial class if available.</li>
        </ul>
        <img src={args} alt="ARGs page" className="rounded border-[2px] shadow-md my-4" />

        <h3 className="text-xl font-semibold">Review & Submit</h3>
        <ul className="list-disc ml-6">
          <li>The platform performs automated validation based on the ontology and dictionary behind the scenes.</li>
          <li>After corrections, the dataset is successfully submitted and a confirmation email is sent.</li>
        </ul>
        <img src={last} alt="Done page" className="rounded border-[2px] shadow-md my-4" />
      </section>

      <div className="text-center mt-16">
        <Link
          to="/upload"
          className="inline-flex items-center gap-2 bg-saafe-light text-white px-6 py-3 rounded hover:opacity-90 transition"
        >
          Start Upload <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  );
}
