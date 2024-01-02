<template>
  <v-app id="home">
    <NavBar/>
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols ="5">
            <div style="position: relative" class="mt-16">
              <h1 class="text-grey">Hello,</h1>
              <h1 class="text-grey">I'M Nguyen Minh Kien</h1>
              <span class="text-grey" > Web Designer & Developer</span> <br>
              <v-btn title dark class="text-yellow mt-8" variant="outlined">contact us</v-btn>
            </div>

          </v-col>
          <v-col cols="2">
            <div style="position: absolute; z-index: 9999 ; bottom: 0 ; margin-left: auto ; margin-right: auto; left: 0; right: 0; text-align:  center">
              <v-icon>fas fa-angle-double-down</v-icon>
            </div>
          </v-col>
          <v-col cols = 5 >
            <div style="position: relative;z-index: 9999" class="mt-16">
              <v-img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKgAswMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABLEAACAQMCAwQHAwkEBQ0AAAABAgMABBEFIQYSMRNBUWEUIjJxgZGxYqHBBxUjQlJTcpLRM4Lh8CREVGPCFhc0Q1VzdIOTssPS0//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EAB4RAQADAAMAAwEAAAAAAAAAAAABAhEDITESQVEy/9oADAMBAAIRAxEAPwDxIh4m3GDRCx1SSBhz1pdU4fHKXRe6srdadLCx9WudbxZuaTDU2OrxzYB76K28qhiy9K83R5IWzjFGbDWSuFc4q2iJStpq0uoxiZWPfTdJUxsM1HDfQzKN8mr1syh64243o4+WJkzWl/R58qyzDc1rNS5XjI8qzLgcxx3E1mrPLO2HuHPaUVrNQ/R2HvFZLhzIdMVpNWlK2wBr1x/LzTHbz7iR+ecoOoNHOAoneN+boCaAXYNxqJHdmtbwxG1uAsX65xWK+uk+LWt2IadHHeaNS2vLpX938KIwaIZxG7LzEjpVzXbL0TTPDb8K7OTwbWlxfMK0nBmmds8Zxmgd9H2+tcnnXqvA+mBI0Y91IGx0q1FtbJkY2q6QM83dXFAVQB4Uy4VniIWqMpxjrcdvbvEvtGvKvzfJql+CV5gW6V6Fr+hy3lySRkjpRLh3QIre1EkijmG5zUlVDhvRI7MR86joOvdVrifV12tbdwCuRke6iGpv6OriEAerjavNdft75riXkflMh646DFTegIvuKr5buVbXeEHCmlVNuHrpDyp6wHfy9fvpVNHpn6CdMggnyoVd6VHNnIzWYs9auIB+kORWl03W4ZgvMwB86+f8bVeyLVtADqXDY5cotZS/s3tZCpGK9jiaC62ADHpkVk+K9FLKxRe/NdePknyWL8cZsMLbXbwsPCjtjq6tgE43oHPZSwseZelV1JU5GxFejqXn8bhrlbiPAOTihEqMrtQy11F4j6xzRWO6Wdak1XRjh5yXUHxo1xJcctoqjrigWiTxxT5JxvR6/MN1B1yelar4jE2vr3LEDJzW94TRe0Xt/VHjQTT9L/SkoMk1rtK0WWN0ll28qQN5aXMBhjVVzg0M4snD2DEDGMCpdOhMrhVGFHWpOJ7QDSJce0FrpCPAlPNrhPnXs3Cb8tigrx3kK6xg9c163w1tZp/DUgaQzdKkilycHpQ1mxSSXlI99aRa1PsxCSBk7/Sqkc/+isuMZP4VT1S+CISemao2OpekqUTYZAz8Kkq7q98sE/K3iR9aeLC1uojMycxIFA9Yt5rnUUVfZrWaFamO2YSdABWRi5bYrK4WLYE4pUQvg3pk2OnMaVB5+9mMbVXNs0bcykj3UZC5FRTRgjzrzz26x0IcI3MnpRRyT7602qJHJEAe+snw+pSdz30W1W6lVK42pOvT86/BUvNIjnBwMms3qPDbJllXurSW+onYPV0zxTLirE2qxMVs8uuNNmhJytVk7SNsYxXpl7Yxuu258Kyt7pkgmbkix136V2pya4WpgbZm5nflhHreNbPR7O87JTN61N4U0yc457OaQZ/UjJH3V6HBZ28MC81nc8/X+yNd4rrnqjplkIUVjH7WN6MSTQ2ksSnctnaopDI0YWKzucf93TBZ3U92pezm5VBHrDFWINN0fWpZdYliZOWOtneWgu9KdQc5WsfY6HqKX7zNakRk5GCK20AufQinorlsbAFf61qB4jqWhdhrJf7Vbzh+DsrUHyruq6Hqcl6ZBp85X7Kg1ZtLe9hi5Xsp1wO+OswJHG1V3G4qRnlHtQS9OpQ1Rm1SzjJEshjI68ykVpAjiPmER5apcO283a5b2SfwNFrnUdOuk5VuoW3/AGhmpNLe3jkHI4PTofKorSQadG2HIyTn6CrzQJFasqjGwNVrW6jC8xk6Y2+FV73VfUdUG3KN6gx9+r+mTfxGu0G1G7Y3sx7T9alQRLHGYQF6YobOo9ZRSsTNK3ZKcVNqkMNjAJLiYJk4yTtXmrWYdLWiVrSogFUmiNwiP16Yqlo1qk4Ts9U09VxtmaiV5w/cyr/o/EWlQ52JyWNdqUn8YtaP0C1NrCyjL3Eyp4DO5rPHWb2dium2jFe52Wr+q8KyaReC81bUba/tTussbkgnwI7qpajxDAI+ytgQMbdmOX5nvrN4yfGq7P2o3R1QI0tzcyHkGWjO22e6t9+TC8sL2W4S8s45JY1zEWGSPGsFHdzz2cqzgDtoXKKB3Adfr8qP/k2MyawilSOeLmBP6ynIB+YrVPUt49qfVigxEVRcbKoqvJrD43loE0U1zIVi69Ke2i6iwzt8a9f086/Jq7fvT8KgbVm/etVVeH9Scbcvzrj8M6oMcoU5+1WJlqEzas370jHeTV+xuhIpke/ZfsqxzWR1GCewk7OYANnuNUvSWXIziszLUQ9O/P0EEAAup2I7xLk/KnLxQF5cXRIP7aCvLjdydzUw3Uuc5J+lZaezQapJeJzI9rIO/IIqvPPYNlbu1A809YffXkQ1CdT6rlf4TWl4J1iFtS7DVbiVo3HqczbZpo089toUh9i2B+3EPwofcaLpM4zHbQZ8bdypram30sRbJA469xql2unmTs47WHPkOWqMXJw8jb22o3kLAbBsOKq3Ola4sbLDc2l4MdGHZtXpCWlg68vYlc+FMl0GB94ZGT371Oh4hNw7rjSsTplxkn9VgRSr2c6PMpwAhx381cp0PDNNwl07Yx76C8fXcV00HY3CsUJBjB++rS3ukTXKx3NxMIset2HU0Pkn0W2u5eysJJEJ9RpTnNco77XAhNe1OKJYkuiEQYC8i7D5VHJrN/IPWm+SgVoBqUt3GLdbOyhjU5UtuaIQ6fpEluxuTZCc9GB6VflJkMnBfX97zW/N2gdCChGxxv8AhUukaLcanqYgCsUUF5CD0Udf6VJosl1FxGfQIhczFpFRBgBxv8Kkv9XuT6RbIQs0zcsqxj2iO7buHhUndUUsdMtZrya61S9WNGRo0hgYZC4wACfDyBohp2raTo0qR2zahbz2yNEjXEIYqrHP2SPEZXvNYGUzw/o2ZsLsBmmrORjJJ99O16x6voUQupPSZdS1OaMH24r7Y/y1oGvrMbBLxh9u/usn4rMAPlXi1hNN2ge3Z45B0ljbBHvHeK0dnxJdwIUvowXHsTqvqn+Idx8/u766RaHOavRE1HTV9uHUY/OLWbtv/kB+Qp5m0W9XspJ9SlQbsjatc/QvkfKsxaS3d/GJrKfS52P6hfkf4g/58Nqdc/nsgC40qN1A6x8p+W9amQbfhzg+9P6SbWIX/aF52mPiwzXP+bzSJRzWfFOrRZ6CQh//AG1nDezW/rTWlxGB+rJGxHzG/wBa7Hr9mGxhombb1ZwQfmKyo+fyY3R3tuMWx/vbUj7ywqtcfk04kAzb8S2crdwA6/AZqCDUuZgIZWVj0Vup/CiSa5qlsAO1uVA7mGR8qCrH+TbilAOfiGxj5u5kAP3gVYX8m+vjaTie1BH7MaGpJeILyeFopZz6xB9WJVPzG9V01i+Qns55RvsRmgtR8FcVRHlg4mBH2XUfcFNdPAvFjqwHEM+W64yfolRjiDWQP+mTkeFdXiLVR1nkx9pAfqKobF+TjiHmBl4huCybkNJKoPx5at/8kdYiZjDrE6uTnI1dzj4GKo14kvx1nH96FasQcVahGww8TjO6ugAPy6U6DfzBxaOnE9yR/wCNH/5UqNJxTlAWsnB7+V1xSp0Pm+6kT0h2t/VTO2DTVuJepfP8RzURpDz6VzVaS7yR2iZH2TiitrPohXmmE4cH2W3B+VVtMtFuoPUjV2Hj1qWbSZCuFt2Vu7Hea5Wmszjddzxc4at09Kv7uCVVMMZELY2DPtn4DP3VImp2GhErYxdpODvKSCx957vdVHUZ10y1Gm2zAvjMrDxPWh+nahJZCROUSQSbSxN0bwPkfOu0MSsandHWLuS6WNIn5eZwZFHMfHfG/uqtFYXTLlbSV4z+siE+fWuTXLSxdkqiODtOcRDuOAM+PTH31VPXr8aAhbu+m3jwz4yNmA7q1NsqXEK7AjHfWQiv7yMAi8mwNuUyNgjwxV/TG1K9uFhhCqpOC3ZBQufMCpgOiwe2l7W0k5G/WU4KsPAg7f58sg9ok8DQzQWltZpqDnm9HunCcwH7pmGG3ySpIbYe1jNNuLO3spDGJ5n5duZsEHz6Z++q9xb2t3bPBKI5FYbEIwZT5HmIB+FaRSmm1iK+kjeS8tZhkvC5ZeXwwp7vhjrWn4/0iLQL63ignN1HJH6wuYUds4BJyFB3z0rIDR7+27J4LwMsR5ouUkBSDnZcEZ8e6jWsa83EEMZ4jhmW8hBVZrR15XBx7SMux27mHuFUR/muFwojiCMtp28hgY4U9w2JA+NV4dVurKUW63ElxEOq839n5HuP1odd6tdPLOYomiWUCPJfmYJ4L+znv3PvqCE9NsVBqEupJcM1vJy52KAMPuJNV34h9Eu1tEkurcSnZ8FU5vA9Kp2kzwgspIHf5edZ6LSpXvpnuirBX9tphGN98jvPwHjvTRu/zxcKADqLe4ynamnW5ejagD5doKDw3yywKVmjk5fVLRk4JHvAqM3WP1qoNHVFb2rmE+ZYVxb2DP8AbwfzigovSOhzT1vj3vy+RNAb9Ng/fwf+oK7Qj07/AHsX81KgwCxM7Py+0vWmwle0HP0ojOhtNeniPQTsD7s1Nq2mdmvpMG6k7isqGQStG3NHIU8CKN6FeXEj3NxcSs8NtHzFfE9340Ftez7b1+hGBRhQsXDs7qN5ZeUn3CsTm+LnQLO73DtMxyzPlvef8mpbOEGVu2X1QueXxONqsaZbak0hOnA9qDytGrrzH+6eo+FWLma8DGCfS4IrnGDIEZGPwzjPwraBVsgkYhmAPKSpJxvRF7aw5zy3EtvIAMo4OVJ7ug+tU7QSpNmKHtmCsGTlJ6gjfFVWJY5Y5PjQTXaLHOyJIJQdywGBmrNrpd3OYhFBKxmj507Nckr6w/4W28jVAdNuuaLaJrd5pl3BLBcsnYsGQN66qfWAPKdtu0fHmxqKgZNRs5mhWSWFl6gSFRUo1LVbdAfSHw2xLBXzVjUdQj1LUp7hVPaSqF5OisRgZPw3xUN9Pbynm5QQSxAU45TtTZRInE2ooAG7Jh3hlO/yqYcUSEYks4yfJzRDh2yISPUrtUaTlUW6OAQijvwe8/499B9T1j0i8uWjs7FYHfOFt13PjzY5hnrscb1Rdh4ktDtPYsPNHH9Kc+taW/sR3MfvUEfWgYubdnzNYx4P7t3X8T9K4ZLNztayqPsy5+q1RorDiCGyuFeK4UxtsyvGf6Vd1DUdJ1y0FvcS28cgPNHNGnJy+Rz1FZExWhGQbhfeFP4io2igx6lxvno6ED7s0B6wvLfRi8cLR3QY5Iznp37VMeJLM/6rH/M4rNXUAgZVE0UuVzzREkDy6DeoKmjUPrto3S1hz5zSD8KhOrxZ2gsgPA9qf+IVnaVBoPzsv7dqPIQ/1pVn6VBouIIBfD892JLRPjtlHWNvOiFuwmtFLcrKy9PKsxp+oT2LkxEFG9uNt1YVfm1mGaDskgMHN15DsB5UFC/h7KclccrHbFXSxHDcXKxGLk5PhtUEXoxHJ6c0a56PFzVfSNG0yWFbmKblkD+oMYG2c/DNRQ7SXVtVgM69oHfDBu8ttn5mrzcRaolq1jcXKzIrYV5o1kZADvgneqU9tNY3buUZTBIMg9Qeox8qqXUgmnkkUYDMSB5VUEtLEt7fMiyRoZEZWlaMcqr+0wA29/uoXKrJIVcYZdiK1nA8kU9pquluq9vPAJoMbFzHklPiuT8DQTU4g9pa3ig+sDBKD1DoBj4FSvxzTALropN1rlA+MgMCendRnSbMaldRc4zb26jtD+2cnb4/hQaNGckIpJ8hWt094LO1SBJ4s/rsWG7Hvz8vhigk4lvhBZNHGMPKeRR4Dv8Au+tYw0R1y7N1etuDHH6qkd/+TmhtAqfGOZlXbdgKZXcZoLzR+qW2xliMeVUTt069KsNNmBE+zipLK3Vi00xxDHufM+FAorG7uYCbe2lmMfruY0LcoPjj3VVkRo25XRkYdzDBFa3gaS9udeQ2hVO0OHB6CMbsD5Yz8aCcT3K3Wt3Locorci+4UAqlSro9+KDlKu/3qVBw9aVKpYIu2fl51T7RoIquaXcej3I59439VgelPbTx/tUJpJZohy8sTjw5sUBI6BLeWtzNZlpbi1HaTRNuzxfvF8cdCO6gzRvaXCGaLOwcA9GU7g+eaL6dqMlpcxOly0NzE3NBPEc8vlv18x0NXrq2i1TUZL6WK3tpQgcQwRFop5QcnKg5QEeAIzmgqT6jDaavp2oaasR7BFdwoC85ycqwHlt7qD3M6XAkkMfJIzjGDnbHT6VefSLyadnktobRCScM3KB7hnNS6l6JbWksfNHLdS8uXVAvKBj2QOnT40ALuFKuk5rlBLBK8LrJFI6SKcqyEgj4iiA1C2ugRqdsC5/1iAcjnzIGx9/1ofFD2i57SNd+jGnNAB1ni+BP9KAnDo0dwc2l7ayp3CTmRviMVMmhY2eeyB/ic/hQMAoeZJRkd65/pV6LUZVXDtFKfFufP3EUBWLQYWOXvLNPcjn8aupw7YMPW1S1z4i2kP8AxVmm1KU5KxRL7gT9TUY1C5G4MY/8tT9RV6Gxg4V0tj+k1iID7Fjn6vVy+4GsLm0UaZrymVdyk8KojHu3BOD1rDLqd0SMyKo8VhT+lWotSAPr6jeDyjiVfxp0N5ptjp/DHCepai5L6iIzCAZs8menTuJx8qxOm6Ib+zN4JouUNhy8qA82AfZJyevWoJ7yynXE1xqUi+DOpqDOj49m9z/Gn9KSCQ0+wU8rXUWc435fqRVj8z6UoBfWNNUkZwHJI+S0DzpX7F4fe6/0p6yaSp9a3uD75P8ACoC/5v0f/tqy/lf/AOtKgpl0/J5babHd+k/wrlBdbTLflyvMR44rq6PAy552qVLed0DEEj37U5UmU4kVOT76qIk0WAt60kgHlXG0SHmwJmHhzVbEZPrIeXyJG9PAkPqsVz9kdKihx0Hfaf7s1w2Op2w/QyFkHg1GYYJAMC4xnfG34U5LfkYtJON9ubvoM9ImqsPXWTHgMCqrWdydzE/xrVSeiOeze7Ix3HvqrPcafEu0nMRtygUGc9FmPSJq76Hcd0TUUF/ZAk8shPhy1ILlXjZorWbl8QKAQLK5P/Usa6LK56dg1GE1ZIwuLKUuo2JAP4U59TL9nIIZZCW9ZDGqj4EE7/CgCNZXCsqmIgt0zinNp90M5i6eYrVRX9lITzWV2hxsWnQ/cEH1q0txpYjB7JlbvPN3/KrgxaafdOMpCSOnUV06fdr1hI+VbE6ja8vZww478kZrp1CGNMC3tx4s0eT9aYMkmjX7qCsORU0PD2pzNyxWxLeAzWiE6SnKyKv8EePxpsyylcLezgeAbH40xAY8J60AWe0ZAO9thULcP3af2stsnvkFEri05sNNLJMw6GRubHzpl9c39xjtrsHAwMIq7e4AVFDho4G731qq+OWb6Cpl0JGTm9OynitvJj6VzM2MG5p8ZlVSPSX69xoI/wAyp3PdHzFt/jSqTnl/2mT+alQXNinIbs4z0BrqiADDTn4tSpVRx/QiMGff+KmvLYoNpsn30qVQU7m+jC4gfLVV/OEmMMcmlSoGm5YnNITt3jIrlKg726kezgeNWotWuoYmijkwh+yKVKgiN9MwHM3MRtmkL2UDrilSoGm7lbfmpvpM37W1KlQIXUg6MfhXfSXPVmpUqDou5F9mRhTWvZ3OWdiaVKgQupT+s1cMztuST76VKgb2jGndo1cpUHO0alSpUH//2Q=="
                     contain max-height="300"></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-col cols = "12" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg" style="display: inline-block">
<!--                <v-img src="https://i.pinimg.com/736x/b0/0d/0c/b00d0cdbf06fab3b2d8cc6847a014495.jpg"-->
<!--                max-height="300" >-->

<!--                </v-img>-->
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h5 class="mt-16">About Me</h5>
              <div style="width: 120px;">
                <v-slider v-model="slider2" color="yellow" label="track-color">
                </v-slider>
              </div>
              <h4 class="mt-4">I am a Creative Web Design</h4>
              <h4>And Developer</h4>
              <p class="text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <br/>
              <p class="text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Accumsan tortor posuere ac ut. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Egestas purus viverra accumsan in. Eget nunc lobortis mattis aliquam faucibus purus. Scelerisque fermentum dui faucibus in ornare quam. Condimentum lacinia quis vel eros donec. Purus gravida quis blandit turpis cursus in hac. Augue interdum velit euismod in pellentesque massa placerat. Sit amet volutpat consequat mauris nunc congue nisi. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Dui faucibus in ornare quam viverra orci. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Sit amet purus gravida quis. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Velit dignissim sodales ut eu. Amet purus gravida quis blandit turpis cursus in hac habitasse.
              </p>
              <v-btn title dark color="yellow" class="mt-4">
                Download Resume
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <div class="text-center mt-4">
        <h2>What we do</h2>
        <div style="width: 120px;margin: 0 auto">
          <v-slider v-model="slider2" color="yellow" >
          </v-slider>
        </div>
      </div>
      <v-col cols="12" class="padd" id="portfolio">
        <div class="first" id="project">
          <v-row >
            <v-col cols="12">
              <div class="child">

              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  name: 'HomeView',
  setup(){
    return{
      slider2 : 50
    }
  },
  components: {
    NavBar,

  },
});
</script>
<style scoped>
.v-container{
  padding: 16px 0 16px 0;
}
.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}
.head:before {
  content: " " ;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg,6deg);
}

.head:after{
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg,-6deg);
}
.egg {
  display: block;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Y1uI9DIXImpgKqpymx0AUu3Tmu2gkD7_d1iyW0stOnA7VmXE409xVZfWt8EjzM-r6LY&usqp=CAU") ;
  background-repeat: no-repeat;
  background-size: cover ;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  background-color: #FBDF7E;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;;
}

.first {
  width: 100%;
  height: 280px;
  text-align: center;
  padding: 2rem 2rem;
}

.child{
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}

.imgHover {
  padding: 0 200px;
}

.pre {
  width: 100%;
  height: 380px;
}
</style>
