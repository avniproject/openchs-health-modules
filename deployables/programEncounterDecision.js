const allImports = require('./programExports');

const getDecisions = function (programEncounter) {
    const programImport = allImports.programEncounterExports[programEncounter.programEnrolment.program.name];
    if (programImport !== undefined && programImport.getDecisions !== undefined)
        return programImport.getDecisions(programEncounter);
    return [];
};

const getNextScheduledVisits = function (programEncounter) {
    const programImport = allImports.programEncounterExports[programEncounter.programEnrolment.program.name];
    if (programImport !== undefined && programImport.getNextScheduledVisits !== undefined)
        return programImport.getNextScheduledVisits(programEncounter.programEnrolment);
    return [];
};

module.exports = {
    getDecisions: getDecisions,
    getNextScheduledVisits: getNextScheduledVisits
};