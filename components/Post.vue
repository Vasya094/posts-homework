<template>
  <div class="one-post">
    <div>
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFhUYGBgaGhoYHBoaGBgcGBoYGRgZGhgZGhgcIS4lHB4rIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8PGhISGDQhGCE0NDExMTQ0NDE0MTQ0NDQxNDQxNDE0NDQ0MTQ0ND8xMT8/NDQ/ND8/NDE0NDExNDExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EADQQAAEDAgQDBwIHAAMBAAAAAAEAAhEDIQQSMUEFUWEGInGBkbHwocETMkJS0eHxYnKCI//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAbEQEBAQEBAQEBAAAAAAAAAAAAAQIRITESQf/aAAwDAQACEQMRAD8A9FISyp065IaEoTpnFAklGU4VDwlCaUpUEoTFRLkwcqJpKGZLMgkSmlQc9IPQWKJKjKSB5SBTJkEpTgqKcIHUlGU8oHSUZTgoHSTpKBkgnSQJJJJAkkklQiouTkpIEoZknGVGUE5TEpgoPegTnqAeqnVEDjuLU6Il58hqUXjTzqqri2t1IA5krhMf21e4ltJgaOZuVh1cQ+qZfULugJhamb/Wpl6LiO0VFpgPzHkBJ9AhH9p27NJ8SAuIYxo/U0ecqZYz958rD3V/MX8x2zO0gi7CPCSi8Px5jtQfRcEzCsdufP8AsqwYJzPyPIPWR/SfmH5j0qljGO0cPv6K9rgvMGcXcw5XtgjQgjwsdN+i2sB2nIjOQ5vPQx9ipc1Ll25SBQWGxzHxDgQf4lGSssJAqQCgFZKBikExKcFA4UlEKSBJJgnUChJOkgSiSnUSFRFO4pFQKBFMVBz4UH1IQWF6HrVIVb61ieizcdixkcc0WJ25c/VFkB8W402k0umSZgW6fyvPuI8TfVdJPzr0U+N41z3uudSP/O3qshrl2znjrnPBhfsP9UmP6eqFBRDHyIPqtKvFQj9PmVfTcf2iEPSa5p1tzWph6Ohjzb/G6zQZgaA17zfZarW5Rb05+SbAsIFo8Nj/AB81UeI1solpynQg/NFj+sMfibGPuQAeSyqVI94iSNft6grVbhX1nxcHUjnGq06wZTIYwCBE9SdfBb7zxrrEwGMqseHNzNDdoJ5az0AXo/BOI/isBJvodvpsuTqUWEyRkcOR7vgQiOGcR/Bqhrvyut8PJY16zr13MpNcqmVA4SNFY0LDmmE8pgUpQTlIKEqTSgmFIJgE6gSSSSBQmTlRcqIvcqiVJxVNQoBsRUi6DfiFdiSst74+6sagh9UlcX2i4uQ59NpgaGNY1XQcTxwZSe8WAaYvef0hecioXuJJkm/n89lvOWswqbS86+t0fR4aD+q/qg6bDuCtbC4pzNAB4mT6LdbRqcCMS2fCD8/xCO4c9ugkLoaAqP1PqY9AFs4bCsiCZJ1v7k3Kn64z3jjMNSPz1uNl0HD6eW8enutZ3CKZu0Zet/hVlLhIGhjkQI+izddS6A18UL2M/wDU+izXvdVMRMcwcw6HmF04wU2dlO2gn+kThsMxl8t9NB43Wep1l0cN+BSLoGYWE6tB18uSzcHRLyZIPKep1BC0+KnORIIkRbYjbrzWfTaGdBMg7T1/lWELH0xGV0tOg5HlBXP1argcrtW3HhzC6XiNTO2LdQb6ciubxbcwj9Tbg7x+08z7rWWo7rsxic9MHlb6LpF5z2B4jle6m7Rwt0IK9FYbLnqcrGpykApgJgVIFRlEqTUznKWbkgkFMKDQpBBJJJJQMVW8qxypcVQzkPXV5NkHiHWQBvfNkHiKeoG4+/8ASuJVFd0gz7fRVtw3afiDp/CAgA3PM+GwC59jgtjtQD+LJMyFisK7Z+Ok+DKLnOsLLXw1BrBmMztz8VmYV4GqPovLnCZN9I+ilGngmPee7IHTT1W7g+FvBH3lX8HwsMFo+fVdBh2LndOd0Bo4F439B/KLZhDHz2CPYxTLFGOgBhgL/PJVVaEgWi/0+e60gzdV1WaKL1hHCzGbcfWP9WfUwobLTodORH2K6LE05FtQUBimte2NHffcKyrK43iNN9MyLs+o6LOquDoIN9uZ/uZW1xF5ByG4OnUbLEyfpNgSQD+1+3lzXSOkDMeWvDxYtcCD1n6r1zhlbOxrpmQD9F5E5jphwXo/ZDEl1FrTq239Ka+M6njopTykAorm5kVIBM1kqcIJDwThOCEgglCSdJBByociCFTUQDufNkK8k+CjVqFpKp/EOXpojSiseqDxr9BO0zNpk/x9FfWf15brPqV25te6P4OvitRY4Xjry6o6Z1i6zmNK0OKsJeTI9vdVUqOpJ89gu0+On8Sw9P8AUbDbmSup7OYHNDyLDTx+/isPhWFNZ4/aLBd9w2iBAGyxqs6rUw9NH0wqabEQ0Lk51c1WKtqmEQioOEqbioIB3MkELNx+EDgSBf3/ALWs4KioPQosedcQaQcrhabH9p5FBYmnYg2Nr7HdrvPRdnxvABzSQLx6rjWuaZY7aR1HXw/hdM3rpKzK9W+bQ2m/Pf6LuuwrT+G47SPbmuAx9AscQdfcc16V2IYBhm2iSfUGB9FdfDXx0zQfJJ3RKmUnBcnImFTU2AQmAQMFY1QcIUmoJpJ0kFTzCFe9EVCh3sKEC4hkiVn1Dl10WhUfCxcbVJKsagXE1pJiyycRVkmdDE+OxEI3EOtZZNQm5NxOs7/CtyNRk4+mc0HvcoNz5LMqPdpty3810FKuGOzm7gQfHoBsFn8Ypw4kCM3eeepvC1K23uz9IMph3NagxVWcrMreZNz5DZBcHbmYwdB7LVqYZzO8BPQLF+sX6MwdKubueD6rSb+Ky8hy5ajWxNXMWHI1ocdJe4tE5QJEE7E+iyuH9o8SYDocXPpsADXguD7FzXzk1gQRMunYqfm1Py9Lw+IJ1F0UCsKjWe2Mw/0agjY/zK2cM+VlixY50IWvVf8AphXYl0LF4nxQUGF7gYGsCSbgWEideYCEix9OuTOcAclB1aq38wnZYGH7Zve9jG4d/wD9Lt7zCSAXB3d2/I6ASNFv8P4uysCBZwsWmzmnk9v6T6+Ktljdlhy8PbpHQ6hcFx7C5KmbS+vUmF6Kac3C5HtPSBqtadHBw9Lq5vpm+uYqvD2hjhleDDT56E+K9K7P0MlBjCQSBeCCATcgrksNw4Ne1xZngCeZ2sdyNYPkuxwOCYWyw5RYgEXB69OiuqarSpEXA0Vqro6BEQsMIscpEqJKcoJBTCrarAgkkkkoKXKp71a8IaqVRmY15JP8LHxL7x7Ba2Mfb+1jsqlpJ52Wo3AVTr82WbjqkmBYCwH380djH2nl12+fLrJqGT/fmtRqA6jYM+Z6I7En8aiMoAyAl3OwgSese6DxAljerjPsrOFPBqFmbLmGUHUTYiRuLR5rStfsw+co5LuhSBC4XgjclTlJmP8AV3lAyFz39Y19CnhwDszDlPMffmFXheBU2PzhozSTIa0d47i3dOtxGpWw1ictU6z0FiaYDTa7om5OiI4ZyVGK6ojAqH8XYht0HicGx4eHCQ9uQjoeRFxzR1Q3TsEhEcrwzs0yg/OwZnAy3MQBJBGYhrRmMEjzR1LhAzmo8Au2IER56n+luhiZzU7V/QR7IC4/j9IvqMd+13vZdjiTAWRiMKx4LD+Y620BE68+isvFzQ+Ew7qbLmWuInfUgDzFvJHcJokZzPdzEDyj7yhcNVc9hYR3swbGxLT+b0afotXAU8rAAZ+XKUosDRSlVtKZ5UZTlSaUOHEq1pQXNKsaFWxytaglCZSlJECuQeIcYJ2RVUoDESRCLGbWM/D83QNemYt90e4ZXd5UY6qACAtRtzeNft9vdAOdMx4/b7/IR2JMn+/gWe85QZ3t9VuNwNms7mASPvHlKz/xCCHDXXzHwI+q/wD3+0HiGAOjTX1krUVt8H4i+o8Z4JbuAATcawvROHVJAXlPAXxVA5gjz1HsvSeFVCBBXPcc9R0bNE7xZUU3qxz1hhm4kF74GgF/ErQwTQAAqKtCTmBh0RpI6WKjhqFRurw7qQB7BFGVxySovsh3UHzOcDplBn1+yuayBqiCQovVbaiT3oM/iD4HonZTDQ5xiYuRMW5D7oLjDwRB0Nj4EGVDCVHZQxzpsMrtnDYk9FV4bC0C0l37i8nmO8AAPrPgtikyAPBVsaAQNohXssoU0KLgrC9QRFYmVa0Ktz1Yw2QWNdCtYUOrqbkF2VJNKSAV5QlUCCin2QGIqIsZmMf4zzssTE1Cdz9FsYx3yViYm3+rUagOqwkWn1F/n3QFVpNr2WlQxAbM63iT9Ou6D4hi5MtsDy5rcaZr2xrsgsS6VfWJVDre61GkKVQseHA3aZ8xdem8FxTajGvadR6HcLyxwv8ANVudmOKOpPDTdjjccjsQprPYmp2PW6DgQq8Q57LhpeOQIn6oPA4xrmgh0j5qtOnUlcXJmUu0FEmCXNcLEPaWkH/0FpYbiLHaEeIIKGxWBzd5pyu5xI8wqaWHABz0mPPMf2FfDxoP4izy8Qhn8RDrMBceQB99B6p20Z0Y1g6XKKoYdrRYfyoeI4ckjvCDyUqhTkwsPj/Gm0Gc3mwH3J2CQk6zu0OPAqMYHXHe8DstTBsa5vKLx+0nWFw2Gpvq1M7z3jcHqdh6W8F0+ALwMwMuAu0aOb4fNVqzkas8dBhnyIOosrGP70ckFTqS3NzEeBVjX3DuYWWRgCjmVRqEpi6LkoGe8BSo1Buq65m4EeilQpgoLw+Si6SH/DAuiKaItSTwkgEqtlZWLAb/ACtSs5ZWLYXFVYy8Q8TZAYhrSL/PNFYo5ZH1j6fOSzn1P981qNRl4wxZAjUj7rVqvA0uedrW2Wc9pF58JW42Gq0wLk9Y380I50n6ey1aOBq1Q5wEhvyBzKBxWCey7mEDnt6pKrOcrsA6Ht8R7qtyL4bSzPFrC/8AC0ro6WJfSdLdDqNiur4LxVrxr4jcLIo4MPaha2Bex2dkhcryud5XolIyiAwLkeFdoAIbUBa7nFj/AAt2lxVjtHt9Qs2MWNJzAqKrwAhn8RboDPhdVtzPubDkonEXvLtLBcD22kPZsIPuF6KWQFzPabg/47bWc2YO3gVc3lbzfXI4fGFoaIkb9RcD2nzW23iDWlpDtQIvuPvquZxHD67HBjmO5cwbnQhbeC7M1Hs77wy4Im7gfAeW66XjV46nhuKZUb3TE3+kO9LFEMq7ERE+/wA9Vm8O7P1KDm5Xtcwm5MgtMXt4St1uBZEGT16rnWLxQKqsY9s30Ujw8RZ2nMLNq+KAqu+T3SrcNUICzqet0bSdGwQaLHSiWFBU3lEsCjK/MkmSQCVEHWbE+yOe1CYiEVhYqmSSVj4pvKfotrG1Rt/Sx6jS7qtxqM97QP8AkfKB5/N1Q9kncmy0m4Ko491hjwPutPCcDIu/uj7LXZGujeyuBy03OcPzm08hb0W0/DMIyuYCCOQiFRgMQ27BYNAyyYkIx5DfFc7fWLfXMVuyGHFWcpLTfLPdHMCFkYThzWvdlbHedYbQ6APIL0INkddf6WFjcJkqSB3XkuH/AG1I+6s1VmkcPSgBGCgHC6djBCupDZSoAfw1p2UqfDgNlrManLE7U6GoYUDZHMbCixisJURU9DPZKIcVFwQB1MMDsFm8TwANN0W7piJ12W0VTUp5y1vMifAXSVRVCnFJjTqA0egVrTzCtcB6JgwIiFZ4/LzFz0QFXh06OEciPutBzE2RDrBrYYt19VOiT8hbL2SqX4Eat9FV6qouRtMqmnhXIplEhRKeU6X4aSCD6ZKCr4N55LWhMQidc43hwzQ+2/8AiOZRYwd1o9L+qvxDDPzdTpMnVGuhSWnS3kh6uEJ3laj6AUWsROs5mB9UThyAC0zLfqCimNVDjkdOxseh2KHTNf1slWph7S066g8jsVI0+d028eiAFoIsbEKxoROIoZhb8w+vRDtBFiEUSwq4IemiAiJBRcU5KiggQoOVjlW8oIKzCUYl7vLwUqVCbu05K97wbaIVF1TomaZKqfTzWPP/ABEYdgA0CCTWJnBWkqBCCITVLCVMBQq6gIEyeatbKi13JWNCB0k6SiEVS9p2KvKi4KoGL5BB1CTCplt53UAyCjSTimapQkGoIFIsmxTuapNQAtGSbwJkTtP+KQZvNufPwRNaiHCChcwAyukRodQguzH6wnc0OsdRuoOcIBHkrqbYHugHNEt6qWf4QiZgSosdIlBQXhLMiA7oEm1EFIpOKsZSaOpTl5TR9EDufKgRvqnpva7TUaqxBEHkFNgThqkgZPCSSBQhnCXIlDs1nqUSL22Cm0KLBZTRSSSSUDlMUkkZVbpPSSVaJqkkkggUgkkgkhcRukkhFeH/ACt8PuUW38qSSFNV0SpflTpIG38lWkkgkdfT7KQ1KdJAC3U+P3ReH0SSQXhJJJA7lEJJIh1Q3ZMkhBDVJJJRCSSSRX//2Q=="
        alt=""
        class="one-post__awatar"
      />
    </div>
    <div class="one-post__text-cont">
      <p class="one-post__title">{{ post.title.substring(0,20) }}</p>
      <p class="one-post__body">{{ post.body.substring(0,100) + '...'}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostInfo",
  props: ["post"]
};
</script>

<style lang="scss">
.one-post {
  position: static;
  width: 86%;
  height: 430px;
  left: 664px;
  top: 0px;

  /* Light/Background/Main */
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 20px;

  /* Inside Auto Layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 6px 23px;

  &__awatar {
    position: static;
    width: 100%;
    border-top-left-radius: 19px;
    border-top-right-radius: 19px;
    height: 250px;
    left: calc(50% - 309px / 2);
    top: calc(50% - 250px / 2 - 90px);

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
  }

  &__text-cont {
      padding-left: 16px;
    padding-right: 16px;
  }

  &__title {
    position: static;
    left: 5.18%;
    right: 0%;
    top: 0%;
    bottom: 48.15%;

    overflow: hidden;
    text-overflow: ellipsis;

    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    /* or 117% */
    display: flex;
    align-items: center;

    /* Light/Label/Primary */
    color: #000000;

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 8px 0px;
  }

  &__body {
    left: 5.18%;
    right: 0%;
    top: 59.26%;
    bottom: 0%;

    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 22px;
    /* or 129% */
    display: flex;
    align-items: center;

    /* Light/Label/Secondary */
    color: rgba(60, 60, 67, 0.6);

    /* Inside Auto Layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 8px 0px;
    overflow: hidden;
  }
}
</style>
