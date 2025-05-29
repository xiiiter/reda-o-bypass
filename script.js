_0x4b8f98: (function () {
  const _0xec1437 = {
    API_KEY: "AIzaSyBeCEUkpPPwlP7CVf1e03KySRndJFZ_0AI",
    MODEL: "gemini-1.5-flash",
    MOBILE_BREAKPOINT: 768,
    MAX_RETRIES: 3
  };
  function _0x22f98e() {
    return window.innerWidth <= _0xec1437.MOBILE_BREAKPOINT || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  async function _0x1a5cce(_0x2a2b6d, _0x4f1c12) {
    const _0x2c52a1 = _0x2a2b6d.querySelector("textarea:not([aria-hidden=\"true\"])");
    if (!_0x2c52a1) {
      console.error("[ERROR] Textarea nÃ£o encontrado");
      return false;
    }
    const _0x9973f5 = [_0xf5e64c, _0x5c6103, _0x4197aa, _0x4fc565, _0x3a934d];
    for (let _0x5df178 = 0; _0x5df178 < _0x9973f5.length; _0x5df178++) {
      if (await _0x9973f5[_0x5df178](_0x2c52a1, _0x4f1c12)) {
        console.log("[SUCCESS] MÃ©todo " + _0x9973f5[_0x5df178].name + " funcionou");
        return true;
      }
      await new Promise(_0x154613 => setTimeout(_0x154613, 200));
    }
    console.error("[ERROR] Todas as tentativas falharam");
    return false;
    async function _0xf5e64c(_0x3d6e05, _0x31c29b) {
      try {
        const _0x146643 = Object.keys(_0x3d6e05).filter(_0x2c11e1 => _0x2c11e1.startsWith("__reactProps$") || _0x2c11e1.startsWith("__reactEventHandlers$") || _0x2c11e1.startsWith("__reactFiber$"));
        for (const _0x5bd4e8 of _0x146643) {
          const _0x5982db = _0x3d6e05[_0x5bd4e8];
          if (_0x5982db?.onChange) {
            const _0x5c13bc = {
              target: {
                value: _0x31c29b
              },
              currentTarget: {
                value: _0x31c29b
              },
              preventDefault: () => {},
              stopPropagation: () => {}
            };
            _0x5982db.onChange(_0x5c13bc);
            return true;
          }
        }
      } catch (_0x34b519) {
        console.log("[DEBUG] React method failed:", _0x34b519);
      }
      return false;
    }
    async function _0x5c6103(_0x5a7992, _0xa2bd1b) {
      try {
        _0x5a7992.value = "";
        _0x1f2fb0(_0x5a7992, "input");
        await new Promise(_0x306d2f => setTimeout(_0x306d2f, 50));
        _0x5a7992.value = _0xa2bd1b;
        _0x1f2fb0(_0x5a7992, "input");
        _0x1f2fb0(_0x5a7992, "change");
        _0x1f2fb0(_0x5a7992, "blur");
        return _0x5a7992.value === _0xa2bd1b;
      } catch (_0x26e08a) {
        console.log("[DEBUG] Input events method failed:", _0x26e08a);
        return false;
      }
    }
    async function _0x4197aa(_0x412cbb, _0x39da98) {
      try {
        _0x412cbb.focus();
        _0x412cbb.select();
        document.execCommand("delete", false);
        document.execCommand("insertText", false, _0x39da98);
        return _0x412cbb.value === _0x39da98;
      } catch (_0x1760c4) {
        console.log("[DEBUG] execCommand method failed:", _0x1760c4);
        return false;
      }
    }
    async function _0x4fc565(_0x34b72f, _0x33969e) {
      try {
        _0x34b72f.focus();
        _0x34b72f.select();
        _0x34b72f.value = "";
        const _0x3cd2ee = new InputEvent("input", {
          bubbles: true,
          data: _0x33969e,
          inputType: "insertText"
        });
        _0x34b72f.value = _0x33969e;
        _0x34b72f.dispatchEvent(_0x3cd2ee);
        return _0x34b72f.value === _0x33969e;
      } catch (_0x4ca40a) {
        console.log("[DEBUG] Focus selection method failed:", _0x4ca40a);
        return false;
      }
    }
    async function _0x3a934d(_0x50dfd8, _0x498492) {
      try {
        _0x50dfd8.focus();
        _0x50dfd8.value = _0x498492;
        const _0xf306c3 = ["input", "change", "blur"];
        _0xf306c3.forEach(_0x593ff6 => {
          const _0x14af43 = new Event(_0x593ff6, {
            bubbles: true
          });
          _0x50dfd8.dispatchEvent(_0x14af43);
        });
        return _0x50dfd8.value === _0x498492;
      } catch (_0x519185) {
        console.log("[DEBUG] Native input method failed:", _0x519185);
        return false;
      }
    }
    function _0x1f2fb0(_0x48c6da, _0x4a38e1) {
      const _0x3678a0 = new Event(_0x4a38e1, {
        bubbles: true
      });
      _0x48c6da.dispatchEvent(_0x3678a0);
      if (_0x22f98e()) {
        const _0x3030c6 = new Event("touch" + _0x4a38e1, {
          bubbles: true
        });
        _0x48c6da.dispatchEvent(_0x3030c6);
      }
    }
  }
  async function _0x4e8ab3(_0x4aa440, _0x3475a7 = _0xec1437.MAX_RETRIES) {
    const _0xfdb178 = "https://generativelanguage.googleapis.com/v1beta/models/" + _0xec1437.MODEL + ":generateContent?key=" + _0xec1437.API_KEY;
    for (let _0x587ee6 = 0; _0x587ee6 < _0x3475a7; _0x587ee6++) {
      try {
        const _0x520af7 = await _0x3b7f66(_0xfdb178, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: _0x4aa440
              }]
            }],
            generationConfig: {
              temperature: 1,
              topP: 0.95,
              topK: 40,
              maxOutputTokens: 8192
            }
          })
        }, 15000);
        const _0x2df069 = await _0x520af7.json();
        if (!_0x2df069.candidates?.[0]?.content?.parts) {
          throw new Error("Resposta invÃ¡lida da API");
        }
        return _0x2df069.candidates[0].content.parts[0].text;
      } catch (_0x2870c5) {
        console.error("[ERROR] Tentativa " + (_0x587ee6 + 1) + " falhou:", _0x2870c5);
        if (_0x587ee6 === _0x3475a7 - 1) {
          throw _0x2870c5;
        }
        await new Promise(_0x5e06f7 => setTimeout(_0x5e06f7, (_0x587ee6 + 1) * 2000));
      }
    }
  }
  function _0x3b7f66(_0x1bdd49, _0x2d9ee9, _0x3d8870) {
    return Promise.race([fetch(_0x1bdd49, _0x2d9ee9), new Promise((_0x6e6eba, _0x3e63eb) => setTimeout(() => _0x3e63eb(new Error("Timeout")), _0x3d8870))]);
  }
  function _0x597944() {
    const _0x463e12 = document.querySelector("p.MuiTypography-root.MuiTypography-body1");
    if (_0x463e12 && /reda[cÃ§Ã£]o/i.test(_0x463e12.textContent)) {
      return true;
    }
    const _0x556e05 = [".ql-editor", "[class*=\"redacao\"]", "[class*=\"Redacao\"]", "[class*=\"essay\"]", "textarea", "[class*=\"enunciado\"]", "[class*=\"criterios\"]"];
    for (const _0x173f26 of _0x556e05) {
      if (document.querySelector(_0x173f26)) {
        return true;
      }
    }
    const _0x5863a8 = [/reda[cÃ§Ã£]o/i, /disserta[cÃ§Ã£]o/i, /texto dissertativo/i, /produ[cÃ§Ã£]o de texto/i];
    const _0x44d7ed = document.body.innerText;
    for (const _0x2670fd of _0x5863a8) {
      if (_0x2670fd.test(_0x44d7ed)) {
        return true;
      }
    }
    return false;
  }
  async function _0x2ce9fc() {
    try {
      if (!_0x597944()) {
        _0x2e574c("Local incorreto", "âš ï¸ VocÃª precisa estar em uma pÃ¡gina de redaÃ§Ã£o ou produÃ§Ã£o de texto para usar este script.");
        return;
      }
      const _0x2d0dfa = {
        coletanea: [".ql-editor", "[class*=\"texto-base\"]", "[class*=\"coletanea\"]"],
        enunciado: [".ql-align-justify", "[class*=\"enunciado\"]", "p:not([class])"],
        generoTextual: ["[class*=\"genero\"]", "[class*=\"tipo\"]", "[class*=\"gÃªnero\"]"],
        criterios: ["[class*=\"criterios\"]", "[class*=\"avaliacao\"]", "[class*=\"rubrica\"]"]
      };
      const _0x59bc93 = _0x195727 => {
        for (const _0x1d9f1d of _0x195727) {
          const _0x4384d4 = document.querySelector(_0x1d9f1d);
          if (_0x4384d4) {
            return _0x4384d4.innerHTML?.trim() || _0x4384d4.innerText?.trim() || "";
          }
        }
        return "";
      };
      const _0x3f49d8 = {
        coletanea: _0x59bc93(_0x2d0dfa.coletanea),
        enunciado: _0x59bc93(_0x2d0dfa.enunciado),
        generoTextual: _0x59bc93(_0x2d0dfa.generoTextual),
        criterios: _0x59bc93(_0x2d0dfa.criterios)
      };
      const _0x4dd662 = _0x3f49d8.coletanea || _0x3f49d8.enunciado ? "Com base nestas informaÃ§Ãµes, gere uma redaÃ§Ã£o completa:\nTITULO: [TÃ­tulo criativo relacionado ao tema]\nTEXTO: [RedaÃ§Ã£o em 3 parÃ¡grafos com introduÃ§Ã£o, desenvolvimento e conclusÃ£o]\n\nDados: " + JSON.stringify(_0x3f49d8) : "Gere uma redaÃ§Ã£o dissertativa-argumentativa sobre um tema atual, com:\nTITULO: [TÃ­tulo criativo]\nTEXTO: [RedaÃ§Ã£o completa em 3 parÃ¡grafos]";
      _0x46c47b("Gerando redaÃ§Ã£o", "Estamos criando sua redaÃ§Ã£o com IA...");
      const _0xd6e4c3 = await _0x4e8ab3(_0x4dd662);
      const [_0x24f865, _0x40a495] = _0x1fb369(_0xd6e4c3);
      const _0x4965cf = await _0x536111(_0x40a495);
      await _0x54c40f(_0x24f865, _0x4965cf);
      _0x5bfa7f();
    } catch (_0x36bb97) {
      console.error("[ERROR] Falha no processamento:", _0x36bb97);
      _0x2e574c("Erro", "âŒ Ocorreu um erro ao processar a redaÃ§Ã£o. Tente recarregar a pÃ¡gina e executar novamente.");
    }
  }
  function _0x1fb369(_0x50bae9) {
    const _0x5bb82c = [/TITULO[:\s]*([^\n]+)\s*TEXTO[:\s]*([\s\S]+)/i, /TÃ­tulo[:\s]*([^\n]+)\s*Texto[:\s]*([\s\S]+)/i, /Title[:\s]*([^\n]+)\s*Text[:\s]*([\s\S]+)/i, /([^\n]+)\n\n([\s\S]+)/];
    for (const _0x89bffa of _0x5bb82c) {
      const _0x17f00a = _0x50bae9.match(_0x89bffa);
      if (_0x17f00a) {
        return [_0x17f00a[1].trim(), _0x17f00a[2].trim()];
      }
    }
    const _0x309bde = _0x50bae9.split("\n\n");
    if (_0x309bde.length >= 2) {
      return [_0x309bde[0].trim(), _0x309bde.slice(1).join("\n\n").trim()];
    }
    return ["RedaÃ§Ã£o Gerada", _0x50bae9.trim()];
  }
  async function _0x536111(_0x586d03) {
    try {
      const _0x39be20 = "Reescreva este texto para parecer humano:\n" + _0x586d03 + "\n\nRegras:\n- Mantenha o conteÃºdo original\n- Adicione pequenas imperfeiÃ§Ãµes\n- Varie o vocabulÃ¡rio\n- Use conectivos naturais\n- Limite de 30 linhas";
      return await _0x4e8ab3(_0x39be20);
    } catch (_0xc7a764) {
      console.error("Falha ao humanizar texto, usando original:", _0xc7a764);
      return _0x586d03;
    }
  }
  async function _0x54c40f(_0x2293db, _0x21b4ed) {
    _0x46c47b("Inserindo texto", "Aguarde enquanto preenchemos os campos...");
    const _0x57ad3d = Array.from(document.querySelectorAll("textarea:not([aria-hidden=\"true\"])"));
    if (_0x57ad3d.length === 0) {
      throw new Error("Nenhum campo de texto encontrado");
    }
    if (_0x57ad3d.length >= 2) {
      await _0x1a5cce(_0x57ad3d[0].parentElement, _0x2293db);
      await new Promise(_0x3c6a0d => setTimeout(_0x3c6a0d, 800));
      await _0x1a5cce(_0x57ad3d[1].parentElement, _0x21b4ed);
    } else {
      await _0x1a5cce(_0x57ad3d[0].parentElement, _0x2293db + "\n\n" + _0x21b4ed);
    }
  }
  function _0x5e3d71(_0x17159f, _0x248fb3, _0x136ce0, _0x141145 = "", _0x1bbb05 = false) {
    document.querySelectorAll(".universal-popup").forEach(_0x1e28ae => _0x1e28ae.remove());
    const _0x1f75f6 = document.createElement("div");
    _0x1f75f6.className = "universal-popup";
    _0x1f75f6.style.cssText = "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0,0,0," + (_0x1bbb05 ? "0.95" : "0.85") + ");\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      z-index: 999999;\n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n      backdrop-filter: blur(3px);\n    ";
    const _0x48dd5f = document.createElement("div");
    _0x48dd5f.style.cssText = "\n      background-color: #1e1e1e;\n      border-radius: " + (_0x22f98e() ? "12px" : "8px") + ";\n      padding: " + (_0x22f98e() ? "20px" : "24px") + ";\n      width: " + (_0x22f98e() ? "90%" : "450px") + ";\n      max-width: 95%;\n      max-height: 90vh;\n      overflow-y: auto;\n      box-shadow: 0 4px 20px rgba(253, 121, 12, 0.3);\n      border: 1px solid #fd790c;\n      color: #f0f0f0;\n      text-align: center;\n    ";
    const _0x326e83 = document.createElement("h2");
    _0x326e83.textContent = _0x17159f;
    _0x326e83.style.cssText = "\n      color:rgb(153, 29, 255);\n      margin: 0 0 15px 0;\n      font-size: " + (_0x22f98e() ? "1.3rem" : "1.5rem") + ";\n    ";
    const _0x5816ee = document.createElement("div");
    _0x5816ee.innerHTML = _0x248fb3;
    _0x5816ee.style.cssText = "\n      margin: 0 0 20px 0;\n      line-height: 1.5;\n      font-size: " + (_0x22f98e() ? "0.95rem" : "1rem") + ";\n    ";
    if (_0x141145) {
      const _0x188a32 = document.createElement("img");
      _0x188a32.src = _0x141145;
      _0x188a32.style.cssText = "\n        width: 100%;\n        border-radius: 4px;\n        margin-bottom: 15px;\n        max-height: 150px;\n        object-fit: cover;\n      ";
      _0x48dd5f.appendChild(_0x188a32);
    }
    if (_0x1bbb05) {
      const _0x28ff18 = document.createElement("div");
      _0x28ff18.style.cssText = "\n        border: 3px solid #f3f3f3;\n        border-top: 3px solid #fd790c;\n        border-radius: 50%;\n        width: 30px;\n        height: 30px;\n        animation: spin 1s linear infinite;\n        margin: 0 auto 20px;\n      ";
      const _0x205057 = document.createElement("style");
      _0x205057.textContent = "\n        @keyframes spin {\n          0% { transform: rotate(0deg); }\n          100% { transform: rotate(360deg); }\n        }\n      ";
      document.head.appendChild(_0x205057);
      _0x48dd5f.appendChild(_0x28ff18);
    }
    if (_0x136ce0 && _0x136ce0.length > 0) {
      const _0x23128c = document.createElement("div");
      _0x23128c.style.cssText = "\n        display: flex;\n        flex-direction: " + (_0x22f98e() && _0x136ce0.length > 2 ? "column" : "row") + ";\n        gap: 10px;\n        justify-content: center;\n        flex-wrap: wrap;\n      ";
      _0x136ce0.forEach(_0x17f010 => {
        const _0x3f2db8 = document.createElement("button");
        _0x3f2db8.textContent = _0x17f010.text;
        _0x3f2db8.style.cssText = "\n          background-color: " + _0x17f010.color + ";\n          color: " + (_0x17f010.textColor || "#000") + ";\n          border: none;\n          padding: " + (_0x22f98e() ? "10px 12px" : "8px 16px") + ";\n          border-radius: 6px;\n          cursor: pointer;\n          font-weight: bold;\n          flex: " + (_0x22f98e() && _0x136ce0.length > 2 ? "1 1 100%" : "0 1 auto") + ";\n          font-size: " + (_0x22f98e() ? "0.9rem" : "0.95rem") + ";\n          min-width: " + (_0x22f98e() ? "100%" : "120px") + ";\n          transition: all 0.2s;\n        ";
        _0x3f2db8.onmouseenter = () => {
          _0x3f2db8.style.transform = "scale(1.02)";
          _0x3f2db8.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
        };
        _0x3f2db8.onmouseleave = () => {
          _0x3f2db8.style.transform = "scale(1)";
          _0x3f2db8.style.boxShadow = "none";
        };
        _0x3f2db8.onclick = _0x132a75 => {
          _0x132a75.stopPropagation();
          _0x17f010.action();
          if (!_0x17f010.keepOpen) {
            document.body.removeChild(_0x1f75f6);
          }
        };
        _0x23128c.appendChild(_0x3f2db8);
      });
      _0x48dd5f.appendChild(_0x23128c);
    }
    _0x48dd5f.appendChild(_0x326e83);
    _0x48dd5f.appendChild(_0x5816ee);
    _0x1f75f6.appendChild(_0x48dd5f);
    _0x1f75f6.onclick = _0xca4e9d => {
      if (_0xca4e9d.target === _0x1f75f6) {
        document.body.removeChild(_0x1f75f6);
      }
    };
    document.body.appendChild(_0x1f75f6);
    return _0x1f75f6;
  }
  function _0x2e574c(_0x1f96bf, _0x644cae) {
    _0x5e3d71(_0x1f96bf, _0x644cae, [{
      text: "OK",
      color: "#fd790c",
      action: () => {}
    }]);
  }
  function _0x46c47b(_0x1a4f22, _0x4e389e) {
    return _0x5e3d71(_0x1a4f22, _0x4e389e, null, "", true);
  }
  function _0x5bfa7f() {
    _0x5e3d71("âœ… Sucesso!", "RedaÃ§Ã£o gerada e inserida com sucesso!<br><br>Revise o texto antes de enviar.", [{
      text: "Fechar",
      color: "#fd790c",
      action: () => {}
    }], "https://i.imgur.com/CAqIV2G.png");
  }
  function _0x29e444() {
    _0x5e3d71("Gerador de Redação", "xiiiter is the best bro", [{
      text: "ðŸ–Šï¸ Gerar RedaÃ§Ã£o",
      color: "#4e00f5",
      action: _0x2ce9fc
    }, {
      text: "âŒ Cancelar",
      color: "#444",
      textColor: "#fff",
      action: () => {}
    }], "https://i.pinimg.com/736x/8a/bc/85/8abc8557f7f5c466fbabcc4dccafa0b4.jpg");
  }
  function _0x398fac() {
    if (_0x597944()) {
      _0x29e444();
    } else {
      _0x2e574c("âš ï¸ PÃ¡gina Incorreta", "Parece que vocÃª nÃ£o estÃ¡ em uma pÃ¡gina de redaÃ§Ã£o.<br><br>Este script funciona em pÃ¡ginas que contÃªm:<br>- Campos para escrever redaÃ§Ã£o<br>- Enunciados de produÃ§Ã£o textual<br>- Atividades de dissertaÃ§Ã£o");
    }
  }
  _0x398fac();
})();
