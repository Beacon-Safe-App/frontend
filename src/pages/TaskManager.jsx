import React, { useState } from 'react';
import './css/TaskManager.css';

const crimeSuggestions = [
    {
        crime: "Assault / Sexual Assault",
        steps: [
            "Ensure personal safety: move to a safe location as soon as possible, away from the assailant.",
            "Record as much detail as possible about the assault, including your location, the time, the nature of the assault, and any descriptions of the assailant.",
            "If desired: report the assault to the police via calling 911.",
            "If desired: if you are unable to speak, text 911 (available in NYC) with the details",
            "Seek medical attention: in the state of New York, you have a right to receive medical treatment and support without facing discrimination.",
            "Preserve evidence: avoid showering, changing clothes, or cleaning up until you have been evaluated.",
            "If medical attention was sought, preserve originals and copies of all medical documentation related to your visit",
            "Preserve evidence: if you have visible injuries, take photos to document them.",
            "If desired: file a police report. Record the names and badge numbers of all police and law enforcement officials handling your case. Preserve originals and copies of all documentation provided to you by police and law enforcement.",
            "If desired: speak to a Victim Advocate via a local community organization (see Aftercare Resource Guide).",
            "Seek emotional support: consider speaking with a counselor or therapist.",
            "You may be eligible for compensation for counseling, medical bills, or lost wages through New York State's Office of Victim Services. You can apply online at the New York State Office of Victim Services website.",
            "If desired: consider consulting with a lawyer to discuss potential legal actions or protective orders.",
            "If applicable: continue to follow up with police and law enforcement regarding your case.",
            "If applicable: continue to follow up with legal support regarding your case.",
        ],
    },
    {
        crime: "Burglary / Robbery",
        steps: [
            "Ensure personal safety: move to a safe location as soon as possible, away from the assailant. If you are inside your home and suspect a burglary is happening, find a safe place to hide or to lock yourself in, if you can. If you are outside or in a safe location, do not enter your home until you are sure it is safe.",
            "Record as much detail as possible about the burglary, including your location, the time, and any descriptions of the assailant.",
            "If desired: report the burglary to the police via calling 911. Provide your address, describe the situation, and inform them if you believe the burglar is still inside.",
            "If desired: if you are unable to speak, text 911 (available in NYC) with the details",
            "If seeking recourse through law enforcement- do not touch or disturb anything in your home until it has been professionally assessed, as this may affect evidence.",
            "Preserve evidence: avoid showering, changing clothes, or cleaning up until you have been evaluated.",
            "If physically harmed by the burglar, seek medical attention: in the state of New York, you have a right to receive medical treatment and support without facing discrimination.",
            "If medical attention was sought, preserve originals and copies of all medical documentation related to your visit",
            "Preserve evidence: take photos of the scene, including any damage to your property or person, any disarray caused by the burglary, and any missing items.",
            "If desired: file a police report. Record the names and badge numbers of all police and law enforcement officials handling your case. Preserve originals and copies of all documentation provided to you by police and law enforcement.",
            "Create a detailed inventory of all stolen items, including descriptions, serial numbers, and estimated values.",
            "If applicable: notify your landlord.",
            "If applicable: notify your insurance company.",
            "Seek emotional support: consider speaking with a counselor or therapist.",
            "If desired: consider consulting with a lawyer to discuss potential legal actions or protective orders.",
            "If desired: improve your home security: consider changing locks, installing deadbolts, adding a security system and/or using security cameras.",
            "If applicable: alert your neighbors.",
            "Check for signs of identity theft: if any personal information was stolen, like credit cards or identification, monitor your accounts and consider placing a fraud alert on your credit report.",
            "If applicable: continue to follow up with police and law enforcement regarding your case.",
            "If desired: seek out support from NYC Department of Consumer and Worker Protection, who provides resources and guidance on consumer rights and identity theft.",
            "If applicable: continue to follow up with legal support regarding your case.",
        ],
    },
    {
        crime: "Carjacking / Mugging",
        steps: [
            "If assailants are still present, stay as calm as possible and comply to reduce the risk of harm.",
            "Get to safety as quickly as possible - safely exit the vehicle and move to a safe location away from the carjacker.",
            "If desired: report the carjacking to the police via calling 911. Provide your location, describe the situation, provide details about the vehicle including the make, model, color and any identifying features, and inform them if you believe the carjacker is still a threat to you personally.",
            "If desired: if you are unable to speak, text 911 (available in NYC) with the details",
            "If desired: file a police report. Record the names and badge numbers of all police and law enforcement officials handling your case. Preserve originals and copies of all documentation provided to you by police and law enforcement.",
            "If applicable: when filing a police report, provide a description of the carjacker, any weapons used or displayed, the direction in which the carjacker fled, the time and location of the incident",
            "If physically harmed by the carjacker, seek medical attention: in the state of New York, you have a right to receive medical treatment and support without facing discrimination.",
            "If medical attention was sought, preserve originals and copies of all medical documentation related to your visit",
            "Create a detailed account of the incident including any conversations, actions, or observations made during the carjacking.",
            "If applicable: notify your insurance company to begin the claims process. Provide them with the police report and any other necessary documentation.",
            "Seek emotional support- consider speaking with a counselor or therapist.",
            "If desired: consider consulting with a lawyer to discuss potential legal actions or protective orders.",
            "If applicable: alert your neighbors.",
            "Check for signs of identity theft: if any personal information was stolen, like credit cards or identification, notify your bank(s), monitor your accounts and consider placing a fraud alert on your credit report.",
            "If applicable: if your vehicle has a GPS tracking system, contact the service provider immediately to assist the police in recovering your car.",
            "If applicable: continue to follow up with police and law enforcement regarding your case.",
            "If desired: seek out support from NYC Department of Consumer and Worker Protection, who provides resources and guidance on consumer rights, identity theft, and support for victims of crime.",
            "If applicable: continue to follow up with legal support regarding your case.",
        ],
    },
    {
        crime: "Crimes Committed by Police and Law Enforcement",
        steps: [
            "Ensure personal safety: move to a safe location as soon as possible, away from the assailant.",
            "Seek shelter in a public place if possible, such as a store or a busy street",
            "If desired: if you are unable to speak, text 911 (available in NYC) with the details",
            "Record as much detail as possible about the assault, including your location, the time, the nature of the assault, words exchanged, actions taken, and any descriptions of the assailant, including badge number, uniform type, and any identifying features.",
            "If desired: report the assault via calling 911.",
            "Seek medical attention: in the state of New York, you have a right to receive medical treatment and support without facing discrimination.",
            "Preserve evidence: avoid showering, changing clothes, or cleaning up until you have been evaluated.",
            "If medical attention was sought, preserve originals and copies of all medical documentation related to your visit",
            "Preserve evidence: if you have visible injuries, take photos to document them. If there were any witnesses to the assault, collect witness statements, contact information and photographs if possible.",
            "If desired: file a police report. Record the names and badge numbers of all police and law enforcement officials handling your case. Preserve originals and copies of all documentation provided to you by police and law enforcement.",
            "If desired: file a complaint with the New York City Police Department (NYPD) Internal Affairs Bureau (IAB). They investigate allegations of police misconduct. You can file a complaint in person at a precinct, by phone, or online.",
            "If desired: speak to a Victim Advocate via a local community organization (see Aftercare Resource Guide).",
            "Seek emotional support: consider speaking with a counselor or therapist.",
            "You may be eligible for compensation for counseling, medical bills, or lost wages through New York State's Office of Victim Services. You can apply online at the New York State Office of Victim Services website.",
            "If desired: consider consulting with a lawyer to discuss potential legal actions or protective orders - organizations like the Legal Aid Society or the New York Civil Liberties Union (NYCLU) will provide you with guidance on your rights and legal options.",
            "If applicable: continue to follow up with police and law enforcement regarding your case, including following up with the Internal Affairs Bureau.",
            "If applicable: continue to follow up with legal support regarding your case and consider filing a civil lawsuit against the officer or the department.",
        ],
    },
    {
        crime: "Domestic / Intimate Partner Violence",
        steps: [
            "Ensure personal safety: move to a safe location as soon as possible, away from the assailant, and if possible go to a safe place such as a friend or family member's house, a domestic violence shelter or a public place.",
            "If you are unable to leave, try to stay in a part of your home where you have access to an exit, and avoid rooms with weapons or objects that could be used to harm you.",
            "If desired: if you are unable to speak, text 911 (available in NYC) with the details",
            "If you decide to stay in your home or continue living with the abuser for the time being, create a safety plan including identifying a safe room in the house, memorizing important phone numbers, and keeping an emergency bag packed with essential items (ID, important documents, clothes, and medication)",
            "Record as much detail as possible about incidents of intimidation and assault, including your location, the time, the nature of the assault, and the perpetrator.",
            "If desired: report the assault to the police via calling 911.",
            "Seek medical attention: in the state of New York, you have a right to receive medical treatment and support without facing discrimination.",
            "Preserve evidence: avoid showering, changing clothes, or cleaning up until you have been evaluated.",
            "If medical attention was sought, preserve originals and copies of all medical documentation related to your visit",
            "Preserve evidence: if you have visible injuries, take photos to document them and store them in a safe location.",
            "Preserve evidence: if perpatrator damaged property as well, take photos of damage and store documentation in a safe location.",
            "Preserve evidence: keep copies of threatening messages, emails, or voicemails from the abuser.",
            "If desired: file a police report and ensure that the police connect you with a Domestic Violence Officer (DVO), who can guide you through the process and help ensure your safety. Record the names and badge numbers of all police and law enforcement officials handling your case. Preserve originals and copies of all documentation provided to you by police and law enforcement.",
            "If desired: speak to a Victim Advocate via a local community organization such as the NYC Mayor's Office to End Domestic and Gender-Based Violence, which offers free services at Family Justice Centers across the city (see Aftercare Resource Guide).",
            "Seek emotional support: consider speaking with a counselor or therapist.",
            "You may be eligible for compensation for counseling, medical bills, or lost wages through New York State's Office of Victim Services. You can apply online at the New York State Office of Victim Services website.",
            "If desired: consider consulting with a lawyer to discuss potential legal actions.",
            "If desired: request an Order of Protection through Family Court, Criminal Court, or Supreme Court in New York City. This legal order can help prevent your abuser from contacting or coming near you.",
            "If desired: You can file for an Order of Protection at a Family Court even without filing criminal charges.",
            "If desired: Find a domestic violence shelter by calling the NYC Domestic Violence Hotline at 1-800-621-HOPE (4673)",
            "If applicable: continue to follow up with police and law enforcement regarding your case.",
            "If applicable: continue to follow up with legal support regarding your case.",
        ],
    },
    {
        crime: "Drugging",
        steps: [
            "Ensure personal safety: if you feel dizzy, confused, or suspect you've been drugged, try to move to a safe location as soon as possible. Ask a trusted friend, staff member, or bystander to help you leave. If you're alone, go to a safe, public place (like a bar, restaurant, or store)",
            "If you are unable to leave, reach out to a friend or family member for help. Let them know what is happening and ask them to come get you, if possible",
            "If desired: if you are unable to speak, text 911 (available in NYC) with the details",
            "Record as much detail as possible about your experience, including your location, the time, any food or beverage consumed, and anyone who may have had access to your food or drink.",
            "If desired: report the assault to the police via calling 911.",
            "Seek medical attention immediately: in the state of New York, you have a right to receive medical treatment and support without facing discrimination. Drugging substances like Rohypnol or GHB leave the body quickly, so it is important to seek medical attention immediately to get tested.",
            "If desired: request a sexual assault forensic exam (SAFE) from any hospital in New York City if you suspect you may have been sexually assaulted",
            "Preserve evidence: avoid showering, changing clothes, or cleaning up until you have been evaluated.",
            "If medical attention was sought, preserve originals and copies of all medical documentation related to your visit",
            "Preserve evidence: if you have visible injuries, take photos to document them and store them in a safe location.",
            "If desired: file a police report. Record the names and badge numbers of all police and law enforcement officials handling your case. Preserve originals and copies of all documentation provided to you by police and law enforcement.",
            "If desired: speak to a Victim Advocate via a local community organization such as Safe Horizon, which offers crisis counseling, support and legal resources for victims of crimes, including drugging and assault.",
            "Seek emotional support: consider speaking with a counselor or therapist.",
            "If desired: consider consulting with a lawyer to discuss potential legal actions.",
            "You may be eligible for compensation for counseling, medical bills, or lost wages through New York State's Office of Victim Services. You can apply online at the New York State Office of Victim Services website.",
            "If applicable: continue to follow up with police and law enforcement regarding your case.",
            "If applicable: continue to follow up with legal support regarding your case.",
        ],
    },
    {
        crime: "Harassment / Sexual Harrassment",
        steps: [
            "Ensure personal safety: if you are in a public space and feel unsafe, move to a well-lit, populated area or a nearby business (like a café or store). If possible, alert security or staff about the situation.",
            "Avoid confrontation: Do not engage or escalate the situation. If the person ahrassing you is aggressive, avoid responding or provoking further reactions.",
            "If desired: if you are unable to speak, text 911 (available in NYC) with the details",
            "Ask for help: If you feel unsafe, ask a bystander or nearby person for help. You can say something like, 'I feel uncomfortable, can you stay near me?' Many people are willing to intervene when asked directly.",
            "Record as much detail as possible about your experience, including your location, the time, a description of the harasser and what was said or done.",
            "Collect evidence: if you are being harassed in person or online, try to gather evidence. This could be screenshots, recordings, or photos (if safe to take).",
            "If there are any bystanders who witnessed the harassment, ask if they would be willing to provide a statement or their contact information.",
            "If desired: report the harassment to the police via calling 911.",
            "If desired: file a police report. If the harassment is gender-based, sexual, or related to intimate partner violence, you may want to contact the NYPD Special Victims Division. Record the names and badge numbers of all police and law enforcement officials handling your case. Preserve originals and copies of all documentation provided to you by police and law enforcement.",
            "Consider a Restraining Order, or Order of Protection, which is available through both Family Court (for domestic situations) and Criminal Court (for non-domestic harassment).",
            "If desired: speak to a Victim Advocate via a local community organization such as Safe Horizon, which offers crisis counseling, support and legal resources for victims of harassment and intimidation.",
            "If applicable: if harassment is occurring at work, report the incident to your supervisor, HR department, or the New York City Commission on Human Rights. It is illegal for employers to allow sexual or other forms of harassment in the workplace",
            "If applicable: if you are experiencing harassment from a landlord, tenant, or neighbor, you can report it to the New York City Commission on Human Rights or the NYC Department of Housing Preservation and Development (HPD).",
            "If applicable: if the harassment is happening online, report the user or content through the platform's reporting system (e.g., Instagram, Facebook, etc.)",
            "If applicable: if the harassment involves threats of violence or stalking, report it to the NYPD Cyber Crime Unit.",
            "Seek emotional support- consider speaking with a counselor or therapist.",
            "If desired: consider consulting with a lawyer to discuss potential legal actions. Organizations like Legal Aid Society and Safe Horizon offer free or low-cost legal services to victims of harassment.",
            "Under New York City law, harassment based on race, gender, sexual orientation, immigration status, and other protected categories is illegal. The New York City Commission on Human Rights can assist with discrimination-related harassment.",
            "If applicable: continue to follow up with police and law enforcement regarding your case.",
            "If applicable: continue to follow up with legal support regarding your case.",
        ],
    },
    {
        crime: "Hate Crime",
        steps: [
            "Ensure personal safety: move to a safe location as soon as possible, away from the assailant. If you're in immediate danger, move to a safe, well-lit, and populated area, such as a nearby store, building, or transportation hub.",
            "If still in proximity to the attacker, avoid escalating the situation or confrontation",
            "If desired: if you are unable to speak, text 911 (available in NYC) with the details",
            "Record as much detail as possible about the assault, including your location, the time, the nature of the assault, and any descriptions of the assailant.",
            "If desired: report the assault to the police via calling 911 and be clear that you believe it to be a hate crime. Hate crimes can include physical attacks, threats, intimidation, graffiti, and property damage.",
            "Seek medical attention: in the state of New York, you have a right to receive medical treatment and support without facing discrimination.",
            "Preserve evidence: avoid showering, changing clothes, or cleaning up until you have been evaluated.",
            "If medical attention was sought, preserve originals and copies of all medical documentation related to your visit",
            "Preserve evidence: if you have visible injuries on your person or if there is visible damage to your property, take photos and videos for documentation.",
            "If there were any witnesses to the crime, ask for their contact information in case their testimony is needed later.",
            "If desired: file a police report and be sure to request the involvement of the NYPD's Hate Crimes Task Force. Record the names and badge numbers of all police and law enforcement officials handling your case. Preserve originals and copies of all documentation provided to you by police and law enforcement, including the incident number for future reference.",
            "If desired: speak to a Victim Advocate via a local community organization (see Aftercare Resource Guide) and report the hate crime to a civil rights organization that can offer support, advice and legal assistance, such as the New York City Commission on Human Rights, the Anti-Defamation League (ADL), Safe Horizon, the Council on American-Islamic Relations (CAIR-NY), the LGBTQ Anti-Violence Project (AVP), or the New York Asian American Justice Committee (AAJC).",
            "Seek emotional support: consider speaking with a counselor or therapist. NYC Well and Safe Horizon are examples of organizations that provide counseling for victims of violence and trauma.",
            "You may be eligible for compensation for counseling, medical bills, or lost wages through New York State's Office of Victim Services. You can apply online at the New York State Office of Victim Services website.",
            "If desired: consider consulting with a lawyer to discuss potential legal actions or protective orders. Hate crimes are illegal under both New York State law and federal law, and both the New York City Human Rights Law and New York's Hate Crimes Act of 2000 specifically strengthen penalties for hate crimes. Organizations such as Legal Aid Society and Safe Horizon offer legal services, sometimes free, for victims of hate crimes",
            "If applicable: if the harassment or hate crime is ongoing and involves additional intimidation or threats, consider obtaining a Restraining Order (Order of Protection) to prevent the perpetrator from contacting you.",
            "If applicable: continue to follow up with police and law enforcement regarding your case.",
            "If applicable: continue to follow up with legal support regarding your case.",
        ],
    },
    {
        crime: "Human Trafficking / Kidnapping",
        steps: [
            "If you are the victim, try to remain calm and look for an opportunity to escape if it's sfe to do so.",
            "If you are a witness, stay at a safe distance to avoid confronting the trafficker or kidnapper directly, as this could endanger you and the victim.",
            "Call 911 to report the situation. Provide as much detail as possible, including location, description of the victim (gender, age, clothing)m, description of the perpetrator (appearance, behavior, vehicle), and any distinguishing features of the environment (landmarks, vehicles, etc.).",
            "If you are unable to speak, text 911 (available in NYC) with the details",
            "Report to the National Human Trafficking Hotline 1-888-373-7888 or text 233733 (Text HELP or INFO) to report the incident",
            "Document what you see: if safe to do so, take photos or videos of the situation including license plates, and other critical details.",
            "Write down key information immediately such as descriptions, time of the event, and any witnesses around.",
            "If possible and safe: stay on the scene to provide further information and a full statement to law enforcement when they arrive",
            "Do not post on social media, as this could escalate the situation for the victim and/or compromise the investigation",
            "File a police report and request the involvement of the NYPD Human Trafficking Task Force. Record the names and badge numbers of all police and law enforcement officials handling the case. Preserve originals and copies of all documentation provided to you by police and law enforcement, including the incident number for future reference.",
            "Contact local organizations that provide support to victims of human trafficking or kidnapping, such as Safe Horizon or the New York Anti-Trafficking Network.",
        ],
    },
    {
        crime: "Stalking",
        steps: [
            "Ensure personal safety: if you feel you are in immediate danger, move away from the stalker and to a safe, well-lit and populated location as soon as possible, such as a nearby store, building, or transportation hub.",
            "If still in proximity to the stalker, avoid escalating the situation or confrontation",
            "If desired: if you are unable to speak, text 911 (available in NYC) with the details",
            "Record as much detail as possible about the stalker, including your number of instances, locations, dates, times, nature of interactions, and any descriptions of the stalker. Include any attempts to contact you via text, email, social media or phone calls.",
            "If desired: report the stalking to the police via calling 911 and be clear that you believe you are being stalked. Stalking is a crime in New York City, and the police can take steps to investigate.",
            "Preserve evidence: keep all communication from the stalker, including messages, voicemails, emails, and social media interactions. If you receive physical items (gifts, letters), save them as well",
            "Preserve evidence: if you can safely do so, take photos or videos of the stalker or any damage caused by them (such as property damage, etc.).",
            "If there were any witnesses to the stalking at any point, ask for their contact information in case their testimony is needed later.",
            "If desired: file a police report and be sure to request the involvement of the NYPD's Special Victims Division. Record the names and badge numbers of all police and law enforcement officials handling your case. Preserve originals and copies of all documentation provided to you by police and law enforcement, including the incident number for future reference.",
            "If desired: speak to a Victim Advocate via a local community organization (see Aftercare Resource Guide) and report the stalking to an organization that can offer support, advice and legal assistance, such as Safe Horizon.",
            "Seek emotional support- consider speaking with a counselor or therapist. NYC Well and Safe Horizon are examples of organizations that provide counseling for victims of harassment, intimidation, violence and trauma.",
            "You may be eligible for compensation for counseling, medical bills, or lost wages through New York State's Office of Victim Services. You can apply online at the New York State Office of Victim Services website.",
            "If desired: consider consulting with a lawyer to discuss potential legal actions or protective orders. Stalking is illegal in New York City. Organizations such as Legal Aid Society and Safe Horizon offer legal services, sometimes free, for victims of stalking",
            "If applicable: consider obtaining a Restraining Order (Order of Protection) to prevent the stalker from contacting you or approaching you. An Order of Protection can require the stalker to stay away from you, your home, your workplace and other locations and can prohibit the stalker from calling, emailing, texting or communicating with you in any way.",
            "If applicable: continue to follow up with police and law enforcement regarding your case.",
            "If applicable: continue to follow up with legal support regarding your case.",
            "If possible: consider adjusting your schedule and changing your routine, such as, the time you leave for work or the route you take home.",
            "Tell trusted people: inform close friends, family members, neighbors, and coworkers about the stalking situation",
            "Vary your social media use",
        ],
    },
];

function TaskManager() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCrimes, setFilteredCrimes] = useState([]);

    const addTodo = () => {
        if (inputValue) {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const toggleComplete = (index) => {
        const newTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value) {
            const suggestions = crimeSuggestions.filter(crime =>
                crime.crime.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredCrimes(suggestions);
        } else {
            setFilteredCrimes([]);
        }
    };

    const selectCrime = (crime) => {
        const newTodos = crime.steps.map(step => ({
            text: step,
            completed: false,
        }));
        setTodos([...todos, ...newTodos]);
        setSearchTerm('');
        setFilteredCrimes([]);
    };

    return (
        <div className="task-manager-container">
            <input
                className="search-bar"
                type="text"
                placeholder="Search for crimes..."
                value={searchTerm}
                onChange={handleSearch}
            />
            {filteredCrimes.length > 0 && (
                <ul className="crime-suggestions">
                    {filteredCrimes.map((crime, index) => (
                        <li key={index} onClick={() => selectCrime(crime)}>
                            {crime.crime}
                        </li>
                    ))}
                </ul>
            )}

            <div className="task-section">
                <ul className="task-list">
                    {todos.map((todo, index) => (
                        <li key={index}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleComplete(index)}
                                className="task-checkbox"
                            />
                            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                {todo.text}
                            </span>
                            <button id="delete-button" onClick={() => deleteTodo(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="add-task-section">
                <input
                    type="text"
                    placeholder="Add new task"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={addTodo}>Add</button>
            </div>
        </div>
    );
}

export default TaskManager;