var faculties = ["Ir. Mary Handoko Wijoyo, M.Sc", "Ir. Dwi Hendratmo W., M.Sc., Ph.D.", "Ir. Kridanto Surendro, M.Sc., Ph.D."];

var showFaculty = function() {
    var text = "Daftar Dosen\nSekolah Teknik Elektro dan Informatika:\n";

    for(var i = 0; i < faculties.length; i++) {
        text = text + (i + 1) + ". " + faculties[i] + "\n";
    }

    var replyMessage = {
        "type": "text",
        "text": text
    }

    return replyMessage;
}

module.exports.showFaculty = showFaculty;